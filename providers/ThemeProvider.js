"use client";
import theme from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";

const ThemeConfigProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfigProvider;
