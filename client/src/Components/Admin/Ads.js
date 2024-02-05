import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { Card, Pagination } from "antd";
import Meta from "antd/es/card/Meta";
const Ads = () => {
  const [data, setData] = useState([]); // Your data array here
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of cards per page
  const [visible, setVisible] = useState(false);

  // Function to handle showing and hiding the modal
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // Form submit handler
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Here you can handle form submission logic, such as sending data to a server
    setVisible(false); // Close the modal after form submission
  };
  const AddModal = (
    <Modal
      title="Add New Item"
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={600} 
    >
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}  layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Picture"
          name="pic"
          rules={[{ required: true, message: "Please input the picture URL!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="Description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
  // Calculate the start and end index of cards for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const renderCards = () => {
    return data.slice(startIndex, endIndex).map((item, index) => (
      <Card key={index} style={{ width: 300, marginTop: 16 }}>
        <Meta title={item.title} description={item.description} />
      </Card>
    ));
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <h1>Ads</h1>
      <div
        style={{
          background: "white",
          borderRadius: "10px",
          padding: 20,
          width: "90%",
          margin: "0px auto",
        }}
      >
        <h1 align="right">
          <Button type="primary" onClick={showModal}>
            <PlusOutlined />
            Add
          </Button>
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {renderCards()}
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </div>
      {AddModal}
    </div>
  );
};

export default Ads;
