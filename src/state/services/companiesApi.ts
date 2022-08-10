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
    }),
    addCompany: builder.mutation({
      query: (data) => ({
        url: "companies",
        method: "post",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      }
      )

    }),
  })
})
export const { useGetCompaniesQuery, useAddCompanyMutation } = companiesApi