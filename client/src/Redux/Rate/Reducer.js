


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer


const initialValues = {Data:[],data:{}};

const rateSlice=createSlice({
  name:'Rate',
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
export const {fetch}=rateSlice.actions;
export default rateSlice.reducer;
