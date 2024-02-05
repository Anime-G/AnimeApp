import './App.css';
import Nav from './Components/Nav';
import { AuthContext } from './Helper/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiBase } from './Const';
import { message } from 'antd';
function App() {
  const [user,setUser]=useState({});
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
    }
  }
  useEffect(()=>{
    check_user()
<<<<<<< HEAD
  },[])
=======
  },[user])
>>>>>>> e87b15ec978a56396a5ac8ef8424354ba9289c04
  return (
    <AuthContext.Provider value={{user,setUser}} >
    <div className="App">
      <Nav/>
    </div>
    </AuthContext.Provider>
  );
}
export default App;
