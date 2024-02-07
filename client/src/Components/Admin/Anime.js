import React, { useEffect, useState } from "react";
import {
  Tabs,
  Card,
  Pagination,
  Button,
  Popconfirm,
  Tooltip,
  Image,
  message,
  Tag,
  Form,
  Modal,
  Input,
  Row,
  Col,
  Space,
  Select,
  Radio,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import AddAnime from "./AddAnime";
import axios from "axios";
import { ApiBase } from "../../Const";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../Redux/Anime/Reducer";
import { fetch as RateFetch } from "../../Redux/Rate/Reducer";
import { fetch as Typefetch } from "../../Redux/Type/Reducer";
import { fetch as Authfetch } from "../../Redux/Author/Reducer";
import { fetch as StudioFetch } from "../../Redux/Studio/Reducer";
import { fetch as GenereFetch } from "../../Redux/Genere/Reducer";

const Anime = () => {
  const dispatch = useDispatch();
  const Rates = useSelector((state) => state.Rate.Data);
  const Types = useSelector((state) => state.Type.Data);
  const Authors = useSelector((state) => state.Author.Data);
  const Studios = useSelector((state) => state.Studio.Data);
  const Generes = useSelector((state) => state.Genere.Data);
  const Animes = useSelector((state) => state.Animes.Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [upform] =Form.useForm();
  const pageSize = 3;
  const [visibleup, setVisibleup] = useState(false);
  const [pic, setImageUrl] = useState("");
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleImageUrlChange = (e) => {
    const { value } = e.target;
    setImageUrl(value);
  };
  const getrate = async () => {
    const data = await axios.get(ApiBase + "/Rates/");
    const d = data.data;
    // console.log(d);
    dispatch(RateFetch(d));
  };
  const getGenere = async () => {
    const data = await axios.get(ApiBase + "/Generes/");
    const d = data.data;
    // console.log(d);
    dispatch(GenereFetch(d));
  };
  const getStudio = async () => {
    const data = await axios.get(ApiBase + "/Studios/");
    const d = data.data;
    // console.log(d);
    dispatch(StudioFetch(d));
  };
  const getAuthor = async () => {
    const data = await axios.get(ApiBase + "/Authors/");
    const d = data.data;
    // console.log(d);
    dispatch(Authfetch(d));
  };
  const options = [
    {
      label: "Continued",
      value: 0,
      Selected: true,
    },
    {
      label: "Completed",
      value: 1,
      Selected: true,
    },
  ];
  const gettype = async () => {
    const data = await axios.get(ApiBase + "/Types/");
    const d = data.data;
    // console.log(d);
    dispatch(Typefetch(d));
  };
  const fetchdata = () => {
    getrate();
    gettype();
    getAuthor();
    getStudio();
    getGenere();
  };
  const showModalup = () => {
    setVisibleup(true);
  };

  const handleCancelup = () => {
    setVisibleup(false);
  };
  const onFinishup = async (values) => {
    console.log("Received values:", values);
    // let { id, Description, title, pic } = values;
    // Description = trimString(Description);
    // pic = trimString(pic);
    // title = trimString(title).toLowerCase();
    // values = { id,Description, title, pic };
    // console.log(values);
    // const result = await axios.patch(ApiBase + "/Ads/update", values);
    // if (result) {
    //   if (result.data.msg) {
    //     message.success(result.data.msg);
    //   } else {
    //     message.error(result.data.err);
    //   }
    // }
    getAnime();
    upform.resetFields();

    // Here you can handle form submission logic, such as sending data to a server
    setVisibleup(false); // Close the modal after form submission
    upform.resetFields();
  };
  const upmodal=(
    <Modal
    title="Update Anime Data"
    open={visibleup}
    onCancel={handleCancelup}
    footer={null}
    width={"90%"}
  >
    <Form
        form={upform}
        name="Anime Add"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: "90%",
          margin: "0px auto",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishup}
        autoComplete="off"
      >
        <div>
          <Row gutter={24}>
            <Col span="12">
              <Form.Item
                label="Anime name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input Anime Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span="12">
              <Form.Item
                label="Anime pic"
                name="pic"
                rules={[
                  {
                    required: true,
                    message: "Please provide anime pic!",
                  },
                ]}
              >
                <Input onChange={handleImageUrlChange} />
              </Form.Item>
            </Col>
            <Col span="12">
              <Form.Item
                label="description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input description!",
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Col span="12">
            <Space.Compact style={{ width: "100%" }}>

              <Form.Item
              style={{ width: "100%" }}
                label="Rate"
                name="RateId"
                rules={[
                  {
                    required: true,
                    message: "Please Select Rate!",
                  },
                ]}
              >
                  <Select key={Rates}>
                    {Rates.map((rate) => {
                      return (
                        <Select.Option key={rate.id} value={rate.id}>
                          {rate.title}
                        </Select.Option>
                      );
                    })}
                  </Select>
              </Form.Item>
                  <Button title="Refresh" onClick={() => getAuthor()}>
                    <ReloadOutlined />
                  </Button>
                </Space.Compact>
            </Col>
            <Col span="12" >



              <Space.Compact style={{ width: "100%", margin: "0px auto" }} >
                <Form.Item
                  style={{ width: "100%" }}
                  label="Type"
                  name="TypeId"
                  rules={[
                    {
                      required: true,
                      message: "Please Select Type!",
                    }
                  ]}
                >
                  <Select required key={Types}>
                    {Types.map((type) => {
                      return (
                        <Select.Option key={type.id} value={type.id}>
                          {type.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Button title="Refresh" onClick={() => gettype()}>
                  <ReloadOutlined />
                </Button>

              </Space.Compact>


            </Col>
            <Col span="12">

              <Space.Compact style={{ width: "100%", margin: "0px auto" }} >
                <Form.Item
                  style={{ width: "100%" }}
                  label="Author"
                  name="AuthorId"
                  rules={[
                    {
                      required: true,
                      message: "Please Select Authors!",
                    }
                  ]}
                >

                  <Select
                    mode="multiple"
                    key={Authors}
                    optionFilterProp="children" // Enable searching based on option text
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {Authors.map((Author) => {
                      return (
                        <Select.Option key={Author.id} value={Author.id}>
                          {Author.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Button title="Refresh" onClick={() => getAuthor()}>
                  <ReloadOutlined />
                </Button>
              </Space.Compact>


            </Col>
            <Col span="12">
              <Space.Compact style={{ width: "100%" }}>

                <Form.Item
                  style={{ width: "100%" }}
                  label="Studio"
                  name="StudioId"
                  rules={[
                    {
                      required: true,
                      message: "Please Select Studio!",
                    },
                  ]}
                >

                  <Select
                    mode="multiple"
                    key={Studios}
                    optionFilterProp="children" // Enable searching based on option text
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {Studios.map((Studio) => {
                      return (
                        <Select.Option key={Studio.id} value={Studio.id}>
                          {Studio.name}
                        </Select.Option>
                      );
                    })}
                  </Select>

                </Form.Item>
                <Button title="Refresh" onClick={() => getStudio()}>
                  <ReloadOutlined />
                </Button>
              </Space.Compact>
            </Col>
            <Col span="12">
              <Space.Compact style={{ width: "100%" }}>

                <Form.Item
                  style={{ width: "100%" }}
                  label="Generes"
                  name="GenereId"
                  rules={[
                    {
                      required: true,
                      message: "Please Select Genere!",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    key={Generes}
                    optionFilterProp="children" // Enable searching based on option text
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {Generes.map((Genere) => {
                      return (
                        <Select.Option key={Genere.id} value={Genere.id}>
                          {Genere.title}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Button title="Refresh" onClick={() => getGenere()}>
                  <ReloadOutlined />
                </Button>
              </Space.Compact>
            </Col>
            <Col span="12">
              <Form.Item
                label="Status"
                name="status"
                rules={[
                  {
                    required: true,
                    message: "Please Select Status!",
                  },
                ]}
              >
                <Radio.Group
                  options={options}
                  buttonStyle="solid"
                  optionType="button"
                />
              </Form.Item>
            </Col>
            <Col
              span={12}
              style={{ position: "absolute", top: "50", right: 0 }}
            >
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                {pic && (
                  <Image src={pic} width={70} style={{ margin: "10px auto" }} />
                )}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form >
  </Modal>)

 
  const finddata =async (id) => {
    const data=await axios.get(ApiBase+"/Animes/find/"+id);

    console.log(data.data);
    // const {title,Description,pic}=result[0];
    // console.log({title,Description,pic});
    upform.setFieldsValue();
    showModalup();
  };
  const renderCards = () => {
    return Animes.slice(startIndex, endIndex).map((item, index) => {
      const Details = (
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <img
            src={item.pic}
            style={{ margin: "10", borderRadius: "5px" }}
            height="250"
            width="auto"
          />
          <div>
            {item.title.toUpperCase()+ " "}<Tag
            bordered={false}
            style={{color:"white",background:!item.status ? "skyblue" : "mediumseagreen"}}
            
          >{!item.status ? "Continue" : "Complete"}</Tag>
            <hr />
            <Tooltip placement="right" style={{}} title={item.description}>
              Description:
              <div
                style={{
                  width: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.description}
              </div>
            </Tooltip>

            <tt style={{ fontSize: 10, margin: 0 }}>
              Author: {item.Authors.map((item) => item.name).join(", ")}
            </tt>
            <p style={{ fontSize: 10 }}>
              Studio: {item.Studios.map((item) => item.name).join(", ")}
            </p>
            <p style={{ fontSize: 10 }}>Type: {item.Type.name.toUpperCase()}</p>
            <p style={{ fontSize: 10 }}>Rate: {item.Rate.title}</p>
            <p style={{ fontSize: 10 }}>
              Generes: {item.generes.map((item) => item.title).join(", ")}
            </p>
          </div>
        </div>
      );
      return (
        <Card
          key={index}
          style={{
            margin: 20,
            background: "rgba(255,255,255,.4)",
            color: "white",
            width: 200,
            height: "300px",
            position: "relative",
          }}
          cover={
            <Tooltip
              autoAdjustOverflow="false"
              overlayStyle={{ minWidth: "400px" }}
              placement="rightTop"
              title={Details}
            >
              <Image
                alt="example"
                src={item.pic}
                width={"100%"}
                height={"300px"}
              />{" "}
            </Tooltip>
          }
          hoverable
        >
          <Tag
            bordered={false}
            className="heartbeat-icon"
            style={{
              position: "absolute",
              right: 5,
              width: 20,
              height: 20,
              top: 5,
              borderRadius: "50%",
              background: !item.status ? "skyblue" : "mediumseagreen",
              opacity: 0.8,
            }}
            title={!item.status ? "Continue" : "Complete"}
          ></Tag>
          <div
            style={{
              background: "rgba(0,0,0,.65)",
              display: "block",
              width: "100%",
              left: 0,
              position: "absolute",
              bottom: 33,
              textAlign: "center",
            }}
          >
            {item.title}
          </div>
          <Button
          onClick={()=>finddata(item.id)}
            style={{
              position: "absolute",
              bottom: "0%",
              width: "50%",
              background: "rgba(40,140,150,.6)",
              border: "none",
              left: 0,
              borderRadius: "0 0 0px 5px",
            }}
          >
            <EditOutlined
              key="edit"
              style={{ color: "white", fontSize: "20px" }}
            />
          </Button>
          <Popconfirm
            title={"Delete the Anime : " + item.title}
            description="Are you sure to delete this Anime?"
            onConfirm={() => deleteAnime(item.id)}
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
                background: "rgba(150,40,40,.6)",
                right: 0,

                borderRadius: "0 0 5px 0",
              }}
            >
              <DeleteOutlined
                key="delete"
                style={{ color: "White", fontSize: "20px" }}
              />
            </Button>
          </Popconfirm>
        </Card>
      );
    });
  };
  
  const items = [
    {
      key: "1",
      label: "Anime Details",
      children: (
        <>
          <div style={{ textAlign: "right", marginTop: 20 }}>
            <Pagination
              current={currentPage}
              total={Animes?.length}
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
        </>
      ),
    },
    {
      key: "2",
      label: (
        <><PlusSquareOutlined /> Add</>
      ),
      children: <AddAnime />,
    }
  ];
  const getAnime = async () => {
    const data = await axios.get(ApiBase + "/Animes/");
    console.log(data.data);
    dispatch(fetch(data.data));
  };
  
  const deleteAnime = async (id) => {
    console.log(id);
    const result = await axios.delete(ApiBase + "/Animes/delete/" + id);
    if (result) {
      if (result.data.msg) {
        message.success(result.data.msg);
      } else {
        message.error(result.data.err);
      }
    }
    getAnime();
  };
  useEffect(() => {
    getAnime();
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Anime</h1>
      <div
        style={{
          background: "white",
          borderRadius: "10px",
          padding: 20,
          width: "90%",
          margin: "0px auto",
        }}
      >
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      {upmodal}
    </div>
  );
};

export default Anime;
