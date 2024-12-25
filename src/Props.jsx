import React from 'react'

const Props = ({header,text, list}) => {
  return (
    <div className="h-[70vh] w-[100%]">
      <div className=' h-[40vh] w-[80%] justify-center'>
        <h1>{header}</h1>
        <p>{text}</p>
        <ul>
          <li>{list}</li>
          <li>{list}</li>
          <li>{list}</li>
        </ul>
      </div>
    </div>
  );
}

export default Props
