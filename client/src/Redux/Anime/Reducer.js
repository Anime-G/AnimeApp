


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer
const initialValues = {Data:[],data:[]};
const AnimeSlice=createSlice({
  name:'Animes',
  initialState:initialValues,
  reducers:{
    
    fetch:(state,action)=>{
      state.Data=action.payload;
    },
    diffrent:(state,action)=>{
      state.data=action.payload;
    },
    default:(state)=>{
      state.Data=[]
    }
  },
  
  
  
})

export const {fetch,diffrent}=AnimeSlice.actions;
export default AnimeSlice.reducer;
