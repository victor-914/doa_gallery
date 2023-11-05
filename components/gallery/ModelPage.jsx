import React from "react";
import Carousel from "./Carousel";
function ModelPage({ model }) {
  return (
    <>
      <Carousel data={model} />
    </>
  );
}

export default ModelPage;
