import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Courselisting.css'
import { useNavigate } from 'react-router-dom';
import { setCourseDetails, setUsers } from '../../redux/reducers';
import { getAllCourseApi } from '../../services/api';
import Pagination from '@mui/material/Pagination';

const CourseListing = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [courseList, setCourseList] = useState([])
    const [paginatedCourseList, setPaginatedCourseList] = useState([])
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        setPaginatedCourseList(courseList.slice((value - 1) * 10, value * 10))
    };

    const getAllCourse = async () => {
        const res = await getAllCourseApi()
        setCourseList(res)
        setPaginatedCourseList(res.slice(0, 10))
    }

    const handleCardClick = (item) => {
        dispatch(setCourseDetails(item))
        navigate('/courseDetailsPage')
    }

    const handleActiveInactiveFilter = () => { }

    useEffect(() => {
        getAllCourse()
    }, [])

    return (
        <div className='courseView'>
            <br />
            <br />
            <div className='filter'>
                <input className='search' type='text' placeholder='Enter keywords to search' />
                <div className="filterStatus">
                    <label
                        style={{ display: "flex", gap: "4px", alignItems: "center", }}     >
                        <input type="radio" onClick={() => handleActiveInactiveFilter(true, true)} name="activity" />  All </label>
                    <label style={{ display: "flex", gap: "4px", alignItems: "center", }}   >
                        <input type="radio" onClick={() => handleActiveInactiveFilter(false, false)} name="activity" /> InActive </label>
                    <label style={{ display: "flex", gap: "4px", alignItems: "center", }} >
                        <input type="radio" onClick={() => handleActiveInactiveFilter(false, true)} name="activity" /> Active  </label>
                </div>
            </div>



            {
                paginatedCourseList && paginatedCourseList.map((item) => {
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

            <Pagination count={4} page={page} onChange={handleChange} />

        </div>
    )
}

export default CourseListing