import { useState } from "react";

import poster from "../../assests/images/poster.png";
import video from "../../assests/videos/bilos-video.mp4";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaPlay, FaPause } from "react-icons/fa";

const About = () => {
  const [playButton, setPlayButton] = useState(true);
  const handelClick = () => {
    if (playButton) document.getElementById("video").play();
    else document.getElementById("video").pause();

    setPlayButton((prev) => {
      return !prev;
    });
  };
  return (
    <div className="  top-0 left-0 w-auto h-auto " id="About">
      <div className=" relative top-0 left-0   w-screen  h-[91vh] bg-[black]   text-Bilos-primary px-16 z-[1] ">
        <img
          src="\images\About2.jpg"
          className="  absolute top-0 left-32  h-[91vh] w-auto  opacity-20"
          alt="about"
        />

        <div className="relative top-10 left-5 text-2xl font-bold font-serif text-Bilos-primary text-opacity-70 ">
          About_________
        </div>
        <div className=" flex-wrap md:flex ">
          <div class=" relative top-20 w-[45%] text-ld  px-15 text-slate-300  ">
            <div className="text-3xl mb-3 font-medium sm:text-lg">
              Bilos is seen as a second home by many not only for their tasty
              food.
            </div>
            but also the warm welcom you recieve the moment you walk in.So by
            colonel hearted ferrars..<br></br>
            <div className="flex gap-3 mt-8">
              <div>
                <AiFillCheckCircle
                  size="40"
                  className="border-2 border-Bilos-primary p-[6px] text-Bilos-primary text-opacity-70  rounded-full "
                />

                <AiFillCheckCircle
                  size="40"
                  className="border-2 border-Bilos-primary p-[6px] text-Bilos-primary text-opacity-70  rounded-full mt-6"
                />

                <AiFillCheckCircle
                  size="40"
                  className="border-2 border-Bilos-primary p-[6px] text-Bilos-primary text-opacity-70  rounded-full mt-8"
                />
              </div>
              <p className="font-semibold p-4">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br></br> <br></br> Duis aute irure dolor in reprehenderit in
                voluptate velit. Ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                <br></br>
                <br></br> Duis aute irure dolor in reprehenderit in voluptate
                trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                <br></br> <br></br>
                
              </p>
            </div>
          </div>
          <div>
            
          </div>
       
          
          <div className=" relative  top-5 left-32  transform hover:scale-105 hover:duration-200 w-[45%] mr-5 ">
          <video
        id="video"
        className=" lg:w-11/12 w-[490px] h-[490px] rounded-2xl"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full lg:w-11/12  h-full top-0 flex flex-col items-center justify-center">
        <span onClick={handelClick} className="flex h-20 w-20 relative">
          <span className="animate-ping-slow  absolute inline-flex h-full w-full rounded-full bg-orange-400  opacity-75"></span>
          <span className="relative inline-flex rounded-full h-20 w-20 bg-orange-400 items-center justify-center">
            {playButton && <FaPlay size={18} className="text-white " />}
            {!playButton && <FaPause size={18} className="text-white" />}
          </span>
        </span>
      </div>
          </div>
          <div className="w-20 h-20 border-Bilos-primary border-r-[6px]  border-b-[6px] absolute top-[450px] left-[85%] z-[1] hover:scale-105 hover:duration-200"></div>
          <div className="w-20 h-20 border-Bilos-primary border-l-[6px]  border-t-[6px] absolute top-[65px] left-[57%] z-[1] hover:scale-105 hover:duration-200"></div>
         
        </div>
      </div>
    </div>
  );
}

export default About;
