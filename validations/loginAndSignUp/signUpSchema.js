import * as yup from "yup";
import { emailRegex, iranPhoneNumbersRegex, passwordRegex } from "../Regex";

const signUpPageValidationSchema = yup.object().shape({
  firstName: yup.string().required("نام الزامی است "),
  lastName: yup.string().required("نام خانوادگی الزامی است"),
  email: yup
    .string()
    .email()
    .required("ایمیل الزامی است")
    .matches(emailRegex, "ایمیل وارد شده صحیح نمی باشد"),
  password: yup
    .string()
    .required("رمز عبور الزامی است")
    .matches(
      passwordRegex,
      "پسورد باید شامل  حداقل  8 حرف نماد حروف بزرگ و کوچک و عدد باشد"
    ),
  userName: yup.string().required("نام کاربری الزامی  است"),
  phoneNumber: yup
    .string()
    .required("شماره  موبایل الزامی است")
    .matches(iranPhoneNumbersRegex, "شماره موبایل  نامعتبر است"),
});
export default signUpPageValidationSchema;
