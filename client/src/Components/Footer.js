import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "rgba(0,20,50,1)",
        marginTop:"20px ",
        color: "white",
        position:"relative",
        bottom:0,
        width:"100%"
      }}
    >
      <div style={{display: "flex",justifyContent: "space-around"}}>
        <h3
          
        >
          CopyRight: EzeeTechnosys@2024
        </h3>
        <h3 style={{marginLeft:20}}>
          Developer: Aniket
        </h3>
      </div>
    </div>
  );
};

export default Footer;
