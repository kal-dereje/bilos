import React from "react";
import { useState } from "react";

import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Gallery = (props) => {
  const [im, setIM] = useState(props.slides[0]);
  const [sc, setSC] = useState(" ");
  const [tt, setTT] = useState("hidden");
  const [vv, setVV] = useState("visible");
  const [bg, setBG] = useState("");
  const [cu, setCU] = useState("visible");
  const [cu2, setCU2] = useState("visible");
  const zoomer = (index) => {
    setIM(props.slides[index]);
    if (index === 0) {
      setCU("hidden");
    }
    if (index === 1) {
      setCU("visible");
      setCU2("visible");
      console.log("dfgjkjhgffk");
    }
    if (index === 2) {
      setCU("visible");
      setCU2("visible");
    }
    if (index === 3) {
      setCU("visible");
      setCU2("visible");
    }
    if (index === 4) {
      setCU("visible");
      setCU2("visible");
    }
    if (index === 5) {
      setCU("visible");
      setCU2("visible");
    }
    if (index === 6) {
      setCU("visible");
      setCU2("visible");
    }

    if (index === 7) {
      setCU("visible");
      setCU2("hidden");
    }

    setTT("visible");
    setVV("hidden");
    setBG("absolute");
  };

  const canceler = () => {
    setTT("hidden");
    console.log(" ki ki");
  };

  const less = (image) => {
    let b = props.slides.indexOf(image);
    if (b === 1) setCU("hidden");
    if (b === 7) setCU2("visible");

    setIM(props.slides[b - 1]);

    console.log("hi hi" + b);
  };

  const Greater = (image) => {
    let b = props.slides.indexOf(image);
    if (b === 0) setCU("visible");
    if (b === 6) setCU2("hidden");

    setIM(props.slides[b + 1]);

    console.log("hi hi hhh" + b);
  };

  return (
    <div id="Gallery" className=" w-full h-full md:h-screen   flex-col  bg-[#1A1814]">
      <div className="sm:absolute relative md:mt-0 mt-20">
        <div
          className=" flex flex-wrap justify-center mb-8  md:justify-start gap-2 md:mt-11 text-3xl pt-10 sm:text-5xl ml-5"
          id="one"
        >
          <h1 className="text-slate-300">Some photos from</h1>
          <h1 className=" text-Bilos-primary ">Our Restaurant</h1>
        </div>
       
        <br />

        <div className=" sm:w-full sm:h-full">
          <div className={"flex w-full h-96 "}>
            <div className="grid border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
              <div className="border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
                <img
                  src={props.slides[0]}
                  alt=""
                  className="border-b-2 border-b-[#1A1814] transform  transition duration-500 hover:scale-110"
                  onClick={() => zoomer(0)}
                />
              </div>
              <div className="border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
                <img
                  src={props.slides[1]}
                  alt=""
                  className="border-b-2 border-b-[#1A1814] transform  transition duration-500 hover:scale-110"
                  onClick={() => zoomer(1)}
                />
              </div>
            </div>
            <div className="grid border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
              <div className="border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
                <img
                  src={props.slides[2]}
                  alt=""
                  className="border-b-2 border-b-[#1A1814] transform  transition duration-500 hover:scale-110"
                  onClick={() => zoomer(2)}
                />
              </div>
              <div className="border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
                <img
                  src={props.slides[3]}
                  alt=""
                  className="border-b-2 border-b-[#1A1814] transform  transition duration-500 hover:scale-110"
                  onClick={() => zoomer(3)}
                />
              </div>
            </div>

            <div className="grid  border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
              <div className="border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
                <img
                  src={props.slides[4]}
                  alt=""
                  className="border-b-2 border-b-[#1A1814] transform  transition duration-500 hover:scale-110 w-96 sm:h-[325px] h-28"
                  onClick={() => zoomer(4)}
                />
              </div>
              <div className="border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
                <img
                  src={props.slides[5]}
                  alt=""
                  className="border-b-2 border-b-[#1A1814] transform  transition duration-500 hover:scale-110"
                  onClick={() => zoomer(5)}
                />
              </div>
            </div>
            <div className="grid border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
              <div className="border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
                <img
                  src={props.slides[6]}
                  alt=""
                  className="border-b-2 border-b-[#1A1814] transform  transition duration-500 hover:scale-110"
                  onClick={() => zoomer(6)}
                />
              </div>
              <div className="border-r-2 border-b-4 border-r-[#1A1814] border-b-[#1A1814] overflow-hidden">
                <img
                  src={props.slides[7]}
                  alt=""
                  className="border-b-2 border-b-[#1A1814] transform  transition duration-500 hover:scale-110"
                  onClick={() => zoomer(7)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper  w-5/6 h-80 mr-5"
          >
            <SwiperSlide>
              <img
                className="object-fill w-auto h-auto "
                src={props.slides[0]}
                alt="image slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-auto h-auto"
                src={props.slides[1]}
                alt="image slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-auto h-auto"
                src={props.slides[2]}
                alt="image slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-auto h-auto"
                src={props.slides[3]}
                alt="image slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-auto h-auto"
                src={props.slides[4]}
                alt="image slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-auto h-auto"
                src={props.slides[5]}
                alt="image slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-auto h-auto"
                src={props.slides[6]}
                alt="image slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-auto h-auto"
                src={props.slides[7]}
                alt="image slide 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div
        className={
          "flex justify-between w-full h-full bg-gray-900 bg-opacity-75  " +
          tt +
          " " +
          bg
        }
      >
        <button
          className={"  text-Bilos-primary  text-3xl ml-5  mb-[40px] " + cu}
          onClick={() => less(im)}
        >
          <FaLessThan className=" hover:text-white" />
        </button>
        <div className="flex justify-center w-full mt-[70px] md:w-4/6 ml-56 pl-10 ">
          <img
            src={im}
            alt=""
            className="w-full mr-56 md:w-3/5 h-[400px] md:ml-28"
          />
        </div>

        <button
          className={" text-Bilos-primary  text-3xl mr-7 mb-[40px] " + cu2}
          onClick={() => Greater(im)}
        >
          <FaGreaterThan className=" hover:text-white" />
        </button>
        <div className="mt-10 mr-24">
          <button
            className="  text-white text-3xl  "
            onClick={canceler}
          >
            <AiOutlineCloseSquare className="  hover:text-Bilos-primary  " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
