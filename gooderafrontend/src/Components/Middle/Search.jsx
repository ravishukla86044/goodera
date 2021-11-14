import styled from "styled-components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function Search() {
  const handleChange = () => {};

  return (
    <Con>
      <div>
        <input name="text" type="text" placeholder="job title or keyword" />
      </div>
      <div>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div></div>
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
`;
export { Search };
