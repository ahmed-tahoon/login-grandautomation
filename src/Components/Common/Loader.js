import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = ({ visible }) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
      }, 3000);
    }
  }, [visible]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-75 z-50 transition-opacity ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ThreeDots color="#000000" height={50} width={50} />
    </div>
  );
};

export default Loader;
