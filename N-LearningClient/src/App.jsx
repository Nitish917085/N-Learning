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
import NavBar from "./Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import CourseDetailsPage from "./Pages/CourseDetails/CourseDetailsPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ForgotPassword from "./Pages/ForgotPassword/ResetPasword";


function App() {
  const user = useSelector((state) => state.user)

  return (
    <>
      <Router>
      {user.userName &&  <NavBar />}
        <Routes>
          <Route exact path="/" element={<LogReg />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/courseDetailsPage" element={<CourseDetailsPage />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
