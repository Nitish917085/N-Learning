const { sendOtp, otpVerification, resetPassword } = require("../controllers/resetPassword");
const { userRegistration, userLogin, courseList, courseDetails, enrollStudent, enrolledCourses, likeCourse, markCompleted} = require("../controllers/user");
const router = require("express").Router();
const { verifyTokenAutoLogin, verifyToken } = require("../middleware/tokenAuth");

router.post('/userRegistration',userRegistration)           // {userName:"abc",nickName:"abc",password:"abc",email:"abc"} return res.status(200).json({ error: "You are registered successfully, Please login" })
router.post('/userLogin',verifyTokenAutoLogin, userLogin)     // {userName:"abc",password:"abc"}

router.post('/getAllCourse',verifyToken,courseList)                         // {token:"abc"}
router.post('/getCourseDetails',verifyToken,courseDetails)                    // {token:"abc",courseId:"abc"}
router.post('/enrollCourse',verifyToken,enrollStudent)                      // {token:"abc",courseId:"abc",userName:"abc"}
router.post('/enrolledCourses',verifyToken,enrolledCourses)                   // {token:"abc",userName:"abc"}
router.post('/likeCourse',verifyToken,likeCourse)                             // {token:"abc",userName:"abc",courseId:"abc"}
router.post('/markCompleted',verifyToken,markCompleted)                          // {token:"abc",userName:"abc",courseId:"abc"}

router.post('/sendOtp',sendOtp)                                 //{email:"abc",userName:"abc"}
router.post('/veryfyOtp',otpVerification)                       //{otp:"abc",email:"abc"}
router.post('/resetPassword',resetPassword)                     //{newPassword:"abc"}

module.exports = router;
