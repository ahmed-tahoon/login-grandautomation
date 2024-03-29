import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function ButtonLoader({ loading, text , functionToCall , data , classStyle }) {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        type="submit"
        disabled={loading }
        onClick={functionToCall}
        className={classStyle ? classStyle :"bg-[#4c4c4c] font-bold text-white rounded w-full py-2 mt-5 hover:bg-white hover:text-black transition duration-200 text-sm" }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <ThreeDots
              visible={true}
              height="20"
              width="30"
              color={isHovered ? "black" : "white"} // Change color based on hover state
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          text
        )}
      </button>
    </div>
  );
}

export default ButtonLoader;
