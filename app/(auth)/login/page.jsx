"use client";

import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { loginSchema } from "@/validations/loginAndSignUp/loginSignUpSchema";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const router = useRouter();

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        size={{ xs: 12, md: 5 }}
        item
        sx={{
          background:
            "linear-gradient(308deg, rgba(0, 0, 0, 1) 13%, rgba(0, 0, 89, 1) 67%, rgba(26, 26, 144, 1) 52%, rgba(1, 1, 43, 1) 77%)",
          padding: { xs: "32px 16px", md: "64px 32px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#2563eb", mb: 2 }}
        >
          ورود به حساب
        </Typography>
        <Typography sx={{ mb: 4 }} color="white">
          لطفاً ایمیل یا نام کاربری و رمز عبور خود را وارد کنید.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="ایمیل یا نام کاربری"
              name="emailOrUsername"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailOrUsername}
              placeholder="ایمیل یا نام کاربری را وارد کنید"
              fullWidth
              error={
                formik.touched.emailOrUsername &&
                Boolean(formik.errors.emailOrUsername)
              }
              helperText={
                formik.touched.emailOrUsername && formik.errors.emailOrUsername
              }
              slotProps={{
                input: {
                  sx: {
                    "& fieldset": {
                      borderColor: "#ffffff",
                    },
                    color: "white",
                  },
                },
                inputLabel: {
                  sx: { color: "white" },
                },
              }}
              variant="outlined"
            />
            <TextField
              label="رمز عبور"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="رمز عبور را وارد کنید"
              fullWidth
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              slotProps={{
                input: {
                  sx: {
                    "& fieldset": {
                      borderColor: "#ffffff",
                    },
                    color: "white",
                  },
                },
                inputLabel: {
                  style: { color: "white" },
                },
              }}
            />

            <Button
              variant="contained"
              sx={{ backgroundColor: "#2563eb", fontSize: "1rem" }}
            >
              فراموشی رمز عبور؟
            </Button>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#2563eb", fontSize: "1rem" }}
            >
              ورود
            </Button>
            <Button
              onClick={() => router.push("/signUp")}
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#2563eb", fontSize: "1rem" }}
            >
              ثبت نام
            </Button>
          </Stack>
        </form>
      </Grid>
      <Grid
        item
        size={{
          xs: 0,
          md: 7,
        }}
        sx={{
          backgroundImage: "url('/login/loginImage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Grid>
  );
}
