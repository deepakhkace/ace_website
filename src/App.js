import logo from "./logo.svg";
//import "./App.css";
import Dropdown from "./dropdown/Dropdown";
import AppHeader from "./AppHeader";
// import AppHeader from "./AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Dropdown />
    </div>
  );
}

export default App;
