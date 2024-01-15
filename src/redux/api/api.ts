import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append('priority',priority)
        }
       return{
        url: '/todos',
        method: "GET",
        params: params,
       }
      },
      providesTags: ["todo"],
    }),
    addTodos: builder.mutation({
      query: (data) => {
        return {
          url: "/todos",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (options) => {
        console.log('base api',options);
        return {
          url: `/todos/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (data) => {
        console.log('base api', data);
        return {
          url: `/todos/${data}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
    
  }),
});

export const { useGetTodosQuery, useAddTodosMutation,useUpdateTodoMutation,useDeleteTodoMutation } = baseApi;
