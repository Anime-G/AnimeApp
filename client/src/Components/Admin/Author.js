import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Table, message } from "antd";
import React, { useEffect, useState } from "react";

import {  useDispatch, useSelector } from "react-redux";
import { trimString } from "../../Trimmer";
import { AddAuthor, add } from "../../Redux/Author/slice";
import { ApiBase } from "../../Const";
import axios from "axios";

const Author = () => {
  const Authors = useSelector((state) => state.Author.Data)
  const data = useSelector((state) => state.Author)
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    // console.log(values);
    let { name } = values;
    name = trimString(name.toLowerCase());
    const res=await axios.post(ApiBase+'/Authors/add',{name});
    console.log("Name ",name);
    dispatch(add(res));
    if(data?.msg)
    {
      message.success(data.msg);
    }
    else{
      message.error(data.err);
    }
    setVisible(false);
    form.resetFields();
  };
  

  
  useEffect(() => {
    // dispatch(FetchAuthor());
  },[dispatch]);
  
  const columns = [
    {
      title: "index",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];
  const modalForm = (
    <Form
      form={form}
      name="add Author"
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
      initialValues={{}}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Author name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input Author name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
  const modal = (
    <Modal
      open={visible}
      title="Post  data"
      okText="Submit"
      cancelText="Cancel"
      onCancel={() => {
        setVisible(false);
      }}
      footer={[
        <Button key="cancel" onClick={() => setVisible(false)}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                onFinish(values);
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
        >
          Submit
        </Button>
      ]}
    >
      {modalForm}
    </Modal>
  );
  
  return (
    <React.Fragment>
      <h1 align="right">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          <PlusOutlined /> Add
        </Button>
      </h1>
      {modal}
      {/* {console.log(Authors)} */}
      <Table dataSource={Authors} columns={columns} />  
    </React.Fragment>
  );
};

export default Author;
