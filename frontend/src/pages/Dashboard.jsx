import { useState } from "react";
import { Banknote, Ticket, Gauge, CalendarDays } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrer les éléments auprès de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
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
          className={`flex flex-1 flex-col overflow-y-auto bg-base-100 ${open ? "ml-56" : ""}`}
        >
          <div className=" w-full p-6 flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-base-content">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-6">
              <div className="stats shadow rounded-xl">
                <div className="stat">
                  <div className="stat-figure text-success">
                    <Banknote className="inline-block h-8 w-8 stroke-current" />
                  </div>
                  <div className="stat-title text-xs font-semibold text-base-content/70">
                    Revenus
                  </div>
                  <div className="stat-value text-2xl text-success font-bold">
                    31K Ar
                  </div>
                  <div className="stat-desc text-xs text-base-content/60">
                    Chiffre d'affaires global
                  </div>
                </div>
              </div>

              <div className="stats shadow rounded-xl">
                <div className="stat">
                  <div className="stat-figure text-info">
                    <Ticket className="inline-block h-8 w-8 stroke-current" />
                  </div>
                  <div className="stat-title text-xs font-semibold text-base-content/70">
                    Réservation
                  </div>
                  <div className="stat-value text-2xl  text-info font-bold">
                    38.000
                  </div>
                  <div className="stat-desc text-xs text-base-content/60">
                    Billets réservés
                  </div>
                </div>
              </div>

              <div className="stats shadow rounded-xl">
                <div className="stat">
                  <div className="stat-figure text-warning">
                    <Gauge className="inline-block h-8 w-8 stroke-current" />
                  </div>
                  <div className="stat-title text-xs font-semibold text-base-content/70">
                    Taux de remplissage
                  </div>
                  <div className="stat-value text-2xl text-warning font-bold">
                    20 %
                  </div>
                  <div className="stat-desc text-xs text-base-content/60">
                    Moyenne des événements
                  </div>
                </div>
              </div>

              <div className="stats shadow rounded-xl">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <CalendarDays className="inline-block h-8 w-8 stroke-current" />
                  </div>
                  <div className="stat-title text-xs font-semibold text-base-content/70">
                    Evnements actifs
                  </div>
                  <div className="stat-value text-2xl text-secondary font-bold">
                    30
                  </div>
                  <div className="stat-desc text-xs text-base-content/60">
                    En ligne actuellemnt
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-base-100 rounded-xl border border-base-200 p-5 h-80 shadow-sm">
            <Bar
              data={{
                labels: ["Jazz Night", "Mahaleo", "Ambondrona", "Théatre", "Rock Fest", "Expo", "Art"],
                datasets: [
                  {
                    label: "Tickets vendus",
                    data: [12, 19, 3, 5, 2, 3, 10],
                    backgroundColor: "rgba(59, 130, 246, 0.5)", // Couleur des barres
                    borderColor: "rgb(59, 130, 246)",
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>

          <div className=" bg-base-100 m-4 shadow-sm border border-base-300 p-4 mt-6 rounded-xl ">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-sm border-b border-base-300">
                    <th>Evénement</th>
                    <th className="text-center">Date & heure</th>
                    <th className="text-center">Place vendues</th>
                    <th className="text-center">Statut</th>
                    <th className="text-right">Revenus</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="font-medium border-b border-base-300 hover:bg-base-300 transition-colors">
                    <td className="text-left">
                      <div className="flex gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">Hart Hagerty</div>
                          <div className="text-sm font-bold text-slate-500">
                            United States
                          </div>
                        </div>
                      </div>
                      {/* <div className="font-semibold">Jazz Night</div>

                      <div className="text-sm text-slate-500">Mahaleo</div> */}
                    </td>

                    <td className="text-center">26 juin - 19h00</td>
                    <td className="text-center">150 / 200 places</td>
                    <td className="text-center">
                      <div className="badge badge-neutral font-medium text-white">
                        Terminé
                      </div>
                      {/* <div className="badge badge-success text-white font-medium">
  
  Disponible
</div> */}

                      {/* <div className="badge badge-warning text-white font-medium">
                        Complet
                      </div> */}

                      {/* <div className="badge badge-error text-white font-medium">
  
  Annulée
</div>  */}
                    </td>
                    <td className="text-right">120.000 Ar</td>
                  </tr>

                  <tr className="font-medium border-b border-base-300 hover:bg-base-300 transition-colors">
                    <td className="text-left">
                      <div className="flex gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">Hart Hagerty</div>
                          <div className="text-sm font-bold text-slate-500">
                            United States
                          </div>
                        </div>
                      </div>
                      {/* <div className="font-semibold">Jazz Night</div>

                      <div className="text-sm text-slate-500">Mahaleo</div> */}
                    </td>

                    <td className="text-center">26 juin - 19h00</td>
                    <td className="text-center">150 / 200 places</td>
                    <td className="text-center">
                      <div className="badge badge-neutral font-medium text-white">
                        Terminé
                      </div>
                      {/* <div className="badge badge-success text-white font-medium">
  
  Disponible
</div> */}

                      {/* <div className="badge badge-warning text-white font-medium">
                        Complet
                      </div> */}

                      {/* <div className="badge badge-error text-white font-medium">
  
  Annulée
</div>  */}
                    </td>
                    <td className="text-right">120.000 Ar</td>
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

export default Dashboard;
