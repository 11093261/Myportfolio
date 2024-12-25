import React, { useRef, useState } from 'react'
import { FaPrayingHands } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
// import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";



const Home = () => {
  const[form , setform] = useState(true)
  
 
  const Navigator = useNavigate()
  const Handleclick = () =>{
    setform(!form)
    setTimeout(() => {
      Navigator("/Recent")

      
    }, 1000);



  }
  
  
  const[Heading , setHeading]=useState("text-white")
  const HandleLoading = () =>{
    setHeading("text-red-100")
    
  }
  
  const [color,setcolor]=useState("text-black");
  const Handlehand = () =>{
    setTimeout(() => {
      
      setcolor("text-red-100")
    },1000);




  }

  

  

  

  
  


  return (
    <main className="md:h-[150vh] h-[100vh]  md:w-[100%] w-[100%] flex justify-center bg-emerald-800 items-center flex-col ">
      <button  className='border-none outline-none md:w-[50%] w-[100%] flex justify-center items-center ' onMouseOver={Handlehand}>
        <FaPrayingHands className={`font-extrabold ${color} md:h-[20vh] h-[100%]  md:w-[40vw] w-[50%]`}/>
      </button>
      <div className='flex justify-center md:h-[20vh] h-[100%] md:w-[100%] w-[100%] items-center text-red-100 font-sans text-[30px]'>

        <h1 className='md:text-[30px] text-[20px] text-center w-[100%]'>Hello I am OKECHUKWU GODSTIME</h1>
      </div>
      <div className='md:h-[70vh] md:w-[100%] w-[100%] justify-center items-center flex flex-col'>
        <h1
          className={`font-mono ${!Heading} text-white md:text-[30px] text-[20px] moving`}
          onLoad={HandleLoading}
        >
          WELCOME TO MY PORTFOLIO WEBSITE
        </h1>
        <div className=" md:w-[100%] w-[100%] justify-center items-center flex flex-col h-[10vh]">
          <div className="flex justify-center  w-[20%]  py-4">
            {form && (
            

              <button
                onClick={Handleclick}
                className="md:w-[15vw] w-[100%] md:text-[20px] text-[10px] text-center md:h-[5vh] h-[100%] bg-red-100 rounded-md text-emerald-800
                 font-medium"
              >
                Recent Involvements
              </button>
              )}
          </div>
        </div>        

      </div>
    </main>
  );
}

export default Home
