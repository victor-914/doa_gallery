import React from "react";
import ResourceLandingPage from "../../components/gallery/ResourceLandingPage";
import styled from "styled-components";

function ResourceHomePage() {
  return (
    <main className="">
      <ResourceLandingPage />
    </main>
  );
}

export default ResourceHomePage;

export const breadCrumbStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  border: 2px solid green;
  padding: 10vh;
  position: absolute;
  display: flex;
  margin-top: 50vh;
  nav > ol {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-right: 8px;

      &:after {
        content: ">";
        display: inline-block;
        margin-left: 4px;
      }

      &:last-child:after {
        content: "";
      }
    }

    a {
      text-decoration: none;
      color: #666;
    }
  }

  .brActive > * {
    color: red;
  }
`;
