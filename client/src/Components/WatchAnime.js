import {
    Button,
  Card,
  Col,
  Image,
  Pagination,
  Popconfirm,
  Row,
  Tag,
  Tooltip,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiBase } from "../Const";
import { useDispatch, useSelector } from "react-redux";
import { fetch as Animefetch, diffrent } from "../Redux/Anime/Reducer";
import { fetch as Episodefetch } from "../Redux/Episode/Reducer";

import {  VideoCameraAddOutlined } from "@ant-design/icons";
import _ from "lodash";

const WatchAnime = () => {
  const [Add, setAdd] = useState({});
  const Anime = useSelector((state) => state.Animes.Data);
  const OtherAnime = useSelector((state) => state.Animes.data);
  const Episodedata = useSelector((state) => state.Episodes.Data);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Number of cards per page
  const Params = useParams();
  let { id,Epi } = Params;
  const [Ep,setEpi]=useState();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const fetchAdddata = async () => {
    const data = await axios.get(ApiBase + "/Ads/random");
    setAdd(data.data);
  };
  const fetchAnimedata = async () => {
    const data = await axios.get(ApiBase + "/Animes/GetDataAnime/" + id);
    dispatch(Animefetch(data.data[0]));
  };

  const fetchOtherList = async () => {
    const data = await axios.post(ApiBase + "/Animes/Animescards/", {
      id: [id],
    });
    dispatch(diffrent(data.data));
  };
  const setEp=()=>{
    let {Epi }=Params;
    if(Epi!=null)
    {
        console.log("Is not Empty",Epi);
        // let data=_.find(Anime.Episodes, { 'id': Ep})
        let array=Anime.Episodes;
        let data=_.find(array,function(o){return o.id==Epi});
        console.log(data);
        setEpi(parseInt(Epi));
        dispatch(Episodefetch(data));

    }
    else{
        if(Anime?.Episodes?.length>0)
        {
            
            let data=Anime.Episodes[0];
            setEpi(data.id);
            console.log("Is Empty",Ep);

            dispatch(Episodefetch(data)) 
            
        }
        
    }
  }
  const fetchdata=()=>{
      fetchAdddata();
      fetchAnimedata();
      setEp();
    fetchOtherList();
  }
  useEffect(() => {
    // fetchdata()
    fetchdata()
  }, [Params,Epi]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const renderCards = () => {
    return OtherAnime.slice(startIndex, endIndex).map((item, index) => {
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
              Generes: {item.Generes.map((item) => item.title).join(", ")}
            </p>
          </div>
        </div>
      );
      return (
        <Link key={item.id} to={"/Anime/" + item.id}>
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
  const randomcolor = () => {
    const red = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const green = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const blue = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");

    // Concatenate the values to form the hexadecimal color code
    const hexColor = `#${red}${green}${blue}`;

    return hexColor;
  };
  return (
    <div>
      <Row style={{ width: "100%" }}>
        {/* Episode  */}
        <Col style={{ width: "20%" }}>
          <div
            style={{
              background: "rgba(0,20,70,.7)",
              color: "white",
              height: "420px",
              margin: "10px",
              borderRadius: "10px",
              padding: 10,
            }}
          >
            <h3>Episodes</h3>

            <div  key={Epi} style={{ height: "350px",display:'flex',justifyContent:'flex-start',gap:10, padding: 10, overflowY: "scroll" }}>
                
              {(Anime?.Episodes?.length>0)?
              (Anime?.Episodes?.map(ep=>{
               
                return (<Link key={ep.id} to={'/Anime/'+id+'/'+ep.id}>
                        {(ep.id===Ep)?(<Button onChange={()=>fetchdata()} type="primary" >{ep.Epno}</Button>):(<Button onChange={()=>fetchdata()} >{ep.Epno}</Button>)}
                </Link>)
              })):
              (<h1>Comming Soon!</h1>)
              }
            </div>
          </div>
        </Col>
        {/* Video Screen */}
        <Col style={{ width: "80%" }}>
          <div
            style={{
              background: "rgba(0,20,70,.7)",
              color: "white",
              height: "420px",
              margin: "10px",
              borderRadius: "10px",
              padding: 10,
            }}
          >
            <h3>Video Screen</h3>
          </div>
        </Col>
        {/* Anime Details Block */}
        <Col style={{ width: "100%" }}>
          <div
            style={{
              background: "rgba(0,20,70,.7)",
              color: "white",

              margin: "10px",
              borderRadius: "10px",
              padding: 10,
            }}
            key={Epi} 
          >
            
            <Row gutter={24}>
              <Col span={5} style={{ textAlign: "center" }}>
                <img src={Anime.pic} style={{ width: "100%" }} />
              </Col>
              <Col span={19} key={Episodedata} style={{ textAlign: "left" }}>
                <h1>{Anime.title}</h1>
                <div>
                  <Tooltip title={Anime.Rate?.Description}>
                    <Tag color="geekblue">
                      {Anime?.Rate?.title.toUpperCase()}
                    </Tag>
                  </Tooltip>
                  <Tag color="volcano"> {Anime.Type?.name.toUpperCase()}</Tag>
                  <Tag color="#87d068">
                    <VideoCameraAddOutlined /> Ep: {Anime.Episodes?.length}
                  </Tag>
                  {Anime.status ? (
                    <Tag color="green">Completed</Tag>
                  ) : (
                    <Tag color="blue">Continue</Tag>
                  )}
                  <hr />
                  <div
                    style={{
                      height: 150,
                      padding: 10,
                      margin: 5,
                      overflowY: "scroll",
                      fontSize: 16,
                    }}
                  >
                    <h4> Description: </h4>
                    <p>{Anime?.description}</p>
                  </div>
                  <div style={{margin:10}}>
                    Author:{" "}
                    {Anime?.Authors?.map((author,index) => {
                      return <Tooltip key={index} title={author.name}><Tag color={randomcolor()}>{author.name}</Tag></Tooltip>;
                    })}
                  </div>
                  <div style={{margin:10}}>
                    Studio:{" "}
                    {Anime?.Studios?.map((studio,index) => {
                      return  <Tooltip key={index} title={studio.name}><Tag color={randomcolor()}>{studio.name}</Tag></Tooltip>;
                    })}
                  </div>
                  <div style={{margin:10}}>
                    Generes:{" "}
                    {Anime?.Generes?.map((genere,index) => {
                      return <Tooltip key={index} title={genere.Title}><Tag color={randomcolor()}>{genere.Title}</Tag></Tooltip>;
                    })}
                  </div>
                     {(Anime?.Episodes?.length>0)?(<div key={Episodedata} style={{margin:10}}>
                    Episode 
                    {" "+Episodedata?.Epno} : {Episodedata?.title}
                  </div>)
                  :""
                  }
                 
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* other Anime Details Block */}
        <Col style={{ width: "100%" }}>
          <div
            style={{
              background: "rgba(0,20,70,.7)",
              color: "white",
              margin: "10px",
              borderRadius: "10px",
              padding: 10,
            }}
          >
            <div style={{ textAlign: "right", marginTop: 20 }}>
              <Pagination
                current={currentPage}
                total={OtherAnime?.length}
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
      </Row>
    </div>
  );
};

export default WatchAnime;
