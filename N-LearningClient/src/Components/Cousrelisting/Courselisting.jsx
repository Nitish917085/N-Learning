import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CourseListing.css'
import { useNavigate } from 'react-router-dom';
import { setCourseDetails, setUsers } from '../../redux/reducers';
import { getAllCourseApi } from '../../services/api';

const CourseListing = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [courseList, setCourseList] = useState([])

    const getAllCourse = async () => {
        const res = await getAllCourseApi()
        setCourseList(res)
    }

    const handleCardClick = (item) => {
        dispatch(setCourseDetails(item))
        navigate('/courseDetailsPage')
    }

    useEffect(() => {
        getAllCourse()
    }, [])

    return (
        <div className='courseView'>
            {
                courseList && courseList.map((item) => {
                    return <div className='card' onClick={() => handleCardClick(item)}>
                        <div className='title'>
                            <div>{item.name}</div>
                        </div>
                        <div className='bookDetails'>
                            <div> <span>by</span> {item.instructor}</div>
                            <div> <span>duration : </span> {item.duration}</div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default CourseListing