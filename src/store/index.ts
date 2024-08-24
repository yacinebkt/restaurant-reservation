import { configureStore } from '@reduxjs/toolkit';
import appReducers from './app/reducers';

const store = configureStore({
  reducer: {
    // appReducers is only for layout state management
    app: appReducers,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],

  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
