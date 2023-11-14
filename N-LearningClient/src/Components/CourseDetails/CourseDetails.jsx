import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CourseDetails.css'
import { useNavigate } from 'react-router-dom';
import { enrollCourseApi, getCourseDetailsApi } from '../../services/api';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseDetails = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const selectedCourse = useSelector(state => state.courseDetails)
    const user = useSelector(state => state.user)

    console.log(user)

    const [expanded, setExpanded] = useState(false);
    const [courseDetails, setCourseDetails] = useState({})


    const getCourseDetails = async (id) => {
        try {
            const res = await getCourseDetailsApi({id,userName: user.userName});
            setCourseDetails(res);
        } catch (error) {
            console.error('Error fetching course details:', error);
        }
    };

    const handleEnroll = async () => {

        console.log("ddcssf", selectedCourse, user)

        const details = { userName: user.userName, courseId: selectedCourse._id, nickName: user.nickName }
        const res = await enrollCourseApi(details)
    }


    useEffect(() => {
        getCourseDetails(selectedCourse._id)
    }, [])

    return (
        <div className='courseView'>
            {
                courseDetails &&
                <div className="courseCard">
                    <div className='enrollStatus'>
                        <div onClick={() => handleEnroll()}>Enroll</div>
                    </div>
                    <h1>{courseDetails.name}</h1>
                    <p>Instructor: {courseDetails.instructor}</p>
                    <p>Description: {courseDetails.description}</p>
                    <p>Enrollment Status: {courseDetails.enrollmentStatus}</p>
                    <img src={courseDetails.thumbnail} alt="Course thumbnail" />
                    <p>Duration: {courseDetails.duration}</p>
                    <p>Schedule: {courseDetails.schedule}</p>
                    <p>Location: {courseDetails.location}</p>
                    <p>Prerequisites: {courseDetails.prerequisites}</p>
                    <div className='syllabusContainer' onClick={() => setExpanded(!expanded)}>
                        Syllabus {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    {expanded && (
                        <ul>
                            {courseDetails.syllabus.map((week) => (
                                <li key={week.week}>
                                    <h2>Week {week.week}: {week.topic}</h2>
                                    <p>{week.content}</p>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            }


        </div>
    )
}

export default CourseDetails