import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Divider, Image, List, Pagination, Row, Tag, Tooltip } from "antd";
import { PlayCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { ApiBase } from "../Const";
import _ from "lodash";
const Home = () => {
  const [corousal, setcorousal] = useState([]);
  const [cards, setCards] = useState([]);
  const limit = 4;

  const getAnimedetails = async () => {
    const data = await axios.get(ApiBase + "/Animes/top/" + limit);
    console.log(data.data);
    setcorousal(data.data);
    const data2 = await axios.post(ApiBase + "/Animes/Animescards",{id:_.map(data.data,function(item){return item.id})});
    console.log(data2.data);
    setCards(data2.data);
  };
  
  useEffect(() => {
    getAnimedetails();
  
  }, []);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const renderCards = () => {
    return cards.slice(startIndex, endIndex).map((item, index) => {
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
        <Link to={"/Anime/"+item.id} >
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
              overlayStyle={{ minWidth: "400px",cursor:"pointer" }}
              placement="right"
              title={Details}
            >
              <img
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
              bottom: 0,
              padding:0,
              border:"2px black",
              textAlign: "center",
            }}
          >
            {item.title}
          </div>
         
        </Card>
        </Link>
      );
    });
  };
  return (
    <React.Fragment>
      
      <Row style={{ width: "100%" }}>
        <Col style={{ width: "100%" }}>
          <Carousel easing speed="800" autoplay>
            {corousal.map((item) => {
              const bg = {
                background: "url(" + item.pic + ") center fixed",
                height: "450px",
              };
              return (
                <div key={item.id}>
                  <div style={bg}>
                    <div
                      style={{
                        backdropFilter: "blur(5px) grayscale(180%)",
                        height: "450px",
                        userSelect: "none",
                      }}
                    >
                      <img
                        src={item.pic}
                        className="hoverableImg"
                        style={{
                          borderRadius: "20px",
                          height: "400px",
                          position: "absolute",
                          left: "10%",
                          margin: 20,
                        }}
                      />
                      <Link to={"/Anime/" + item.id}>
                        <Tooltip title={'WATCH "' + item.title + '"'}>
                          <Button
                            type="primary"
                            style={{
                              position: "absolute",
                              left: "12%",
                              boxShadow: "0 0 20px 5px black",
                              bottom: "9%",
                              height: "fit-content",
                              borderRadius: "50%",
                              fontSize: 30,
                            }}
                          >
                            <PlayCircleOutlined />
                          </Button>
                        </Tooltip>
                      </Link>
                      <div
                        style={{
                          color: "white",
                          padding: 20,
                          height: "350px",
                          background: "rgba(0,0,0,.7)",
                          top: "5%",
                          borderRadius: "20px",
                          width: "50%",
                          position: "absolute",
                          right: "10%",
                        }}
                      >
                        <h1>
                          {item.title}
                          <br />
                          <div
                            style={{
                              position: "absolute",
                              right: "0%",
                              top: "0%",
                            }}
                          >
                            <Tag
                              style={{
                                background: "mediumseagreen",
                                color: "white",
                                fontWeight: 900,
                              }}
                            >
                              <VideoCameraOutlined /> Ep: {item.Episodes.length}
                            </Tag>
                            {item.status?(<Tag
                              style={{
                                background: "mediumseagreen",
                                color: "white",
                                fontWeight: 900,
                              }}
                            >Completed</Tag>):(<Tag
                              style={{
                                background: "blue",
                                color: "white",
                                fontWeight: 900,
                              }}
                            >Continue</Tag>)}
                            <Tooltip title={item.Rate.Description}>
                              <Tag
                                style={{
                                  background: "rgba(225,225,225,.5)",
                                  color: "white",
                                }}
                              >
                                {item.Rate.title.toUpperCase()}
                              </Tag>
                            </Tooltip>

                            <Tag
                              style={{
                                background: "rgba(225,225,225,.5)",
                                color: "white",
                              }}
                            >
                              {item.Type.name.toUpperCase()}
                            </Tag>
                          </div>
                        </h1>

                        <p style={{ textAlign: "justify", padding: 2 }}>
                          {" "}
                          Description:
                          {" " + item.description}
                        </p>
                        <div style={{ textAlign: "left" }}>
                          <tt style={{ textAlign: "left" }}>
                            Generes:{" "}
                            {item.Generes.map((g) => g.Title).join(", ")}
                          </tt>
                          <br />
                          <tt style={{ textAlign: "left" }}>
                            Authors:{" "}
                            {item.Authors.map((g) => g.name).join(", ")}
                          </tt>
                          <br />
                          <tt style={{ textAlign: "left" }}>
                            Studio: {item.Studios.map((g) => g.name).join(", ")}
                          </tt>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </Col>
        {/* //Cards with List */}

        <Col style={{ width: "75%", marginTop: "20px" }}>
          <div
            style={{
              background: "rgba(0,0,0,.7)",
              padding: "20px",
              margin: "15px",
              borderRadius: "9px",
            }}
          >
            <div style={{ textAlign: "right", marginTop: 20 }}>
            <Pagination
              current={currentPage}
              total={cards?.length}
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
        </Col>
        <Col style={{ width: "25%", marginTop: "20px" }}>
          <div
            style={{
              
              margin: "15px",
              borderRadius: "9px",
              color: "white",
              background: "rgba(60,60,60,1)",
              padding: 20,
            }}
          >
            <h2>
              Top Animes{" "}
              {corousal.length > 0 ? "( " + corousal.length + " )" : ""}{" "}
            </h2>
            <List
              itemLayout="horizontal"
              dataSource={corousal}
              style={{}}
              renderItem={(item, index) => {
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
                          background: !item.status
                            ? "skyblue"
                            : "mediumseagreen",
                        }}
                      >
                        {!item.status ? "Continue" : "Complete"}
                      </Tag>
                      <hr />
                      <Tooltip
                        placement="right"
                        style={{}}
                        title={item.description}
                      >
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
                        Author:{" "}
                        {item.Authors.map((item) => item.name).join(", ")}
                      </tt>
                      <p style={{ fontSize: 10 }}>
                        Studio:{" "}
                        {item.Studios.map((item) => item.name).join(", ")}
                      </p>
                      <p style={{ fontSize: 10 }}>
                        Type: {item.Type.name.toUpperCase()}
                      </p>
                      <p style={{ fontSize: 10 }}>
                        Rate: {item.Rate.title.toUpperCase()}
                      </p>
                      <p style={{ fontSize: 10 }}>
                        Generes:{" "}
                        {item.Generes.map((item) => item.Title).join(", ")}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <Link to={"/Anime/" + item.id}>
                    <Tooltip
                    
                      autoAdjustOverflow="false"
                      overlayStyle={{ minWidth: "400px",cursor:"pointer" }}
                      placement="right"
                      title={Details}
                    >
                      <List.Item key={index}>
                        <List.Item.Meta

                          style={{ color: "white" }}
                          avatar={
                            <img
                              src={item.pic}
                              height={"70px"}
                              style={{ borderRadius: 5}}
                            />
                          }
                          title={
                            <p
                              style={{ color: "white", margin: "0" }}
                              align="left"
                            >
                              {item.title}
                            </p>
                          }
                          description={
                            <div align="left">
                              <Tag color="purple">
                                <VideoCameraOutlined /> {" "}Ep: {item.Episodes.length}{" "}
                              </Tag>
                              {item.status ? (
                                <Tag color="success">Completed</Tag>
                              ) : (
                                <Tag color="blue">Continue</Tag>
                              )}
                            </div>
                          }
                        />
                      </List.Item>
                       
                      
                    </Tooltip>
                  </Link>
                );
              }}
            />
          </div>
        </Col>
      </Row>
      
    </React.Fragment>
  );
};

export default Home;
