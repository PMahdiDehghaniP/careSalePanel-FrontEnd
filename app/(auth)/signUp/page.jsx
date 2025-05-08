"use client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import signUpPageValidationSchema from "@/validations/loginAndSignUp/signUpSchema";
const inputStyles = {
  input: { color: "white" },
  label: { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff",
    },
    "&:hover fieldset": {
      borderColor: "#2563eb",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2563eb",
    },
  },
};
const formBoxStyle = {
  zIndex: 1000,
  backgroundColor: "rgba(75, 6, 6, 0.5)",
  backdropFilter: "blur(10px)",
  padding: { xs: "24px", md: "48px" },
  borderRadius: "20px",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6)",
};
export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      password: "",
      email: "",
    },
    validationSchema: signUpPageValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const router = useRouter();

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundImage: "url('/login/SignUpBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid size={{ xs: 12, md: 8, lg: 6 }} sx={formBoxStyle}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <Typography variant="h5" textAlign="center" color="white">
                ثبت نام
              </Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 6 }}>
              <TextField
                label="نام"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder="نام خود را  وارد کنید"
                fullWidth
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                sx={inputStyles}
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 6 }}>
              <TextField
                label="نام خانوادگی"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                placeholder="نام خانوادگی خود را وارد کنید"
                fullWidth
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                sx={inputStyles}
                variant="outlined"
              />
            </Grid>

            <Grid size={{ xs: 6, md: 6, lg: 6 }}>
              <TextField
                label="ایمیل"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="ایمیل خود را وارد کنید"
                fullWidth
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={inputStyles}
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 6 }}>
              <TextField
                label="شماره موبایل"
                name="phoneNumber"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                placeholder="شماره موبایل را  وارد کنید"
                fullWidth
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
                sx={inputStyles}
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 6 }}>
              <TextField
                label="نام کاربری"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                placeholder="نام کاربری"
                fullWidth
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
                sx={inputStyles}
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 6 }}>
              <TextField
                label="رمز عبور"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="رمز عبور را وارد کنید"
                fullWidth
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={inputStyles}
                variant="outlined"
              />
            </Grid>

            <Grid size={{ xs: 12, lg: 12, md: 12 }}>
              <Button
                onClick={() => router.push("/signUp")}
                type="submit"
                variant="contained"
                fullWidth
                sx={inputStyles}
              >
                ثبت نام
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
