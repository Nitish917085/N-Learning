const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
    },
    nickName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    courses: [{
      courseId: {
        type: mongoose.Schema.ObjectId,
        ref: "Course",
      },
      progress: {
        type: Number, 
        default: 0, 
      },
      isCompleted:{
        type:Boolean,
        default:false
      }
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
