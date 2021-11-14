import logo from "./logo.svg";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { Search } from "./Components/Middle/Search";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(1);

  return (
    <div className="App">
      <Header active={active} setActive={setActive} />
      <Switch>
        <Route exact path="/">
          <>
            <Search />
          </>
        </Route>

        <Route path="/upskill">
          <h1>Upskill Yourself Here</h1>
        </Route>
        <Route path="/postjob">
          <h1>Post a Job here</h1>
        </Route>
        <Route path="/login">
          <h1>Login Here</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
