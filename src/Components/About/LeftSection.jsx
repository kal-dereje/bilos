import video from "../../assests/videos/bilos-video.mp4";
import bil from "../../assests/images/bilo-s-pastry.jpg";
import poster from "../../assests/images/poster.png";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";
const Left = () => {
  const [playButton, setPlayButton] = useState(true);
  const handelClick = () => {
    if (playButton) document.getElementById("video").play();
    else document.getElementById("video").pause();

    setPlayButton((prev) => {
      return !prev;
    });
  };

  return (
    <div className="w-11/12 lg:w-1/2 relative   ">
      <video
        id="video"
        className="w-full lg:w-11/12   h-full object-cover"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full lg:w-11/12  h-full top-0 flex flex-col items-center justify-center">
        <span onClick={handelClick} className="flex h-20 w-20 relative">
          <span className="animate-ping-slow  absolute inline-flex h-full w-full rounded-full bg-orange-400  opacity-75"></span>
          <span className="relative inline-flex rounded-full h-20 w-20 bg-orange-400 items-center justify-center">
            {playButton && <FaPlay size={18} className="text-white" />}
            {!playButton && <FaPause size={18} className="text-white" />}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Left;
