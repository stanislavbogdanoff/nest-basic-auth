import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../features/books/books.service";
import { authApi } from "../features/auth/authApiSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, authApi.middleware),
});
