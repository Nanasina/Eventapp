import { useState } from "react"
import { Info,SquarePen,Trash2 } from "lucide-react";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Events() {
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
            <h1 className="font-semibold text-xl">Evénements</h1>
          </header>

          <div className="m-4">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Nom de l'événemant</th>
        <th>Artiste/Groupe</th>
        <th>Date</th>
        <th>Heure</th>
        <th>Lieu</th>
        <th>Nbr de place dispo</th>
        <th>Prix</th>
        <th>Statut</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="flex">
          <button type="button" className="btn btn-ghost btn-circle btn-sm text-gray-500 hover:bg-gray-300 hover:text-gray-700  active:text-white active:scale-95"><Info className="w-5 h-5 text-gray-600" /></button>
          <button type="button" className="btn btn-ghost btn-circle btn-sm text-info hover:bg-info hover:text-blue-700 active:bg-info active:text-white active:scale-95 "><SquarePen className="w-5 h-5 text-blue-700" /></button>
          <button type="button" className="btn btn-ghost btn-circle btn-sm text-error hover:bg-error hover:text-red-700 active:bg-error active:text-white active:scale-95 transition-all"><Trash2 className="w-5 h-5" /></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
          </div>

          <section className="flex-1" />
        </main>
      </div>
    </div>
  )
}

export default Events