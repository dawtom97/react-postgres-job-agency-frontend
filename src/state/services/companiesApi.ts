import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CompanyModel } from '../models/Company.model';

const companiesApiHeaders = {
  'Content-Type': 'application/json',
};

const createRequest = (url: string) => ({ url, headers: companiesApiHeaders });


const baseUrl = 'http://localhost:5000/api/v1'

export const companiesApi = createApi({
  reducerPath: 'companiesApi',
  baseQuery: fetchBaseQuery({ mode: 'cors', baseUrl }),
  tagTypes: ['Company'],
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => createRequest('/companies'),
      providesTags: ['Company']
    }),
    getSingleCompany: builder.query({
      query: (id) => createRequest(`/companies/${id}`),
      providesTags: ['Company']
    }),
    addCompany: builder.mutation<{}, CompanyModel>({
      query: (data) => ({
        url: "companies",
        method: "post",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },

      }),
      invalidatesTags: ['Company']
    }),
    updateCompany: builder.mutation<{}, CompanyModel>({
      query: (data) => (
        {
          url: `companies/${data.id}`,
          method: "put",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },

        }),
      invalidatesTags: ['Company']
    }),
    deleteCompany: builder.mutation<void, number>({
      query: (id) => ({
        url: `companies/${id}`,
        method: "delete",
      }),
      invalidatesTags: ['Company']
    })
  }),

})


export const { useGetCompaniesQuery, useAddCompanyMutation, useDeleteCompanyMutation, useGetSingleCompanyQuery, useUpdateCompanyMutation } = companiesApi