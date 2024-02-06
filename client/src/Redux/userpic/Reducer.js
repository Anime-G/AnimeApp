


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer


const initialValues = {Data:[],data:{}};

const UserpicSlice=createSlice({
  name:'UserPics',
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

export const {fetch}=UserpicSlice.actions;
export default UserpicSlice.reducer;
