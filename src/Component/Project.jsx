import React, { useState } from 'react'
import pic2 from "./images/pic2.jpg"
import Music from "./images/Music.png"
import QUIZZ from "./images/QUIZZ.png"


const Projects = () => {
  const [image,setimage]= useState(true)
  const handleimage = () =>{
    setimage(!image)
  }
  const handleimages = () =>{
    setimage(image)
  }
  const [imagetwo,setimagetwo]=useState(true)
  const handleimagetwo = () =>{
    setimagetwo(!imagetwo)
  }
  const handleimagestwo = () =>{
    setimagetwo(imagetwo)
  }

  return (
    <div className="h-[200vh] w-[100%] flex flex-col justify-center items-center bg-emerald-800 text-white">
      <h1 className="font-medium text-[30px]">My Projects</h1>
      <div className="md:h-[100vh] h-[150vh] md:w-[100%] w-[100%] flex justify-center py-10 ">
        <div className="md:grid md:grid-cols-4 md:grid-rows-2  flex flex-col md:h-[100%] h-[150vh]  md:w-[100%] w-[80%] justify-center  gap-3 bg-red-100 py-5 px-5 ">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2   rounded-md bg-emerald-800">
            <div className="flex justify-center h-[50vh] md:h-[42vh] w-[100%] items-center">
              {!image && (
                <p className="md:w-[100%] w-[50%] text-center">
                  This is website and app for listening to Afromusic and it was
                  built with React.js and Tailwindcss.
                </p>
              )}
              {image && (
                <img
                  src={Music}
                  alt=""
                  className="md:h-[100%] md:w-[100%] h-[100%] w-[100%] relative  rounded-md"
                  onMouseOver={handleimage}
                  onMouseUp={handleimages}
                />
              )}
              <a href="my secondreact"></a>
              <a
                href="https://music-a236amn1g-11093261s-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 rounded-md bg-emerald-800">
            <div className="flex justify-center h-[50vh] md:h-[41vh]  md:w-[100%] w-[100%] items-center">
              {!imagetwo && (
                <p className="md:w-[80%] w-[50%] text-center">
                  This app more like a gaming app that enables the act of
                  answering questions and the app is built with HTML,
                  TailwindCss and Javascript.
                </p>
              )}
              {imagetwo && (
                <img
                  src={QUIZZ}
                  alt=""
                  className="md:h-[100%] md:w-[100%] h-[100%] w-[100%] relative  rounded-md"
                  onMouseOver={handleimagetwo}
                  onMouseUp={handleimagestwo}
                />
              )}
              <a href="myquizz"></a>
              <a
                href="https://quizzing-dmy1vcam7-11093261s-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-2  border-[1px] border-black"></div>
          <div className="col-start-4 col-end-5 row-start-1 row-end-2  border-[1px] border-black"></div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-3  border-[1px] border-black"></div>
          <div className="col-start-2 col-end-3 row-start-2 row-end-3  border-[1px] border-black"></div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-3  border-[1px] border-black"></div>
          <div className="col-start-4 col-end-5 row-start-2 row-end-3  border-[1px] border-black"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects