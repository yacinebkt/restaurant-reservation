import { LanguagesDataContextType } from "@/types/context/dataLanguages";
import { createContext } from "react";

// ----------------------------------------------------------------------

export const languagesDataContext =
  createContext<LanguagesDataContextType | null>(null);
