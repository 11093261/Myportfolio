import React, { useRef, useState } from 'react'
import { Questions } from './Components/Questions'
import Props from './Component/Props';
import { FaFacebook, FaInstagram, FaSearch, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';



const Footer = () => {
  const REF = useRef(null)

  const [Valuedisplay,setvaluedisplay] = useState(0) 
  const HandleAnswer = () =>{
    REF.current.cursor()
    setvaluedisplay(Valuedisplay + 1)
  }
  return (
    <main className="md:h-[200vh] h-[200vh]  md:w-[100%] w-[100%] flex justify-center items-center bg-emerald-800 flex-col">
      <div className="md:h-[150vh] h-[150vh]  md:w-[50%] w-[80%] flex py-[40px] justify-center items-center flex-col gap-10">
        <p className="font-medium text-white md:text-[25px] py-[20px] text-[20px] md:w-[100%] w-[100%]  text-center ">
          Please feel free to communicatate to me how you think this website has
          help you.
        </p>
        <div className="md:h-[100vh] h-[80vh] w-[100%] md:w-[100%] bg-red-100 flex flex-col justify-center items-center md:py-6">
          <div className=" w-[100%] flex justify-center  items-center">
            <form
              action=""
              className="md:h-[100vh] h-[70vh] w-[100%] bg-white gap-10 justify-between items-center m-14 "
            >
              {Questions.map((items, index) => (
                <div key={index}>
                  <div className="w-[80%] text-center h-[10vh] flex justify-center items-center bg-emerald-800 m-10 text-white ">
                    <p>{items.question} </p>
                  </div>
                  <div className="w-[100%] text-center h-[10vh] flex justify-center items-center bg-white m-10 flex-row gap-[10px]">
                    <Props Input="Excellent" />
                    <p className="w-[100%]" onClick={HandleAnswer}>
                      {items.Answer}
                      {REF.current}
                    </p>
                  </div>
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
      <div className="md:h-[50vh] h-[70vh] md:w-[50%] w-[100%] flex justify-center items-center ">
        <span className="md:h-[20vh] h-[20vh] md:w-[80%] w-[80%] flex flex-row gap-[10px] justify-between items-center">
          <div className="bg-red-100 w-[50px] h-[50px] text-blue-700 justify-center items-center text-[30px] flex rounded-full">
            <FaFacebook />
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </div>
          <div className="bg-red-100 w-[50px] h-[50px] justify-center items-center text-[30px] flex rounded-full">
            <FaXTwitter/>
          </div>
          <div className="bg-red-100 w-[50px] h-[50px] justify-center items-center text-[30px] flex rounded-full">
            <FaInstagram />
          </div>
          <div className="bg-red-100 w-[50px] text-[green] h-[50px] justify-center items-center text-[30px] flex rounded-full">
            <FaWhatsapp />
          </div>
        </span>
      </div>
      <div className="grid grid-cols-3 md:h-[70vh] h-[70vh] md:w-[80%] w-[80%] gap-[30px]">
        <div className="flex items-center md:h-[50vh] h-[50vh] md:w-[30%] w-[30%] gap-[20px] flex-col">
          <h1 className="font-bold w-[100%] text-red-100">Quick links</h1>
          <div className="w-[50%] flex justify-center flex-col">
            <p className="w-[50%] text-center">Home</p>
            <p className="w-[50%] text-center">About </p>
            <p className="w-[50%] text-center">Certification</p>
            <p className="w-[50%] text-center">Projects</p>
            <p className="w-[50%] text-center">Contact</p>
          </div>
        </div>
        <div className="flex items-center md:h-[50vh] h-[50vh] md:w-[80%] w-[80%] flex-col">
          <h1 className="font-bold w-[100%] text-red-100 text-center">
            Places near me
          </h1>
          <div className="w-[50%] flex justify-center items-center flex-col">
            <p className="w-[50%] text-center">Ojodu berger bustop</p>
            <p className="w-[50%] text-center">Ikeja shopping mall</p>
            <p className="w-[50%] text-center">Elis suite & Hotel</p>
          </div>
        </div>
        <div>
          <form
            action=""
            className="bg-white w-[30vw] h-[5vh] flex justify-center items-center "
          >
            <input
              type="text"
              name=""
              id=""
              className="w-[20vw] outline-none border-none bg-white"
              placeholder="search"
            />
            <button className="border-none outline-none">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="md:h-[15vh] h-[15vh] md:w-[100%] w-[100%] flex justify-center items-center">
        <p className="md:text-[20px] text-[10px] W-[100%] text-red-100 text-center">
          Copy @ Okechukwu Godstime || all right reserved.
        </p>
      </div>
    </main>
  );
}

export default Footer
