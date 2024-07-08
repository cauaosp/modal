"use client";

import { useCallback, useMemo, useState } from "react";

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
import { table } from "console";

const messageRows = [
  {
    id: 1,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 2,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 3,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 4,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 5,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 6,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 7,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 8,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 9,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Aguardando resposta",
  },
  {
    id: 10,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Erro pelo BC",
  },
  {
    id: 11,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Processada pelo SPI",
  },
  {
    id: 12,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Aguardando processamento",
  },
  {
    id: 13,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 14,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
];

const columns = [
  {
    key: "time",
    label: "time",
  },
  {
    key: "messageType",
    label: "messageType",
  },
  {
    key: "channel",
    label: "channel",
  },
  {
    key: "flow",
    label: "flow",
  },
  {
    key: "situation",
    label: "situation",
  },
];

// export default function UserTable() {
//   return (
//     <Table>
//       <TableHeader>
//         {columns.map((column) =>
//           <TableHead key={column.key}>{column.label}</TableHead>
//         )}
//       </TableHeader>
//       <TableBody>
//         {messageRows.map((row) => <TableRow key={messageRows.key}>
//             {(columnKey => <TableCell>{getKeyValue(messageRows, columnKey)}</TableCell>)}
//         </TableRow>)}
//       </TableBody>
//     </Table>
//   );
// }
