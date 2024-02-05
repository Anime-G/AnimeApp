


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer


const initialValues = {Data:[],data:{}};

const typeSlice=createSlice({
  name:'Type',
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

export const {fetch}=typeSlice.actions;
export default typeSlice.reducer;
