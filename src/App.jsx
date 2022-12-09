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

function App() {
  const [state, dispatch] = useReducer(reducer, headerState);

  return (
    <div>
      <Home />
      <About />
      <Menu />
      <Specials />
      <Events />
      <Gallery />
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
