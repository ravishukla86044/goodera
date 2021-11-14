import styled from "styled-components";
import Select from "@material-ui/core/Select";

import { useState } from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

function Search() {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };

  const handelClick = () => {};

  return (
    <Con>
      <div className="inputDiv">
        <span class="material-icons-outlined">search</span>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          name="text"
          type="text"
          placeholder="job title or keyword"
        />
      </div>
      <div className="selectDiv">
        <select className="select" onChange={handleChange} name="location" value={location}>
          <option aria-label="None" value="Select location">
            Select location
          </option>
          <option value={"London"}>London</option>
          <option value={"Germany"}>Germany</option>
          <option value={"India"}>India</option>
        </select>
      </div>
      <Button onClick={handelClick} variant="contained" color="secondary">
        Search
      </Button>
    </Con>
  );
}

const Con = styled.div`
  width: 80%;
  height: max-content;
  border-radius: 8px;
  background: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: auto;

  & > div {
    margin: 5px;
  }

  .inputDiv,
  .selectDiv {
    background: #e3dbdb;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 300px;
    height: 30px;
    border: 0px;
    outline-width: 0px;
    background: none;
  }

  .select {
    background: #e3dbdb;

    width: 300px;
    height: 30px;
    border: 0px;
    outline-width: 0px;
    padding: 0px;
  }
`;
export { Search };
