import styled from "styled-components";

function SearchItem({ data }) {
  console.log(data);
  return (
    <Con>
      <div className="imageDiv">
        <img src={data.image} alt="" />
      </div>
      <div className="textDiv">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </Con>
  );
}

const Con = styled.div`
  width: 400px;
  height: 150px;

  background: #ffff;

  padding: 10px;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .imageDiv {
    width: 40%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .textDiv {
    width: 50%;
    height: 100%;
    overflow: hidden;
    color: grey;

    h4 {
      margin: 0px;
      margin-bottom: 10px;
    }

    p {
      text-overflow: ellipsis;
      height: 80%;
      overflow: hidden;
      font-size: 11px;
    }
  }
`;

export { SearchItem };
