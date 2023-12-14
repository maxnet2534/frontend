import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
/* import { setCredentials } from ...authSlice */

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500'}),
    tagTypes: ['Document', 'User'],
    endpoints: builder => ({})
})