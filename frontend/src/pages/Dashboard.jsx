import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Dashboard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar open={open} setOpen={setOpen} />
      <div className="flex flex-1">
        {open && (
          <div className="fixed left-0 top-16 h-auto z-10">
            <Sidebar />
          </div>
        )}
        <main className={`flex flex-1 flex-col overflow-y-auto ${open ? 'ml-56' : ''}`}>
          <header className="w-full py-6 flex justify-center">
            <h1 className="font-semibold text-xl">Dashboard</h1>
          </header>
          <section className="flex-1" />
        </main>
      </div>
    </div>
  )
}

export default Dashboard