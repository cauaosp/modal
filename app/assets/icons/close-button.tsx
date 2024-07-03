import { FC, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const CloseButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <button
      className="ml-auto w-6 h-6 fill-none mr-6 cursor-pointer"
      {...props}
    >
      <svg>
        <path
          d="M5.00098 5.5L19 19.4991"
          stroke="#786E6C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.99996 19.4991L18.999 5.5"
          stroke="#786E6C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
