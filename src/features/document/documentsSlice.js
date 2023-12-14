import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const documentsAdapter = createEntityAdapter({
    // sort document with some if ?
    /* sortComparer: (a,b) => (a.doc === b.doc) ? 0 : a.doc ? 1 : -1 */
})

const initialState = documentsAdapter.getInitialState()

export const documentsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDocuments: builder.query({
            query: () => '/documents',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedDocument = responseData.map(document => {
                    document.id = document._id
                    return document
                })
                return documentsAdapter.setAll(initialState, loadedDocument)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Document', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Document', id}))
                    ]
                } else return [{ type: 'Document', id: 'LIST' }]
            }
        }),
        addNewDocument: builder.mutation({
            query: initialDocument => ({
                url: '/documents',
                method: 'POST',
                body: {
                    ...initialDocument,
                }
            }),
            invalidatesTags: [
                { type: 'Document', id: 'LIST' }
            ]
        }),
        updateDocument: builder.mutation({
            query: initialDocument => ({
                url: '/documents',
                method: 'PATCH',
                body: {
                    ...initialDocument,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Document', id: arg.id }
            ]
        }),
        deleteDocument: builder.mutation({
            query: ({ id }) => ({
                url: '/documents',
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Document', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetDocumentsQuery,
    useAddNewDocumentMutation,
    useUpdateDocumentMutation,
    useDeleteDocumentMutation,
} = documentsApiSlice

// returns the query result object
export const selectDocumentsResult = documentsApiSlice.endpoints.getDocuments.select()

// creates memoized selector
const selectDocumentsData = createSelector(
    selectDocumentsResult,
    documentsResult => documentsResult.data // normalized state object with ids & entities
)

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllDocuments,
    selectById: selectDocumentById,
    selectIds: selectDocumentIds
    // pass in a selector that returns the notes slice of state
} = documentsAdapter.getSelectors(state => selectDocumentsData(state) ?? initialState)