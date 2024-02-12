import React, { useContext, useEffect, useState } from "react";
import { Menu } from "antd";
import {
  DatabaseOutlined,
  FileAddOutlined,
  GroupOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Admin/Home";
import { AuthContext } from "../Helper/AuthContext";
import Login from "./Login";
import Generaldata from "./Admin/Generaldata";
import Anime from "./Admin/Anime";
import Episode from "./Admin/Episode";
import Ads from "./Admin/Ads";
import Page404 from "./Page404";
import Profile from "./Profile";
import Userpic from "./Admin/Userpic";
import {default as Chome}  from './Home';
import axios from "axios";
import { ApiBase } from "../Const";
import WatchAnime from "./WatchAnime";
const Nav = () => {
  const { user, setUser,userpic} = useContext(AuthContext);
  const [data,setData]=useState([]);
  const logout = () => {
    setUser({});
    localStorage.removeItem("accessToken");
  };
  
  
  // console.log(user);
  const items = [];
  if (!user.id) {
    items.push(
      {
        label: <Link to="/">Home</Link>,
        key: "Home",
        icon: <HomeOutlined />,
      },
      {
        label: <Link to="/login">Login</Link>,
        key: "Login",
        icon: <LoginOutlined />,
        style: { position: "absolute", right: 0 },
      }
    );
  } else {
    items.push({
      label: (
        <span style={{ display: "flex", gap: "10px",paddingTop:5 }}>
          <img 
            src={userpic}
            height="40px"
            style={{ boxShadow: "0 0 10px whitesmoke", borderRadius: "50%" }}
          />
          {user.name}
        </span>
      ),
      key: "SubMenu",
      style: { position: "absolute", right: 0 },
      children: [
        {
          label: <Link to="/profile">Profile</Link>,
          key: "profile",
          icon: <ProfileOutlined />,
        },
        {
          label: "Logout",
          key: "Logout",
          icon: <LogoutOutlined />,
          onClick: logout,
        },
      ],
    });
    if (user.status === 1) {
      items.push(
        {
          label: <Link to="/admin/Home">Home</Link>,
          key: "Home",
          icon: <HomeOutlined />,
        },
        {
          label: <Link to="/admin/generaldata">general Data</Link>,
          key: "generealInfo",
          icon: <InfoCircleOutlined />,
        },
        {
          label: <Link to="/admin/Anime">Anime</Link>,
          key: "anime",
          icon: <GroupOutlined />,
        },
        {
          label: <Link to="/admin/Episode">Episode</Link>,
          key: "Episode",
          icon: <DatabaseOutlined />,
        },
        {
          label: <Link to="/admin/ads">Ads</Link>,
          key: "Ads",
          icon: <FileAddOutlined />,
        },

        {
          label: <Link to="/admin/userpic">Userpic</Link>,
          key: "userpic",
          icon: <UsergroupAddOutlined />,
        }
      );
    }
    else{
      items.push(
        {
          label: <Link to="/">Home</Link>,
          key: "Home",
          icon: <HomeOutlined />,
        })
    }

   
  }
  const [current, setCurrent] = useState("Home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        key={items}
        theme="dark"
        style={{ position: "sticky",height:"50px", top: 0, zIndex: 120, }}
        onClick={onClick}
        selectedKeys={[current]}
        // defaultSelectedKeys={[this.props.location.pathname]}
        mode="horizontal"
        items={items}
      />
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Chome/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Anime/:id" element={<WatchAnime />} />
        <Route path="/Anime/:id/:Epi" element={<WatchAnime />} />
        {user.id ? <Route path="/profile" element={<Profile />} /> : ""}

        {user.status === 1 ? (
          <>
            <Route path="/admin/Home" element={<Home />} />

            <Route path="/admin/generaldata" element={<Generaldata />} />
            <Route path="/admin/Anime" element={<Anime />} />
            <Route path="/admin/Episode" element={<Episode />} />
            <Route path="/admin/ads" element={<Ads />} />
            <Route path="/admin/userpic" element={<Userpic />} />
          </>
        ) : ("")}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Nav;
