import React from "react";
import About from "./Component/About";
import More from "./Component/Certification";
import Projects from "./Component/Project";
import Contact from "./Component/Contact";
// import Cal from "./Component/Cal"
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-[200vh]">
      {/* <About/>
        <More/>
        <Projects/>
        <Contact/>  */}
      {/* <Cal/> */}
      <Header />
      <Outlet />
  
      

      {/* <Props header="LearnFacory Tech hub Aba" text="I am versertile frontend engineer with elaborate experience the the area of web development" list="Frontend developer"/>
       */}
    </div>
  );
};

export default Body;
