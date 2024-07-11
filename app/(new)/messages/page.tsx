'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Filter } from '@/assets/icons/filter'
import { Reconnect } from '@/assets/icons/reconnect'
import { Refresh } from '@/assets/icons/refresh'
import { PageContainer } from '@/components/container'
import { Icon } from '@/components/icon'
import { SituationTypes } from '@/components/situation-types/situation-types'
// import { useRouter } from 'next/router'

import { usePathname } from 'next/navigation'

const getTableDatas = [
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Enviada',
    situation: 'Respondida',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Enviada',
    situation: 'Aguardando resposta',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Enviada',
    situation: 'Erro pelo BC',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Processada pelo SPI',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Aguardando processamento',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Respondida',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Respondida',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Respondida',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Respondida',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Respondida',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Respondida',
  },
  {
    time: '18/06/2024',
    messageType: 'Camt.053',
    channel: 'Canal Primário',
    flow: 'Recebida',
    situation: 'Respondida',
  },
]

function renderizarLinhas() {
  return getTableDatas.map((msg) => {
    return (
      <>
        <TableRow>
          <TableCell>
            {msg.time}
            <p>
              <small>13:28:54</small>
            </p>
          </TableCell>
          <TableCell>{msg.messageType}</TableCell>
          <TableCell>{msg.channel}</TableCell>
          <TableCell>{msg.flow}</TableCell>
          <TableCell>
            <SituationTypes situation={msg.situation} />
          </TableCell>
          <TableCell>
            <Icon
              name="eye"
              color="hsl(var(--success))"
              className="mx-auto size-5 cursor-pointer"
            ></Icon>
          </TableCell>
        </TableRow>
      </>
    )
  })
}

export default function Messages() {
  return (
    <PageContainer className="pb-20">
      <div className="flex size-full flex-col">
        <div className="mb-5 flex justify-end gap-6 text-sm text-white">
          <button className="align flex items-center gap-2 rounded-lg bg-lime-600 p-3">
            <Reconnect className="h-5 w-5" color="#fff" />
            <p>Teste de Conectividade - Primário</p>
          </button>
          <button className="align flex items-center gap-2 rounded-lg bg-lime-600 p-3">
            <Reconnect className="h-5 w-5" color="#fff" />
            <p>Teste de Conectividade - Secundário</p>
          </button>
        </div>
        <div className="flex h-full flex-col content-between overflow-hidden rounded-lg border border-zinc-400 text-stone-600">
          <div className="flex items-center justify-end gap-6 border-b-2 border-stone-100 bg-white px-5 py-4 text-xs font-bold">
            <span className="flex w-fit cursor-pointer items-center justify-between gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </span>
            <span className="flex w-fit cursor-pointer items-center justify-between gap-2">
              <Refresh className="h-4 w-4" />
              Atualizar
            </span>
          </div>
          <div className="relative overflow-auto">
            <Table className="table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Data/Hora</TableHead>
                  <TableHead className="font-bold">Tipo de mensagem</TableHead>
                  <TableHead className="font-bold">Canal</TableHead>
                  <TableHead className="font-bold">Fluxo</TableHead>
                  <TableHead className="font-bold">Situação</TableHead>
                  <TableHead className="text-center font-bold">
                    <p>Ações</p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white">{renderizarLinhas()}</TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between px-4 py-1 text-sm">
            <div className="flex items-center gap-2">
              <span>Linhas por página:</span>
              <Select defaultValue="20">
                <SelectTrigger className="w-20 border-0 bg-inherit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Pagination className="mx-0 w-fit border-none bg-none text-stone-600">
              <PaginationContent className="">
                <PaginationItem>
                  <PaginationPrevious href="#0" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#1">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#2" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#3">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#4" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
