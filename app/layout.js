import { CssBaseline } from "@mui/material";
import CacheProviderConfig from "@/providers/CacheProvider";
import ThemeConfigProvider from "@/providers/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        <CacheProviderConfig>
          <ThemeConfigProvider>
            <CssBaseline />
            {children}
          </ThemeConfigProvider>
        </CacheProviderConfig>
      </body>
    </html>
  );
}
