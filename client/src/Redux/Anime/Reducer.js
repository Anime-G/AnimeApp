


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer
const initialValues = {Data:[],data:{}};
const AnimeSlice=createSlice({
  name:'Animes',
  initialState:initialValues,
  reducers:{
    
    fetch:(state,action)=>{
      state.Data=action.payload;
    },
    default:(state)=>{
      state.Data=[]
    }
  },
  
  
  
})

export const {fetch}=AnimeSlice.actions;
export default AnimeSlice.reducer;
