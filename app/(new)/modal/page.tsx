"use client";

import { ModalBox } from "@/components/modal-box/modal-box";
import { useState } from "react";

export default function ModalPage() {
  const [isClose, setIsClose] = useState(true);

  const visibleClass =
    "visible fixed inset-0 flex overflow-hidden overscroll-contain bg-slate-800/30 peer-checked:pointer-events-auto peer-checked:visible";
  const invisibleClass =
    "invisible fixed inset-0 flex overflow-hidden overscroll-contain bg-slate-800/30 peer-checked:pointer-events-auto peer-checked:invisible";

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-dvh bg-red-400">
      <div>
        <label
          htmlFor="tw-modal"
          className="cursor-pointer rounded bg-black px-8 py-4 text-white"
          onClick={() => setIsClose(false)}
        >
          OPEN MODAL
        </label>
      </div>

      <input
        type="checkbox"
        id="tw-modal"
        className="peer fixed appearance-none opacity-0"
      />

      <label
        htmlFor="tw-modal"
        className={isClose ? invisibleClass : visibleClass}
      >
        <ModalBox handleOnClicked={(value) => setIsClose(value)} />
      </label>
    </div>
  );
}
