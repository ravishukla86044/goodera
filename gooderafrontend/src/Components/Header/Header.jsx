import styled from "styled-components";
import { Nav } from "./Nav";

function Header() {
  return (
    <Con>
      <Nav />
      <div className="title">
        <h1>Find Your Dream Job</h1>
        <p>Browse through thousand of full-time or part-time jobs near you</p>
      </div>
    </Con>
  );
}

const Con = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: max-content;
  background: linear-gradient(90deg, rgb(93, 122, 223), rgb(93, 170, 223));
  padding: 20px 50px;
  color: white;
`;

export { Header };
