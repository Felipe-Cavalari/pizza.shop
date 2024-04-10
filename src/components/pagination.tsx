import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount + 1} item(s)
      </span>
      <div className="text-sm font-medium">
        Página {pageIndex + 1} de {pages}
      </div>
      <div className="flex items-center gap-2">
        <Button variant={'outline'}>
          <ChevronsLeft className="size-4" />
          <span className="sr-only">Primeira página</span>
        </Button>
        <Button variant={'outline'}>
          <ChevronLeft className="size-4" />
          <span className="sr-only">Página anterior</span>
        </Button>
        <Button variant={'outline'}>
          <ChevronRight className="size-4" />
          <span className="sr-only">Próxima página</span>
        </Button>
        <Button variant={'outline'}>
          <ChevronsRight className="size-4" />
          <span className="sr-only">Última página</span>
        </Button>
      </div>
    </div>
  )
}
