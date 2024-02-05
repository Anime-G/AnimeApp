


import  {  createSlice} from '@reduxjs/toolkit'

//Action Reducer


const initialValues = {Data:[],data:{}};

const genereSlice=createSlice({
  name:'Genere',
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

export const {fetch}=genereSlice.actions;
export default genereSlice.reducer;
