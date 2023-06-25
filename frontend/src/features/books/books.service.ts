import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  price: number;
}

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query<
      Promise<Book[]>,
      { keyword: string; page: number }
    >({
      query: ({ keyword, page }) => `/books?keyword=${keyword}&page=${page}`,
    }),
  }),
});

export const { useGetAllBooksQuery, useLazyGetAllBooksQuery } = booksApi;
