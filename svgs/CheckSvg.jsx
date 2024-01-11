import React from "react";

const CheckSvg = ({ fill= null }) => {

  return (
    <>
      <span  >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
        >
          <path
            d="M2 12.1538C3.39692 13.322 4.69014 14.7462 5.83512 16.2185C7.61335 18.505 12.1793 17.964 13.2084 15.2563C13.3453 14.8961 13.4862 14.538 13.6308 14.1846C15.1815 10.3938 18.5231 4.48205 20 2"
            stroke={fill ? fill : "#8B3FF7"}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </>
  );
};

export default CheckSvg;
