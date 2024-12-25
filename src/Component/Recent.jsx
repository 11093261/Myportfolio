import React from 'react'
import { Occations } from './Required'



const Recent = () => {
  return (
    <main className='flex gap-[20px] md:h-[200vh] h-[150vh] md:w-[100%] w-[100%] justify-center items-center  flex-col bg-emerald-800'>
        <div className=' md:h-[100vh] h-[70vh] w:md-[50%] w-[100%] justify-center items-center flex-col'>

            <h1 className='font-medium text-[30px] text-center text-red-100'>My Recent Involvements</h1>
            <div className='flex justify-center py-[30px] items-center h-[50vh] w-[100%] flex-col gap-3'>
                {Occations.map((items,index)=>(
                    <div key={index} className='md:h-[20vh] h-[25vh] md:w-[50%] w-[100%] justify-center bg-red-100 flex flex-col  items-center'>
                        <div className='h-[30vh] w-[100%] flex justify-center text-[15px] items-center bg-[whitesmoke] flex-col text-emerald-800' >
                            <div className='bg-red-300 w-[50%]'>

                                <p className='w-[100%] text-center'>{items.Event} </p>
                            </div>
                            <div className=' w-[100%] px-3'>

                                <p className='w-[100%] text-center'>{items.happens}</p>
                            </div>
                            <p>{items.Year}</p>

                        </div>


                    </div>
                

                ))}


            </div>
        </div>

      
    </main>
  )
}

export default Recent
