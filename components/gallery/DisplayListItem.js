import Image from "next/image";
import React from "react";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";
function DisplayListItem({ data, state, setState }) {
  console.log(data, "data#detailPage", data?.attributes?.img?.data.attributes.url);
  return (
    <>
      <StyledDisplayItem>
        <aside className="closePanel">
          <button onClick={() => setState()}>
            <MdCancel className="closePanelIcon" />
          </button>
        </aside>
        <section className="home">
          <main className="imageHolder">
            <Image
              src={data?.attributes?.img?.data?.attributes?.url}
              layout="fill"
            />
          </main>
          <header className="itemHeader">{data.name}</header>
          <div className="content">
            {data?.attributes?.descriptions?.data?.map((item, indx) => (
              <li className="displayList">
                <span className="numbering">{indx + 1}</span>
                {"  "}
                {"  "}
                <span>{item.attributes.content}</span>
              </li>
            ))}
          </div>
        </section>
      </StyledDisplayItem>
    </>
  );
}

export default DisplayListItem;

const StyledDisplayItem = styled.section`
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0;
  position: fixed;
  background: #fff;
  z-index: 500;

  .numbering {
    font-weight: 700;
    padding: 10px;
  }

  .home {
    width: 80%;
    height: 100%;
    background: #f5fffa;
    overflow-y: scroll;
    margin: auto;
    padding-bottom: 150px;
    padding-top: 50px;
  }

  .itemHeader {
    width: 100%;
    text-align: center;
    line-height: 3;
    font-weight: 600;
    font-size: 23px;
    text-transform: capitalize;
  }

  .imageHolder {
    width: 60%;
    height: 70vh;
    margin: auto;
    position: relative;
  }

  .content {
    width: 95%;
    margin: auto;
    max-height: auto;
    min-height: 100vh;
    line-height: 2.5;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .closePanelIcon {
    font-size: 45px;
    transform: translateY(30px);
    z-index: 10;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .home {
      width: 99%;
    }

    .imageHolder {
      width: 100%;
      height: 50vh;
    }

    .closePanel {
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }
`;
