import { FC, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const Dropdown: FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="icons/solid/ic-eva:arrow-ios-downward-fill">
        <path
          id="primary-shape"
          d="M8.00004 10.3345C7.84427 10.3348 7.69331 10.2806 7.57337 10.1812L3.57337 6.84784C3.28986 6.6122 3.25106 6.19135 3.4867 5.90784C3.72234 5.62434 4.1432 5.58553 4.4267 5.82118L8.00004 8.80784L11.5734 5.92784C11.7111 5.816 11.8877 5.76366 12.0642 5.78243C12.2406 5.8012 12.4023 5.88952 12.5134 6.02784C12.6368 6.16642 12.6969 6.35016 12.6792 6.53488C12.6614 6.7196 12.5675 6.88858 12.42 7.00118L8.42004 10.2212C8.29665 10.3049 8.14877 10.3448 8.00004 10.3345Z"
          fill="#786E6C"
        />
      </g>
    </svg>
  );
};
