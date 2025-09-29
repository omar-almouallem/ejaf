"use client";

import { useFormik } from "formik";
import { contact } from "./validation-schema/contact";
import { useRouter } from "next/navigation";
import { ScrollReveal } from "@/app/_animations";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { contactForm } from "@/requests/contact/contactForm";
import { Popup } from "@/components/popup";

export default function ContactForm() {
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });
  const sendMessage = useMutation({
    mutationFn: contactForm,
    onSettled: () => {
      setSubmitStatus({ type: null, message: "" });
    },
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: contact,
    onSubmit: async (values, { resetForm }) => {
      const message = {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      };
      try {
        await sendMessage.mutateAsync(message, {
          onSuccess: () => {
            setSubmitStatus({
              type: "success",
              message: "Your message has been received successfully!",
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
  return (
    <form
      onSubmit={formik.handleSubmit}
      noValidate
      name="contact-form"
      className="relative w-full xl:max-w-[1140px] mx-auto space-y-4 sm:space-y-6"
    >
      <Popup {...submitStatus} />
      <ScrollReveal
        className="grid md:grid-cols-2 gap-4 sm:gap-6"
        staggerChildren={0.15}
        direction="up"
        distance={60}
        delay={0.2}
      >
        <div>
          <input
            required
            type="text"
            placeholder="Name"
            {...formik.getFieldProps("name")}
            className={`form-field ${
              formik.touched.name && formik.errors.name ? "error" : "normal"
            }`}
            role="textbox"
            aria-label="name textbox"
            disabled={sendMessage.isPending}
          />
          {formik.touched.name && formik.errors.name && (
            <div
              className="text-red-400 mt-2"
              role="alert"
              aria-label={`${formik.errors.name} error`}
            >
              {formik.errors.name}
            </div>
          )}
        </div>
        <div>
          <input
            required
            type="email"
            placeholder="Your Email"
            {...formik.getFieldProps("email")}
            className={`form-field ${
              formik.touched.email && formik.errors.email ? "error" : "normal"
            }`}
            role="textbox"
            aria-label="email textbox"
            disabled={sendMessage.isPending}
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
        </div>
      </ScrollReveal>
      <ScrollReveal
        className="grid md:grid-cols-2 gap-4 sm:gap-6"
        staggerChildren={0.15}
        direction="up"
        distance={60}
        delay={0.2}
      >
        <div>
          <input
            required
            type="tel"
            placeholder="Phone Number"
            {...formik.getFieldProps("phone")}
            className={`form-field ${
              formik.touched.phone && formik.errors.phone ? "error" : "normal"
            }`}
            role="textbox"
            aria-label="phone number textbox"
            disabled={sendMessage.isPending}
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
        </div>
        <div>
          <input
            required
            type="text"
            placeholder="Subject"
            {...formik.getFieldProps("subject")}
            className={`form-field ${
              formik.touched.subject && formik.errors.subject
                ? "error"
                : "normal"
            }`}
            role="textbox"
            aria-label="subject of the message textbox"
            disabled={sendMessage.isPending}
          />
          {formik.touched.subject && formik.errors.subject && (
            <div
              className="text-red-400 mt-2"
              role="alert"
              aria-label={`${formik.errors.subject} error`}
            >
              {formik.errors.subject}
            </div>
          )}
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" distance={60} delay={0.2}>
        <textarea
          required
          placeholder="Your Message"
          {...formik.getFieldProps("message")}
          className={`form-field textarea ${
            formik.touched.message && formik.errors.message ? "error" : "normal"
          }`}
          role="textbox"
          aria-label="message textbox"
          disabled={sendMessage.isPending}
        />
        {formik.touched.message && formik.errors.message && (
          <div
            className="text-red-400 mt-2"
            role="alert"
            aria-label={`${formik.errors.message} error`}
          >
            {formik.errors.message}
          </div>
        )}
      </ScrollReveal>
      <ScrollReveal direction="up" distance={60} delay={0.2}>
        <button
          type="submit"
          disabled={sendMessage.isPending || (formik.dirty && !formik.isValid)}
          className={`general-button send-msg ${
            sendMessage.isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          role="button"
          aria-label="submit contact form"
        >
          {sendMessage.isPending ? "Sending..." : "Send Message"}
        </button>
      </ScrollReveal>
    </form>
  );
}
