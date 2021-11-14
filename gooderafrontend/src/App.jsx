import logo from "./logo.svg";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { Search } from "./Components/Middle/Search";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const H = styled.h1`
  color: grey;
  margin: auto;
  margin-top: 40px;
  width: max-content;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <>
            <Search />
          </>
        </Route>

        <Route path="/upskill">
          <H>Upskill Yourself Here</H>
        </Route>
        <Route path="/postjob">
          <H>Post a Job here</H>
        </Route>
        <Route path="/login">
          <H>Login Here</H>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
