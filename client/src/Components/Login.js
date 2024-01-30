import { Button, Card, Form, Input, Space, message } from "antd";
import React, { useState } from "react";
import axios from "axios";

import { ApiBase } from "../Const";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [form, setform] = useState(0);
  const navigate = useNavigate();
const [formdata]=Form.useForm();
  const bg = [
    "https://i.pinimg.com/564x/f8/f7/3c/f8f73c904e1f6e169d04348b57755d8d.jpg",
    "https://i.pinimg.com/564x/1c/8d/01/1c8d0148bb529283d51a2e52fadf26fd.jpg",
  ];

  //o=login,1=Register
  const bg_style = {
    width: "50%",
    background: "url('" + bg[form] + "') top/cover ",
    borderRadius: "10px 0px 0px 10px",
  };

  const loginform = (
    <React.Fragment>
      <Form.Item
        label="Emailid"
        name="emailid"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </React.Fragment>
  );
  const Registrationform = (
    <React.Fragment>
      <Form.Item
        label="Username"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Emailid"
        name="emailid"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your Emailid!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Re-Password"
        name="confpassword"
        rules={[
          {
            required: true,
            message: "Please Confirm your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        style={{
          margin: "0px",
        }}
      >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </React.Fragment>
  );
  const onlogin =async (values) => {
    console.log("form submitted: ", values);
    const result = await axios.post(ApiBase + "/users/login", values);
    if(!result.data.err)
    {
        message.success(result.data.msg);
        localStorage.setItem("accessToken",result.data.token);
        formdata.resetFields();
        navigate('/');
    }
    else{
        message.error(result.data.err)
    }
  };

  const onregister = async (values) => {
    console.log("form submitted: ", values);
    const { emailid, password, confpassword } = values;

    //emailid reapting or not?
    const count = await axios.post(ApiBase + "/users/find_emailid", {
      emailid,
    });
    console.log(count);
    if (count.data > 0) {
      message.error("Email id is Already registered!");
    } else {
      //password Checking
      if (password !== confpassword) {
        message.error("Password Doesnot Matched!");
        return;
      }
      const result = await axios.post(ApiBase + "/users/register", values);
      if (result) {
        message.success("User Registered Successfully!");
        formdata.resetFields();
        setform(0);
      } else {
        message.error("User not Register!");
      }
      console.log(result);
    }
  };
  return (
    <div>
      <div
        style={{
          width: "50%",
          margin: "20px auto",
          padding: "0px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0,0,0,.5)",
        }}
      >
        {/*  */}
        <div style={{ width: "100%", display: "flex", height: "450px" }}>
          <div style={bg_style}></div>
          <div style={{ width: "50%", padding: "20px", position: "relative" }}>
            <h1>{form == 0 ? "Login" : "Registration"}</h1>
            <hr />
            <Form
            form={formdata}
              name="Registration"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
                margin: "0px auto",
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={form == 0 ? onlogin : onregister}
              autoComplete="off"
            >
              {form == 0 ? loginform : Registrationform}
            </Form>
            <Button
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                borderRadius: "0px 0px 10px 0px",
                padding: 30,
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => {
                form == 0 ? setform(1) : setform(0);
              }}
            >
              {form == 1 ? "Login" : "Register"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
