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
      className="min-h-screen flex flex-col items-start gap-10 md:pt-52 pt-32 bg-[#1A1814]"
    >
      <h1 className="text-slate-300 font-Pacifico text-4xl md:pl-32 pl-10">
        Check our tasty <span className="text-Bilos-primary">Menu</span>
      </h1>
      <div className="flex flex-wrap w-full   sm:flex-nowrap items-center gap-8 justify-center font-Kanit ">
        <button
          onClick={handelMenuClick}
          className={`${state.Torta}  ${
            selectedMenu === "Torta" && "text-Bilos-primary"
          } hover:text-Bilos-primary text-white transition-all ease-linear duration-200 hover:scale-105`}
        >
          Torta
        </button>
        <button
          onClick={handelMenuClick}
          className={`${state.Cakes}  ${
            selectedMenu === "Cakes" && "text-Bilos-primary"
          }  hover:text-Bilos-primary text-white transition-all ease-linear duration-200 hover:scale-105`}
        >
          Cakes
        </button>
        <button
          onClick={handelMenuClick}
          className={`${state["Hot Drinks"]}  ${
            selectedMenu === "Hot Drinks" && "text-Bilos-primary"
          } hover:text-Bilos-primary text-white transition-all ease-linear duration-200 hover:scale-105`}
        >
          Hot Drinks
        </button>
        <a
          href="https://qr.ultraet.com/restaurant/bilos-pastry"
          onClick={handelMenuClick}
          className={`${state["Show All"]} ${
            selectedMenu === "Show All" && "text-Bilos-primary"
          } hover:text-Bilos-primary text-white transition-all ease-linear duration-200 hover:scale-105`}
        >
          Show All
        </a>
      </div>
      <div className="grid md:grid-cols-2   grid-cols-1 w-full px-8 md:px-16 lg:px-32  gap-10">
        {menuList.map((item, index) => {
          if (selectedMenu === "Show All") {
            return (
              <Menulist
              img={item.img}
                menu={item.menu}
                price={item.price}
                descripton={item.description}
                key={index + 1}
              />
            );
          }
          return (
            item.type === selectedMenu && (
              <Menulist
              img={item.img}
                menu={item.menu}
                price={item.price}
                description={item.description}
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

const Menulist = ({img, menu, price, description }) => {
  return (
    <div className="w-full lg:w-[90%] flex  items-center gap-4 font-Kanit font-bold text-lg animate-grow ">
      
         <img
                      src={img}
                      className="w-16 h-16 rounded-full bg-center border-4  border-[#484643] "
                    />
      

      <div className="flex-grow">
        <div className="flex justify-between items-center w-full ">
          <p className=" pr-1 text-slate-300">{menu}</p>
          <div className=" border-b border-dashed  border-Bilos-fourth flex-grow"></div>
          <p className="text-Bilos-primary
           pl-1">{price}</p>
        </div>
        <p className="text-Bilos-fourth text-sm font-extralight italic">
          {description}
        </p>
      </div>
    </div>
  );
};
