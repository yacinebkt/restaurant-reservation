import React, { useState, useMemo, ReactNode } from "react";
import { languagesDataContext } from "./LanguagesDataContext";
import {
  LanguagesDataContextType,
  LanguagesDataType,
} from "@/types/context/dataLanguages";

interface LanguagesDataProviderProps {
  children: ReactNode;
}

const LanguagesDataProvider: React.FC<LanguagesDataProviderProps> = ({
  children,
}) => {
  
  const [dataLanguages, setDataLanguages] = useState<LanguagesDataType>({
    availableLanguages: ["en", "de", "fr", "ar"],
    loadingAvailableLanguages: true,
  });

  const storeValue: LanguagesDataContextType = useMemo(
    () => ({
      dataLanguages,
      setDataLanguages,
    }),
    [dataLanguages, setDataLanguages]
  );

  return (
    <languagesDataContext.Provider value={storeValue}>
      {children}
    </languagesDataContext.Provider>
  );
};

export default LanguagesDataProvider;
