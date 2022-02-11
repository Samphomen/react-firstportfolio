import Intro from "./Intro"
import About from "./About";
import ProductList from "./ProductList";
import Contact from "./Contact";
import Toggle from "./Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode;

  return (
    <div style={{
      backgroundColor: darkmode ? "#222" : "white",
      color: darkmode && "white"
    }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
