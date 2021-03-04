import logo from "./logo.svg";
import "./style.css";
import Dropdown from "./dropdown/Dropdown";
import AppHeader from "./AppHeader";
// import AppHeader from "./AppHeader/AppHeader";
import AppSlider from "./slider";
import Section from "./section";
import Sectionone from "./sectionone";
import Footer from "./footer";

function App() {
  return (
    <div>
      <AppHeader />
      {/* <Dropdown /> */}
      <div className="main">
        {/* <AppSlider /> */}
        <Section />
        <Sectionone />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
