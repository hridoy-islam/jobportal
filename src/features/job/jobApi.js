import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob : builder.mutation({
            query: (data)=> ({
                url : '/job',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Jobs'],
        }),
        getJob : builder.query({
            query: ()=> ({
                url : '/jobs',
            }),
            providesTags: ['Jobs']
        }),
        jobById : builder.query({
            query: (id)=> ({
                url : `/job/${id}`,
            }),
            providesTags: ['Jobs']
        }),
    })
})

export const {useGetJobQuery, useJobByIdQuery, usePostJobMutation} = jobApi