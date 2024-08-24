import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import MyThemeProvider from "@/theme/MyThemeProvider.tsx";
import { Provider } from "react-redux";
import store from "@/store/index.ts";
import App from "@/App.tsx";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./modules/Auth/contexts";
import LanguageCacheProvider from "./contexts/LanguageCacheProvider";
import LanguagesDataProvider from "./contexts/LanguagesData/LanguagesDataProvider";
const queryClient = new QueryClient();
import "./modules/i18/config";

// CSS imports
import "@/styles/index.css";
import "@/styles/table.css";
import "@/styles/preflight.tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageCacheProvider>
      <MyThemeProvider>
        <Provider store={store}>
          <Suspense>
            <LanguagesDataProvider>
                <SnackbarProvider>              
                    <QueryClientProvider client={queryClient}>
                      <AuthProvider>
                        <App />
                      </AuthProvider>
                    </QueryClientProvider>
                </SnackbarProvider>
            </LanguagesDataProvider>
          </Suspense>
        </Provider>
      </MyThemeProvider>
    </LanguageCacheProvider>
  </React.StrictMode>
);
