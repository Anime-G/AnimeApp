import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Modal,
  Form,
  Input,
  Image,
  message,
  Card,
  Tooltip,
  Popconfirm,
  Pagination,
} from "antd";
import React, { useEffect, useState } from "react";
import { trimString } from "../../Trimmer";
import axios from "axios";
import { ApiBase } from "../../Const";
import { useDispatch, useSelector } from "react-redux";
import Meta from "antd/es/card/Meta";
import { fetch } from "../../Redux/userpic/Reducer";

const Userpic = () => {
  const [form] = Form.useForm();
  const [upform] = Form.useForm();
  const [pic, setImageUrl] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleup, setVisibleup] = useState(false);

  const data = useSelector((state) => state.UserPics.Data);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of cards per page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
   
  const handleImageUrlChange = (e) => {
    const { value } = e.target;
    setImageUrl(value);
  };
  const showModal = () => {
    setVisible(true);
  };
  const showModalup = () => {
    setVisibleup(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleCancelup = () => {
    setVisibleup(false);
  };
  const handleSave = () => {
    form.validateFields().then((values) => {
      onFinish({ ...values, pic });
      form.resetFields();

      setImageUrl("");
      setVisible(false);
    });
  };
  const handleSaveup = () => {
    upform.validateFields().then((values) => {
      onFinishup({ ...values, pic });
      upform.resetFields();

      setImageUrl("");
      setVisible(false);
    });
  };
  const onFinish = async (values) => {
    //console.log(values);
    let { name, pic } = values;

    pic = trimString(pic);
    name = trimString(name).toLowerCase();
    values = { name, pic };
    //console.log(values);
    const result = await axios.post(ApiBase + "/Userpic/add", values);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
      } else {
        message.error(result.data.err);
      }
    }
    fetchdata();
    // Here you can handle form submission logic, such as sending data to a server
  };
  const onFinishup = async (values) => {
    //console.log(values);
    let { id,name, pic } = values;
    pic = trimString(pic);
    name = trimString(name).toLowerCase();
    values = { id,name, pic };
    //console.log("values",values);
    setImageUrl(pic);
    
    const result = await axios.patch(ApiBase + "/Userpic/update", values);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
      } else {
        message.error(result.data.err);
      }
    }
    fetchdata();
    setVisibleup(false);
    // Here you can handle form submission logic, such as sending data to a server
  };
  const fetchdata = async () => {
    const data = await axios.get(ApiBase + "/Userpic/");
    dispatch(fetch(data.data));
  };
  const addmodal = (
    <Modal
      title="Add Item"
      footer={null}
      open={visible}
      onCancel={handleCancel}
    >
      <Form form={form} onFinish={handleSave} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="pic"
          label="Picture URL"
          rules={[{ required: true, message: "Please provide pic" }]}
        >
          <Input onChange={handleImageUrlChange} />
        </Form.Item>
        {pic && (
          <Image
            src={pic}
            width={200}
            style={{ margin: "10px auto", borderRadius: "50%" }}
          />
        )}
        <Form.Item style={{ textAlign: "right" }}>
          <Button
            htmlType="reset"
            style={{ marginRight: 10 }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button htmlType="submit" type="primary">
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
  const Upmodal = (
    <Modal
      title="Update Picture"
      footer={null}
      open={visibleup}
      onCancel={handleCancelup}
    >
      <Form form={upform} onFinish={handleSaveup} layout="vertical">
      <Form.Item
          name="id"
          label="id"
          hidden
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="pic"
          label="Picture URL"
          rules={[{ required: true, message: "Please provide pic" }]}
        >
          <Input onChange={handleImageUrlChange} />
        </Form.Item>
        {pic && (
          <Image
            src={pic}
            width={200}
            style={{ margin: "10px auto", borderRadius: "50%" }}
          />
        )}
        <Form.Item style={{ textAlign: "right" }}>
          <Button
            htmlType="reset"
            style={{ marginRight: 10 }}
            onClick={handleCancelup}
          >
            Cancel
          </Button>
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
  const finddata = (id) => {
    const result = data.filter((item) => item.id === id);
    // //console.log(result);
    const { name, pic } = result[0];
    // //console.log({ name, pic });
    setImageUrl(pic);
    upform.setFieldsValue({ id, name,pic});
    
    showModalup();
  };
  const deletePic = async (id) => {
    const result = await axios.delete(ApiBase + "/Userpic/delete/" + id);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
      } else {
        message.error(result.data.err);
      }
    }
    fetchdata();
  };
  const renderCards = () => {
    return data.slice(startIndex, endIndex).map((item, index) => (
      <Card
        key={index}
        style={{
          margin: 20,
          background: "rgba(0,0,0,.4)",
          color: "white",
          width: 200,
          overflow: "hidden",
          height: "auto",
          position: "relative",
        }}
        hoverable
      >
        <Tooltip placement="bottom" title={item.name}>
          <Image
            alt="example"
            src={item.pic}
            height="150px"
            width="150px"
            style={{ margin: "0px auto", borderRadius: "50%" }}
          />
          <h4 style={{ color: "black" }}>{item.name}</h4>
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
          title="Delete the Picture"
          description="Are you sure to delete this pic?"
          onConfirm={() => deletePic(item.id)}
          icon={
            <QuestionCircleOutlined
              style={{
                color: "red",
              }}
            />
          }>
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
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Userpic  { data.length>0?"[ "+data.length+" ]":""} </h1>
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
          <Button type="primary" onClick={() => showModal()}>
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
      {addmodal}
      {Upmodal}
    </div>
  );
};

export default Userpic;
