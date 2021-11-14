import logo from "./logo.svg";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { Search } from "./Components/Middle/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
