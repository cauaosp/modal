import React, { FC } from "react";

export const Refresh: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g id="vuesax/linear/refresh">
          <g id="refresh">
            <path
              id="Vector"
              d="M10.9125 16.2525C14.13 15.405 16.5 12.48 16.5 9C16.5 4.86 13.17 1.5 9 1.5C3.9975 1.5 1.5 5.67 1.5 5.67M1.5 5.67V2.25M1.5 5.67H3.0075H4.83"
              stroke="#5A5351"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M1.5 9C1.5 13.14 4.86 16.5 9 16.5"
              stroke="#5A5351"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3 3"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
