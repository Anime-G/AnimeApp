import { configureStore } from "@reduxjs/toolkit";
import AuthorReducer from "./Author/Reducer";

const store = configureStore({ 
    reducer: { 
        Author: AuthorReducer, }, 
});

export default store;
