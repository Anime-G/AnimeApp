import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Popconfirm,
  Space,
  Tooltip,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { Card, Pagination } from "antd";
import Meta from "antd/es/card/Meta";
import { trimString } from "../../Trimmer";
import axios from "axios";
import { ApiBase } from "../../Const";
import { fetch } from "../../Redux/Ads/Reducer";

import { useDispatch, useSelector } from "react-redux";
const Ads = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Ads.Data); // Your data array here
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of cards per page
  const [visible, setVisible] = useState(false);
  const [visibleup, setVisibleup] = useState(false);
  const [addform] = Form.useForm();
  const [updateform] = Form.useForm();

  // Function to handle showing and hiding the modal
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModalup = () => {
    setVisibleup(true);
  };

  const handleCancelup = () => {
    setVisibleup(false);
  };

  // Form submit handler
  const onFinish = async (values) => {
    console.log("Received values:", values);
    let { Description, title, pic } = values;
    Description = trimString(Description);
    pic = trimString(pic);
    title = trimString(title).toLowerCase();
    values = { Description, title, pic };
    console.log(values);
    const result = await axios.post(ApiBase + "/Ads/add", values);
    if (result) {
        if (result.data.msg) {
          message.success(result.data.msg);
        } else {
          message.error(result.data.err);
        }
    }

    fetchdata();
    addform.resetFields();

    // Here you can handle form submission logic, such as sending data to a server
    setVisible(false); // Close the modal after form submission
    addform.resetFields();
  };
  // Form submit handler
  const onFinishup = async (values) => {
    console.log("Received values:", values);
    let { id, Description, title, pic } = values;
    Description = trimString(Description);
    pic = trimString(pic);
    title = trimString(title).toLowerCase();
    values = { id,Description, title, pic };
    console.log(values);
    const result = await axios.patch(ApiBase + "/Ads/update", values);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
      } else {
        message.error(result.data.err);
      }
    }

    fetchdata();
    updateform.resetFields();

    // Here you can handle form submission logic, such as sending data to a server
    setVisibleup(false); // Close the modal after form submission
    updateform.resetFields();
  };
  const AddModal = (
    <Modal
      title="Add New ad"
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
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="Description"
          rules={[
            {
              required: true,
              max: 500,
              message: "Please input the description!",
            },
          ]}
        >
          <Input.TextArea max={500} />
        </Form.Item>
        <Form.Item
          label="Picture"
          name="pic"
          rules={[{ required: true, message: "Please input the picture URL!" }]}
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
  const UpModal = (
    <Modal
      title="Update Ad"
      open={visibleup}
      onCancel={handleCancelup}
      footer={null}
      width={600}
    >
      <Form
        form={updateform}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinishup}
        layout="vertical"
      >
        <Form.Item
          label="id"
          name="id"
          hidden
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="Description"
          rules={[
            {
              required: true,
              max: 500,
              message: "Please input the description!",
            },
          ]}
        >
          <Input.TextArea max={500} />
        </Form.Item>
        <Form.Item
          label="Picture"
          name="pic"
          rules={[{ required: true, message: "Please input the picture URL!" }]}
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
  const finddata = (id) => {
    const result = data.filter((item) => item.id === id);
    console.log(result);
    const {title,Description,pic}=result[0];
    console.log({title,Description,pic});
    updateform.setFieldsValue({id,title,Description,pic});
    showModalup();
  };
  // Calculate the start and end index of cards for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const renderCards = () => {
    return data.slice(startIndex, endIndex).map((item, index) => (
      <Card
        key={index}
        style={{
          margin: 20,
          background: "rgba(255,255,255,.4)",
          color: "white",
          width: 300,
          height: "300px",
          position: "relative",
        }}
        cover={<Image alt="example" src={item.pic} height={180} />}
        hoverable
      >
        <Tooltip
          placement="bottom"
          title={item.title + " : " + item.Description}
        >
          <Meta
            title={item.title.toUpperCase()}
            description={
              <div
                style={{
                  maxHeight: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.Description}
              </div>
            }
          />
        </Tooltip>
        <Button
          onClick={() => finddata(item.id)}
          style={{
            position: "absolute",
            bottom: 0,
            width: "50%",
            left: 0,
            borderRadius: "0 0 0px 5px",
          }}
        >
          <EditOutlined
            key="edit"
            style={{ color: "blue", fontSize: "20px" }}
          />
        </Button>
        <Popconfirm
          title="Delete the Ad"
          description="Are you sure to delete this Ad?"
          onConfirm={() => deleteAd(item.id)}
          icon={
            <QuestionCircleOutlined
              style={{
                color: "red",
              }}
            />
          }
        >
          <Button
            style={{
              position: "absolute",
              bottom: 0,
              width: "50%",
              right: 0,
              borderRadius: "0 0 5px 0",
            }}
          >
            <DeleteOutlined
              key="delete"
              style={{ color: "tomato", fontSize: "20px" }}
            />
          </Button>
        </Popconfirm>
      </Card>
    ));
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const fetchdata = async () => {
    const data = await axios.get(ApiBase + "/Ads/");
    dispatch(fetch(data.data));
  };
  const deleteAd = async (id) => {
    const result = await axios.delete(ApiBase + "/Ads/delete/" + id);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
      } else {
        message.error(result.data.err);
      }
    }
    fetchdata();
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Ads {data.length > 0 ? "[ " + data.length + " ]" : ""} </h1>
      <div
        style={{
          background: "rgba(225,225,225,.6)",
          borderRadius: "10px",
          padding: 20,
          width: "90%",
          margin: "20px auto",
        }}
      >
        <h1 align="right">
          <Button type="primary" onClick={showModal}>
            <PlusOutlined />
            Add
          </Button>
        </h1>
        <div style={{ textAlign: "right", marginTop: 20 }}>
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {renderCards()}
        </div>
      </div>
      {AddModal}
      {UpModal}
    </div>
  );
};

export default Ads;
