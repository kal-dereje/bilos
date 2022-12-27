import { AiFillCheckCircle } from "react-icons/ai";
const Left = () => {
  return (
    <div className=" mx-auto  text-lg w-[80%]  text-slate-300  mt-20 mb-16 lg:mb-0 lg:mt-0">
      <p className="mb-10 text-Bilos-primary text-xl">About_____________</p>
      <div className="text-2xl mb-3 font-medium sm:text-lg">
        Bilos is seen as a second home by many not only for their tasty food.
      </div>
      <p>
        but also the warm welcom you recieve the moment you walk in.So by
        colonel hearted ferrars..
      </p>
      <br></br>
      <Check
        text={"Ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      />
      <Check text={"Duis aute irure dolor in reprehenderit in voluptate"} />
      <Check
        text={
          " Duis aute irure dolor in reprehenderit in voluptate tridet storacalaperda mastiro dolore eu fugiat nulla pariatur."
        }
      />
    </div>
  );
};

export default Left;

const Check = ({ text }) => {
  return (
    <div className="flex flex-row gap-2 items-center w-full h-18 md:h-16">
      <AiFillCheckCircle
        size="40"
        className="border-2  border-Bilos-primary p-1 flex-shrink-0 text-Bilos-primary text-opacity-70  rounded-full"
      />
      <p>{text}</p>
    </div>
  );
};
