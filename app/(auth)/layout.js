import { Box } from "@mui/material";

export default function AuthLayout({ children }) {
  return (
    <Box width="100%" height="100vh">
      {children}
    </Box>
  );
}
