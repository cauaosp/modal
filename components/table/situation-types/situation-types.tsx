import { CircleCheck } from "@/app/assets/icons/checked";
import { ClockCircle } from "@/app/assets/icons/clock-circle";
import { FaultCircle } from "@/app/assets/icons/fault-circle";
import { FC } from "react";

type Situation =
  | "Respondida"
  | "Aguardando resposta"
  | "Erro pelo BC"
  | "Processada pelo SPI"
  | "Aguardando processamento";

interface SituationTypesProps {
  situation: Situation;
}

export const SituationTypes: FC<SituationTypesProps> = ({ ...props }) => {
  switch (props.situation) {
    case "Respondida":
      return (
        <span className="bg-emerald-100 text-green-500 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
          <CircleCheck className="mr-1 w-4 h-4" /> <p>{props.situation}</p>
        </span>
      );
    case "Aguardando resposta":
      return (
        <span className="bg-yellow-50 text-yellow-600 font-semibold p-2 w-fit h-6 text-sm  flex justify-center items-center rounded-sm">
          <ClockCircle className="mr-1 w-4 h-4" /> <p>{props.situation}</p>
        </span>
      );
    case "Erro pelo BC":
      return (
        <span className="bg-orange-100 text-red-600 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
          <FaultCircle className="mr-1 w-4 h-4" /> <p>{props.situation}</p>
        </span>
      );
    case "Processada pelo SPI":
      return (
        <span className="bg-emerald-100 text-green-500 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
          <CircleCheck className="mr-1 w-4 h-4" /> <p>{props.situation}</p>
        </span>
      );
    case "Aguardando processamento":
      return (
        <span className="bg-yellow-50 text-yellow-600 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
          <ClockCircle className="mr-1 w-4 h-4" /> <p>{props.situation}</p>
        </span>
      );
  }
};
