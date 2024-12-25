import React, { useContext, useState } from 'react'
import { User } from './User'
const Chatbox = () => {
  const{Userchat,setUserchat} = useContext(User)
  const[para,setpara]=useState(null)
  const Handlesubmit = (e) =>{
    e.preventDefault()
    setUserchat(para)
  }
    
  const Handlechange = (e) =>{
  setpara(e.target.value);

  }


  return (
    <main className='flex h-[100vh] w-[100%] flex-col bg-emerald-800 justify-center items-center'>
        <div className='h-[50vh] w-[50%] flex justify-center items-center'>
          <form action="" onSubmit={Handlesubmit}>

            <div className='grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-14 h-[70vh] w-[100%]   justify-center items-center bg-red-100 scroll-m-4 overscroll-y-contain scroll-my-28'>
                <div  className='col-start-1 col-end-2 text-center justify-start  h-[25vh] row-start-1 row-end-3'>
                  <input  type="text" name="" id=""  className='w-[20vw] h-[20vh] outline-none text-center
                  '/>
                  {Userchat}
                
                  
                  

                </div>
                <div className='col-start-2 col-end-3 justify-end  h-[25vh] text-center row-start-2 row-end-3
                '>
                  <input onChange={Handlechange} value={para} type="text" name="" id="" className='w-[20vw] h-[20vh]  outline-none text-center'/>
                  {Userchat}
                </div>

            </div>
          </form>
        </div>

      
    </main>
  )
}

export default Chatbox
