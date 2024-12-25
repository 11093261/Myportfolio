import React from 'react'
import { Control } from './Control/Control';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Login from './Component/Login';
import { Context } from './Component/Context';
import { useContext } from 'react';

const Header = () => {
  const {userid} = useContext(Context)
  const navigate = useNavigate()
  const Handlenav = () =>{
    setTimeout(() => {
      
      navigate("/Home")
      navigate("/Aontact")
      navigate("/Certification")
      navigate("/Project")
      navigate("/Contact")
    },1000);
  }
  const Navpage = useNavigate()
  const Handlepage = () =>{
    setTimeout(() => {
      Navpage("/Login")
      
      
    },1000);
 
  }
  return (
    <main className="md:h-[20vh] h-[10%] justify-center items-center md:w-[100%] w-[100%] flex bg-emerald-800 shadow-sm shadow-black ">
      <header className="md:h-[15vh] md:w-[80%] w-[100%] md:text-[20px]   justify-around items-center flex-row flex text-[8px] text-white">
        <div className="md:w-[6rem] w-[3rem]  md:h-[6rem] h-[3rem] rounded-full bg-red-100 border-t-[3rem] md:border-r-[4rem] border-r-[2rem] border-t-transparent border-l-transparent  border-r-emerald-800 md:border-l-[4rem] border-l-[2rem]"></div>
        <nav className="md:w-[100%] w-[100%] flex  justify-center items-center flex-row gap-[10px] md:gap-[30px]">
          {Control.map((items, index) => (
            <NavLink key={index} to={items.path} className="navit">
              {items.name}
            </NavLink>
          ))}

          <NavLink to="/Login">
            <button
              className="bg-white md:w-[8vw] w-[8vw] md:h-[5vh] h-[3vh] text-emerald-800 border-none outline-none"
              onClick={Handlepage}
            >
              Login
            </button>
          </NavLink>
          {/* 
          <a onClick={Handlenav} className="conf" href="">
            Home
          </a>
          <a onClick={Handlenav} className="conf" href="">
            About
          </a>
          <a onClick={Handlenav} className="conf" href="">
            Certification
          </a>
          <a onClick={Handlenav} className="conf" href="">
            Projects
          </a>
          <a onClick={Handlenav} href="">
            Contact
          </a> */}
  
          <p>{userid}</p>
        </nav>
        <div className="md:w-[6rem] w-[3rem]  md:h-[6rem] h-[3rem] rounded-full bg-red-100 border-t-[3rem] md:border-r-[4rem] border-r-[2rem] border-t-transparent border-r-transparent  border-l-emerald-800 md:border-l-[4rem] border-l-[2rem]"></div>
      </header>
    </main>
  );
}

export default Header
