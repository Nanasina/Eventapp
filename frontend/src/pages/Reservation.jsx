import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Reservation() {
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
          <div className="w-full p-5 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-2xl font-bold text-base-content">
                Réservation
              </h1>

              <label className="input input-bordered input-sm flex items-center gap-2">
                <input type="text" className="grow" placeholder="Recherche" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            <div className="items-center">
              <select className="select select-sm bg-slate-200 font-bold rounded-xl max-w-xs">
                <option value="tous" selected>Tous</option>
                <option value="attente">En attente</option>
                <option value="confirmee">Confirmée</option>
                <option value="annulee">Annulée</option>
              </select>
            </div>
          </div>

          <div className="m-4">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-center text-sm">
                    <th>Utilisateur</th>
                    <th>Evénement</th>
                    <th>Places</th>
                    <th>Statut</th>
                    <th>Date de réservation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="text-center text-sm font-medium">
                    <td>sgzratsyssdsq</td>
                    <td>jhsgtdr</td>
                    <td>sfsrzfsfd</td>
                    <td>
                      {/* <div className="badge badge-success text-white font-medium">
  
  Confirmée
</div> */}

 <div className="badge badge-warning text-white font-medium">
  
  En attente
</div>

 {/* <div className="badge badge-error text-white font-medium">
  
  Annulée
</div>  */}
                    </td>
                    <td>gsfarsfrarfsdsf</td>
                    <td className="flex gap-2 justify-center items-center">
                      <button
                        type="button"
                        className="btn btn-success btn-sm text-white hover:bg-green-400 active:bg-success active:text-white active:scale-95 "
                      >
                        Confirmer réservation
                      </button>
                      
                      {/* <button
                        type="button"
                        className="btn btn-warning btn-sm text-white hover:bg-orange-400 active:bg-warning active:text-white active:scale-95"
                      >
                        Confirmer annulation
                      </button> */}
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

export default Reservation