import React, { useEffect } from "react";
import Chapter from "../../utils/Topics.array";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { useRouter } from "next/router";
function ResourceLandingPage() {
  const router = useRouter();

  return (
    <StyledResourcPage className="galleryContainer">
      <section className="menuContainer">
        {Chapter.map((chapter) => (
          <StyledCard
            key={chapter._id}
            onClick={() => router.replace(`/resource/${chapter.link}/specimens`)}
          >
            <div className="title">{chapter.title}</div>
            <main className="imageHolder">
              <Image src={chapter.img} className="menuImage" layout="fill" />
            </main>
            <div className="accessHolder icon-holder">
              <BsFillArrowUpSquareFill className="icon" />
            </div>
          </StyledCard>
    
        ))}
      </section>
    </StyledResourcPage>
  );
}

export const StyledResourcPage = styled.div`
  width: 100%;
  height: auto;
  padding-top: 100px;

  .menuContainer {
    width: 60%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 40px;
    gap: 30px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .menuContainer {
      width: 100%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }
`;

export const StyledCard = styled.div`
  width: 28%;
  height: 38vh;
  padding: 9px;
  background: transparent;
  border-radius: 5px;

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
    width: 99%;
    margin: auto;
    height: 75%;
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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80%;
  }
`;

export default ResourceLandingPage;
