const Course = require("../model/Course");

const socketControllers = async (socket, io) => {

    socket.on('likes', async data => {
        const { courseId, userId } = data

        if (await Course.findOne({ likes: userId })) {
            const updatedLikes = await Course.findByIdAndUpdate(courseId, {
                $pull: { likes: userId }
            })
        } else {
            const updatedLikes = await Course.findByIdAndUpdate(courseId, {
                $push: { likes: userId }
            })

        }
        socket.emit('likes')
    })
}

module.exports = { socketControllers }