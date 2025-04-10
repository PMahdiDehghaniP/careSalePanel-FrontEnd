"use client";

import { CacheProvider } from "@emotion/react";
import createRTLPluginCache from "@/utils/createRTLPluginCache";

const rtlCache = createRTLPluginCache();
export default function CacheProviderConfig({ children }) {
  return <CacheProvider value={rtlCache}>{children}</CacheProvider>;
}
