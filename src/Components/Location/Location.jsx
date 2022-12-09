import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

function Location() {
  return (
    <div id="Location" className="flex-col relative">
      <h1 className=" text-Bilos-third text-center text-4xl mt-32 mb-0 header-font">
        Our <span className=" text-Bilos-primary">Locations</span>{" "}
      </h1>
      <div className="flex m-10 mt-10 mb-24 rounded-2xl ">
        <iframe
          className="w-full h-72"
          src="https://www.google.com/maps/d/u/0/embed?mid=1aWD8hA_Demr6LwUA0l-fwGFw2d8HMxw&ehbc=2E312F"
        ></iframe>
      </div>

      <div className=" flex-col bg-neutral-800  flex-wrap h-72 w-full">
        <div className=" p-4 text-center m-6">
          <h1 className=" p-4 text-Bilos-primary text-4xl  header-font">
            Bilo's Pastry
          </h1>
          <h2 className="pt-3 text-font text-Bilos-fourth">
            Visit us on our socials.
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <a href="https://www.facebook.com/BilosPastry/">
            <BsFacebook className="m-2 text-Bilos-fourth hover:bg-Bilos-primary rounded-full  text-3xl transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110  duration-300 " />
          </a>
          <a href="https://www.instagram.com/bilos_pastry/">
            <BsInstagram className="m-2 text-Bilos-fourth hover:bg-Bilos-primary rounded-xl  text-3xl transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110  duration-300" />
          </a>
          <a href="https://www.linkedin.com/company/bilo-s-pastry/">
            <AiFillLinkedin className="m-2 text-Bilos-fourth hover:bg-Bilos-primary rounded-sm  text-4xl transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110  duration-300" />
          </a>
        </div>
        <h3 className="m-4 items-center text-center text-font text-Bilos-fourth">
          © Copyright <span className=" font-extrabold">Bilo's Pastry</span>.
          All Rights Reserved
        </h3>
      </div>
    </div>
  );
}

export default Location;
