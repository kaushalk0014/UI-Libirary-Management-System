// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Define the API slice
// export const bookListApi = createApi({
//   reducerPath: 'api', 
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/v1/app/user' }), 
//   endpoints: (builder:any) => ({
    
//     getBookById: builder.query({
    
//       query: (id:any) => ({
//         url: `getById?id=${id}`,
       
//       }),
      
//     })
//   }),
// });

// // Export hooks for usage in components
// export const { useGetBookByIdQuery} = bookListApi;
