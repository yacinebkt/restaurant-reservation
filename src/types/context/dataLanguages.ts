export interface LanguagesDataContextType  {
  dataLanguages: {
    availableLanguages: string[];
    loadingAvailableLanguages: boolean;
  };
  setDataLanguages: (data: LanguagesDataType) => void;
}

export type LanguagesDataType = {
  availableLanguages: string[];
  loadingAvailableLanguages: boolean;
};
