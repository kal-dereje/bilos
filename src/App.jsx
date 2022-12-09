import { useReducer } from "react";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import { reducer, ACTION, headerState } from "./reducer";
import Location from "./Components/Location/Location";
import Contact from "./Components/Contact/Contact";

function App() {
  const [state, dispatch] = useReducer(reducer, headerState);

  return (
    <div>
      <Home />
      <About />
      <Menu />
      <Contact/>
      <Location/>
    </div>
  );
}

export default App;
