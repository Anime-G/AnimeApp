import { Tabs } from 'antd';
import React from 'react'
import Author from './Author';


const Generaldata = () => {
  const onChange = (key) => {
    // console.log(key);
 
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
      children: 'Studio tab Data',
    },

    {
      key: 'Type',
      label: 'Type',
      children: 'Type tab Data',
    },

    {
      key: 'Rate',
      label: 'Rate',
      children: 'Rate tab Data',
    },

    {
      key: 'Geners',
      label: 'Geners',
      children: 'Geners tab Data',
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
