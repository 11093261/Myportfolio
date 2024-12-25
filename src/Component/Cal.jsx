import React, { useState } from 'react'

const cal = () => {
    const[inputvalue , setinputvalue] = useState('')
    const[result , setresult] = useState(0)

    const handleclick = (value) =>{

      setinputvalue((prev)=> prev + value)
    }

    const handleequal = ()=>{
      try{
        setresult(eval(cal))
      }
      catch(e){
        setresult("Error")
      }
    }

    const handleclear = ()=>{
      setinputvalue("")
      setresult(0)

    }
    


  return (
    <main className="h-[70vh] w-[100%] justify-center items-center bg-yellow-500 flex">
      <div className="h-[80%] w-[50%] justify-center items-center bg-blue-500 flex">
        <div  className = "h-[15vh]">
          {inputvalue || '0'}
            

        </div>
        <div className="grid-cols-5 grid-flow-col grid gap-4 bg-blue-50 justify-center content-center h-[40vh]">
          <button onClick={handleclick(9)}>9</button>
          <button onClick={handleclick(8)}>8</button>
          <button onClick={handleclick(7)}>7</button>
          <button onClick={handleclick('+')}>+</button>
          <button onClick={handleclick(5)}>5</button>
          <button onClick={handleclick(6)}>6</button>
          <button onClick={handleclick(".")}>.</button>
          <button onClick={handleclick('-')}>-</button>
          <button onClick={handleequal('=')}>=</button>
          <button onClick={handleclear()}>clear</button>
        </div>
      </div>
    </main>
  );
}

export default cal
