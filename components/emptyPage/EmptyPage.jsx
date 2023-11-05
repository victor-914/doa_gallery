import React from "react";
import styled from "styled-components";
function EmptyPage() {
  return (
    <StyledEmpty>
      <div className="loader"></div> <br />
      <div>No content yet</div>
    </StyledEmpty>
  );
}

export default EmptyPage;

const StyledEmpty = styled.section`
  width: 50%;
  margin: auto;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loader {
    width: 200px;
    height: 140px;
    background: #096c3a;
    box-sizing: border-box;
    position: relative;
    /* bottom: 0; */
    border-radius: 8px;
    perspective: 1000px;
  }

  .loader:before {
    content: "";
    position: absolute;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    border-radius: 8px;
    background: #f5f5f5 no-repeat;
    background-size: 60px 10px;
    background-image: linear-gradient(#096 100px, transparent 0),
      linear-gradient(#096 100px, transparent 0),
      linear-gradient(#096 100px, transparent 0),
      linear-gradient(#096 100px, transparent 0),
      linear-gradient(#096 100px, transparent 0),
      linear-gradient(#096 100px, transparent 0);

    background-position: 15px 30px, 15px 60px, 15px 90px, 105px 30px, 105px 60px,
      105px 90px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
  .loader:after {
    content: "";
    position: absolute;
    width: calc(50% - 10px);
    right: 10px;
    top: 10px;
    bottom: 10px;
    border-radius: 8px;
    background: #fff no-repeat;
    background-size: 60px 10px;
    background-image: linear-gradient(#096 100px, transparent 0),
      linear-gradient(#096 100px, transparent 0),
      linear-gradient(#096 100px, transparent 0);
    background-position: 50% 30px, 50% 60px, 50% 90px;
    transform: rotateY(0deg);
    transform-origin: left center;
    animation: paging 1s linear infinite;
  }

  @keyframes paging {
    to {
      transform: rotateY(-180deg);
    }
  }
`;
