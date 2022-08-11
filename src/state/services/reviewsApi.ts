import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import { CompanyModel } from '../models/Company.model';

const reviewsApiHeaders = {
  'Content-Type': 'application/json',
};

const createRequest = (url: string) => ({ url, headers: reviewsApiHeaders });

const baseUrl = 'http://localhost:5000/api/v1';

export const reviewsApi =createApi({
    reducerPath: 'reviewsApi',
    baseQuery: fetchBaseQuery({ mode: 'cors', baseUrl }),
    tagTypes: ['Review'],
    endpoints: (builder) => ({
        getReviews: builder.query({
            query: (companyId) => createRequest(`/reviews/${companyId}`),
            providesTags: ['Review']
        })
    })
})


export const {useGetReviewsQuery} = reviewsApi;