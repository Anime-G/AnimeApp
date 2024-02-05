import { DeleteOutlined, EditOutlined, PlusOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Modal, Popconfirm, Table, message } from "antd";
import React, { useEffect, useState } from "react";

<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { trimString } from "../../Trimmer";
import { fetch } from "../../Redux/Author/Reducer";
import axios from "axios";
import { ApiBase } from "../../Const";

const Author = () => {
  const Authors = useSelector((state) => state.Author.Data);
=======
import {  useDispatch, useSelector } from "react-redux";
import { trimString } from "../../Trimmer";
import { AddAuthor, add } from "../../Redux/Author/slice";
import { ApiBase } from "../../Const";
import axios from "axios";

const Author = () => {
  const Authors = useSelector((state) => state.Author.Data)
  const data = useSelector((state) => state.Author)
>>>>>>> e87b15ec978a56396a5ac8ef8424354ba9289c04
  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [visibleup, setVisibleup] = useState(false);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    let { name } = values;
    name = trimString(name.toLowerCase());
<<<<<<< HEAD
    const result = await axios.post(ApiBase + "/Authors/add", { name });
    if (result) {
      if (result.data.err) {
        message.error(result.data.err);
      } else {
        message.success(result.data.msg);
      }
    }
    fetchdata();
    form.resetFields();

    // AddAuthor({ name });

=======
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
>>>>>>> e87b15ec978a56396a5ac8ef8424354ba9289c04
    setVisible(false);
    form.resetFields();
  };
  const onFinishup = async (values) => {
    let { id, name } = values;
    name = trimString(name.toLowerCase());
    name = trimString(name);
    const result = await axios.patch(ApiBase + "/Authors/update", { name, id });
    if (result) {
      if (result.data.err) {
        message.error(result.data.err);
      } else {
        message.success(result.data.msg);
      }
    }
    fetchdata();
    updateForm.resetFields();
    setVisibleup(false);
  };
  const fetchselectedAuthor = async (id) => {
    const result = await axios.get(ApiBase + "/Authors/find/" + id);
    const data = result.data;
    updateForm.setFieldsValue({ name: data.name.toUpperCase(), id: data.id });
  };
  const fetchdata = async () => {
    const data = await axios.get(ApiBase + "/Authors/");
    const d = data.data;
    dispatch(fetch(d));
    // setauth(Authors);
  };
  const deleteauthor=async(id)=>{
    const result = await axios.delete(ApiBase + "/Authors/delete/"+id);
    if (result) {
      if (result.data.err) {
        message.error(result.data.err);
      } else {
        message.success(result.data.msg);
      }
    }
    fetchdata();
  }
  useEffect(() => {
<<<<<<< HEAD
    fetchdata();
  }, [dispatch]);

=======
    // dispatch(FetchAuthor());
  },[dispatch]);
  
>>>>>>> e87b15ec978a56396a5ac8ef8424354ba9289c04
  const columns = [
    {
      title: "index",
      dataIndex: "id",
      key: "id",
      width: "5%",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) =>record.name.toUpperCase()
    },
    {
      title: "update",
      dataIndex: "id",
      key: "id",
      width: "5%",
      render: (text, record, index) => (
        <Button
          type="primary"
          onClick={() => {
            fetchselectedAuthor(record.id);
            setVisibleup(true);
          }}
        >
          <EditOutlined />
        </Button>
      ),
    },
    {
      title: "delete  ",
      dataIndex: "id",
      key: "id",
      width: "5%",
      render: (text, record, index) => (
        <Popconfirm
          title="Delete the task"
          description={"Are you sure to delete this "+record.name.toUpperCase()+"?"}
          onConfirm={()=>deleteauthor(record.id)}
          icon={
            <QuestionCircleOutlined
              style={{
                color: "red",
              }}
            />
          }
        >
          <Button danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      ),
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
  const modalUpForm = (
    <Form
      form={updateForm}
      name="Update Author"
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
      onFinish={onFinishup}
      autoComplete="off"
    >
      <Form.Item
        label="Author id"
        name="id"
        hidden
        rules={[
          {
            required: true,
            message: "Please input Author id!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
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
      title="add Author"
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
              });
          }}
        >
          Submit
        </Button>,
      ]}
    >
      {modalForm}
    </Modal>
  );
  const UpModal = (
    <Modal
      open={visibleup}
      title="Update Author"
      okText="Submit"
      cancelText="Cancel"
      onCancel={() => {
        setVisibleup(false);
      }}
      footer={[
        <Button key="cancel" onClick={() => setVisibleup(false)}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            updateForm
              .validateFields()
              .then((values) => {
                onFinishup(values);
              })
              .catch((info) => {
              });
          }}
        >
          Submit
        </Button>,
      ]}
    >
      {modalUpForm}
    </Modal>
  );

  return (
    <React.Fragment key={Authors}>
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
<<<<<<< HEAD
      {UpModal}
      <Table dataSource={Authors} width="70%" columns={columns} />
=======
      {/* {console.log(Authors)} */}
      <Table dataSource={Authors} columns={columns} />  
>>>>>>> e87b15ec978a56396a5ac8ef8424354ba9289c04
    </React.Fragment>
  );
};

export default Author;
