import { useEffect, useReducer } from "react";
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import LogoOne from "../../assests/logo/logo-one.png";
import LogoTwo from "../../assests/logo/logo-two.png";
import { ACTION, headerState, reducer } from "../../reducer";

function Header() {
  const [state, dispatch] = useReducer(reducer, headerState);

  useEffect(() => {
    function handelScroll(e) {
      let about = document.getElementById("About").getBoundingClientRect().top;
      let menu = document.getElementById("Menu").getBoundingClientRect().top;
      let events = document
        .getElementById("Events")
        .getBoundingClientRect().top;
      let gallery = document
        .getElementById("Gallery")
        .getBoundingClientRect().top;
      let contact = document
        .getElementById("Contact")
        .getBoundingClientRect().top;

      if (about > 50) dispatch({ type: ACTION.HOME });
      else if (menu > 50) dispatch({ type: ACTION.ABOUT });
      else if (events > 50) dispatch({ type: ACTION.MENU });
      else if (gallery > 50) dispatch({ type: ACTION.EVENTS });
      else if (contact > 50) dispatch({ type: ACTION.GALLERY });
      else dispatch({ type: ACTION.CONTACT });
    }

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  });

  const handelListClick = () => {
    dispatch({ type: ACTION.LISTCLICK });
  };

  return (
    <div className="flex justify-around sm:justify-between sm:px-14   lg:px-0 lg:justify-around   items-center py-5 bg-black bg-opacity-60 text-white fixed top-0 w-full z-30 ">
      <div className="flex flex-nowrap gap-2 items-center cursor-pointer">
        <div className="bg-white rounded-full">
          <img className="w-12  " src={LogoOne} alt="Logo" />
        </div>

        <img src={LogoTwo} className="h-10" alt="" />
      </div>
      <nav
        id="nav"
        className={`${
          !state["List Click"] && "hidden"
        } absolute right-0 top-0 h-screen w-3/5 bg-black bg-opacity-80 lg:bg-transparent lg:w-auto lg:h-auto lg:relative lg:block `}
      >
        <ul
          className={
            "flex flex-col justify-center items-center h-full w-full  lg:flex-row lg:justify-self-auto gap-8     font-sans  "
          }
        >
          <Anchor
            onclick={() => dispatch({ type: ACTION.HOME })}
            title="Home"
            state={state.Home}
          />
          <Anchor
            onclick={() => dispatch({ type: ACTION.ABOUT })}
            title="About"
            state={state.About}
          />
          <Anchor
            onclick={() => dispatch({ type: ACTION.MENU })}
            title="Menu"
            state={state.Menu}
          />

          <Anchor
            onclick={() => dispatch({ type: ACTION.EVENTS })}
            title="Events"
            state={state.Events}
          />

          <Anchor
            onclick={() => dispatch({ type: ACTION.GALLERY })}
            title="Gallery"
            state={state.Gallery}
          />
          <Anchor
            onclick={() => dispatch({ type: ACTION.CONTACT })}
            title="Contact"
            state={state.Contact}
          />
        </ul>
      </nav>
      <button className=" px-6 py-2 bg-Bilos-primary rounded-full font-sans font-semibold transition-all ease-linear duration-200 hover:scale-105 hover:bg-orange-500 hidden lg:block">
        Location
      </button>
      {state["List Click"] ? (
        <button onClick={handelListClick}>
          <RxCross2
            size={40}
            className="text-Bilos-primary lg:hidden cursor-pointer relative z-40"
          />
        </button>
      ) : (
        <button onClick={handelListClick}>
          <BsList
            size={40}
            className="text-Bilos-primary lg:hidden cursor-pointer relative z-40 "
          />
        </button>
      )}
    </div>
  );
}

const Anchor = ({ onclick, title, state }) => {
  return (
    <a
      href={`#${title}`}
      onClick={onclick}
      className={`${state} transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer`}
    >
      {title}
    </a>
  );
};
export default Header;
