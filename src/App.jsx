import "./index.css";
import { useReducer } from "react";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import { CgArrowUp } from "react-icons/cg";
import { reducer, ACTION, headerState } from "./reducer";
import Location from "./Components/Location/Location";
import Contact from "./Components/Contact/Contact";
import Specials from "./Components/Specials/Specials";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import pz from "./images/pz.png";
import tg from "./images/tg.png";
import priv from "./images/priv.png";
import bor from "./images/bor.png";
import car from "./images/car.png";
import cup from "./images/cup.png";
import duc from "./images/duc.png";
import han from "./images/han.png";
import hancar from "./images/hancar.png";
import her from "./images/her.png";
import injo from "./images/injo.png";

function App() {
  const [state, dispatch] = useReducer(reducer, headerState);
  const image = [pz, tg, priv];
  const image2 = [bor, car, cup, duc, han, hancar, her, injo];

  return (
    <div>
      <Home />
      <About />
      <Menu />
      <Specials />
      <br />
      <br />
      <br />
      <Events slides={image} />

      <Gallery slides={image2} />

      <Contact />
      <Location />
      <a
        href="#Home"
        className="fixed right-10 bottom-10 text-white bg-Bilos-primary p-2 rounded-full animate-bounce "
      >
        <CgArrowUp size={30} />
      </a>
    </div>
  );
}

export default App;
