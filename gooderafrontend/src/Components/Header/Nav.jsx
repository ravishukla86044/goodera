import styled from "styled-components";

function Nav({ active = 1 }) {
  return (
    <Con active={active}>
      <div className="logo">
        <span class="material-icons-outlined">business_center</span>JobHunt
      </div>

      <div className="navDiv">
        <ul>
          <li>Find Job</li>
          <li>Upskill Yourself</li>
          <li>Post a Job</li>
          <li>Sign in</li>
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
