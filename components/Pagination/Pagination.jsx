import React from "react";
import styled from "styled-components";

const StyledPagination = styled.section`
  padding: 20px;
  display: flex;
  justify-content: end;
  padding-top: 40px;

  button {
    cursor: pointer;
  }

  button:hover {
    background-color: #00a1df;
    color: #fff;
  }
`;

const Pagination = ({ data, stateIndex, setstateIndex }) => {
  return (
    <StyledPagination>
      <div id="pagination" className="space-x-2 space-y-2">
        <StyledButton
          className={`${stateIndex === 1 ? "#000" : "#456734"}`}
          disabled={stateIndex === 1}
          onClick={() => setstateIndex(stateIndex - 1)}
        >
          Previous
        </StyledButton>
        <StyledButton
          disabled={stateIndex === (data && data?.pagination.pageCount)}
          onClick={() => setstateIndex(stateIndex + 1)}
        >
          Next
        </StyledButton>
        <span>{`${stateIndex} of ${data && data?.pagination?.pageCount}`}</span>
      </div>
    </StyledPagination>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin: 0;
  &:hover {
    background-color: #00a1df;
    color: #fff;
  }
`;

export default Pagination;
