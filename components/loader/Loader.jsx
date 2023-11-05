import React from "react";
import styled from "styled-components";
function Loader() {
  return (
    <StyledLoader>
      <span class="loader"></span>
    </StyledLoader>
  );
}

export default Loader;

const StyledLoader = styled.section`
    width: 100%;
    height: 100vh;
    background-color: green;
    justify-content: center;
    display: flex;
    align-items: center;
    position: fixed;

  .loader {
    width: 16px;
    height: 16px;
    position: relative;
    left: -32px;
    border-radius: 50%;
    color: #096;
    background: currentColor;
    box-shadow: 32px 0, -32px 0, 64px 0;
  }

  .loader::after {
    content: "";
    position: absolute;
    left: -32px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background: #000;
    animation: move 3s linear infinite alternate;
  }

  @keyframes move {
    0%,
    5% {
      left: -32px;
      width: 16px;
    }
    15%,
    20% {
      left: -32px;
      width: 48px;
    }
    30%,
    35% {
      left: 0px;
      width: 16px;
    }
    45%,
    50% {
      left: 0px;
      width: 48px;
    }
    60%,
    65% {
      left: 32px;
      width: 16px;
    }

    75%,
    80% {
      left: 32px;
      width: 48px;
    }
    95%,
    100% {
      left: 64px;
      width: 16px;
    }
  }
`;
