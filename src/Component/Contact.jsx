import React from 'react'
import { FiMapPin } from "react-icons/fi";


const Contact = () => {
  return (
    <div className="md:h-[100vh] h-[150vh]  w-[100%] flex flex-col justify-center bg-emerald-800">
      <h1 className="text-center font-medium text-[30px] text-[white]">
        Contact me
      </h1>
      <div className=",md:h-[100vh] h-[150vh] w-[100%] flex md:flex-row flex-col gap-6 justify-center items-center px-5">
        <div className="md:h-[50vh] md:w-[80%] w-[80%] h-[50vh] flex flex-col justify-center items-center  shadow-md shadow-black py-5 ">
          <form
            action=""
            className="flex flex-col justify-center h-[40vh] text-[10px] w-[50%] gap-2"
          >
            <label className='text-white' htmlFor="">Name</label><br/>
            <input className='outline-none border-none' type="text" name="" id="" />
            <label className='text-white' htmlFor="">Phone</label><br/>
            <input className='outline-none border-none' type="number" name="" id="" />
          </form>
            <button className='md:w-[10vw] w-[10vw] border-none outline-none bg-red-100 text-emerald-800 rounded-md'>send</button>
            
        </div>
        <div className="md:h-[50vh] h-[50vh] md:w-[80%] w-[80%] flex flex-row justify-center items-center shadow-md shadow-black py-5  ">
          <div className="flex flex-col text-[10px] justify-center gap-5  w-[80%] md:text-[20px]">
            <div className="flex flex-row text-[10px]  h-[10vh] w-[50%] justify-between items-center text-white gap-10">
              <p>TEL</p>
              <p className="w-[100%] ">08086622565</p>
            </div>
            <div className="flex flex-row text-[10px] h-[10vh] w-[50%] justify-between items-center text-white gap-10">
              <p>Email</p>
              <p className="w-[100%] ">okechukwugodstime75@gmail.com</p>
            </div>
            <div className="flex flex-row h-[10vh] text-[10px] w-[50%] justify-between items-center text-white gap-10">
              <FiMapPin className='text-[25px]' />
              <p className="text-white w-[100%]">No 24 Kosoko Street Ojodu Berger Lagos state.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
