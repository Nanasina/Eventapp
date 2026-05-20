import { useState } from "react";
import { Link } from "react-router-dom";
import { Info, SquarePen, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Events() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar open={open} setOpen={setOpen} />
      <div className="flex flex-1">
        {open && (
          <div className="fixed left-0 top-16 h-auto z-10">
            <Sidebar />
          </div>
        )}
        <main
          className={`flex flex-1 flex-col overflow-y-auto ${open ? "ml-56" : ""}`}
        >
          <div className="w-full p-5 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-2xl font-bold text-base-content">
                Liste des événements publiés
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

            <div className="flex flex-wrap items-center gap-2">
              <select className="select select-sm bg-slate-200 font-bold rounded-xl max-w-xs">
                <option value="tous" selected>
                  Tous
                </option>
                <option value="attente">En attente</option>
                <option value="confirmee">Confirmée</option>
                <option value="annulee">Annulée</option>
              </select>

              <select className="select bg-slate-200 font-bold  select-sm rounded-xl max-w-xs">
                <option value="recent" selected>
                  Plus récent
                </option>
                <option value="ancien">Plus ancien</option>
              </select>
            </div>
          </div>

          <div className="m-4 shadow-sm rounded-xl bg-slate-100">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-center text-sm">
                    <th>Evénement</th>
                    <th>Catégorie</th>
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
                  <tr className="text-center font-medium">
                    <td>
                      <div className="font-semibold">Jazz Night</div>

                      <div className="text-sm font-bold text-slate-500">
                        Mahaleo
                      </div>
                    </td>

                    <td>sffsrffs</td>
                    <td>sfsrrsf</td>
                    <td>sgsfss</td>
                    <td>sgfsrfsvxf</td>
                    <td>vsdezsgts</td>
                    <td>qdearyxisjhd</td>
                    <td>
                      {/* <div className="badge badge-success text-white font-medium">
  
  Disponible
</div> */}

                      <div className="badge badge-warning text-white font-medium">
                        Complet
                      </div>

                      {/* <div className="badge badge-error text-white font-medium">
  
  Annulée
</div>  */}
                    </td>
                    <td className="flex justify-center items-center">
                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className="btn btn-ghost btn-circle btn-sm text-gray-500 hover:bg-gray-300 hover:text-gray-700  active:text-white active:scale-95"
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                      >
                        <Info className="w-5 h-5 text-gray-600" />
                      </button>
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Description</h3>
                          <p className="py-4"></p>
                        </div>
                        <form method="dialog" className="modal-backdrop ">
                          <button>close</button>
                        </form>
                      </dialog>

                      {/* <button type="button" className="btn btn-ghost btn-circle btn-sm text-gray-500 hover:bg-gray-300 hover:text-gray-700  active:text-white active:scale-95"><Info className="w-5 h-5 text-gray-600" /></button> */}
                      <Link to="/modification">
                        <button
                          type="button"
                          className="btn btn-ghost btn-circle btn-sm text-info hover:bg-info hover:text-blue-700 active:bg-info active:text-white active:scale-95 "
                        >
                          <SquarePen className="w-5 h-5 text-blue-700" />
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="btn btn-ghost btn-circle btn-sm text-error hover:bg-error hover:text-red-700 active:bg-error active:text-white active:scale-95 transition-all"
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Supprimer la publication
                          </h3>
                          <p className="py-4">
                            Etes-vous sûr de vouloir supprimer cette publication
                            ?
                          </p>
                          <div className="modal-action justify-center items-cente">
                            <form method="dialog gap-5">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Annuler</button>
                            </form>
                            <button className="btn btn-error text-white ">
                              Supprimer
                            </button>
                          </div>
                        </div>
                      </dialog>
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
  );
}

export default Events;
