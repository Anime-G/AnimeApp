


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer


const initialValues = {Data:[],data:{}};

const studioSlice=createSlice({
  name:'Studio',
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

export const {fetch}=studioSlice.actions;
export default studioSlice.reducer;
