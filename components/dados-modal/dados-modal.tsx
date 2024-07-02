import { FC, HTMLAttributes } from "react";

interface DadosProps extends HTMLAttributes<HTMLDivElement> {
  identification: string;
  value: string;
}

export const DadosModal: FC<DadosProps> = ({ children, ...props }) => {
  return (
    <div className={(props.className, "flex flex-col h-12")} {...props}>
      <span className="font-bold text-sm">{props.identification}</span>
      {children && (
        <div className="flex w-full h-6">
          <span className="text-xs bg-green-50 font-bold flex items-center justify-center gap-1 rounded">
            {children}
            {props.value}
          </span>
        </div>
      )}
      {!children && <span className="text-sm">{props.value}</span>}
    </div>
  );
};
