import { FC, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const ClockCircle: FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="vuesax/linear/clock">
        <g id="clock">
          <path
            id="Vector"
            d="M15.2664 7.99967C15.2664 11.6797 12.2798 14.6663 8.59977 14.6663C4.91977 14.6663 1.93311 11.6797 1.93311 7.99967C1.93311 4.31967 4.91977 1.33301 8.59977 1.33301C12.2798 1.33301 15.2664 4.31967 15.2664 7.99967Z"
            stroke="#C0830E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M11.0733 10.1202L9.0066 8.88684C8.6466 8.6735 8.35327 8.16017 8.35327 7.74017V5.00684"
            stroke="#C0830E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};
