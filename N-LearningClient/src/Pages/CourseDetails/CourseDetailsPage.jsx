import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import "./CourseDetailsPage.css";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";

const CourseDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  
  var [response, setResponse] = useState({})



  useEffect(() => {
  }, [response])

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="homePage">
        <div className="sidebar">
          <SideBar />
        </div>
        <CourseDetails />
      </div>
    </>
  );
};

export default CourseDetailsPage;
