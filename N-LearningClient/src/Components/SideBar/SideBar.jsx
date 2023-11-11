import React from "react";
import "./sideBar.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

  const navigate = useNavigate()
  
  const hadleHomePageButton=()=>{
    navigate('/home')
  }
  const hadleDashobardPageButton=()=>{
    // navigate('/dashboard')
  }


  return (
    <div className="sideBar">
      <div className="navs" onClick={()=>hadleHomePageButton()}>Home</div>
      <div className="navs" onClick={()=>hadleDashobardPageButton()}>Dashboard</div>
    </div>
  );
};

export default SideBar;
