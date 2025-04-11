"use client";

import { loginSchema } from "@/validations/loginSchema/loginSignUpSchema";
import {
  Button,
  Divider,
  TextField,
  Typography,
  Stack,
  Card as MuiCard,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const Card = styled(MuiCard)(() => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: 32,
  gap: 16,
  margin: "auto",
  maxWidth: 450,
  backgroundColor: "#1f0a33",
  border: "1px solid #1e293b",
  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
  borderRadius: 12,
}));

const SignInContainer = styled(Stack)({
  minHeight: "100dvh",
  width: "100%",
  padding: 16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#0f172a",
  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: -1,
    inset: 0,
    background: "radial-gradient(circle at center, #0f172a 0%, #020617 100%)",
  },
});

export default function SignIn() {
  const router = useRouter();
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
  const handleUsernameChange = (event) => {
    formik.setFieldValue("emailOrUsername", event.target.value);
  };
  const handlePasswordChange = (event) => {
    formik.setFieldValue("password", event.target.value);
  };
  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <SignInContainer>
      <Card>
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "white", fontWeight: 700 }}
        >
          ورود به حساب کاربری
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              onChange={(e) => handleUsernameChange(e)}
              type="text"
              placeholder="نام کاربری یا ایمیل را وارد کنید"
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
              onChange={(e) => handlePasswordChange(e)}
              type="password"
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
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "white", color: "black" }}
            >
              ورود
            </Button>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: "#60a5fa" }}
            >
              رمز عبور خود را فراموش کرده اید؟
            </Typography>
          </Stack>
        </form>
        <Divider
          sx={{
            color: "white",
            "&::before, &::after": { borderColor: "#1e293b" },
          }}
        >
          یا ورود با
        </Divider>
        <Stack spacing={2}>
          <Button
            fullWidth
            variant="outlined"
            sx={{ color: "white", borderColor: "#334155" }}
          >
            ورود با گوگل
          </Button>
          <Typography sx={{ color: "white", textAlign: "center" }}>
            هنوز حساب کاربری ندارید؟{" "}
            <span
              onClick={() => handleNavigate("/signup")}
              style={{ color: "#60a5fa", cursor: "pointer" }}
            >
              ثبت نام کنید
            </span>
          </Typography>
        </Stack>
      </Card>
    </SignInContainer>
  );
}
