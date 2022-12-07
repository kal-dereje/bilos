import { useEffect, useReducer } from "react";
import { BsList } from "react-icons/bs";
import LogoOne from "../../assests/logo/logo-one.png";
import LogoTwo from "../../assests/logo/logo-two.png";
import { ACTION, headerState, reducer } from "../../reducer";

function Header() {
  const [state, dispatch] = useReducer(reducer, headerState);

  useEffect(() => {
    function handelScroll(e) {
      let about = document.getElementById("About").getBoundingClientRect().top;
      let menu = document.getElementById("Menu").getBoundingClientRect().top;
      let specials = document
        .getElementById("Menu")
        .getBoundingClientRect().top;
      let events = document.getElementById("Menu").getBoundingClientRect().top;
      let gallery = document.getElementById("Menu").getBoundingClientRect().top;
      let contact = document.getElementById("Menu").getBoundingClientRect().top;

      if (about > 50) dispatch({ type: ACTION.HOME });
      else if (menu > 50) dispatch({ type: ACTION.ABOUT });
      else dispatch({ type: ACTION.MENU });
      // else if (specials > 50) dispatch({ type: ACTION.MENU });
      // else if (events > 50) dispatch({ type: ACTION.SPECIALS });
      // else if (gallery > 0) dispatch({ type: ACTION.EVENTS });
      // else if (contact > 0) dispatch({ type: ACTION.GALLERY });
      console.log(menu);
    }
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  });

  const handelListClick = () => {
    dispatch({ type: ACTION.LISTCLICK });
  };

  return (
    <div className="flex justify-between px-14 lg:px-0 lg:justify-around   items-center py-5 bg-black bg-opacity-80 text-white fixed top-0 w-full z-30 ">
      <div className="flex flex-nowrap gap-2 items-center">
        <div className="bg-white rounded-full">
          <img className="w-12  " src={LogoOne} alt="Logo" />
        </div>

        <img src={LogoTwo} className="h-10" alt="" />
      </div>
      <nav className={"lg:block" + state["List Click"] ? "block" : "hidden "}>
        <ul className="flex gap-8 items-center  text-lg font-Courgette">
          <a
            onClick={() => dispatch({ type: ACTION.HOME })}
            className={`${state.Home} transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer`}
            href="#Home"
          >
            Home
          </a>
          <a
            onClick={() => dispatch({ type: ACTION.ABOUT })}
            className={`${state.About} transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer`}
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => dispatch({ type: ACTION.MENU })}
            className={`${state.Menu} transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer`}
            href="#Menu"
          >
            Menu
          </a>
          <a
            onClick={() => dispatch({ type: ACTION.SPECIALS })}
            className={`${state.Specials} transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer`}
          >
            Specials
          </a>
          <a
            onClick={() => dispatch({ type: ACTION.EVENTS })}
            className={`${state.Events} transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer`}
          >
            Events
          </a>
          <a
            onClick={() => dispatch({ type: ACTION.GALLERY })}
            className={`${state.Gallery} transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer`}
          >
            Gallery
          </a>
          <a
            onClick={() => dispatch({ type: ACTION.CONTACT })}
            className={`${state.Contact} transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer`}
          >
            Contact
          </a>
        </ul>
      </nav>
      <button className=" px-12 py-2 bg-Bilos-primary rounded-full font-Courgette font-semibold transition-all ease-linear duration-200 hover:scale-105 hover:bg-orange-500 hidden lg:block">
        Location
      </button>
      <BsList
        size={40}
        className="text-Bilos-primary lg:hidden cursor-pointer"
        onClick={handelListClick}
      />
    </div>
  );
}

export default Header;
