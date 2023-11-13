import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enrolledCoursesApi, markCourseCompletedApi } from "../../services/api";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const user = useSelector((state) => state.user)
  const [expanded, setExpanded] = useState(false);

  const [enrolledCourseList, setEnrolledCourseList] = useState([])

  const getUserEnrolledCorses = async () => {

    const res = await enrolledCoursesApi(user.userName)
    setEnrolledCourseList(res.courses)

  }

  const markCourseCompleted = async (courseId) => {

    const res = await markCourseCompletedApi({ userName: user.userName, courseId })
    if (res.status == 200)
      getUserEnrolledCorses()
  }

  useEffect(() => {
    getUserEnrolledCorses()
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <SideBar />
        </div>

        <div className="enrolledCourseCard">
          {
            enrolledCourseList && enrolledCourseList.map((courseDetails) => {
              console.log(courseDetails.isCompleted)
              return (
                <div className="courseCard">
                  <div className='enrollStatus'>
                    <div>Enrolled</div>
                  </div>
                  <div className='enrollStatus'>
                    <div onClick={() => markCourseCompleted(courseDetails.courseId._id)}>Completed :{courseDetails.isCompleted ? <span><CheckIcon /></span> : <span><CloseIcon /></span>}</div>
                  </div>
                  <h1>{courseDetails.courseId.name}</h1>
                  <p>Instructor: {courseDetails.courseId.instructor}</p>
                  <p>Description: {courseDetails.courseId.description}</p>
                  <p>Enrollment Status: {courseDetails.courseId.enrollmentStatus}</p>
                  <img src={courseDetails.courseId.thumbnail} alt="Course thumbnail" />
                  <p>Duration: {courseDetails.courseId.duration}</p>
                  <p>Schedule: {courseDetails.courseId.schedule}</p>
                  <p>Location: {courseDetails.courseId.location}</p>
                  <p>Prerequisites: {courseDetails.courseId.prerequisites}</p>
                  <div className='syllabusContainer' onClick={() => setExpanded(!expanded)}>
                    Syllabus {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </div>
                  {expanded && (
                    <ul>
                      {courseDetails.courseId.syllabus.map((week) => (
                        <li key={week.week}>
                          <h2>Week {week.week}: {week.topic}</h2>
                          <p>{week.content}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Dashboard;
