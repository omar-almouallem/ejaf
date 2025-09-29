import * as Yup from "yup";

export const contact = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .matches(
      /^[a-zA-Z]+(\s[a-zA-Z]+)*$/,
      "Name can only contain letters and single spaces between words"
    )
    .test("no-only-spaces", "Name cannot be only spaces", (value) => {
      return value && value.trim().length > 0;
    })
    .test(
      "no-excessive-spaces",
      "Name cannot have multiple consecutive spaces",
      (value) => {
        return value && !/\s{2,}/.test(value);
      }
    )
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .test("no-only-spaces", "Email cannot be only spaces", (value) => {
      return value && value.trim().length > 0;
    })
    .required("Email is required"),
  phone: Yup.string()
    .trim()
    .matches(/^[+]?[\d\s()-]+$/, "Invalid phone number")
    .min(6, "Phone number must be at least 6 digits")
    .test("no-only-spaces", "Phone cannot be only spaces", (value) => {
      return value && value.trim().length > 0;
    })
    .required("Phone number is required"),
  subject: Yup.string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .test("no-only-spaces", "Subject cannot be only spaces", (value) => {
      return value && value.trim().length > 0;
    })
    .required("Subject is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .test("no-only-spaces", "Message cannot be only spaces", (value) => {
      return value && value.trim().length > 0;
    })
    .required("Message is required"),
});
