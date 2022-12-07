import { useReducer } from "react";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import { reducer, ACTION, headerState } from "./reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, headerState);

  return (
    <div>
      <Home />
      <About />
      <Menu />
    </div>
  );
}

export default App;
