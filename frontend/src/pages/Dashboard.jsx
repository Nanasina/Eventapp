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
          <div className=" w-full p-5 flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-base-content">Dashboard</h1>

            <div className="stats shadow bg-slate-200">
              <div className="stat">
                <div className="stat-title">Total événements</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">Nombre total des événements publiés</div>
             </div>

             <div className="stat">
                <div className="stat-title">Réservation</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">Nombre total des réservations</div>
             </div>

             <div className="stat">
                <div className="stat-title">Evénements complets</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">Nombre total des événements complets</div>
             </div>

             <div className="stat">
                <div className="stat-title">Place restantes</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">Nombre total des places restantes</div>
             </div>

           </div>

          </div>

                    <div className="m-4">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Evénement</th>
        <th>Date</th>
        <th>Heure</th>
        <th>Statut</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="font-semibold">
            Jazz Night
          </div>

          <div className="text-sm text-slate-500">
            Mahaleo
          </div>
        </td>
        
        <td></td>
        <td></td>
        <td></td>
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

export default Dashboard