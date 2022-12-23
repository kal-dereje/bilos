import React from "react";
import event from "../../assests/images/event.jpg"
import happy  from "../../assests/images/happy.jpg"
import parties from "../../assests/images/parties.jpg"
import wd from "../../assests/images/wd.jpg"
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
    <div className="w-full  top-0 bg-[url('./assests/images/event.jpg')] " id="Events">
      <div className="  w-full  bg-black bg-opacity-80  ">
        <div className=" pt-20 pl-8 md:pl-20 text-2xl font-bold font-serif text-white text-opacity-70 ">
          Event______
        </div>
        <div className="  pl-8 md:pl-20 pt-2 text-4xl font-bold font-serif text-[#CDA45E]  ">
          Orgainize your event Our Pastry
        </div>
        <div className="pt-10 pb-10 text-center justify-center">
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
            <SwiperSlide className="flex-warp  md:flex text-center justify-center sm:justify-start ">
              <img
                className="w-auto h-auto md:pl-20 pl-0 "
                src={wd}
                alt="image slide 3"
              />
              <div class=" text-white  md:pl-20 pt-5 ">
                <h5 class="text-3xl  text-[#CDA45E]  mb-5">Wedding</h5>
                <p class="text-xl  p-8 ">
                  A wedding catering package serves one of the{" "}
                
                
                  most important. needs for soon to wed couples
                
                
                  Our different packages give soon to wed couples the{" "}
              
                freedom to choose whether.
              
                  to hold a traditional, intimate or make it a home celebration.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex-warp  md:flex text-center justify-center sm:justify-start">
              <img
                className="w-auto h-auto md:pl-20 pl-0  rounded-lg sm-w-full"
                src={happy}
                alt="image slide 3"
              />
              <div class=" text-white md:pl-20 pt-5">
                <h5 class="text-3xl tex-left text-[#CDA45E] mb-5 ">
                  Birthdays
                </h5>
                <p class="text-xl p-8">
                  A birthday catering package serves one of the
                  {" "}
                  most important. needs for soon to wed couples
              
                  Our different packages give soon to our customers the{" "}
        
                  freedom to choose from our different packages .
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex-warp  md:flex text-center justify-center sm:justify-start">
              <img
                className="w-auto h-auto md:pl-20"
                src={parties}
                alt="image slide 3"
              />
              <div class=" text-white  md:pl-20 pt-5">
                <h5 class="text-3xl  text-[#CDA45E] mb-5 ">Private Parties</h5>
                <p class="text-xl p-8">
                  A private party catering package serves one of the{" "}
        
                  most important. needs for soon to wed couples
      
                  Our different packages give soon to our customers the{" "}
        
                  freedom to choose from our different packages .
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
       
    </div>
  );
}

export default Events;
