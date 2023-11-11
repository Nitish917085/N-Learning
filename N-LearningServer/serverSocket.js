const { createServer } = require("http");
const { Server } = require("socket.io");
const { mongooseConnect } = require("./config/mongooseConfig");
const express = require("express");
const routes =  require("./routes")
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { socketControllers } = require("./routes/socketControllers");
const Course = require("./model/Course");
const { courseData } = require("./data");

const app = express();

const corsOrigin ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200
}

app.use(cors(corsOrigin))
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",routes)

const httpServer = createServer(app);
const io = new Server(httpServer,{
  cors:{
    origin:'*'
  }
});

// Course.insertMany(courseData)
mongooseConnect()

io.on("connection", (socket) => {
  socketControllers(socket,io)
});


const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, ()=> console.log("server started at ",PORT))