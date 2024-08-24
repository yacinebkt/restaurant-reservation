// LanguageCacheProvider.tsx

import React, { useEffect, ReactNode, useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import i18next from "../modules/i18/config";

interface LanguageCacheProviderProps {
  children: ReactNode;
}

const isBrowser = typeof document !== "undefined";
let insertionPoint: any;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]'
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = createCache({
  key: "mui-style-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
  prepend: true,
});

const cacheLTR = createCache({
  key: "mui-style-ltr",
  insertionPoint,
  prepend: true,
});

const LanguageCacheProvider: React.FC<LanguageCacheProviderProps> = ({
  children,
}) => {
  const isRTL: boolean = i18next.language === "ar";

  let [cache, setCache] = useState(isRTL ? cacheRTL : cacheLTR);

  const languageChangeHandler = () => {
    i18next.language === "ar" ? setCache(cacheRTL) : setCache(cacheLTR);
  };

  useEffect(() => {
    i18next.on("languageChanged", languageChangeHandler);

    return () => {
      i18next.off("languageChanged", languageChangeHandler);
    };
  }, [i18next, i18next.language]);

  return (
    <CacheProvider value={cache}>
      <div className="" dir={`${i18next.language === "ar" ? "rtl" : "ltr"}`}>
        {children}
      </div>
    </CacheProvider>
  );
};

export default LanguageCacheProvider;
