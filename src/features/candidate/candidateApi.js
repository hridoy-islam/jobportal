import apiSlice from "../api/apiSlice";

const candidateApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        candidateById: builder.query({
            query: (id) => ({
                url: `/candidate/${id}`,
            }),
        }),
        
    })
})

export const { useCandidateByIdQuery } = candidateApi