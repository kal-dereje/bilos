import { useState } from "react";
import Left from "./LeftSection";
import Right from "./RightSection";
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
    <div
      className="h-auto md:h-screen w-full bg-[url('./assests/images/About2.jpg')]"
      id="About"
    >
      <div className="w-full h-full overflow-hidden  bg-black bg-opacity-40 grid md:grid-cols-2 place-items-center">
        <div className=" ">
          <Left />
        </div>
        <div className="flex items-center justify-center">
          <Right handelClick={handelClick} playButton={playButton} />
        </div>
      </div>
    </div>
  );
};

export default About;
