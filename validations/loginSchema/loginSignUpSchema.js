import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9._%+-]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]).{8,}$/;

export const loginSchema = yup.object().shape({
  emailOrUsername: yup
    .string()
    .required("نام کاربری یا ایمیل ضروری است")
    .test(
      "is-valid",
      "نام کاربری یا ایمیل نامعتبراست",
      (value) => emailRegex.test(value || "") || usernameRegex.test(value || "")
    ),
  password: yup
    .string()
    .required("رمز عبور ضروری است")
    .matches(
      passwordRegex,
      "پسورد باید شامل  حداقل  8 حرف نماد حروف بزرگ و کوچک و عدد باشد"
    ),
});
