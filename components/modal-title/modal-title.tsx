import { Shield, CloseButton } from "@/app/assets/icons/index";
import { FC } from "react";

interface ModalTitleProps {
  handleOnClicked: (isClicked: boolean) => void;
}

export const ModalTitle: FC<ModalTitleProps> = ({
  handleOnClicked,
  ...props
}) => {
  return (
    <div className="w-full flex items-center align h-[5rem] px-3">
      <Shield />
      <h1 className="font-bold">Detalhes do Certificado</h1>
      <CloseButton onClick={() => handleOnClicked(true)} />
    </div>
  );
};
