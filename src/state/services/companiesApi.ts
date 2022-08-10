import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const companiesApiHeaders = {
  'Content-Type': 'application/json',
};

const createRequest = (url: string) => ({ url, headers: companiesApiHeaders });

const baseUrl = 'http://localhost:5000/api/v1'

export const companiesApi = createApi({
  reducerPath: 'companiesApi',
  baseQuery: fetchBaseQuery({ mode: 'cors', baseUrl }),
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => createRequest('/companies')
    })
  }),
})

export const { useGetCompaniesQuery } = companiesApi