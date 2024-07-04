import React, { FC } from "react";

export const Eye: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <div>
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g id="vuesax/linear/eye">
          <g id="eye">
            <g id="Vector">
              <path
                d="M11.6846 7.00004C11.6846 8.48504 10.4846 9.68504 8.99964 9.68504C7.51464 9.68504 6.31464 8.48504 6.31464 7.00004C6.31464 5.51504 7.51464 4.31504 8.99964 4.31504C10.4846 4.31504 11.6846 5.51504 11.6846 7.00004Z"
                stroke="#8F9B08"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.99964 13.2025C11.6471 13.2025 14.1146 11.6425 15.8321 8.94254C16.5071 7.88504 16.5071 6.10754 15.8321 5.05004C14.1146 2.35004 11.6471 0.790039 8.99964 0.790039C6.35214 0.790039 3.88464 2.35004 2.16714 5.05004C1.49214 6.10754 1.49214 7.88504 2.16714 8.94254C3.88464 11.6425 6.35214 13.2025 8.99964 13.2025Z"
                stroke="#8F9B08"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
