import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob: builder.mutation({
            query: (data) => ({
                url: '/job',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Jobs'],
        }),
        toggleJobStatus: builder.mutation({
            query: (data) => ({
                url: '/jobstatus',
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Jobs'],
        }),
        applyJob: builder.mutation({
            query: (data) => ({
                url: '/apply',
                method: 'PATCH',
                body: data,
            })
        }),
        question: builder.mutation({
            query: (data) => ({
                url: '/query',
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Query']
        }),
        reply: builder.mutation({
            query: (data) => ({
                url: '/reply',
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Query']
        }),
        getJob: builder.query({
            query: () => ({
                url: '/jobs',
            }),
            providesTags: ['Jobs']
        }),
        jobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
            }),
            providesTags: ['Query']
        }),
        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`,
            }),
            invalidatesTags: ['Jobs'],
        }),
        
    })
})

export const { useGetJobQuery, useToggleJobStatusMutation, useJobByIdQuery, usePostJobMutation, useReplyMutation, useApplyJobMutation, useGetAppliedJobsQuery, useQuestionMutation } = jobApi