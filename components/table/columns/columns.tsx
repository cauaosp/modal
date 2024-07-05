"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Situation =
  | "Respondida"
  | "Aguardando resposta"
  | "Erro pelo BC"
  | "Processada pelo SPI"
  | "Aguardando processamento";

export type Messages = {
  time: string;
  messageType: string;
  channel: string;
  flow: string;
  situation: "Respondida" | "Aguardando resposta" | "Erro pelo BC" | "Processada pelo SPI" | "Aguardando processamento";
};

export const columns: ColumnDef<Messages>[] = [
  {
    accessorKey: "time",
    header: "Data/Hora",
  },
  {
    accessorKey: "messageType",
    header: ({column}) => <div className="text-right">Tipo de mensagem</div>,
  },
  {
    accessorKey: "channel",
    header: ({column}) => <div className="text-right">Canal</div>,
  },
  {
    accessorKey: "flow",
    header: ({column}) => <div className="text-right">Fluxo</div>,
  },
  {
    accessorKey: "situation",
    header: ({column}) => <div className="text-right">Situação</div>,
  },
  {
    id: "actions",
    header: ({column}) => <div className="text-right">Ações</div>,
    cell: ({ row }) => {
      const message = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(message.actions)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];
