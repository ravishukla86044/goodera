import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Nav({ active = 1, setActive }) {
  const history = useHistory();

  const handelClick = (e) => {
    let n = e.target.className;

    if (n == 1) {
      setActive(1);
      history.push("/");
    } else if (n == 2) {
      setActive(2);
      history.push("/upskill");
    } else if (n == 3) {
      setActive(3);
      history.push("/postjob");
    } else if (n == 4) {
      setActive(4);
      history.push("/login");
    }
  };

  return (
    <Con active={active}>
      <div className="logo">
        <span class="material-icons-outlined">business_center</span>JobHunt
      </div>

      <div className="navDiv">
        <ul onClick={handelClick}>
          <li className="1">Find Job</li>
          <li className="2"> Upskill Yourself</li>
          <li className="3">Post a Job</li>
          <li className="4">Sign in</li>
        </ul>
      </div>
    </Con>
  );
}

const Con = styled.div`
  width: 100%;
  height: max-content;
  color: white;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
  }

  .navDiv {
    flex: 1;
    font-size: 12px;
  }
  .navDiv ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100%;
  }

  .navDiv li {
    display: block;
    cursor: pointer;
    margin: 0px 10px;
  }

  .navDiv li:nth-child(${(props) => props.active}) {
    text-decoration: underline;
  }

  .navDiv li:nth-child(2) {
    flex-grow: 1;
  }
`;

export { Nav };
