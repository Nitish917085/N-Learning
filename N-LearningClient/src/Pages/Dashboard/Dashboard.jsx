import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const user = useSelector((state) => state.user)


  useEffect(() => {
   

  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <SideBar />
        </div>
       
        
      </div>
    </>
  );
};

export default Profile;
