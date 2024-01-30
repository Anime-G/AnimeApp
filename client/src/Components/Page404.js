import { Button, Card, Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <Card style={{margin:"20px auto",width:"50%" ,background:"mediumseagreen"}}>
       <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/" ><Button type="primary">Back Home</Button></Link>}
  />
    </Card>
  )
}

export default Page404
