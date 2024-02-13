import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Radio,
  Row,
  Select,
  Space,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReloadOutlined } from "@ant-design/icons";
import { ApiBase } from "../../Const";
import axios from "axios";
import { fetch as RateFetch } from "../../Redux/Rate/Reducer";
import { fetch as Typefetch } from "../../Redux/Type/Reducer";
import { fetch as Authfetch } from "../../Redux/Author/Reducer";
import { fetch as StudioFetch } from "../../Redux/Studio/Reducer";
import { fetch as GenereFetch } from "../../Redux/Genere/Reducer";

import { trimString } from "../../Trimmer";


const AddAnime = () => {
  //name	description	pic	status	RateId	TypeId
  //AnimeId	AuthorId
  //AnimeId	GenereId
  // AnimeId	StudioId
  const dispatch = useDispatch();
  const Rates = useSelector((state) => state.Rate.Data);
  const Types = useSelector((state) => state.Type.Data);
  const Authors = useSelector((state) => state.Author.Data);
  const Studios = useSelector((state) => state.Studio.Data);
  const Generes = useSelector((state) => state.Genere.Data);
  const [pic, setImageUrl] = useState("");
  const [form] =Form.useForm();
  const onFinish = async(values) => {
    //console.log("Success:", values);
    let {AuthorId,StudioId,GenereId,RateId,TypeId,status,name,pic,description}=values;
    name=trimString(name).toLowerCase();
    pic=trimString(pic);
    description=trimString(description);
    values={AuthorId,GenereId,StudioId,RateId,TypeId,status,name,pic,description};
    const result=await axios.post(ApiBase+"/Animes/add",values)
    if(result)
    {
      if (result.data.msg) {
        message.success(result.data.msg);
        form.resetFields();
      } else {
        message.error(result.data.err);
      }
    }

  };
  
  const getrate = async () => {
    const data = await axios.get(ApiBase + "/Rates/");
    const d = data.data;
    // //console.log(d);
    dispatch(RateFetch(d));
  };
  const getGenere = async () => {
    const data = await axios.get(ApiBase + "/Generes/");
    const d = data.data;
    // //console.log(d);
    dispatch(GenereFetch(d));
  };
  const getStudio = async () => {
    const data = await axios.get(ApiBase + "/Studios/");
    const d = data.data;
    // //console.log(d);
    dispatch(StudioFetch(d));
  };
  const getAuthor = async () => {
    const data = await axios.get(ApiBase + "/Authors/");
    const d = data.data;
    // //console.log(d);
    dispatch(Authfetch(d));
  };
  const gettype = async () => {
    const data = await axios.get(ApiBase + "/Types/");
    const d = data.data;
    // //console.log(d);
    dispatch(Typefetch(d));
  };
  const fetchdata = () => {
    getrate();
    gettype();
    getAuthor();
    getStudio();
    getGenere();
  };
  useEffect(() => {
    fetchdata();
  }, [dispatch]);
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
  const handleImageUrlChange = (e) => {
    const { value } = e.target;
    setImageUrl(value);
  };
  return (
    <div>
      <h3>Add Anime Detail</h3>
      <Form
        form={form}
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
        onFinish={onFinish}
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
    </div >
  );
};

export default AddAnime;
