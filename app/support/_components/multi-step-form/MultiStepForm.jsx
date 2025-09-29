"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { Popup } from "@/components/popup";
import {
  getSteps,
  uploadFile,
  supportForm,
  orderForm,
} from "@/requests/support";
import { MultiStepSkeleton } from "@/components/skeletons";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
    progress: null,
  });
  const previousStep0 = useRef("");
  const softwareOptionsRef = useRef(null);
  const formRef = useRef(null);

  const scrollToFormTop = () => {
    if (formRef.current) {
      const navbarHeight = window.innerWidth >= 768 ? 88 : 72;
      const formRect = formRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset + formRect.top - navbarHeight - 20;
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };

  const {
    data: steps,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["steps"],
    queryFn: getSteps,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const uploadFileMutation = useMutation({
    mutationFn: (file) => uploadFile(file, setSubmitStatus),
  });

  const supportMutation = useMutation({
    mutationFn: (formData) => supportForm(formData),
    onSettled: () => {
      setSubmitStatus({ type: null, message: "" });
    },
  });

  const orderMutation = useMutation({
    mutationFn: (formData) => orderForm(formData),
    onSettled: () => {
      setSubmitStatus({ type: null, message: "" });
    },
  });

  const getAvailableSteps = () => {
    if (!steps || steps.length === 0) return [];

    const availableSteps = [steps[0]];
    if (formik.values.step_0 === "new-order") {
      availableSteps.push(steps[1]);
    }
    if (formik.values.step_0 === "support") {
      availableSteps.push(steps[3]);
    }
    availableSteps.push(steps[4]);
    return availableSteps;
  };

  const getCurrentStep = () => {
    const availableSteps = getAvailableSteps();
    return availableSteps[currentStep] || (steps && steps[0]);
  };

  const getCurrentStepIndex = () => {
    const currentStepData = getCurrentStep();
    if (!steps || !currentStepData) return 0;
    return steps.findIndex((step) => step === currentStepData);
  };

  const formatDataForBackend = (values) => {
    const baseData = {
      email: values.email,
      phone: values.phone,
      additional: values.additionalInfo || "",
      attachment: [values.attachment],
    };

    if (values.step_0 === "new-order") {
      const newOrder = {
        ...baseData,
        orderType: values.step_1,
        selectedSoftware:
          values.selectedSoftware?.length > 0 ? values.selectedSoftware : [],
      };
      return newOrder;
    } else if (values.step_0 === "support") {
      const support = {
        ...baseData,
        supportFor: values.step_3,
      };
      return support;
    }
    return baseData;
  };

  const formik = useFormik({
    initialValues: {
      step_0: "",
      step_1: "",
      step_2: [],
      step_3: "",
      selectedSoftware: [],
      email: "",
      phone: "",
      additionalInfo: "",
      attachedFile: null,
    },
    validate: (values) => {
      const errors = {};
      const currentStepData = getCurrentStep();
      const actualStepIndex = getCurrentStepIndex();

      if (currentStepData?.type === "final") {
        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.phone) {
          errors.phone = "Phone number is required";
        } else if (
          !/^[\d\s\-\+\(\)]{6,}$/.test(values.phone.replace(/\s/g, ""))
        ) {
          errors.phone = "Invalid phone number";
        }

        if (formik.touched.attachedFile && !values.attachedFile) {
          errors.attachedFile = "Please upload a file";
        }

        if (values.additionalInfo && values.additionalInfo.length > 1000) {
          errors.additionalInfo = "Must be less than 1000 characters";
        }
      } else if (currentStepData) {
        const fieldName = `step_${actualStepIndex}`;
        const value = values[fieldName];

        if (
          currentStepData.type === "multiple" &&
          (!value || value.length === 0)
        ) {
          errors[fieldName] = "Please select at least one option";
        }

        if (currentStepData.type === "single" && (!value || value === "")) {
          errors[fieldName] = "Please select an option";
        }

        if (actualStepIndex === 1 && values.step_1 === "software") {
          if (
            !values.selectedSoftware ||
            values.selectedSoftware.length === 0
          ) {
            errors.selectedSoftware =
              "Please select at least one software option";
          }
        }
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      if (!values.attachedFile) {
        formik.setFieldTouched("attachedFile", true);
        return;
      }

      setSubmitStatus({
        type: "info",
        message: "Uploading ",
        progress: 0,
      });

      try {
        const uploadedPath = await uploadFileMutation.mutateAsync(
          values.attachedFile
        );

        setSubmitStatus({
          type: "info",
          message: "Sending request..",
        });

        const formattedValues = {
          ...values,
          attachment: uploadedPath,
        };

        const formattedData = formatDataForBackend(formattedValues);
        const mutateFn =
          values.step_0 === "support"
            ? supportMutation.mutateAsync
            : orderMutation.mutateAsync;

        await mutateFn(formattedData, {
          onSuccess: () => {
            setSubmitStatus({
              type: "success",
              message: "Your request has been received successfully!",
            });
            resetForm();
            router.replace("/");
          },
        });
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message: error.message || "An error occurred",
        });
        return;
      }
    },
  });

  useEffect(() => {
    if (formik.values.step_0 !== previousStep0.current) {
      previousStep0.current = formik.values.step_0;
      formik.setValues((prev) => ({
        ...prev,
        step_1: "",
        step_2: [],
        step_3: "",
        selectedSoftware: [],
        email: "",
        phone: "",
        attachedFile: null,
        additionalInfo: "",
      }));
      formik.setTouched({});
      if (currentStep > 0) setCurrentStep(1);
    }
  }, [formik.values.step_0]);

  useEffect(() => {
    const currentCategory = formik.values.step_1;
    if (currentCategory !== "software") {
      formik.setValues((prev) => ({
        ...prev,
        selectedSoftware: [],
      }));
      formik.setTouched((prev) => ({
        ...prev,
        selectedSoftware: false,
      }));
    }
  }, [formik.values.step_1]);

  const handleOptionSelect = (optionId, customIndex = null) => {
    if (!steps) return;

    const stepIndex =
      customIndex !== null ? customIndex : getCurrentStepIndex();
    const currentStepData = steps[stepIndex];
    const fieldName = `step_${stepIndex}`;
    formik.setFieldTouched(fieldName, true);

    if (currentStepData.type === "multiple") {
      const currentSelections = formik.values[fieldName] || [];
      const isSelected = currentSelections.includes(optionId);
      const newSelections = isSelected
        ? currentSelections.filter((id) => id !== optionId)
        : [...currentSelections, optionId];
      formik.setFieldValue(fieldName, newSelections);
    } else {
      formik.setFieldValue(fieldName, optionId);
    }
    requestAnimationFrame(() => {
      const selectedElement = document.querySelector(
        `label[for="${fieldName}-${optionId}"]`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    });
  };

  const handleSoftwareSelect = (optionId) => {
    formik.setFieldTouched("selectedSoftware", true);
    const currentSelections = formik.values.selectedSoftware || [];
    const isSelected = currentSelections.includes(optionId);
    const newSelections = isSelected
      ? currentSelections.filter((id) => id !== optionId)
      : [...currentSelections, optionId];
    formik.setFieldValue("selectedSoftware", newSelections);
    requestAnimationFrame(() => {
      const selectedElement = document.querySelector(
        `label[for="selectedSoftware-${optionId}"]`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    });
  };

  const handleNext = async () => {
    const errors = await formik.validateForm();
    const actualStepIndex = getCurrentStepIndex();
    const fieldName = `step_${actualStepIndex}`;
    const hasCurrentStepError = errors[fieldName];
    const hasSoftwareError =
      actualStepIndex === 1 &&
      formik.values.step_1 === "software" &&
      errors.selectedSoftware;
    if (!hasCurrentStepError && !hasSoftwareError) {
      const availableSteps = getAvailableSteps();
      if (currentStep < availableSteps.length - 1) {
        setCurrentStep((prev) => prev + 1);
        requestAnimationFrame(() => {
          scrollToFormTop();
        });
      }
    } else {
      formik.setFieldTouched(fieldName, true);
      if (hasSoftwareError) {
        formik.setFieldTouched("selectedSoftware", true);
        if (softwareOptionsRef.current) {
          setTimeout(() => {
            softwareOptionsRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 100);
        }
      } else if (hasCurrentStepError) {
        setTimeout(() => {
          const errorElement =
            document.querySelector(`#${fieldName}-error`) ||
            document.querySelector(`[for="${fieldName}"]`);
          if (errorElement) {
            errorElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 100);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      requestAnimationFrame(() => {
        scrollToFormTop();
      });
    }
  };

  const isOptionSelected = (optionId, index = null) => {
    if (!steps) return false;
    const stepIndex = index !== null ? index : getCurrentStepIndex();
    const fieldName = `step_${stepIndex}`;
    const currentValue = formik.values[fieldName];
    const stepData = steps[stepIndex];
    return stepData?.type === "multiple"
      ? (currentValue || []).includes(optionId)
      : currentValue === optionId;
  };

  const isSoftwareSelected = (optionId) => {
    return (formik.values.selectedSoftware || []).includes(optionId);
  };

  const canProceed = () => {
    const currentStepData = getCurrentStep();
    const actualStepIndex = getCurrentStepIndex();
    const fieldName = `step_${actualStepIndex}`;
    const value = formik.values[fieldName];
    if (currentStepData?.type === "final") {
      return (
        !!formik.values.attachedFile &&
        !!formik.values.email &&
        !!formik.values.phone &&
        !formik.errors.additionalInfo &&
        !formik.errors.email &&
        !formik.errors.phone
      );
    }
    if (currentStepData?.type === "multiple") {
      const hasStepValue = value && value.length > 0;
      if (actualStepIndex === 1 && formik.values.step_1 === "software") {
        const hasSoftwareSelection =
          formik.values.selectedSoftware &&
          formik.values.selectedSoftware.length > 0;
        return hasStepValue && hasSoftwareSelection;
      }
      return hasStepValue;
    }
    const hasStepValue = value !== undefined && value !== "";
    if (actualStepIndex === 1 && formik.values.step_1 === "software") {
      const hasSoftwareSelection =
        formik.values.selectedSoftware &&
        formik.values.selectedSoftware.length > 0;
      return hasStepValue && hasSoftwareSelection;
    }
    return hasStepValue;
  };

  if (isLoading) {
    return <MultiStepSkeleton />;
  }
  if (error) {
    return (
      <section className="w-full lg:max-w-[832px] mx-auto flex items-center justify-center py-20">
        <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 h-full flex flex-col justify-center items-center text-center">
          <div className="text-lg text-red-400">{error.message}</div>
        </div>
      </section>
    );
  }
  console.log(steps);
  if (!steps || steps.length === 0) {
    return (
      <section className="w-full lg:max-w-[832px] mx-auto flex items-center justify-center py-20">
        <div className="text-neutral-100 text-lg">No form steps available</div>
      </section>
    );
  }
  const availableSteps = getAvailableSteps();
  const isLastStep = currentStep === availableSteps.length - 1;
  const currentStepData = getCurrentStep();
  const actualStepIndex = getCurrentStepIndex();
  const fieldName = `step_${actualStepIndex}`;
  const isSubmitting =
    supportMutation.isPending ||
    orderMutation.isPending ||
    uploadFileMutation.isPending;

  const stepVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
      },
    },
  };

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <form
      ref={formRef}
      onSubmit={formik.handleSubmit}
      className="w-full lg:max-w-[832px] mx-auto"
      name="support-form"
      noValidate
    >
      <Popup {...submitStatus} />
      <div className="sr-only">
        {currentStepData.type === "single" &&
          currentStepData.option?.map(({ id, label }) => (
            <input
              key={id}
              type="radio"
              id={`${fieldName}-${id}`}
              name={fieldName}
              value={id}
              checked={isOptionSelected(id)}
              onChange={() => handleOptionSelect(id)}
              role="radio"
              aria-label={`radio button for ${label}`}
            />
          ))}
        {currentStepData.type === "multiple" &&
          currentStepData.option?.map(({ id, label }) => (
            <input
              key={id}
              type="checkbox"
              id={`${fieldName}-${id}`}
              name={fieldName}
              value={id}
              checked={isOptionSelected(id)}
              onChange={() => handleOptionSelect(id)}
              role="checkbox"
              aria-label={`checkbox button for ${label}`}
            />
          ))}
        {actualStepIndex === 1 &&
          formik.values.step_1 === "software" &&
          steps[2]?.option?.map(({ id, label }) => (
            <input
              key={`software-${id}`}
              type="checkbox"
              id={`selectedSoftware-${id}`}
              name="selectedSoftware"
              value={id}
              checked={isSoftwareSelected(id)}
              onChange={() => handleSoftwareSelect(id)}
              role="checkbox"
              aria-label={`checkbox button for ${label}`}
            />
          ))}
      </div>
      <AnimatePresence mode="wait">
        {currentStepData.type === "final" ? (
          <motion.div
            key="final-step"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid gap-6"
          >
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid gap-6"
            >
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-neutral-100 text-lg lg:text-xl font-semibold mb-1"
                >
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  {...formik.getFieldProps("email")}
                  className={`w-full p-2 sm:py-3 sm:px-4 text-lg bg-input-bg border border-input-border outline-none rounded-xl text-neutral-100 placeholder-neutral-400 placeholder:text-lg hover:bg-input-hover-bg focus:bg-input-bg-hover ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-400"
                      : ""
                  }`}
                  role="textbox"
                  aria-label="email textbox"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    formik.handleChange(e);
                    // Smooth scroll to keep input in view
                    requestAnimationFrame(() => {
                      e.target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest",
                      });
                    });
                  }}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                  }}
                />
                {formik.touched.email && formik.errors.email && (
                  <div
                    className="text-red-400 mt-2"
                    role="alert"
                    aria-label={`${formik.errors.email} error`}
                  >
                    {formik.errors.email}
                  </div>
                )}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="phone"
                  className="block text-neutral-100 text-lg lg:text-xl font-semibold mb-1"
                >
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  {...formik.getFieldProps("phone")}
                  className={`w-full p-2 sm:py-3 sm:px-4 text-lg bg-input-bg border border-input-border outline-none rounded-xl text-neutral-100 placeholder-neutral-400 placeholder:text-lg hover:bg-input-hover-bg focus:bg-input-bg-hover ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-400"
                      : ""
                  }`}
                  role="textbox"
                  aria-label="phone number textbox"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    formik.handleChange(e);
                    requestAnimationFrame(() => {
                      e.target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest",
                      });
                    });
                  }}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                  }}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div
                    className="text-red-400 mt-2"
                    role="alert"
                    aria-label={`${formik.errors.phone} error`}
                  >
                    {formik.errors.phone}
                  </div>
                )}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-neutral-100 text-lg lg:text-xl font-semibold mb-1">
                  Additional Information (optional)
                </label>
                <textarea
                  {...formik.getFieldProps("additionalInfo")}
                  className="w-full h-30 p-2 sm:py-3 sm:px-4 text-lg bg-input-bg border border-input-border outline-none rounded-xl text-neutral-100 placeholder-neutral-400 placeholder:text-lg hover:bg-input-hover-bg focus:bg-input-bg-hover resize-none disabled:pointer-events-none"
                  placeholder="Please write additional info if any"
                  role="textbox"
                  aria-label="additional info textarea"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    formik.handleChange(e);
                    requestAnimationFrame(() => {
                      e.target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest",
                      });
                    });
                  }}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                  }}
                />
                {formik.touched.additionalInfo &&
                  formik.errors.additionalInfo && (
                    <div
                      id="additionalInfo-error"
                      className="text-red-400 mt-4"
                      role="alert"
                      aria-label={`${formik.errors.additionalInfo} error`}
                    >
                      {formik.errors.additionalInfo}
                    </div>
                  )}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="fileUpload"
                  className="block text-neutral-100 text-lg lg:text-xl font-semibold mb-1"
                >
                  Attach a File
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="fileUpload"
                    name="attachedFile"
                    className="hidden"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "attachedFile",
                        e.currentTarget.files[0]
                      );
                      formik.setFieldTouched("attachedFile", true);
                    }}
                    aria-label="attached file"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="fileUpload"
                    className={`min-h-[132px] py-4 flex items-center justify-center bg-input-bg w-full cursor-pointer border border-dashed border-input-border rounded-xl hover:bg-input-hover-bg transition-colors ${
                      isSubmitting ? "pointer-events-none" : ""
                    }`}
                  >
                    <div className="text-neutral-100 mx-auto overflow-clip">
                      {formik.values.attachedFile ? (
                        formik.values.attachedFile.name
                      ) : (
                        <>
                          <p className="sm:text-base text-center font-semibold text-neutral-100 mb-5">
                            Upload File
                            <br />
                            <span className="text-light-text font-normal">
                              drag & drop files here
                            </span>
                          </p>
                          <button
                            type="button"
                            className="px-5 py-2 w-full bg-main-color rounded-2xl text-neutral-100 text-base sm:text-lg pointer-events-none"
                            role="button"
                            aria-label="upload file"
                          >
                            Browse Files
                          </button>
                        </>
                      )}
                    </div>
                  </label>
                  {formik.touched.attachedFile &&
                    formik.errors.attachedFile && (
                      <div
                        id="attachedFile-error"
                        className="text-red-400 mt-4"
                        role="alert"
                        aria-label={`${formik.errors.attachedFile} error`}
                      >
                        {formik.errors.attachedFile}
                      </div>
                    )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={`step-${currentStep}`}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <fieldset>
              <motion.legend
                variants={itemVariants}
                className="text-lg lg:text-xl xl:text-2xl text-light-text mb-5"
              >
                {currentStepData.title}
              </motion.legend>
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className={`grid gap-5 ${currentStepData.gridSystem}`}
              >
                {currentStepData.option?.map(({ id, label, icon }, index) => (
                  <motion.label
                    key={id}
                    variants={itemVariants}
                    custom={index}
                    htmlFor={`${fieldName}-${id}`}
                    className={`relative rounded-xl cursor-pointer transition-all duration-200 flex items-center ${
                      currentStepData.optionClasses
                    } ${isOptionSelected(id) ? "activeOption" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleOptionSelect(id);
                    }}
                  >
                    {icon.length > 0 && (
                      <Image
                        src={icon[0]}
                        alt={`${id} icon`}
                        width={100}
                        height={100}
                      />
                    )}
                    <div className="flex items-center gap-[10px]">
                      <div
                        className={`w-7 lg:w-9 h-7 lg:h-9 bg-radio-bg flex items-center justify-center ${
                          currentStepData.type === "single"
                            ? "rounded-full"
                            : "rounded-full"
                        }`}
                      >
                        {isOptionSelected(id) && (
                          <div
                            className={`w-4 lg:w-6 h-4 lg:h-6 bg-main-color shadow-radio-active-shadow ${
                              currentStepData.type === "single"
                                ? "rounded-full"
                                : "rounded-full"
                            }`}
                          ></div>
                        )}
                      </div>
                      <span className="text-neutral-100 text-lg lg:text-xl xl:text-2xl">
                        {label}
                      </span>
                    </div>
                  </motion.label>
                ))}
              </motion.div>
            </fieldset>
            <AnimatePresence>
              {actualStepIndex === 1 && formik.values.step_1 === "software" && (
                <motion.div
                  key="software-options"
                  ref={softwareOptionsRef}
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <fieldset>
                    <legend className="text-lg lg:text-xl xl:text-2xl text-light-text mb-5">
                      {steps[2]?.title}
                    </legend>
                    <motion.div
                      variants={containerVariants}
                      initial="initial"
                      animate="animate"
                      className={`grid gap-5 ${
                        steps[2]?.gridSystem || "grid-cols-1"
                      }`}
                    >
                      {steps[2]?.option?.map(({ id, label, icon }, index) => (
                        <motion.label
                          key={`software-${id}`}
                          variants={itemVariants}
                          custom={index}
                          htmlFor={`selectedSoftware-${id}`}
                          className={`relative rounded-xl cursor-pointer transition-all duration-200 flex items-center ${
                            steps[2]?.optionClasses ||
                            "p-4 border border-gray-600"
                          } ${isSoftwareSelected(id) ? "activeOption" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSoftwareSelect(id);
                          }}
                        >
                          {icon.length > 0 && (
                            <Image
                              src={icon[0]}
                              alt={`${id} icon`}
                              width={100}
                              height={100}
                            />
                          )}
                          <div className="flex items-center gap-[10px]">
                            <div className="w-7 lg:w-9 h-7 lg:h-9 bg-radio-bg flex items-center justify-center rounded-full">
                              {isSoftwareSelected(id) && (
                                <div className="w-4 lg:w-6 h-4 lg:h-6 bg-main-color shadow-radio-active-shadow rounded-full"></div>
                              )}
                            </div>
                            <span className="text-neutral-100 text-lg lg:text-xl xl:text-2xl">
                              {label}
                            </span>
                          </div>
                        </motion.label>
                      ))}
                    </motion.div>
                  </fieldset>
                  {formik.errors.selectedSoftware &&
                    formik.touched.selectedSoftware && (
                      <motion.div
                        variants={itemVariants}
                        id="selectedSoftware-error"
                        className="text-red-400 mt-4"
                        role="alert"
                        aria-label={`${formik.errors.selectedSoftware} error`}
                      >
                        {formik.errors.selectedSoftware}
                      </motion.div>
                    )}
                </motion.div>
              )}
            </AnimatePresence>
            {formik.errors[fieldName] && formik.touched[fieldName] && (
              <motion.div
                variants={itemVariants}
                id={`${fieldName}-error`}
                className="text-red-400 mt-4"
                role="alert"
                aria-label={`${formik.errors[fieldName]} error`}
              >
                {formik.errors[fieldName]}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-between items-center gap-5 pt-5">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0 || isSubmitting}
          className={`general-button back md:ml-auto ${
            currentStep === 0 || isSubmitting
              ? "opacity-0 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          role="button"
          aria-label="navigating back in steps section"
        >
          Back
        </button>
        <button
          type={isLastStep ? "submit" : "button"}
          onClick={isLastStep ? undefined : handleNext}
          disabled={!canProceed() || isSubmitting}
          className={`general-button ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          role="button"
          aria-label="navigating next in steps section"
        >
          {isSubmitting ? "Submitting..." : isLastStep ? "Complete" : "Next"}
        </button>
      </div>
    </form>
  );
};

export default MultiStepForm;
