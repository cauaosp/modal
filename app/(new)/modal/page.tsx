"use client";

import TituloModal from "@/components/titulo-modal/titulo-modal";
import { DadosModal } from "@/components/dados-modal/dados-modal";
import { useState } from "react";
import { CircleCheck } from "@/app/assets/icons";

export default function Modal() {
  const [isClose, setIsClose] = useState(true);
  console.log(isClose);

  const visibleClass =
    "visible fixed inset-0 flex overflow-hidden overscroll-contain bg-slate-800/30 peer-checked:pointer-events-auto peer-checked:visible";
  const invisibleClass =
    "invisible fixed inset-0 flex overflow-hidden overscroll-contain bg-slate-800/30 peer-checked:pointer-events-auto peer-checked:invisible";

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-dvh bg-red-400">
      {/* modal trigger */}
      <div>
        <label
          htmlFor="tw-modal"
          className="cursor-pointer rounded bg-black px-8 py-4 text-white"
          onClick={() => setIsClose(false)}
        >
          OPEN MODAL
        </label>
      </div>

      {/* Hidden toggle */}
      <input
        type="checkbox"
        id="tw-modal"
        className="peer fixed appearance-none opacity-0"
      />

      {/* modal */}
      <label
        htmlFor="tw-modal"
        className={isClose ? invisibleClass : visibleClass}
      >
        {/* modal-box */}
        <label className="flex flex-col w-[60rem] h-[36rem] bg-white m-auto border-2 rounded-xl ">
          <header>
            <TituloModal handleOnClicked={(value) => setIsClose(value)} />
          </header>
          <main className="px-4">
            <section>
              <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-2 mb-2">
                <DadosModal
                  identification="Tipo do Certificado"
                  value="Certificados QrCode - Jws (Payload)"
                />
                <DadosModal identification="Origem" value="PSP" />
                <DadosModal identification="Situação" value="ATIVO">
                  <CircleCheck className="" />
                </DadosModal>
                <DadosModal
                  identification="Nome do Arquivo"
                  value="qrcode-h.fitbank.com.br.pfx"
                />
              </div>
              <div className="grid grid-rows-2 grid-cols-1 gap-2 mb-2">
                <DadosModal
                  identification="Fingerprint"
                  value="47BE6EB3A6AE45E45912FD3A8C9EAB23E3646132"
                />
                <DadosModal
                  identification="CN"
                  value="CN=E-SAFER DOMAIN SSL CA [Run by the Issuer], O=E-SAFER CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA, C=BR"
                />
              </div>
            </section>
            <hr />
            <section className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-2 mt-3">
              <DadosModal
                identification="ID do Certificado"
                value="e5ee78dd-65fc-45cf-b0de-4b7f7a5632a2"
              />
              <DadosModal
                identification="Alteração"
                value="13/06/2024 - 18:03:56"
              />
              <DadosModal
                identification="Alteração por"
                value="920b5feb-28ef-4b77-8efd-957fe65b9d48"
              />
              <DadosModal
                identification="Ativação"
                value="13/06/2024 - 18:04:09"
              />
              <DadosModal identification="ISPB" value="13203354" />
              <DadosModal
                identification="Registro"
                value="13/06/2024 - 18:03:56"
              />
              <DadosModal
                identification="Criado por"
                value="920b5feb-28ef-4b77-8efd-957fe65b9d48"
              />
              <DadosModal
                identification="Vencimento"
                value="13/06/2024 - 18:04:09"
              />
            </section>
          </main>
        </label>
      </label>
    </div>
  );
}
