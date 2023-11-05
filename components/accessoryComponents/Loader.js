import React from "react";
import loading from "../../assets/loading.gif";
import Image from "next/image";

function Loader() {
  return (
    <section className="w-full h-screen flex justify-center items-center  relative ">
      <div className="relative w-44 relative h-40">
        <Image src={loading} layout="fill" width="100%" height="100%" />
      </div>
      <span>loading...</span>
    </section>
  );
}

export default Loader;
