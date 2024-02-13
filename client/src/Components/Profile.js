import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Col,
  Modal,
  Row,
  message,
  Card,
  Image,
} from "antd";
import _ from 'lodash'
import { EditOutlined } from "@ant-design/icons";
import { AuthContext } from "../Helper/AuthContext";
import axios from "axios";
import { ApiBase } from "../Const";
import { trimString } from "../Trimmer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../Redux/userpic/Reducer";
const Profile = () => {
  const ups = useSelector((state) => state.UserPics.Data);
  const { user, setUser,userpic,setUserpic } = useContext(AuthContext);
  const [data, setdata] = useState({});
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [clickedBoxes, setClickedBoxes] = useState({});
  const [addform] = Form.useForm();
  const [upform] = Form.useForm();
  const [modalform] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const DefaultPic ="https://i.pinimg.com/564x/b7/21/57/b72157473ae510c74e7a96ccb8bd0e38.jpg";
  const GETinfo = async () => {
    const data = await axios.get(ApiBase + "/Users/find/" + user.id);
    
    setdata(data.data);
  };
  const GETuserpic = async () => {
    const data = await axios.get(ApiBase + "/Userpic/");
    
    dispatch(fetch(data.data));
  };
  const showModal = () => {
    const { name, id, emailid } = data;
    addform.setFieldsValue({ name, id, emailid });
    setVisible(true);
  };
  
  const handleCancel = () => {
    setVisible(false);
  };
  const showModal2 = () => {
    const { id } = data;
    upform.setFieldsValue({ id });
    setVisible2(true);
  };

  const handleCancel2 = () => {
    setVisible2(false);
  };
  const showModal3 = () => {
    const { id } = data;
    modalform.setFieldsValue({ id });
    setVisible3(true);
  };

  const handleCancel3 = () => {
    setVisible3(false);
  };

  // Form submit handler
  const onFinish = async (values) => {
    //console.log("Received values:", values);
    let { name, emailid, id } = values;
    name = trimString(name).toLowerCase();
    emailid = trimString(emailid);

    values = { name, emailid, id };
    //console.log(values);
    const result = await axios.patch(ApiBase + "/Users/update", values);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
        setUser({});
        localStorage.removeItem("accessToken");
        navigate("/login");
      } else {
        message.error(result.data.err);
      }
    }
  };
  const onFinish2 = async (values) => {
    //console.log("Password values:", values);
    let { Password, npassword, confpassword } = values;

    if (npassword !== confpassword) {
      message.error("Password Doesnot match");
      return;
    }
    const result = await axios.patch(ApiBase + "/Users/changepass", values);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
        setUser({});
        localStorage.removeItem("accessToken");
        navigate("/login");
      } else {
        message.error(result.data.err);
      }
    }
  };
  const onFinish3 = async (values) => {
    const { UserpicId, id } = values;
    if (!UserpicId) {
      message.error("Select the Profile Pic");
    } else {
      values = { UserpicId, id };
      const result = await axios.patch(ApiBase + "/Users/updatepic", values);
      if (result) {
        if (result.data.msg) {
          setVisible3(false);
          message.success(result.data.msg);
          
          
          setUserpic("")
        } else {
          message.error(result.data.err);
        }
      }
    }
  };
  const Removepic=async()=>{
    const result=await axios.patch(ApiBase+"/Users/removeprofile",{id:data.id});

    if (result) {
      if (result.data.msg) {
      setVisible3(false);
      setUserpic("")
        message.success(result.data.msg);
      } else {
        message.error(result.data.err);
      }
  }
  }
  const generateClassName = (boxId) => {
    return `${clickedBoxes[boxId] ? "greenpcard" : ""}`;
  };
  const clickedprofilepic = (e, id) => {
    setClickedBoxes({});
    let d = { [id]: true };
    setClickedBoxes(d);
    modalform.setFieldsValue({ UserpicId: id });
  };
  const modal1 = (
    <Modal
      title="Update"
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={600}
    >
      <Form
        form={addform}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="id"
          name="id"
          hidden
          rules={[{ required: true, message: "Please input the UserName!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input the UserName!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email ID"
          name="emailid"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input the email id!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
  const modal2 = (
    <Modal
      title="Update password"
      open={visible2}
      onCancel={handleCancel2}
      footer={null}
      width={600}
    >
      <Form form={upform} name="basic" onFinish={onFinish2} layout="vertical">
        <Form.Item
          label="id"
          name="id"
          hidden
          rules={[{ required: true, message: "Please input the UserName!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Old Password"
          name="password"
          rules={[
            { required: true, message: "Please input the Old Password!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="npassword"
          rules={[
            { required: true, message: "Please input the new Password!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confpassword"
          rules={[{ required: true, message: "Please Confirm Password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
  const modal3 = (
    <Modal
      title={`Update Profile Pic ( `+ ups.length +` )`  }
      open={visible3}
      onCancel={handleCancel3}
      footer={null}
      width={"80%"}
    >
      <Form
        form={modalform}
        name="basic"
        style={{ maxWidth: "90%", margin: "0px auto" }}
        onFinish={onFinish3}
        layout="vertical"
      >
        <Form.Item
          label="id"
          name="id"
          hidden
          rules={[{ required: true, message: "Please input the id!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Userpic" hidden name="UserpicId">
          <Input />
        </Form.Item>
        <div
          style={{
            height: "300px",
            MaxWidth: "fit-Content",
            padding: 0,
            overflow: "scroll",
          }}
        >
          <Row gutter={24}>
            {ups.map((up, key) => {
              return (
                <Col span="6" style={{ padding: 20 }} key={key}>
                  <div
                    className={generateClassName(up.id)}
                    style={{
                      border: "1px solid gray",
                      borderRadius: 5,
                      width: "auto",
                      height: "200",
                      textAlign: "center",
                      padding: 5,
                    }}
                    onClick={(e) => clickedprofilepic(e, up.id)}
                    bordered="false"
                  >
                    <img
                      src={up.pic}
                      
                      style={{
                        margin: "15px auto",
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        
                      }}
                    />
                    <br />
                    <tt style={{ margin: "0px auto" }}>{up.name}</tt>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <Row gutter={24} style={{ marginTop: 20 }}>
          <Col offset={17} span={3}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Set profile Pic
              </Button>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              <Button type="primary" danger onClick={()=>Removepic()}>Remove the Pic</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
  useEffect(() => {
    GETinfo();
    GETuserpic();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <div
        style={{
          background: "white",
          borderRadius: "10px",
          padding: 20,
          width: "90%",
          margin: "0px auto",
        }}
      >
        <h3 align="right">
          <Button
            onClick={showModal}
            type="primary"
            style={{ marginRight: 10 }}
          >
            <EditOutlined /> Edit
          </Button>
          <Button
            onClick={showModal2}
            type="primary"
            style={{ background: "purple" }}
          >
            Change Password
          </Button>
        </h3>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div>
             
              <img
                onClick={showModal3}
                src={userpic}
                style={{
                  cursor: "pointer",
                  boxShadow: "0 0 30px 10px rgba(0,0,0,.5)",
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                }}
              />{" "}
            </div>
          </Col>
          <Col className="gutter-row" span={18}>
            <div style={{ textAlign: "left" }}>
              {/* Display info about User */}
              <h1>User Name: {user.name}</h1>
              <h1>Email id: {data.emailid}</h1>
            </div>
          </Col>
        </Row>
      </div>
      {modal1}
      {modal2}
      {modal3}
    </div>
  );
};

export default Profile;
