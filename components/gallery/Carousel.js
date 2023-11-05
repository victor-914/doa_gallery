import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import DisplayListItem from "./DisplayListItem";
import loader from "../../assets/white.png";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [specimen, setSpecimen] = useState("");
  const [labels, setLabel] = useState();
  const [openDisplay, setOpenDisplay] = useState(true);

  useEffect(() => {
    setSpecimen(data);
    setLabel(
      data?.attributes?.subspecimen_positions?.data?.[currentIndex]?.attributes
        ?.labels
    );
  }, [data, labels, specimen, currentIndex]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? specimens?.[0]?.positions?.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === specimens?.[0]?.positions?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClick = (index) => {
    setOpenDisplay(index);
  };

  const closePanel = () => {
    setOpenDisplay(false);
  };

  return (
    <StyledCarousel>
      <header className="carouselHeader">
        {
          specimen?.attributes?.subspecimen_positions?.data?.[currentIndex]
            ?.attributes?.title
        }
      </header>

      <main className="carouselImgHolder">
        <aside className="buttonContainer">
          <button onClick={goToNextSlide}>
            <BsFillArrowLeftSquareFill className="buttonIcon" />
          </button>
        </aside>

        <div className="carouselImg">
          <Image
            src={
              specimen?.attributes?.subspecimen_positions?.data[currentIndex]
                ?.attributes?.img?.data?.attributes?.url
                ? specimen?.attributes?.subspecimen_positions?.data[
                    currentIndex
                  ]?.attributes?.img?.data?.attributes?.url
                : loader
            }
            layout="fill"
          />
        </div>

        <aside className="buttonContainer">
          <button onClick={goToPreviousSlide}>
            <BsFillArrowRightSquareFill className="buttonIcon" />
          </button>
        </aside>
      </main>

      {/* -------------------- */}
      <header className="carouselHeader">
        {
          specimen?.attributes?.subspecimen_positions?.data?.[currentIndex]
            ?.attributes?.title
        }
      </header>

      {/* mobile carousel controller */}

      <section className="mobileCarouselController">
        <aside className="buttonContainer_mobile">
          <button onClick={goToNextSlide}>
            <BsFillArrowLeftSquareFill className="buttonIcon" />
          </button>
        </aside>

        <aside className="buttonContainer_mobile">
          <button onClick={goToPreviousSlide}>
            <BsFillArrowRightSquareFill className="buttonIcon" />
          </button>
        </aside>
      </section>

      {/* <div className="carouselContent">
        {data?.[0]?.positions?.[currentIndex]?.content}
        {
          specimen.attributes.subspecimen_positions.data[currentIndex]
            .attributes?.title
        }
      </div> */}

      <ul className="descriptionContainer">
        {labels?.data?.map((item) => (
          <>
            <li className="desCripList" onClick={() => handleClick(item.id)}>
              <div className="viewContainer">
                <main className="viewIcon">
                  <AiFillEye className="cancel" />
                </main>
              </div>
              <main className="desCripContent">
                <header className="desHeader">{item?.attributes?.name}</header>
              </main>
            </li>

            {/* <section> */}
            {openDisplay === item.id && openDisplay && (
              <DisplayListItem
                data={item}
                state={openDisplay}
                setState={closePanel}
              />
            )}
            {/* </section> */}
          </>
        ))}
      </ul>
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 100px;
  padding-top: 100px;

  .carouselHeader {
    line-height: 4;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
  }

  .carouselImgHolder {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .carouselImg {
    position: relative;
    width: 70%;
    height: 100vh;
    margin: auto;
  }

  .carouselContent {
    width: 80%;
    margin: auto;
    padding-top: 40px;
    line-height: 2;
    padding-bottom: 40px;
  }

  .descripHolder {
    position: relative;
    width: 50px;
    height: 50px;
  }

  .buttonContainer {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  .buttonIcon {
    font-size: 40px;
  }

  .buttonContainer:hover .buttonIcon {
    color: green;
  }

  .descriptionContainer {
    width: 80%;
    height: 100%;
    margin: auto;
  }

  .desCripList {
    display: flex;
    margin-top: 40px;
    border-radius: 10px;
    padding: 8px;
    align-items: center;
    justify-content: space-between;
  }

  .desCripList:hover {
    background: #096c3a;
  }

  .desCripList:hover .viewIcon,
  .desCripList:hover .desCripContent {
    color: #fff;
  }

  .cancel {
  }

  .cancelContainer {
    position: absolute;
    z-index: 4;
  }

  .cancel {
    font-size: 30px;
  }

  .cancel:hover {
    color: green;
    cursor: pointer;
  }

  .desCripContent {
    width: 90%;
    height: auto;
    cursor: pointer;
  }

  .desHeader {
    line-height: 2.5;
    font-weight: 700;
    text-transform: uppercase;
  }

  .descContent {
    line-height: 1.6;
  }

  .mobileCarouselController {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    /* background: red; */
    padding-top: 150px;

    .carouselImg {
      position: relative;
      width: 98%;
      height: 50vh;
      margin: auto;
    }

    .buttonContainer {
      display: none;
    }

    .descriptionContainer {
      width: 90%;
    }

    .desCripList {
    }

    .carouselImgHolder {
      overflow-x: visible !important;
    }

    .carouselContent {
      width: 90%;
      text-align: justify;
    }

    .viewContainer {
      margin-right: 40px;
    }

    .mobileCarouselController {
      display: flex;
      width: 90%;
      margin: auto;
      align-items: center;
      justify-content: space-around;
      padding: 10px;
    }

    .buttonContainer_mobile {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
    }

    .buttonContainer_mobile:hover .buttonIcon {
      color: green;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }
`;
