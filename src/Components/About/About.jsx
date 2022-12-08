import { useState } from "react";
import Left from "./LeftSection";
import Right from "./RightSection";

function About() {
  return (
    <div id="About" className="bg-green-100">
      <div className=" flex flex-col gap-10 lg:gap-0 lg:flex-row items-center ">
        <Left />
        <Right />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 mt-32">
        <h1 className="font-Pacifico text-3xl text-slate-800 text-center">
          Why choose Our Restaurant
        </h1>
        <p className="font-Kanit font-bold text-center w-1/3 text-Bilos-third">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
        <div className="flex flex-col lg:flex-row justify-center  gap-20">
          <Box
            number={"01"}
            title={"Lorem Ipsum"}
            descripton=" Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur
        ducimus vero placeat"
          />
          <Box
            number={"02"}
            title={"Repellat Nihil"}
            descripton=" Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur
        ducimus vero placeat"
          />
          <Box
            number={"03"}
            title={"Ad ad velit qui"}
            descripton=" Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur
        ducimus vero placeat"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

const Box = ({ number, title, descripton }) => {
  const [bannerColor, setBannerColor] = useState("text-Bilos-primary");
  return (
    <div
      onMouseEnter={() => setBannerColor("text-white")}
      onMouseLeave={() => setBannerColor("text-Bilos-primary")}
      className="w-11/12 lg:w-1/4 h-1/3 flex flex-col gap-5 justify-around items-left  px-10 py-12 shadow-custom transition-all duration-300 hover:text-white hover:bg-Bilos-primary cursor-pointer hover:py-6 bg-green-50"
    >
      <h1
        className={
          "font-Kanit font-extrabold text-3xl  hover:text-white " + bannerColor
        }
      >
        {number}
      </h1>
      <h2 className="font-Courgette font-bold text-2xl">{title}</h2>
      <p className="font-Kanit ">{descripton}</p>
    </div>
  );
};
