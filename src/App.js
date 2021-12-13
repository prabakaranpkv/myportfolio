import { useContext } from "react";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Experiance from "./components/experiance/Experiance";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Header />
      <Toggle />
      <Intro />
      <About />
      <Experiance />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
