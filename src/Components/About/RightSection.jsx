import poster from "../../assests/images/poster.png";
import video from "../../assests/videos/bilos-video.mp4";
import { FaPlay, FaPause } from "react-icons/fa";

const Right = ({ handelClick, playButton }) => {
  const before =
    " before:top-6 group-hover:before:left-2 group-hover:before:top-2  before:transform-all before:ease-linear before:duration-300 before:left-6 before:absolute  before:border-l-[5px] before:border-t-[5px] before:w-14 before:h-14 before:border-Bilos-primary";
  const after =
    "after:right-6  group-hover:after:right-2 group-hover:after:bottom-2  after:transform-all after:ease-linear after:duration-300 after:absolute after:bottom-6 after:border-r-[5px] after:border-b-[5px] after:w-14 after:h-14 after:border-Bilos-primary";

  return (
    <div className="relative group   transform-all hover:scale-105 ease-linear duration-300 mt-12 sm:w-3/12 md:w-[450px] border-[5px] border-[#383635] md:ml-10  ">
      <div className={after + " " + before + " "}>
        <video id="video" className="   " poster={poster}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute w-full lg:w-11/12  h-full top-0 flex flex-col items-center justify-center">
        <span
          onClick={handelClick}
          className="flex h-20 w-20 relative cursor-pointer"
        >
          <span className="animate-ping-slow  absolute inline-flex h-full w-full rounded-full bg-orange-400  opacity-75"></span>
          <span className="relative inline-flex rounded-full h-20 w-20 bg-orange-400 items-center justify-center">
            {playButton && <FaPlay size={18} className="text-white " />}
            {!playButton && <FaPause size={18} className="text-white" />}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Right;
