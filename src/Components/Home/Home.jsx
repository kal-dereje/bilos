import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div
      id="Home"
      className="
      h-[100vh] relative    text-white bg-[url('./assests/images/cup.png')] "
    >
      <div className="absolute h-[100vh] w-full bg-black bg-opacity-50"></div>
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 relative z-20 ">
        <h1 className="font-Pacifico text-3xl sm:text-6xl ">
          <span className="text-Bilos-primary">Bilo's</span> Pastry
        </h1>
        <h2 className="font-Pacifico text-2xl sm:text-4xl text-center ">
          satisfy your craving with a smile
        </h2>
        <p className="font-Kanit font-extralight text-center w-[50%] text-sm sm:text-lg ">
          To want is how pain to a something who something. I followed them as
          it is and seeks to follow nothing as some one. Darkened other pain
          relief as.
        </p>
        <div className="font-Kanit text:lg  sm:text-xl font-normal flex gap-8">
          <button className="bg-transparent py-2 px-8 border-2 rounded-full border-Bilos-primary hover:bg-Bilos-primary transition-all ease-linear duration-200 hover:scale-105 ">
            Our Menu
          </button>
          <button className="bg-transparent py-2 px-8 border-2 rounded-full border-Bilos-primary  hover:bg-Bilos-primary transition-all ease-linear duration-200 hover:scale-105 ">
            Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
