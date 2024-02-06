
import React from "react";
import { Tabs,Card } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons'
import AddAnime from "./AddAnime";
const Anime = () => {
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Anime Details',
    children: 'Details',
  },
  {
    key: '2',
    label: (<><PlusSquareOutlined /> Add</>),
    children: <AddAnime/>,
  }
];
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
      ><Tabs defaultActiveKey="2" items={items} onChange={onChange} />

      </div>
    </div>
  );
};

export default Anime;
