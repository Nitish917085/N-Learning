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
    const [totalPages, setTotalPages] = useState(0)
    const [pageLimit, setPageLimit] = useState(10)
    const [pageNumber, setPageNumber] = useState(1)
    const [selectedTypeSearch, setSectedTypeSearch] = useState("")
    const [enrollmentStatus, setEnrollmentStatus] = useState("")
    const [searchKeyword, setSelectedKeyword] = useState("")


    const handleChange = (event, value) => {
        setPage(value)
        setPageNumber(value);
    };


    const getAllCourse = async () => {
        const res = await getAllCourseApi({ pageNumber, selectedTypeSearch, enrollmentStatus, searchKeyword })
        setCourseList(res.courses)
        setTotalPages(Math.ceil(res.count / pageLimit))
        console.log("ccc", res)
    }

    const handleCardClick = (item) => {
        dispatch(setCourseDetails(item))
        navigate('/courseDetailsPage')
    }
    const setSelectedByTypeSearch = (value) => {
        setSectedTypeSearch(value)
    }

    useEffect(() => {
        setPaginatedCourseList(courseList)
    }, [courseList])

    useEffect(() => {
        getAllCourse()
    }, [pageNumber])

    useEffect(() => {
        getAllCourse()
    }, [])

    return (
        <div className='courseView'>



            <div className='filter'>

                <div>
                    <input className='search' type='text' value={searchKeyword} onChange={(e) => setSelectedKeyword(e.target.value)} placeholder='Enter keywords to search' />
                    <select value={selectedTypeSearch} onChange={(e) => setSelectedByTypeSearch(e.target.value)}>
                        <option value="disabled">Select Type</option>
                        <option value="">None</option>
                        <option value="name">Name</option>
                        <option value="instructor">Instructor</option>
                    </select>
                </div>

                <div>
                    <select value={enrollmentStatus} onChange={(e) => setEnrollmentStatus(e.target.value)}>
                        <option value="disabled">Select Enrollment Status</option>
                        <option value="">None</option>
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                        <option value="In Progress">In Progress</option>

                    </select>
                </div>

                <button onClick={() => getAllCourse()}>Sercah</button>

            </div>



            <div className='cardList'>
                {paginatedCourseList && paginatedCourseList.map((item) => {

                    return <div className='card' onClick={() => handleCardClick(item)}>
                        <div className='cardHeader'>
                            <div className='title'>{item.name}</div>
                            <div className='enrollmentStatus'>{item.enrollmentStatus}</div>
                        </div>
                        <div className='bookDetails'>
                            <div> <span>by</span> {item.instructor}</div>
                            <div> <span>duration : </span> {item.duration}</div>
                        </div>
                    </div>
                })
                }

            </div>

            <Pagination count={totalPages} page={page} onChange={handleChange} />

        </div>
    )
}

export default CourseListing