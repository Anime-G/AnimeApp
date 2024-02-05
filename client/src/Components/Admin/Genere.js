import { DeleteOutlined, EditOutlined, PlusOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Modal, Popconfirm, Table, message } from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { trimString } from "../../Trimmer";

import axios from "axios";
import { ApiBase } from "../../Const";
import { fetch } from "../../Redux/Genere/Reducer";

const Genere = () => {
  const Generes = useSelector((state) => state.Genere.Data);
  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [visibleup, setVisibleup] = useState(false);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    let { title } = values;
    title = trimString(title.toLowerCase());
    const result = await axios.post(ApiBase + "/Generes/add", { title });
    if (result) {
      if (result.data.err) {
        message.error(result.data.err);
      } else {
        message.success(result.data.msg);
      }
    }
    fetchdata();
    form.resetFields();

    // AddAuthor({ title });

    setVisible(false);
  };
  const onFinishup = async (values) => {
    let { id, title } = values;
    title = trimString(title.toLowerCase());
    title = trimString(title);
    const result = await axios.patch(ApiBase + "/Generes/update", { title, id });
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
    const result = await axios.get(ApiBase + "/Generes/find/" + id);
    const data = result.data;
    updateForm.setFieldsValue({ title: data.title.toUpperCase(), id: data.id });
  };
  const fetchdata = async () => {
    const data = await axios.get(ApiBase + "/Generes/");
    const d = data.data;
    dispatch(fetch(d));
    // setauth(Generes);
  };
  const deleteauthor=async(id)=>{
    const result = await axios.delete(ApiBase + "/Generes/delete/"+id);
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
    fetchdata();
  }, [dispatch]);

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
      dataIndex: "title",
      key: "title",
      render: (text, record, index) =>record.title.toUpperCase()
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
          description={"Are you sure to delete this "+record.title.toUpperCase()+"?"}
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
      name="add Genere"
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
        label="Genere title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input Genere title!",
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
      name="Update Genere"
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
        label="Genere id"
        name="id"
        hidden
        rules={[
          {
            required: true,
            message: "Please input Genere id!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Genere title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input Genere title!",
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
      title="add Genere"
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
      title="Update Genere"
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
    <React.Fragment key={Generes}>
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
      {UpModal}
      <Table dataSource={Generes} width="70%" columns={columns} />
    </React.Fragment>
  );
};

export default Genere;
