import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({

    // Estado global con la info que va trayendo
    reducePath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://cursodapp-47e58-default-rtdb.europe-west1.firebasedatabase.app" }),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (category) => `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const data = Object.values(response) // transformo un objeto en un array
                return data
            }
        }),
        getCategories: builder.query({
            query: () => `/categories.json`
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}.json`
        })
    })
})

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery, useGetProductQuery } = shopApi