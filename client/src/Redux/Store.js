import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import Author from './Author/slice'
const thunk =require('redux-thunk').default;
const store = configureStore({ 
    reducer: { 
        Author, }, 

});

export default store;
