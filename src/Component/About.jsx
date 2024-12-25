import React, { useState } from 'react'
import profile from "./images/profile.jpg"

const About = () => {
    const[para,setpara]=useState(true)
    const HandleClick = () =>{
        setpara(!para)
    }
  return (
    <main className="h-[300vh]   md:w-[100%] w-[100%]  flex flex-col justify-center bg-emerald-800 items-center">
      <div className="flex flex-col justify-center items-center   h-[200vh] gap-10 md:w-[100%] w-[100%] ">
        <h1 className="text-white md:font-medium font-normal md:text-[4px] w-[100%] text-[5px] para text-center">
          I AM FRONTEND WEB DEVELOPER
        </h1>
        <div className="flex flex-col justify-center items-center md:h-[50vh] h-[100%] md:w-[100%] w-[100%] ">
          <img
            className="w-[150px] h-[150px] rounded-full"
            src={profile}
            alt=""
          />
        </div>
        <div className="flex md:h-[200vh] h-[100%] md:w-[100%] w-[100%]  justify-center items-center flex-row gap-6 px-6">
          <div className="md:w-[5rem]  md:h-[5rem]  h-[2.5rem] w-[2.5rem] md:border-r-[20rem] border-r-[10rem]  md:border-l-[20rem] border-l-[10rem] border-r-transparent border-l-transparent border-t-[10rem] border-t-transparent border-b-[10rem] border-b-red-100  -translate-y-20 relative ">
            <div className="relative top-7 ">
              <p className="w-[50%]  md:text-[15px] text-[10px] text-emerald-800 text-center">
                Let's work on your project
              </p>
            </div>
          </div>
        </div>
        <div className="md:h-[70vh] h-[fit] md:w-[50%]  flex flex-col justify-center items-center">
          <p className="w-[80%] text-red-100 font-sans">
            Okechukwu Godstime is an innovative and dedicated web developer
            specializing in frontend development. With a strong passion for
            creating intuitive and visually appealing user experiences,
            Okechukwu focuses on crafting seamless designs and interactive
            interfaces that connect technology with user needs. With expertise
            in HTML, CSS, JavaScript, and modern frontend frameworks, Okechukwu
            combines technical skills with creativity to build responsive and
            user-friendly websites. His commitment to staying updated with the
            latest trends and technologies ensures that his work aligns with
            industry standards while meeting client expectations. Okechukwu
            believes that great design is about simplicity, functionality, and
            aesthetics. His attention to detail and problem-solving abilities
            allow him to translate client visions into dynamic and functional
            digital solutions. Whether building websites, creating UI/UX
            designs, or optimizing user interactions, Okechukwu has proven
            experience delivering projects that prioritize user engagement and
            satisfaction. 
          </p>
          {!para && (
            <p className="w-[80%] text-white ">
              As a forward-thinking professional, Okechukwu Godstime is always
              eager to learn and grow in the fast-paced world of web
              development. His journey showcases dedication, innovation, and a
              commitment to pushing boundaries in the frontend development
              space.
            </p>
          )}
        </div>
        <button onClick={HandleClick} className="  contactbutton  ">
          {para ? "Read more" : "Read less"}
        </button>
      </div>
    </main>
  );
}

export default About
