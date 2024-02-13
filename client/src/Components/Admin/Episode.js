import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Popconfirm,
  Row,
  Select,
  Space,
  Tooltip,
  message,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { ApiBase } from "../../Const";
import { trimString } from "../../Trimmer";
import { useDispatch, useSelector } from "react-redux";
import Meta from "antd/es/card/Meta";
import { fetch } from "../../Redux/Episode/Reducer";
import { fetch as Animefetch } from "../../Redux/Anime/Reducer";

const Episode = () => {
  const dispatch = useDispatch();
  const Animes = useSelector((state) => state.Animes.Data);
  const data = useSelector((state) => state.Episodes.Data); // Your data array here
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of cards per page
  const [visible, setVisible] = useState(false);
  const [visibleup, setVisibleup] = useState(false);
  const [addform] = Form.useForm();
  const [updateform] = Form.useForm();
  const [pic, setImageUrl] = useState("");
  const [picup, setImageUrlup] = useState("");
  const [animes, setanimes] = useState([]);
  const handleImageUrlChange = (e) => {
    const { value } = e.target;
    setImageUrl(value);
  };
  const handleImageUrlChangeup = (e) => {
    const { value } = e.target;
    setImageUrlup(value);
  };
  const getAnime = async () => {
    const data = await axios.get(ApiBase + "/Animes/");

    dispatch(Animefetch(data.data));
    //console.log(data.data);
  };

  // Function to handle showing and hiding the modal
  const showModal = () => {
    setVisible(true);
  };
  const fetchSelectedAnimeEpisodes = async (id) => {
    if (id !== "null") {
      const data = await axios.get(ApiBase + "/Episodes/" + id);
      dispatch(fetch(data.data));
    } else {
      fetchdata();
    }
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const showModalup = () => {
    setVisibleup(true);
  };

  const handleCancelup = () => {
    setImageUrlup("");
    setVisibleup(false);
  };
  const getAnimeEp = async () => {
    const data = await axios.get(ApiBase + "/Animes/getAnimeWithEps");
    // //console.log(data.data);
    setanimes(data.data);
  };
  // Form submit handler
  const onFinish = async (values) => {
    //console.log("Received values:", values);
    let { AnimeId, title, Epno, url } = values;

    url = trimString(url);
    title = trimString(title).toLowerCase();
    values = { AnimeId, title, Epno, url };
    //console.log(values);
    const result = await axios.post(ApiBase + "/Episodes/add", values);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
        addform.resetFields();
        // Here you can handle form submission logic, such as sending data to a server
        setVisible(false); // Close the modal after form submission
        addform.resetFields();
        setImageUrl("");
      } else {
        message.error(result.data.err);
      }
    }
    getAnimeEp();
    fetchdata();
  };
  // Form submit handler
  const onFinishup = async (values) => {
    //console.log("Received values:", values);
    let { id, title, Epno, url, AnimeId } = values;

    url = trimString(url);
    title = trimString(title).toLowerCase();
    values = { id, Epno, title, url, AnimeId };
    //console.log(values);
    const result = await axios.patch(ApiBase + "/Episodes/update", values);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
        setVisibleup(false); // Close the modal after form submission
        updateform.resetFields();
        fetchdata();
        fetchSelectedAnimeEpisodes(id);
        setImageUrlup("");
      } else {
        message.error(result.data.err);
      }
    }

    // Here you can handle form submission logic, such as sending data to a server
  };
  const AddModal = (
    <Modal
      title="Add New Episode"
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={600}
    >
      <Form
        form={addform}
        name="basic"
        style={{
          maxWidth: "100%",
          margin: "0px auto",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={24}>
          <Col span="24">
            <Space.Compact style={{ width: "100%", margin: "0px auto" }}>
              <Form.Item
                style={{ width: "100%" }}
                label="Anime"
                name="AnimeId"
                prefixCls
                rules={[
                  {
                    required: true,
                    message: "Please Select Type!",
                  },
                ]}
              >
                <Select key={Animes}>
                  {Animes.map((Anime) => {
                    return (
                      <Select.Option key={Anime.id} value={Anime.id}>
                        {Anime.title}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Button title="Refresh" onClick={() => getAnime()}>
                <ReloadOutlined />
              </Button>
            </Space.Compact>
          </Col>
          <Col span="24">
            <Form.Item noStyle>
              <Space.Compact style={{ width: "100%" }}>
                <Form.Item
                  label="Episode no"
                  name="Epno"
                  style={{ width: "20%" }}
                  rules={[
                    {
                      required: true,
                      message: "Please input the Episode number!",
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item
                  label="Title"
                  name="title"
                  style={{ width: "80%" }}
                  rules={[
                    { required: true, message: "Please input the title!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Space.Compact>
            </Form.Item>
          </Col>
          <Col span="24">
            <Form.Item
              label="Video Url"
              name="url"
              rules={[
                {
                  required: true,
                  max: 500,
                  message: "Please input the description!",
                },
              ]}
            >
              <Input onChange={(e) => handleImageUrlChange(e)} />
            </Form.Item>
            {pic && (
              <audio key={pic} controls width="500" height="350">
                <source src={pic} type="audio/mp3" />
                <source src={pic} type="audio/ogg" />
              </audio>
            )}
          </Col>
          <Col span="24">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
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
        <Row gutter={24}>
          <Col span="24">
            <Space.Compact style={{ width: "100%", margin: "0px auto" }}>
              <Form.Item
                style={{ width: "100%" }}
                label="Anime"
                name="AnimeId"
                prefixCls
                rules={[
                  {
                    required: true,
                    message: "Please Select Type!",
                  },
                ]}
              >
                <Select key={Animes}>
                  {Animes.map((Anime) => {
                    return (
                      <Select.Option key={Anime.id} value={Anime.id}>
                        {Anime.title}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Button title="Refresh" onClick={() => getAnime()}>
                <ReloadOutlined />
              </Button>
            </Space.Compact>
          </Col>
          <Col span="24">
            <Form.Item noStyle>
              <Space.Compact style={{ width: "100%" }}>
                <Form.Item
                  label="Episode no"
                  name="Epno"
                  style={{ width: "20%" }}
                  rules={[
                    {
                      required: true,
                      message: "Please input the Episode number!",
                    },
                  ]}
                >
                  <InputNumber min={1} />
                </Form.Item>
                <Form.Item
                  label="Title"
                  name="title"
                  style={{ width: "80%" }}
                  rules={[
                    { required: true, message: "Please input the title!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Space.Compact>
            </Form.Item>
          </Col>
          <Col span="24">
            <Form.Item
              label="Video Url"
              name="url"
              rules={[
                {
                  required: true,
                  max: 500,
                  message: "Please input the description!",
                },
              ]}
            >
              <Input onChange={(e) => handleImageUrlChangeup(e)} />
            </Form.Item>
            {picup && (
              <audio key={picup} controls width="500" height="350">
                <source src={picup} type="audio/mp3" />
                <source src={picup} type="audio/ogg" />

              </audio>
            )}
          </Col>
          <Col span="24">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
  const finddata = (id) => {
    const result = data.filter((item) => item.id === id);
    // //console.log(result);
    const { title, Epno, url, AnimeId } = result[0];
    let anime = animes.filter((a) => a.id == AnimeId);

    // //console.log({  title, Epno,url,AnimeId:anime[0].id });
    setImageUrlup(url);
    updateform.setFieldsValue({ id, title, Epno, url, AnimeId: anime[0].id });
    showModalup();
  };
  //delete the data
  const deleteEp = async (id) => {
    const result = await axios.delete(ApiBase + "/Episodes/delete/" + id);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
      } else {
        message.error(result.data.err);
      }
    }
    fetchdata();
    getAnimeEp();
  };
  // Calculate the start and end index of cards for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const renderCards = () => {
    let a;

    return data.slice(startIndex, endIndex).map((item, index) => {
      a = animes.filter((a1) => a1.id === item.AnimeId);
      a = a[0];

      return (
        <Card
          key={index}
          style={{
            margin: 20,
            background: "rgba(255,255,255,.4)",
            color: "",
            width: 300,
            height: "220px",
            position: "relative",
          }}
          hoverable
        >
          <Tooltip
            placement="bottom"
            title={item.Epno + " : " + item.title.toUpperCase()}
          >
            <h3>Anime: {a?.title}</h3>
            <Meta
              title={"Ep " + item.Epno + " : " + item.title.toUpperCase()}
            />
          </Tooltip>
          <br />
          <audio controls style={{ width: "250px" }}>
            <source src={item.url} />{" "}
          </audio>
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
            title="Delete the Episode"
            description="Are you sure to delete this Episode?"
            onConfirm={() => deleteEp(item.id)}
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
      );
    });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const fetchdata = async () => {
    const data = await axios.get(ApiBase + "/Episodes/");
    dispatch(fetch(data.data));
  };
  // const deleteAd = async (id) => {
  //   const result = await axios.delete(ApiBase + "/Ads/delete/" + id);
  //   if (result) {
  //     if (result.data.msg) {
  //       message.success(result.data.msg);
  //     } else {
  //       message.error(result.data.err);
  //     }
  //   }
  //   fetchdata();
  // };
  useEffect(() => {
    getAnime();
    fetchdata();
    getAnimeEp();
  }, []);

  return (
    <div>
      <h1>Episode</h1>
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
            <PlusOutlined /> Add
          </Button>
        </h1>
        <Select
          style={{ width: "200px" }}
          onChange={(id) => {
            fetchSelectedAnimeEpisodes(id);
          }}
        >
          <Select.Option key={-10} value="null">
            none
          </Select.Option>
          {animes.map((anime) => {
            return (
              <Select.Option key={anime.id} value={anime.id}>
                {anime.title}
              </Select.Option>
            );
          })}
        </Select>
        &emsp;Total Episode: {data.length}
        {/* //pagination */}
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
        {AddModal}
        {UpModal}
      </div>
    </div>
  );
};

export default Episode;
