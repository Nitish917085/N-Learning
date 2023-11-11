import axios from "axios"
import Cookies from "js-cookie"

const baseUrl = import.meta.env.VITE_SERVERURL

const getAllCourseApi = async (details)=>{
    const cookie =Cookies.get("userToken")

    const response = await axios.post(`${baseUrl}/getAllCourse`,{cookie})

    if(response.status == 200 )
        return response.data
    else if(response.status== 201)
         alert(response.data.error)
}

const getCourseDetailsApi = async (details)=>{
    const cookie =Cookies.get("userToken")

    console.log("appp",details)
    const response = await axios.post(`${baseUrl}/getCourseDetails`,{cookie,id:details})

    if(response.status == 200 )
        return response.data
    else if(response.status== 201)
         alert(response.data.error)
}

const enrollCourseApi = async (details)=>{
    const cookie =Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/enrollCourse`,{...details,cookie})

    if(response.status == 200 )
        return response.data
    else if(response.status== 201)
         alert(response.data.error)
}


const enrolledCoursesApi = async (details)=>{
    const cookie =Cookies.get("userToken")
    const response = await axios.post(`${baseUrl}/enrolledCourses`,{userName:details,cookie})

    if(response.status == 200 )
        return response.data
    else if(response.status== 201)
         alert(response.data.error)
}


export {baseUrl,getAllCourseApi,getCourseDetailsApi,enrolledCoursesApi, enrollCourseApi }
