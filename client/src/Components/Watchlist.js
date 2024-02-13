import { AuthContext } from "../Helper/AuthContext";
import {
  CloseCircleOutlined,
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
  Tag,
  Tooltip,
  message,
} from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Card, Pagination } from "antd";
import Meta from "antd/es/card/Meta";

import axios from "axios";
import { ApiBase } from "../Const";
import { fetch } from "../Redux/Ads/Reducer";
import { trimString } from "../Trimmer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Watchlist = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of cards per page
  const [visible, setVisible] = useState(false);
  const [visibleup, setVisibleup] = useState(false);
  const [addform] = Form.useForm();
  const [updateform] = Form.useForm();
  const [watchlist, setWatchlist] = useState([]);
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

  const finddata = (id) => {
    const result = data.filter((item) => item.id === id);
    //console.log(result);
    const { title, Description, pic } = result[0];
    //console.log({title,Description,pic});
    updateform.setFieldsValue({ id, title, Description, pic });
    showModalup();
  };
  // Calculate the start and end index of cards for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const fetchdata = async () => {
    const data = await axios.get(ApiBase + "/Watchlists/" + user.id);
    console.log(data.data);
    setWatchlist(data.data);
  };
  const removefromWatchlist = async (AnimeId, UserId) => {
    const data = await axios.delete(
      ApiBase + "/Watchlists/delete/" + UserId + "/" + AnimeId
    );
    if (data) {
      if (data.data.err) {
        message.error(data.data.err);
      } else {
        message.success(data.data.msg);
        fetchdata();
      }
    }
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
  const renderCards = () => {
    return watchlist?.slice(startIndex, endIndex).map((item, index) => {
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
            {item.title.toUpperCase() + " "}
            <Tag
              bordered={false}
              style={{
                color: "white",
                background: !item.status ? "skyblue" : "mediumseagreen",
              }}
            >
              {!item.status ? "Continue" : "Complete"}
            </Tag>
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
              Generes: {item.Generes.map((item) => item.Title).join(", ")}
            </p>
          </div>
        </div>
      );
      return (
        <div key={item.id} style={{position:"relative"}}>
        <Link  to={"/Anime/" + item.id}>
          <Card
            key={index}
            style={{
              margin: 20,
              background: "rgba(255,255,255,.4)",
              color: "white",
              width: "fit-content",
              height: "250px",
              position: "relative",
              borderRadius: "10px",
            }}
            actions={[
              ]}
            cover={
              <Tooltip
                autoAdjustOverflow="false"
                overlayStyle={{ minWidth: "400px", cursor: "pointer" }}
                placement="right"
                title={Details}
              >
                <img alt="example" src={item.pic} height={250} />{" "}
              </Tooltip>
            }
            hoverable
          >
            <Tag
              bordered={false}
              className="heartbeat-icon"
              style={{
                position: "absolute",
                right: 25,
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
                bottom: 0,
                padding: 0,
                border: "2px black",
                textAlign: "center",
              }}
            >
              {item.title}
            
            

            </div>
          </Card>
         
        </Link>
        <Popconfirm
        title="Remove from Watchlist!"
        onConfirm={()=>removefromWatchlist(item.id,user.id)}
        okText="yes"
        cancelText="No"
        
        icon={
          <DeleteOutlined style={{color:"red"}} />
        }
        >

        <CloseCircleOutlined
        danger
        style={{
          color: "Red",
          fontSize: 20,
          borderRadius: "50%",
          position: "absolute",
          right:25,top:25        }}
       
      />
        </Popconfirm>

      </div>
      );
    });
  };
  return (
    <div>
      <h1>Watchlist</h1>
      <div
        style={{
          background: "rgba(225,225,225,.6)",
          borderRadius: "10px",
          padding: 20,
          width: "90%",
          margin: "20px auto",
        }}
      >
        <h1 align="right"></h1>
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

          {watchlist.length>0?renderCards():"No Data Found!"}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
