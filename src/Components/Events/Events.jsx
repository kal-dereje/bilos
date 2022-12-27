import React from "react";
import event from "../../assests/images/event.jpg";
import happy from "../../assests/images/happy.jpg";
import parties from "../../assests/images/parties.jpg";
import wd from "../../assests/images/wd.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Events() {
  return (
    <div
      className="w-full  min-h-screen bg-[url('./assests/images/event.jpg')] "
      id="Events"
    >
      <div className="  w-full min-h-screen  bg-black bg-opacity-80  ">
        <div className=" pt-20 pl-8 md:pl-20 text-2xl font-bold font-serif text-white text-opacity-70 ">
          Event______
        </div>
        <div className="  pl-8 md:pl-20 pt-2 text-2xl md:text-4xl font-bold font-serif text-[#CDA45E]  ">
          Orgainize your event Our Pastry
        </div>
        <div className="pt-10 pb-10 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper  "
          >
            <SwiperSlide className="w-full  ">
              <div className="w-full  flex flex-col md:flex-row  md:justify-evenly gap-5 md:gap-0">
                <img
                  className="w-full md:w-[40%] "
                  src={wd}
                  alt="image slide 3"
                />
                <div className=" text-white w-full md:w-[40%] ">
                  <h5 className="text-3xl  text-[#CDA45E] pl-1 md:pl-0 mb-5">
                    Wedding
                  </h5>
                  <p className="text-lg font-light pl-1 md:pl-0  ">
                    A wedding catering package serves one of the most important.
                    needs for soon to wed couples Our different packages give
                    soon to wed couples the freedom to choose whether. to hold a
                    traditional, intimate or make it a home celebration.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-evenly">
              <div className="w-full  flex flex-col md:flex-row  md:justify-evenly gap-5 md:gap-0">
                <img
                  className="w-full md:w-[40%]"
                  src={happy}
                  alt="image slide 3"
                />
                <div className=" text-white w-full md:w-[40%]">
                  <h5 className="text-3xl  text-[#CDA45E] pl-1 md:pl-0 mb-5">
                    Birthdays
                  </h5>
                  <p className="text-lg font-light pl-1 md:pl-0   ">
                    A birthday catering package serves one of the most
                    important. needs for soon to wed couples Our different
                    packages give soon to our customers the freedom to choose
                    from our different packages .
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-evenly">
              <div className="w-full  flex flex-col md:flex-row  md:justify-evenly gap-5 md:gap-0">
                <img
                  className="w-full md:w-[40%]"
                  src={parties}
                  alt="image slide 3"
                />
                <div className="text-white w-full md:w-[40%]">
                  <h5 className="text-3xl  text-[#CDA45E] pl-1 md:pl-0 mb-5 ">
                    Private Parties
                  </h5>
                  <p className="text-lg font-light pl-1 md:pl-0   ">
                    A private party catering package serves one of the most
                    important. needs for soon to wed couples Our different
                    packages give soon to our customers the freedom to choose
                    from our different packages .
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Events;
