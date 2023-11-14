import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import "./home.css";
import {  getAllCourseApi, } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from "js-cookie";
import {  useNavigate } from "react-router-dom";
import CourseListing from "../../Components/Cousrelisting/Courselisting";

const Home = () => {

  const navigate = useNavigate();
  const cookie = Cookies.get("userToken")
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const [isProgressBarShow, setIsProgressBar] = useState(false)
  const [courseList, setCourseList] = useState([]);


  const getCourseList = async () => {

    const courseList = await getAllCourseApi({userName: user.userName})
    setCourseList(courseList)

  }


  useEffect(() => {
    getCourseList()
  }, []);

  return (
    <>
      <div className="homePage">
        <div className="sidebar">
          <SideBar />
        </div>
        {isProgressBarShow && <div className="modal-overlay">
          <div className="modal-content">
            <CircularProgress />
          </div>
        </div>}

        <div className="homeView">
          <CourseListing/>
        </div>
        
      </div>
    </>
  );
};

export default Home;
