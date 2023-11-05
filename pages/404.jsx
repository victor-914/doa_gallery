import React from "react";
import styled from "styled-components";
import {BsArrowRightSquareFill} from "react-icons/bs"
function Custom404() {

     function goBack() {
      window.history.back();
  }
  return (
    <StyledCustom>
      <div>No Content Yet</div> <br/><br/>
      <div onClick={goBack} className="goBack">go back<span><BsArrowRightSquareFill/></span></div>
    </StyledCustom>
  );
}

export default Custom404;

const StyledCustom = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1px;

  .goBack{

    display:flex;
    padding:20px;
    width:50%;
    padding:15px;
    color:white;
    justify-content:center;
    align-items:center;
    gap:10px;
    background-color:#096c3a;
   cursor:pointer;
  }
`;
