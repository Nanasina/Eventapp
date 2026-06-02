import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Info, SquarePen, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";

function Events() {
  const [open, setOpen] = useState(false);
  const [evenement, setEvenement] = useState([]);

  //Etat por gérer les chargements et les erreurs
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const chargerEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/evenement');
        setEvenement(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur de connexion :", error);
        setErreur("Impossible de récupérer les événemts");
        setLoading(false);
      }
    };

    chargerEvents();
  }, []);

  if (loading) return <p className="p-5 text-gray-500">Chargement des événements...</p>;
  if (erreur) return <p className="p-5 text-red-500">{erreur}</p>;

  const handleSupprimer = async (id_events) => {
    try {

      await axios.delete(`http://localhost:3000/evenement/${id_events}`);
      
      alert("Événement supprimé avec succès !");
      
      // Mise à jour instantanée du tableau à l'écran sans recharger la page
      setEvenement((prev) => prev.filter((events) => events.id_events !== id_events));
      
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Impossible de supprimer l'événement.");
    }
};

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
          <div className="w-full p-5 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-2xl font-bold text-base-content">
                Liste des événements publiés
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select className="select select-sm border-base-300 font-semibold rounded-xl max-w-xs">
                <option value="tous" selected>
                  Tous
                </option>
                <option value="attente">En attente</option>
                <option value="confirmee">Confirmée</option>
                <option value="annulee">Annulée</option>
              </select>

              <select className="select select-sm border-base-300 font-semibold rounded-xl max-w-xs">
                <option value="recent" selected>
                  Plus récent
                </option>
                <option value="ancien">Plus ancien</option>
              </select>

              <label className="input input-bordered input-sm border-1 flex items-center gap-2 rounded-xl">
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
              
          </div>

          <div className="bg-base-100 m-4 shadow-sm border border-base-300 p-4 rounded-xl ">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-sm border-b border-base-300">
                    <th>Evénement</th>
                    <th>Catégorie</th>
                    <th>Lieu</th>
                    <th className="text-center ">Date</th>
                    <th className="text-center ">Heure</th>
                    <th className="text-center ">Statut</th>
                    <th className="text-right">Nbr de place dispo</th>
                    <th className="text-right">Prix</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {evenement.length === 0 ? (
                    <tr>
                <td colSpan="5" className="px-6 py-4 text-center">Aucun événement trouvé</td>
              </tr>
                  ) : (
                    evenement.map((events) =>(
                      <tr key={events.id_events} className="border-b border-base-300 font-medium hover:bg-base-300 transition-colors">
                    <td className="text-left">
                      <div className="font-semibold">{events.nom_event}</div>

                      <div className="text-sm font-bold text-slate-500">
                        {events.artiste_groupe}
                      </div>
                    </td>

                    <td className="text-left">{events.categorie}</td>
                    <td className="text-left">{events.lieu}</td>
                    <td className="text-center">{new Date (events.date_event).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</td>
                    <td className="text-center">{events.heure_event}</td>
                    <td className="text-center">
                      <div className="badge badge-success text-white font-medium">
  
  {events.statut}
</div>

                      {/* <div className="badge badge-warning text-white font-medium">
                        Complet
                      </div> */}

                      {/* <div className="badge badge-error text-white font-medium">
  
  Annulée
</div>  */}
                    </td>
                    <td className="text-right">{events.place_dispo} places </td>
                    <td className="text-right">{events.prix} Ar</td>
                    <td className="flex justify-center items-center gap-2">
                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className="btn btn-ghost btn-circle btn-sm text-gray-500 hover:bg-gray-300 hover:text-gray-700  active:text-white active:scale-95"
                        onClick={() =>
                          document.getElementById(`modal-${events.id_events}`).showModal()
                        }
                        title="Voir les détails"
                      >
                        <Info className="w-5 h-5 text-gray-600" />
                      </button >
                      <dialog id={`modal-${events.id_events}`} className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Description</h3>
                          <p className="py-4">
                            {events.description || "Aucune description fourni pour cet événement"}
                            </p>
                        </div>
                        <form method="dialog" className="modal-backdrop ">
                          <button>close</button>
                        </form>
                      </dialog>

                      {/* <button type="button" className="btn btn-ghost btn-circle btn-sm text-gray-500 hover:bg-gray-300 hover:text-gray-700  active:text-white active:scale-95"><Info className="w-5 h-5 text-gray-600" /></button> */}
                      <Link to={`/modification/${events.id_events}`}>
                        <button
                          type="button"
                          title="Modifier l'événement"
                          className="btn btn-ghost btn-circle btn-sm text-info hover:bg-info hover:text-blue-700 active:bg-info active:text-white active:scale-95 "
                        >
                          <SquarePen className="w-5 h-5 text-blue-700" />
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="btn btn-ghost btn-circle btn-sm text-error hover:bg-error hover:text-red-700 active:bg-error active:text-white active:scale-95 transition-all"
                        onClick={() =>
                          document.getElementById(`modals-${events.id_events}`).showModal()
                        }
                        title="Supprimer l'événement"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      <dialog
                        id={`modals-${events.id_events}`}
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box p-8">
                          <h3 className="font-bold text-lg text-center">
                            Supprimer la publication
                          </h3>
                          <p className="py-4 text-center">
                            Etes-vous sûr de vouloir supprimer cette publication
                            ?
                          </p>
                          <div className="modal-action">
                            <form method="dialog gap-5">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Annuler</button>
                            </form>
                            <button onClick={() => handleSupprimer(events.id_events)} className="btn btn-error text-white ">
                              Supprimer
                            </button>
                          </div>
                        </div>
                      </dialog>
                      
                    </td>
                  </tr>
                    ))
                    
                  )} 
                  
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6">
  {/* Texte d'information à gauche  */}
  <div class="text-sm text-gray-700">
    Affichage de <span class="font-medium">1</span> à <span class="font-medium">2</span> sur <span class="font-medium">12</span> événements
  </div>
  
  {/* Boutons de navigation à droite */}
  <div className="inline-flex rounded-md shadow-sm cursor-pointer">
    <button className="px-3 py-2 text-sm font-semibold text-gray-950 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">Précédent</button>
    <button className="px-4 py-2 text-sm font-semibold text-white bg-slate-500 border border-slate-500">1</button>
    <button className="px-4 py-2 text-sm font-semibold text-gray-950 bg-white border border-gray-300 hover:bg-gray-50">2</button>
    <button className="px-3 py-2 text-sm font-semibold text-gray-950 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">Suivant</button>
  </div>
</div>

          <section className="flex-1" />
        </main>
      </div>
    </div>
  );
}

export default Events;
