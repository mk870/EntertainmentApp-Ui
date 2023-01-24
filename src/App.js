import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Globalstyles } from "./components/GlobalStyles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Signup/SignUp";

const App = () => {
  return(
    <BrowserRouter>
    <Globalstyles/>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Layout>
  </BrowserRouter>
  )
};

export default App;
