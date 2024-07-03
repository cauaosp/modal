import { CircleCheck } from "@/app/assets/icons";
import { FC } from "react";

interface ActiveFieldProps {
  identification?: string;
  value?: string;
}

export const ActiveField: FC<ActiveFieldProps> = ({ ...props }) => {
  return (
    <>
      <div className="mb-2 flex flex-col items-left justify-start gap-1">
        <span className="font-bold text-sm justify-left ">
          {props.identification}
        </span>
        <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
          <CircleCheck className="mr-1 w-4 h-4" /> {props.value}
        </span>
      </div>
    </>
  );
};
