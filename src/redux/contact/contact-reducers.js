import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61f3e8f010f0f7001768c730.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getContactById: builder.query({
      query: (id) => `contacts/${id}`,
    }),
    getAllContacts: builder.query({ query: () => "contacts" }),
  }),
});

export const { useGetContactByIdQuery, useGetAllContactsQuery } = contactApi;
