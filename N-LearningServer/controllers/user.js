var jwt = require('jsonwebtoken');
const User = require("../model/User");
const Course = require('../model/Course');

const userRegistration = async (req, res) => {
    try {
        if (await User.findOne({ userName: req.body.userName }))
            return res.status(201).json({ error: "This username already exist" })
        if (await User.findOne({ email: req.body.email }))
            return res.status(201).json({ error: "This email already registered" })

        const user = await User.create({
            userName: req.body.userName,
            nickName: req.body.nickName,
            email: req.body.email,
            password: req.body.password,
        })
        return res.status(200).json({ error: "You are registered successfully, Please login" })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

const userLogin = async (req, res) => {
    console.log("login")
    try {
        const user = await User.findOne({ userName: req.body.userName }, 'userName password nickName');
        if (!user)
            return res.status(201).json({ error: "Yor are not registered please Register YourSelf" });
        if (user.password != req.body.password)
            return res.status(201).json({ error: "Wrong credentials" })

        const token = jwt.sign({ userName: req.body.userName, password: req.body.password }, process.env.JWT_SECRET)
        return res.status(200).json({ userName: user.userName, nickName: user.nickName, token: token })

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


const courseList = async (req, res) => {

    try {
        const page = parseInt(req.body.pageNumber) || 1;
        const limit = parseInt(req.body.limit) || 10;

        const results = {};

        const startIndex = (page - 1) * limit;

        let query = {};

        if (req.body.enrollmentStatus) {
            query.enrollmentStatus = req.body.enrollmentStatus;
        }

        if (req.body.searchKeyword) {
            query[req.body.selectedTypeSearch] = { $regex: req.body.searchKeyword, $options: 'i' };
        }
        console.log(query)

        const count = await Course.countDocuments(query)

        const totalClientCount = count;

        if (!totalClientCount) {
            return res.status(200).json({ count: totalClientCount });
        }

        if (startIndex + limit < totalClientCount) {
            results.next = {
                page: page + 1,
                limit: limit,
            };
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit,
            };
        }
        const courses = await Course.aggregate([
            { $match: query },
            {
                $project: {
                    name: 1,
                    instructor: 1,
                    duration: 1,
                    enrollmentStatus: 1,
                    likesCount: { $size: "$likes" }
                }
            },
            { $skip: startIndex },
            { $limit: limit }
        ]);

        console.log(courses)
        return res.status(200).json({ courses, count: totalClientCount })

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const courseDetails = async (req, res) => {
    try {
        const courseDetails = await Course.findById(req.body.id)
        return res.status(200).json(courseDetails)

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


const enrolledCourses = async (req, res) => {
    try {
        const courseDetails = await User.findOne({ userName: req.body.userName }).populate('courses.courseId')

        return res.status(200).json(courseDetails)

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


const markCompleted = async (req, res) => {
    console.log("sfd")
    try {
        const user = await User.findOneAndUpdate(
            { userName: req.body.userName },
            {
                $set: {
                    "courses.$[course].isCompleted": true,
                },
            },
            {
                arrayFilters: [{ "course.courseId": req.body.courseId }],
                new: true,
            }
        );


        return res.status(200).json({})

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


const likeCourse = async (req, res) => {
    console.log(req.body)
    try {
        //  const courseDetails = await User.findOne({ userName: req.body.userName }).populate('courses.courseId')

        return res.status(200).json({})

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


const enrollStudent = async (req, res) => {

    try {
        const existingCourse = await User.findOne({
            userName: req.body.userName,
            'courses.courseId': req.body.courseId,
        });

        if (existingCourse) {
            return res.status(201).json({ error: 'Student already enrolled in the course' });
        }

        const updatedUserCourses = await User.findOneAndUpdate(
            { userName: req.body.userName },
            { $push: { courses: { courseId: req.body.courseId } } },
            { new: true }
        );

        const email = req.body.email ? req.body.email : ""

        const updateCourseStudentList = await Course.findByIdAndUpdate(
            req.body.courseId,
            {
                $push: {
                    "students": {
                        "id": req.body.userName,
                        "name": req.body.nickName,
                        "email": email
                    }
                }
            }
        )

        return res.status(201).json({ error: "Sucessfully Enrolled" });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

}



module.exports = { userRegistration, enrolledCourses, markCompleted, likeCourse, enrollStudent, courseDetails, userLogin, courseList };