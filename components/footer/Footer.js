import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <StyledFooter className="text-center p-6 bg-green-800 mt-8">
      <span className="text-slate-400">© 2023 Copyright:</span>
      <div className="text-slate-200 font-semibold">
        Department of Human Anatomy
      </div>
    </StyledFooter>
  );
}

export default Footer;



const StyledFooter = styled.section`
position:absolute;
width: 100%;
bottom:1px !important;
// display:none;

`
