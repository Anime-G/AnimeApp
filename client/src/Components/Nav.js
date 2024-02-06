import React, { useContext, useState } from 'react'
import { Menu } from 'antd'
import { DatabaseOutlined, FileAddOutlined, GroupOutlined, HomeOutlined, InfoCircleOutlined, LoginOutlined, LogoutOutlined, ProfileOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { AuthContext } from '../Helper/AuthContext';
import Login from './Login';
import Generaldata from './Admin/Generaldata';
import Anime from './Admin/Anime';
import Episode from './Admin/Episode';
import Ads from './Admin/Ads';
import Page404 from './Page404';
import Userpic from './Admin/Userpic';
const Nav = () => {
    const {user,setUser}=useContext(AuthContext);
    const logout=()=>{
      setUser({});
      localStorage.removeItem("accessToken");

    }
    // console.log(user);
    const items = [
        {
          label: (<Link to="/" >Home</Link>),
          key: 'Home',
          icon: <HomeOutlined />,
        }
      ];
      if(!user.id)
      {
        items.push({
            label: (<Link to="/login" >Login</Link>),
            key: 'Login',
            icon:<LoginOutlined />,
            style:{position:"absolute",right:0}
        })  
      }
      else{
        if(user.status===1)
        {
          items.push({
            label: (<Link to="/admin/generaldata" >general Data</Link>),
            key: 'generealInfo',
            icon: <InfoCircleOutlined />,
          },
          {
            label:  (<Link to="/admin/Anime" >Anime</Link>),
            key: 'anime',
            icon: <GroupOutlined />,
          },
          {
            label:  (<Link to="/admin/Episode" >Episode</Link>),
            key: 'Episode',
            icon: <DatabaseOutlined />,
          },
          {
            label: (<Link to="/admin/ads" >Ads</Link>),
            key: 'Ads',
            icon: <FileAddOutlined />,
          },
          
          {
            label: (<Link to="/admin/userpic" >Userpic</Link>),
            key: 'userpic',
            icon: <UsergroupAddOutlined />
          },
          
          )

        }
        items.push(
          {
            label: user.name,
            key: 'SubMenu',
            icon: <UserOutlined />,
            style:{position:"absolute",right:0},
            children: [
              {
                
                label: 'profile',
                key:"profile",
                icon:<ProfileOutlined />,
              },
              {
                
                label: 'Logout',
                key:"Logout",
                icon:<LogoutOutlined /> ,
                onClick:logout
              },
            ]
        })
      }
      const [current, setCurrent] = useState('Home');
      const onClick = (e) => {
        setCurrent(e.key);
      };
      return (<>
      <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      {/* Routes */}
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        
        {user.status===1?
        (<>
        <Route path='/admin/generaldata' element={<Generaldata/>} />
        <Route path='/admin/Anime' element={<Anime/>} />
        <Route path='/admin/Episode' element={<Episode/>} />
        <Route path='/admin/ads' element={<Ads/>} />
        <Route path='/admin/userpic' element={<Userpic/>} />
        </>)
        :("")}
        <Route path="*" element={<Page404/>} />
      </Routes>
      </>)
}

export default Nav
