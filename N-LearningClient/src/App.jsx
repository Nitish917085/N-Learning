import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogReg from "./Pages/Login/LogReg";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import CourseDetailsPage from "./Pages/CourseDetails/CourseDetailsPage";

function App() {
  const user = useSelector((state) => state.user)

  return (
    <>
      <Router>
      {user.userName &&  <NavBar />}
        <Routes>
          <Route exact path="/" element={<LogReg />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/courseDetailsPage" element={<CourseDetailsPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
