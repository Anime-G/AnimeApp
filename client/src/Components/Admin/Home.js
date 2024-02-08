import axios from "axios";
import React, { useEffect } from "react";
import { ApiBase } from "../../Const";
import { Card, Col, Row, Statistic } from "antd";

import { Count as getdata } from "../../Redux/Count/Reducer";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const Count = useSelector((state) => state.Counts.Data);

  const dispatch = useDispatch();
  const fetchdata = async () => {
    const data = await axios.get(ApiBase + "/Count/");
    dispatch(getdata(data.data));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <div style={{ padding: "20px" }}>
        <Row gutter={16} key={Count}>
          {Object.keys(Count).map(key =>  (
            
            <Col span={6} >
              <Card bordered={false} style={{margin:"20px",background:"pink"}}>
                <Statistic title={key} value={Count[key]} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
