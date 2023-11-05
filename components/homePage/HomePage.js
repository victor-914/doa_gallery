import Image from "next/image";
import React from "react";
import logo from "../../assets/unnlogo.png";
import TopicSummary from "../../utils/TopicSummary.array";
import Card from "../accessoryComponents/Card";
import Link from "next/link";
import heroBg from "../../assets/humanModel.gif";
function HomePage() {
  return (
    <>
      <main className="">
        <div className="logoContainer  items-center justify-center flex flex-col py-8">
          <div className="mt-10">
            <Image src={logo} alt="UNN_logo" />
          </div>
          <header className="py-8  font-bold font-sans w-full text-center">
            DEPARTMENT OF HUMAN ANATOMY
          </header>
        </div>
        <section className="hero-image flex  flex-col justify-center items-center">
          <main>
            <Image src={heroBg} layout="fixed" />
          </main>
          <header className="py-8 text-center  font-semibold font-sans w-full ">
            PROVISION OF PEDAGOGIC MATERIALS ON ANATOMICAL SCIENCE
          </header>
        </section>
        <div class="flex justify-center flex-row">
          <div class="mb-3 xl:w-1/2 flex ">
            <div class="input-group relative flex  flex-row flex-wrap items-stretch w-full mb-4 ">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                class="btn inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="flex w-full pt-2.5 justify-center items-center h-auto mt-8 mb-8">
        <div className=" flex w-full  flex-col sm:flex-row sm:justify-center  items-center">
          {TopicSummary.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </section>

      <section className="w-full flex justify-center items-center">
        <Link href="/resource">
          <a className=" w-full flex justify-center items-center">
            {/* <Button text={"see more"} /> */}
          </a>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
