


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer


const initialValues = {Data:[],data:{}};

const authorSlice=createSlice({
  name:'Author',
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

export const {fetch}=authorSlice.actions;
export default authorSlice.reducer;
