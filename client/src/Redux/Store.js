<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import authorSlice from "./Author/Reducer";
import studioSlice from "./Studio/Reducer";
import typeSlice from "./Type/Reducer";
import rateSlice from "./Rate/Reducer";
import genereSlice from "./Genere/Reducer";
import adsSlice from "./Ads/Reducer";
// import AuthorReducer from "./Author/Reducer";

const store = configureStore({
  reducer: {
    Author: authorSlice,
    Studio: studioSlice,
    Type: typeSlice,
    Rate: rateSlice,
    Genere: genereSlice,
    Ads: adsSlice,
  },
=======
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import Author from './Author/slice'
const thunk =require('redux-thunk').default;
const store = configureStore({ 
    reducer: { 
        Author, }, 

>>>>>>> e87b15ec978a56396a5ac8ef8424354ba9289c04
});

export default store;
