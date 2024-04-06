import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      <div>
        <h1>Cabeçalho</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
