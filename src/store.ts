import { configureStore } from '@reduxjs/toolkit';
import { bookListApi } from './features/BookListApi';

export const store = configureStore({
    reducer: {
        [bookListApi.reducerPath]: bookListApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookListApi.middleware),
});
