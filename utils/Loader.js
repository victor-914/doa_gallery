import { useRouter } from "next/router";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

export function Loader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on(
      "routeChangeStart",
      (url) => url !== router.asPath && setLoading(true)
    );
    router.events.on(
      "routeChangeComplete",
      (url) => url === router.asPath && setTimeout(setLoading(false), 500)
    );
    router.events.on(
      "routeChangeError",
      (url) => url === router.asPath && setTimeout(setLoading(false), 500)
    );

    return () => {
      router.events.off(
        "routeChangeStart",
        (url) => url !== router.asPath && setLoading(true)
      );
      router.events.off(
        "routeChangeComplete",
        (url) => url === router.asPath && setTimeout(setLoading(false), 500)
      );
      router.events.off(
        "routeChangeError",
        (url) => url === router.asPath && setTimeout(setLoading(false), 500)
      );
    };
  });
  return (
    loading && (
      <StyledLoader>
        <div className="loader"></div>
      </StyledLoader>
    )
  );
}

const StyledLoader = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
  z-index: 10000;
  justify-content: center;
  align-items: center;

  .loader {
    width: 64px;
    height: 64px;
    position: relative;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #000;
  }
  .loader:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    transform: rotate(45deg) translate(30%, 40%);
    background: #096;
    box-shadow: 32px -34px 0 5px #096c3a;
    animation: slide 2s infinite ease-in-out alternate;
  }
  .loader:after {
    content: "";
    position: absolute;
    left: 10px;
    top: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #096c3a;
    transform: rotate(0deg);
    transform-origin: 35px 145px;
    animation: rotate 2s infinite ease-in-out;
  }

  @keyframes slide {
    0%,
    100% {
      bottom: -35px;
    }
    25%,
    75% {
      bottom: -2px;
    }
    20%,
    80% {
      bottom: 2px;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(-15deg);
    }
    25%,
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(25deg);
    }
  }
`;
