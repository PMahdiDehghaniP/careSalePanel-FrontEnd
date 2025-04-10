import { CssBaseline } from "@mui/material";
import CacheProviderConfig from "@/providers/CacheProvider";

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        <CacheProviderConfig>
          <CssBaseline />
          {children}
        </CacheProviderConfig>
      </body>
    </html>
  );
}
