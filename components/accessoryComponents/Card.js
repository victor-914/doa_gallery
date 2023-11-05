import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ item }) {
  return (
    <div className="flex justify-around  mt-8">
      <div className="w-4/5 shadow items-center" key={item._id}>
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <Image
            className="rounded-t-lg"
            src={item.img}
            alt={item.title}
            width="350px"
            height="200px"
          />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {item.title}
            </h5>
            <Link href={item.link}>
              <a>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Learn more
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
