import { languagesDataContext } from "@/contexts/LanguagesData/LanguagesDataContext";
import { LanguagesDataContextType } from "@/types/context/dataLanguages";
import { useContext } from "react";

export const useLanguagesDataContext = () => {
  const context = useContext(languagesDataContext) as LanguagesDataContextType;

  if (!context)
    throw new Error(
      "useLanguagesDataContext context must be use inside AuthProvider"
    );

  return context;
};
