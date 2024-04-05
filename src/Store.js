import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './features/todo_features/todoSlice';
import themeReducer from './features/todo_features/themeSlice';



export const Store = configureStore({
    reducer: {todo:todoReducer,
       theme:themeReducer}
})

