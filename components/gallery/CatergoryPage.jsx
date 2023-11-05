import React from "react";
import PerModel from "./PerModel";
import { useRouter } from "next/router";
import styled from "styled-components";
function CatergoryPage({ specs }) {
  const router = useRouter();
  const url = router.query;

  return (
    <StyledCatergory>
      <header className="w-full p-6 text-center  h-auto ">
        {url.catergory?.toLocaleUpperCase()}
      </header>
      <main className="h-auto  p-12 flex flex-wrap justify-evenly modelContainer">
        {item?.map((item) => (
          <PerModel item={item} key={item._id} />
        ))}
      </main>
    </StyledCatergory>
  );
}

export default CatergoryPage;

const StyledCatergory = styled.section`
  height: auto;
  width: 100%;
  position: relative;
  padding-top: 80px;
  padding-bottom: 30px;
  display: block;


  @media (min-width: 320px) and (max-width: 480px) {
    display:flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  align-items: center;

  .modelContainer {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .modelContainer {
      width: 100%;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .modelContainer {
      width: 100%;
    }
  }
`;
