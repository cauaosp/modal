"use client";

import { FC } from "react";
import { ActiveField } from "../../app/assets/icons/active-field";
import { ModalDatas } from "../modal-datas/modal-datas";
import { ModalTitle } from "../modal-title/modal-title";

interface ModalBoxProps {
  handleOnClicked: (isClicked: boolean) => void;
}

export const ModalBox: FC<ModalBoxProps> = ({ handleOnClicked, ...props }) => {
  return (
    <div className="flex flex-col w-fit h-fit px-2 pb-4 bg-white m-auto border-2 rounded-xl ">
      <header>
        <ModalTitle handleOnClicked={() => handleOnClicked(true)} />
      </header>
      <main className="px-4">
        <section>
          <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-2 mb-2">
            <ModalDatas
              identification="Tipo do Certificado"
              value="Certificados QrCode - Jws (Payload)"
            />
            <ModalDatas identification="Origem" value="PSP" />
            <ActiveField identification="Situação" value="Ativo" />
            <ModalDatas
              identification="Nome do Arquivo"
              value="qrcode-h.fitbank.com.br.pfx"
            />
          </div>
          <div className="grid grid-rows-2 grid-cols-1 gap-2 mb-2">
            <ModalDatas
              identification="Fingerprint"
              value="47BE6EB3A6AE45E45912FD3A8C9EAB23E3646132"
            />
            <ModalDatas
              identification="CN"
              value="CN=E-SAFER DOMAIN SSL CA [Run by the Issuer], O=E-SAFER CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA, C=BR"
            />
          </div>
        </section>
        <hr />
        <section className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-2 mt-3">
          <ModalDatas
            identification="ID do Certificado"
            value="e5ee78dd-65fc-45cf-b0de-4b7f7a5632a2"
          />
          <ModalDatas
            identification="Alteração"
            value="13/06/2024 - 18:03:56"
          />
          <ModalDatas
            identification="Alteração por"
            value="920b5feb-28ef-4b77-8efd-957fe65b9d48"
          />
          <ModalDatas identification="Ativação" value="13/06/2024 - 18:04:09" />
          <ModalDatas identification="ISPB" value="13203354" />
          <ModalDatas identification="Registro" value="13/06/2024 - 18:03:56" />
          <ModalDatas
            identification="Criado por"
            value="920b5feb-28ef-4b77-8efd-957fe65b9d48"
          />
          <ModalDatas
            identification="Vencimento"
            value="13/06/2024 - 18:04:09"
          />
        </section>
      </main>
    </div>
  );
};
