export const PATH_LOGIN = "/auth/signin";
export const PATH_AFTER_LOGIN = "/";
export const DEFAULT_PATH = "/"

export const API = import.meta.env.VITE_API_URL;
export const drawerWidth = 200;

import en from "@/assets/header/en.svg";
import fr from "@/assets/header/fr.svg";
import ar from "@/assets/header/ar.svg";

export const defaultLanguage = "en";

export const languages = [
  { code: "en", flagCode: "us", name: "English", flag: en },
  { code: "fr", flagCode: "fr", name: "French", flag: fr },
  // { code: "ar", flagCode: "ar", name: "Arabic", flag: ar },
];
