import React, { useState, useContext } from 'react'
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";





const Login = () => {
  const {userid,setuserid} = useContext (Context)
  const [{displayValue,setdisplayValue,Lastname,setLastname,Firstname,setFirstname ,emailvalue,setemailvalue}] = useState("")
  const Handlesubmit = (e) =>{
    e.preventDefault()
    setuserid({displayValue,Lastname,Firstname,emailvalue})
    setdisplayValue("")
    setFirstname("")
    setemailvalue("")
    setLastname("")
  

    
  }
  const Handlechange = (e) =>{
    e.target.value
    setdisplayValue(e.target.value)
    setFirstname(e.target.value)
    setLastname(e.target.value)
    setemailvalue(e.target.value)
    

  }
  const navigator = useNavigate()
  navigator("/Login")
  const Nav = useNavigate()
  const Handlelogin = () => {
    if(userid === displayValue || Lastname || Firstname ||emailvalue){

      setInterval(() => {
        Nav("/Chatbox")
        
      }, 1000);
    }



  }
  

  const[showpassword,setshowpassword]=useState(true)
  const Handleshowpassword = () =>{
  setshowpassword(!setshowpassword)
  }
  

  
  
  return (
    <main className="md:h-[200vh] h-[200vh] md:w-[100%] w-[100%] bg-emerald-800 flex items-center justify-center flex-col gap-[20px]">
      <h1 className="font-mono  text-[20px] text-center text-red-100 md:w-[100%] w-[80%]">
        To Discuss your Project building please Login here.
      </h1>
      <div className="md:h-[90vh] h-[90vh] md:w-[50%] w-[50%] flex flex-col justify-center items-center ">
        <form
          action=""
          className="gap-[5px] w-[100%] h-[150vh] flex flex-col justify-center items-center bg-red-100
        "
          onSubmit={Handlesubmit}
        >
          <label htmlFor="">FirstName</label>
          <br />
          <div className="  gap-3 border-black border-[1px] rounded-md w-[30vw] py-2 px-3 flex ">
            <input
              className="w-[20vw] bg-red-100 focus outline-none"
              type="text"
              name=""
              id="one"
              value={Firstname}
              onChange={Handlechange}
            
            />
          </div>
          <label htmlFor="">LastName</label>
          <br />
          <div className=" gap-3 border-black border-[1px] rounded-md w-[30vw] py-2 px-3 flex ">
            <input
              className="w-[20vw] bg-red-100 focus outline-none"
              type="text"
              name=""
              id="two"
              value={Lastname}
              onChange={Handlechange}
              
            />
          </div>
          <label htmlFor="">Email</label>
          <br />
          <div className="  gap-3 border-black border-[1px] rounded-md w-[30vw] py-2 px-3 flex ">
            <input
              className="w-[20vw] bg-red-100focus outline-none bg-red-100 "
              type="email"
              name=""
              id="three"
              value={emailvalue}
              onChange={Handlechange}
              
            />
          </div>
          <label htmlFor="">Password</label>
          <br />
          <div className="w-[30vw] border-1 border-black gap-3">
            <div className="border-black border-[1px] gap-3 rounded-md w-[30vw] py-2 px-3 flex justify-between">
              <button onClick={Handleshowpassword}>
                {!showpassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
              <input
                onChange={Handlechange}
                className=" flex-grow focus outline-none w-[20vw] bg-red-100 overflow-x:hidden "
                type={!showpassword ? "password" : "text"}
                name=""
                id="Four"
              
                
                value={displayValue}
              />
            </div>
          </div>
        </form>
      </div>
      <button
        onClick={Handlelogin}
        className="md:w-[7vw] w-[20vw] bg-red-100 text-center rounded-md h-[5vh] text-emerald-800 overflow-x-hidden break-words"
      >
        Login
      </button>
    </main>
  );
}

export default Login
