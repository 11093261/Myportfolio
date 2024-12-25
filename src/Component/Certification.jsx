import React from 'react'

const More = () => {
  return (
    <main className="h-[300vh] w-[100%] flex justify-center flex-col md:w-[100%] items-center bg-emerald-800 gap-12">
      <h1 className="text-[30px] font-medium text-white text-[center]">
        Certification & Skills
      </h1>
      <div className="grid grid-cols-3 gap-[25px] md:w-[80%] w-[100%] md:h-[70vh] h-[70vh]  justify-center items-center bg-red-100 px-5">
        <div className="col-start-1 col-end-2">
          <div className="md:w-[50%] w-[100%] flex flex-row justify-center items-center gap-[20px]">
            <figure>
              <img src="" alt="" />
              <figcaption>
                <b className="md:w-[50%] w-[100%] text-emerald-800 text-[10px] md:text-[20px]">
                  World Bank Certification on Frontend webdevelopment
                </b>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="col-start-2 col-end-3">
          <div className="md:w-[50%] w-[100%] flex flex-col justify-center items-center">
            <figure>
              <img src="" alt="" />
              <figcaption>
                <b className="md:w-[50%] w-[100%] text-emerald-800 text-[10px] md:text-[20px]">
                  Abia Ministry of Education Certificate on Frontend
                  webdevelopment
                </b>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="col-start-3 col-end-4">
          <div className="md:w-[50%] w-[100%] flex flex-col justify-center items-center">
            <figure>
              <img src="" alt="" />
              <figcaption>
                <b className="md:w-[50%] w-[100%] text-emerald-800 text-[10px] md:text-[20px]">
                  Learn Factory hub Certificate on Frontend webdevelopment
                </b>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="md:h-[90vh] h-[70vh] md:w-[80%] w-[100%] flex flex-col justify-center items-center">
        <div className="md:h-[30vh] h-[50vh] md:w-[50%] w-[80%] flex justify-around gap-[10px] items-center flex-row">
          <p className="skill">HTML 5</p>
          <div>
            <hr className="absolute -z-10 w-[40%] bg-white rounded-md h-[40vh] " />
            <hr className="relative -z-5 w-[30vw] bg-red-400 h-3" />
          </div>
        </div>
        <div className="md:h-[30vh]  h-[50vh] md:w-[50%] w-[80%] flex justify-around gap-[10px] items-center flex-row">
          <p className="skill">CSS3</p>
          <div>
            <hr className="absolute -z-10 w-[40%] bg-white rounded-md h-[40vh] " />
            <hr className="relative -z-5 w-[30vw] bg-red-400 h-3" />
          </div>
        </div>
        <div className="md:h-[30vh] h-[50vh] md:w-[50%] w-[80%]  flex justify-around gap-[10px] items-center flex-row">
          <p className="skill">TailwindCSS</p>
          <div>
            <hr className="absolute -z-10 w-[40%] bg-white rounded-md h-[40vh] " />
            <hr className="relative -z-5 w-[30vw] bg-red-400 h-3" />
          </div>
        </div>
        <div className="md:h-[30vh] h-[50vh] md:w-[50%] w-[80%]  flex justify-around gap-[10px] items-center flex-row">
          <p className="skill">Git/Github</p>
          <div>
            <hr className="absolute -z-10 w-[40%] bg-white rounded-md h-[40vh] " />
            <hr className="relative -z-5 w-[30vw] bg-red-400 h-3" />
          </div>
        </div>
        <div className="md:h-[30vh] h-[50vh] md:w-[50%] w-[80%]  flex justify-around gap-[10px] items-center flex-row">
          <p className="skill">Javascript</p>
          <div>
            <hr className="absolute -z-10 w-[40%] bg-white rounded-md h-[40vh] " />
            <hr className="relative -z-5 w-[30vw] bg-red-400 h-3" />
          </div>
        </div>
        <div className="md:h-[30vh] h-[50vh] md:w-[50%] w-[80%]  flex justify-around gap-[10px] items-center flex-row">
          <p className="skill">React.js</p>
          <div>
            <hr className="absolute -z-10 w-[40%] bg-white rounded-md h-[40vh] " />
            <hr className="relative -z-5 w-[30vw] bg-red-400 h-3" />
          </div>
        </div>
        <div className="md:h-[30vh] h-[50vh] md:w-[50%] w-[80%]  flex justify-around gap-[10px] items-center flex-row">
          <p className="skill">Next.js</p>
          <div>
            <hr className="absolute -z-10 w-[40%] bg-white rounded-md h-[40vh]" />
            <hr className="relative -z-5 w-[30vw] bg-red-400 h-3" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default More
