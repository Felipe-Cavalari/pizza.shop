import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { ModeToggle } from '@/components/mode-toggle'

export default function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="fixed right-5 top-5">
        <ModeToggle />
      </div>
      <div className="borde-r flex w-full flex-col justify-between border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="size-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
