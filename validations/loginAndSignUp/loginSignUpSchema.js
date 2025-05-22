import * as yup from "yup";
import { emailRegex, passwordRegex, usernameRegex } from "../Regex";

export const loginSchema = yup.object().shape({
  usernameOrEmail: yup
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
