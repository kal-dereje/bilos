import { BsCheckAll } from "react-icons/bs";

const Right = () => {
  return (
    <div className="w-11/12 lg:w-1/2  flex flex-col justify-start items-start gap-5 font-normal text-[17px]">
      <h1 className="font-Pacifico text-4xl text-Bilos-third">
        Eum ipsam laborum deleniti velit pariatur architecto aut nihil
      </h1>
      <p className="font-Kanit text-Bilos-fourth">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure
        dolor in reprehenderit
      </p>
      <p className="font-Kanit text-Bilos-fourth italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="flex items-center gap-3 font-Kanit text-Bilos-third ">
        <BsCheckAll className="text-Bilos-primary" />
        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="flex  gap-3 font-Kanit text-Bilos-third">
        <BsCheckAll className="text-Bilos-primary" />
        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="flex  gap-3 font-Kanit text-Bilos-third">
        <BsCheckAll className="text-Bilos-primary" />
        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className=" font-Kanit text-Bilos-fourth">
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>
  );
};

export default Right;
