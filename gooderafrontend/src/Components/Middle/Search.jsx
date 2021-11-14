import styled from "styled-components";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { SearchItem } from "./SearchItem";
import axios from "axios";

const initialData = [
  {
    description:
      "Experience in Cloud Computing technologies, scripting languages (JSON, Python, RoR, etc), integrating 3rd party monitoring tools, encryption tools, and forensics. Implementation experience with enterprise security solutions such as WAF, IPS, Anti-DDOS, and SIEM.",
    title: "Principal Security Consultant",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
    type: "external",
    publication_date: "2021-08-04T00:04:04Z",
    id: 5690411,
    location: "Berlin, Germany",
    level: "senior",
    tags: [],
    company: {
      id: 12090,
      short_name: "amazon",
      name: "Amazon",
    },
  },
];

function Search() {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [dataAll, setDataAll] = useState(initialData);

  const handleChange = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };

  const getData = async () => {
    let { data } = await axios.get(`http://localhost:3001/jobs?title=${text}&location=${location}`);
    console.log(data, text, location);
    setDataAll(data.data);
  };

  useState(() => {
    getData();
  });

  const handelClick = () => {
    getData();
  };

  return (
    <>
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
            <option value={""}>Select location</option>
            <option value={"London"}>London</option>
            <option value={"Germany"}>Germany</option>
            <option value={"India"}>India</option>
          </select>
        </div>
        <Button onClick={handelClick} variant="contained" color="secondary">
          Search
        </Button>
      </Con>
      <ItemList>
        {dataAll.map((a) => {
          return <SearchItem data={a} />;
        })}
      </ItemList>
    </>
  );
}

const Con = styled.div`
  width: 65%;
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

const ItemList = styled.div`
  width: 65%;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 20px;

  & > div {
    margin-bottom: 20px;
  }
`;
export { Search };
