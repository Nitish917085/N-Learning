const { sendOtp, otpVerification, resetPassword } = require("../controllers/resetPassword");
const { userRegistration, userLogin, courseList, courseDetails, enrollStudent} = require("../controllers/user");
const router = require("express").Router();
const { verifyTokenAutoLogin, verifyToken } = require("../middleware/tokenAuth");

router.post('/userRegistration',userRegistration)
router.post('/userLogin',verifyTokenAutoLogin, userLogin)

router.post('/getAllCourse',courseList)
router.post('/getCourseDetails',courseDetails)
router.post('/enrollCourse',enrollStudent)

router.post('/sendOtp',sendOtp)
router.post('/veryfyOtp',otpVerification)
router.post('/resetPassword',resetPassword)

module.exports = router;
