import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { StyledCard } from "./ResourceLandingPage";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import styled from "styled-components";
import { useRouter } from "next/router";
import Loader from "../loader/Loader";
// rename to modellist

function ModelPreview({ item }) {
  const router = useRouter();
  return (
    <StyledModel
      key={item.id}
      onClick={() =>
        router.push(`/resource/${router.query.catergory}/specimens/${item.id}`)
      }
    >
      <div className="title">{item?.attributes?.title}</div>
      <main className="imageHolder">
        {item?.attributes?.img?.data?.attributes?.url ? (
          <Image
            src={item?.attributes?.img?.data?.attributes?.url}
            className="menuImage"
            layout="fill"
          />
        ) : (
          <Loader />
        )}
      </main>
      <div className="accessHolder icon-holder">
        <BsFillArrowUpSquareFill className="icon" />
      </div>
    </StyledModel>
  );
}

export default ModelPreview;

export const StyledModel = styled.div`
  width: 25%;
  height: auto;
  border-radius: 5px;
  position: relative;

  :hover {
    background: #16763a;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  :hover > .title {
    color: #fff;
  }

  :hover > .imageHolder {
    border: 1px solid white;
  }

  :hover .accessHolder {
    color: #fff;
  }

  :hover .icon {
    transform: translate(-5%, -70%);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .imageHolder {
    width: 90%;
    margin: auto;
    height: 40vh;
    border-radius: 5px;
    position: relative;
  }

  .menuImage {
    border-radius: 5px;
  }

  .accessHolder {
    padding: 10px;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 25px;
  }

  .icon-container {
    perspective: 800px;
  }

  .title {
    width: 100%;
    line-height: 2;
    text-align: center;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
  }

  .view {
    background: #16763a;
    color: #fff;
    width: 100%;
    line-height: 2;
    font-weight: 600;
    letter-spacing: 0.4px;
    border-radius: 5px;
  }

  .view:hover {
    background: green;
    color: #fff;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    position: relative;

    .imageHolder {
      width: 95%;
      margin: auto;
      height: 40vh;
      border-radius: 5px;
      position: relative;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 70%;

    .view {
      width: 100%;
      padding: 5px;
      margin: auto;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 60%;
    display: none;
    height: auto;

    .imageHolder {
      width: 95%;
      margin: auto;
      height: 100%;
      border-radius: 5px;
      position: relative;
    }
  }
`;
