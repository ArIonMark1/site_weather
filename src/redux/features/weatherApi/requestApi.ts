import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API: string = import.meta.env.VITE_BACKEND_API;
const URL: string = import.meta.env.VITE_BACKEND_URL;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
  tagTypes: ["Cities"],
  endpoints: (builder) => ({
    getCityByTitle: builder.query({
      query: (title) => `weather?q=${title}&appid=${API}`,
      providesTags: ["Cities"],
    }),
  }),
});

export const { useGetCityByTitleQuery } = weatherApi;
