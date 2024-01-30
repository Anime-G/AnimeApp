import axios from "axios";
import { ApiBase } from "../../Const";

import { Add, Fetch } from "./Types";

export const AddAuthor = (data) => {
  return  (dispatch) => {
    axios.post(ApiBase + "/Authors/add", data).then((result) => {
      console.log("action add", result.data);
      dispatch({type:Add,payload:result.data});
    });
  };
};
export const FetchAuthor = () => {
  return (dispatch) => {
    axios.get(ApiBase + "/Authors/").then((result) => {
      console.log("Action Fetch ", result.data);
      dispatch({type:Fetch,payload:result.data});
    });
  };
};
