import React from "react";

function Button({ text }) {
  return (
    <button
      type="button"
      class="w-2/5 inline-block   px-6 py-2 border-2 border-green-600 text-black font-medium text-xs leading-normal capitalize rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {text}
    </button>
  );
}

export default Button;
