import { Tabs } from 'antd';
import React from 'react'
import Author from './Author';
import Studio from './Studio';
import Type from './Type';
import Rate from './Rate';
import Genere from './Genere';


const Generaldata = () => {
  const onChange = (key) => {
 
  };
  const items = [
    {
      key: 'Author',
      label: 'Author',
      children:(<Author/>),
    },
    {
      key: 'Studio',
      label: 'Studio',
      children: <Studio/>,
    },

    {
      key: 'Type',
      label: 'Type',
      children: <Type/>,
    },

    {
      key: 'Rate',
      label: 'Rate',
      children: <Rate/>,
    },

    {
      key: 'Geners',
      label: 'Geners',
      children: <Genere/>,
    },
  ]
  return (
    <div>
      <h1>General Data</h1>
      <div style={{background:"white",borderRadius:"10px",padding:20,width:"90%",margin:"0px auto"}} >

      <Tabs defaultActiveKey="Author"  items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default Generaldata
