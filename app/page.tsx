import TituloModal from "@/components/titulo-modal/titulo-modal";
import { DadosModal } from "@/components/dados-modal/dados-modal";

export default function Modal() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      {/* modal trigger */}
      <div>
        <label
          htmlFor="tw-modal"
          className="cursor-pointer rounded bg-black px-8 py-4 text-white activate:bg-slate-400"
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
        className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
      >
        {/* modal-box */}
        <label
          className="max-h-[calc(100vh - 5em)] hfit maw-w-lg scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black shadow-2xl transition"
          htmlFor=""
        >
          <h3 className="text-lg font-bold">Modal opened</h3>
          <p className="py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            ratione pariatur ipsa sit! Eveniet accusamus facilis necessitatibus
            quas optio, assumenda labore, aliquam, sint sapiente laudantium
            alias dolores at perferendis? Inventore.
          </p>
        </label>
      </label>
    </div>
  );
}
