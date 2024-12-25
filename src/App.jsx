import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import About from "./Component/About";
import Certification from "./Component/Certification";
import Product from "./Component/Project";
import Contact from "./Component/Contact";
import Home from "./Component/Home"
import Footer from "./Footer";
import Login from "./Component/Login";
import { Context } from "./Component/Context";
import Recent from "./Component/Recent";
// import Chatbox from "./Component/chatbox";
import { User } from "./Component/User";

function App() {
  const[userid,setuserid]=useState("hello")
  const[Userchat,setUserchat]=useState("")
  return (
    <>
        
        <Context.Provider value={{ userid, setuserid, Userchat,setUserchat}}>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Certification" element={<Certification />} />
              <Route path="/Project" element={<Product />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Recent" element={<Recent />} />
              <Route path="/Login" element={<Login/>}>
                {/* <Route path="/Login/Chatbox" element={<Chatbox />} /> */}
              </Route>
            </Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Footer />} />
          </Routes>
        </Context.Provider>
        
    </>
  );
}

export default App;
