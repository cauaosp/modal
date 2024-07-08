import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Eye } from "@/app/assets/icons/eye";
import { Filters } from "@/app/assets/icons/filters";
import { Refresh } from "@/app/assets/icons/refresh";
import { SituationTypes } from "@/components/table/situation-types/situation-types";

const getTableDatas = [
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Aguardando resposta",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Erro pelo BC",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Processada pelo SPI",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Aguardando processamento",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Respondida",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Respondida",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Respondida",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Respondida",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Respondida",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Respondida",
  },
  {
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Recebida",
    situation: "Respondida",
  },
];

export default async function TableFigma() {
  function renderizarLinhas() {
    return getTableDatas.map((msg) => {
      return (
        <TableRow className="">
          <TableCell>{msg.time.replaceAll("/", "-")}</TableCell>
          <TableCell>{msg.messageType}</TableCell>
          <TableCell>{msg.channel}</TableCell>
          <TableCell>{msg.flow}</TableCell>
          <TableCell>
            <SituationTypes situation={msg.situation} />
          </TableCell>
          <TableCell className=" cursor-pointer pl-6">
            <Eye className="w-6 h-6" />
          </TableCell>
        </TableRow>
      );
    });
  }

  return (
    <div className="bg-stone-100 py-10">
      <div className="w-10/12 mx-auto border rounded-lg overflow-hidden text-stone-600 text-sm">
        <div className="bg-white py-4 px-5 flex justify-end items-center gap-6 font-bold text-xs">
          <span className="w-fit flex justify-between items-center gap-2 cursor-pointer">
            <Filters className="w-4 h-4" />
            Filtros
          </span>
          <span className="w-fit flex justify-between items-center gap-2 cursor-pointer">
            <Refresh className="w-4 h-4" />
            Atualizar
          </span>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Data/Hora</TableHead>
              <TableHead className="font-bold">Tipo de mensagem</TableHead>
              <TableHead className="font-bold">Canal</TableHead>
              <TableHead className="font-bold">Fluxo</TableHead>
              <TableHead className="font-bold">Situação</TableHead>
              <TableHead className="font-bold">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">{renderizarLinhas()}</TableBody>
        </Table>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Pagination className="w-fit mx-0">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
