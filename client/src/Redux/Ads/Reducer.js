


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer


const initialValues = {Data:[],data:{}};

const adsSlice=createSlice({
  name:'Ads',
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

export const {fetch}=adsSlice.actions;
export default adsSlice.reducer;
