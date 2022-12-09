import { useState } from "react";
import menuList from "./MenuOption";
import { ACTION, menuState, reducer } from "../../reducer";
import { useReducer } from "react";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("Torta");
  const [state, dispatch] = useReducer(reducer, menuState);
  const handelMenuClick = (e) => {
    setSelectedMenu(e.currentTarget.textContent);
    dispatch({ type: `${e.currentTarget.textContent}` });
  };

  return (
    <div
      id="Menu"
      className="min-h-screen flex flex-col items-center gap-10 pt-32 bg-orange-50"
    >
      <h1 className="text-Bilos-third font-Pacifico text-4xl text-center">
        Check our tasty <span className="text-Bilos-primary">Menu</span>
      </h1>
      <div className="flex flex-wrap w-full sm:flex-nowrap lg:w-1/2 md:2/3 items-center gap-3 justify-center font-Kanit">
        <button
          onClick={handelMenuClick}
          className={`${state.Torta}  ${
            selectedMenu === "Torta" && "bg-Bilos-primary text-white"
          } py-1 px-5 border-2 border-Bilos-primary rounded-full hover:bg-Bilos-primary hover:text-white`}
        >
          Torta
        </button>
        <button
          onClick={handelMenuClick}
          className={`${state.Cakes}  ${
            selectedMenu === "Cakes" && "bg-Bilos-primary text-white"
          } py-1 px-5 border-2 border-Bilos-primary rounded-full hover:bg-Bilos-primary hover:text-white`}
        >
          Cakes
        </button>
        <button
          onClick={handelMenuClick}
          className={`${state["Hot Drinks"]}  ${
            selectedMenu === "Hot Drinks" && "bg-Bilos-primary text-white"
          } py-1 px-5 border-2 border-Bilos-primary rounded-full hover:bg-Bilos-primary hover:text-white`}
        >
          Hot Drinks
        </button>
        <a
          href="https://qr.ultraet.com/restaurant/bilos-pastry"
          onClick={handelMenuClick}
          className={`${state["Show All"]} ${
            selectedMenu === "Show All" && "bg-Bilos-primary text-white"
          } py-1 px-5 border-2 border-Bilos-primary rounded-full   hover:bg-Bilos-primary hover:text-white`}
        >
          Show All
        </a>
      </div>
      <div className="flex flex-wrap items-center   w-full px-16 lg:px-32  gap-10">
        {menuList.map((item, index) => {
          if (selectedMenu === "Show All") {
            return (
              <Menulist
                menu={item.menu}
                price={item.price}
                descripton={item.descripton}
                key={index + 1}
              />
            );
          }
          return (
            item.type === selectedMenu && (
              <Menulist
                menu={item.menu}
                price={item.price}
                descripton={item.descripton}
                key={index + 1}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

const Menulist = ({ menu, price, descripton }) => {
  return (
    <div className="w-11/12 lg:w-[45%] flex  items-center gap-4 font-Kanit font-bold text-lg animate-grow ">
      <div className="bg-[url('./assests/images/menuimages/double-chocolate-torta.jpg')] bg-cover w-16 h-16 rounded-full bg-center border-4  border-orange-200"></div>

      <div className="flex-grow">
        <div className="flex justify-between items-center w-full ">
          <p className="text-Bilos-primary pr-1 ">{menu}</p>
          <div className=" border-b border-dashed  border-Bilos-fourth flex-grow"></div>
          <p className="text-Bilos-third pl-1">{price}</p>
        </div>
        <p className="text-Bilos-fourth text-sm font-extralight italic">
          {descripton}
        </p>
      </div>
    </div>
  );
};
