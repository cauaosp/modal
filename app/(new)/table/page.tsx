import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import React from "react";
import { columns, Payment } from "@/components/table/columns/columns";
import { CircleCheck } from "@/app/assets/icons/checked";
import { Eye } from "@/app/assets/icons/eye";
import { FileVideo } from "lucide-react";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "caua paiva",
      amount: 100,
      status: "pending",
      email: "caua@example.com",
    },
    {
      id: "Igor Paiva",
      amount: 50,
      status: "pending",
      email: "igor@example.com",
    },
    {
      id: "Fernando Paiva",
      amount: 25,
      status: "pending",
      email: "fernando@example.com",
    },
    {
      id: "Maria Paiva",
      amount: 12.5,
      status: "pending",
      email: "maria@example.com",
    },
    {
      id: "Alerrandro Paiva",
      amount: 6.25,
      status: "pending",
      email: "alerrando@example.com",
    },
  ];
}

interface DataTableProps<TData, TValue> {
  columnsTable: ColumnDef<TData, TValue>[];
  dataTable: TData[];
}

export default async function TableFigma() {
  // const datasOfTables = await getData();

  // const table = useReactTable({
  //   datasOfTables,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  //   getPaginationRowModel: getPaginationRowModel(),
  //   getSortedRowModel: getSortedRowModel(),
  // });

  return (
    <div className="border-2 border-zinc-400 rounded-sm max-w-5xl m-auto my-10">
      <div className="relative w-full overflow-auto">
        <Table >
          <TableHeader className="bg-stone-100">
            <TableRow>
              <TableHead>Data/Hora</TableHead>
              <TableHead>Tipo de mensagem</TableHead>
              <TableHead>Canal</TableHead>
              <TableHead>Fluxo</TableHead>
              <TableHead>Situação</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18/06/2024</TableCell>
              <TableCell>Camt.053</TableCell>
              <TableCell>Canal Primário</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>
                <span className="bg-emerald-100 text-green-500 font-bold px-2 w-fit h-6 text-sm text-green bg-background-surface-success flex justify-center items-center rounded-sm">
                  <CircleCheck className="mr-1 w-4 h-4" /> Respondida
                </span>
              </TableCell>
              <TableCell className="cursor-pointer pl-6">
                <Eye className="w-6 h-6" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
