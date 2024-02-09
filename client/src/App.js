import './App.css';
import Nav from './Components/Nav';
import { AuthContext } from './Helper/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiBase } from './Const';
import { message } from 'antd';
function App() {
  const [user,setUser]=useState({});
  const [userpic,setUserpic]=useState({});
  const check_user=async()=>{
    const data=await axios.get(ApiBase+"/users/auth",{headers:{accessToken:localStorage.getItem('accessToken')}});
    if(data.data.err)
    {
      message.error(data.data.err);
      setUser({})
    }
    else{

      const {id,name,emailid,status}=data.data;
      
      setUser({
        id,name,emailid,status
      })
      pic()
    }
  }
  const pic=async()=>{
    if(user.id)
    {//fetch the UserPicId
      const data=await axios.get(ApiBase+"/users/find/"+user.id);
      const upid=data.data.UserpicId;
      if(upid===null)
      {
        setUserpic("https://i.pinimg.com/564x/b7/21/57/b72157473ae510c74e7a96ccb8bd0e38.jpg")
      }
      else{
        const updata=await axios.get(ApiBase+"/Userpic/find/"+upid);
        setUserpic(updata.data.pic)
      }
    }
  }
  useEffect(()=>{pic()})
  useEffect(()=>{
    check_user()
    
  },[])
  return (
    <AuthContext.Provider value={{user,setUser,userpic,setUserpic}} >
    <div className="App">
      <Nav/>
    </div>
    </AuthContext.Provider>
  );
}
export default App;
