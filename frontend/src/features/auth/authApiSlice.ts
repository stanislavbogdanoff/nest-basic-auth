import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/auth" }),
  endpoints: (builder) => ({
    login: builder.mutation<
      Promise<{ token: string }>,
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: `/login?email=${email}&password=${password}`,
        method: "POST",
      }),
    }),
    signup: builder.mutation<
      Promise<{ token: string }>,
      { name: string; email: string; password: string }
    >({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
