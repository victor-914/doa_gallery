import React from "react";
import LectureComp from "./LectureComp";
import styled from "styled-components";
function LectureList() {
  return (
    <StyledLectureList>
      <LectureComp />
      <LectureComp /> <LectureComp /> <LectureComp />
    </StyledLectureList>
  );
}

export default LectureList;

const getStaticProps = () => {
  return {
    props: {},
  };
};

const StyledLectureList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;


  @media (max-width: 767px) {
    
  }

  @media (min-width: 768px) and (max-width: 991px) {
   
  }

  @media (min-width: 992px) and (max-width: 1199px) {
   
  }

  @media (min-width: 1200px) {
    
  }
`;
