import { Add, Fetch } from "./Types";


//Action Reducer
const initialValues = {Data:[],data:{}};


const AuthorReducer = (state = initialValues, action) => {
  switch (action.type) {
    case Add:
        console.log("Reducer Add ",action.payload);
      // state.data= action.payload 
      return {...state,data:action.payload };
      case Fetch:
        console.log("Reducer ",state);
          
        return {...state,Data:action.payload };
    default:
        console.log("Default");
      return state;
  }
};
export default AuthorReducer;
