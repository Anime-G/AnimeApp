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
});

export default store;
