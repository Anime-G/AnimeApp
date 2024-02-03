import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import { ApiBase } from '../../Const';
const initialState={Data:[],data:{}};
const Authorslice=createSlice({
    name:'Author',
    initialState,
    reducers:{
        fetch:(state,action)=>{
            console.log("Action of slice ",action.payload);
            // axios.post(ApiBase+'/Authors/add',action.payload)
            console.log(action.payload);
            state.Data=action.payload;
        },
        add:(state,action)=>{
            const response=action.payload;
            console.log("Action of slice ",response);
            if(response.data.status===201)
            {
                state.msg=response.data.msg;  
                delete state.err;              
            }
            else{
                state.err=response.data.err;
                delete state.msg;              

            };
    
    }
}
})
export const {fetch,add}=Authorslice.actions
export default Authorslice.reducer;
export const AddAuthor=async(dispatch,data)=>{
    
        

            

    
}
