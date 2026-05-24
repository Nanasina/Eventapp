import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ModificationEvents() {
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
          className={`flex flex-1 justify-center items-center flex-col overflow-y-auto bg-base-100 ${open ? "ml-56" : ""}`}
        >
          <div className="w-full max-w-xl px-4 m-5">
            <h1 className="text-2xl font-bold mb-6">
              Modification <br />{" "}
              <span className="text-sm text-gray-400 font-normal">
                Tous les champs marqués d'une astérisque (*) sont obligatoires
                pour la validation du modification
              </span>
            </h1>
            <form className="fieldset border shadow-md bg-white rounded-box p-6 space-y-3">
              <label className="label font-medium">Nom de l'événement *</label>
              <input
                type="text"
                className="input w-full h-10 rounded-xl border-gray-300"
                placeholder="Ex: Concert de Jazz"
              />

              <label className="label font-medium">Artiste/Groupe *</label>
              <input
                type="text"
                className="input w-full h-10 rounded-xl border-gray-300"
                placeholder="Ex: Mahaleo, Denise..."
              />

              <label className="label font-medium">
                <span>
                  Description{" "}
                  <span className="text-sm text-gray-400">(Optionnel)</span>
                </span>
              </label>
              <textarea
                className="textarea w-full rounded-xl border-gray-300"
                placeholder="Ex: Concert live avec..."
              ></textarea>

              <label className="label font-medium">Catégorie *</label>
              <select
                defaultValue="Concert"
                className="select w-full rounded-xl h-10 border-gray-300"
              >
                <option value="concert">Concert</option>
                <option value="festival">Festival</option>
                <option value="conference">Conférence</option>
                <option value="theatre">Théatre</option>
                <option value="cinema">Cinéma</option>
                <option value="soiree">Soirée</option>
              </select>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col flex-1">
                  <label className="label font-medium">Date * </label>
                  <input
                    type="date"
                    className="input w-full rounded-xl h-10 border-gray-300"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="label font-medium">Heure * </label>
                  <input
                    type="time"
                    className="input w-full h-10 rounded-xl border-gray-300"
                  />
                </div>
              </div>

              <label className="label font-medium">Lieu * </label>
              <input
                type="text"
                className="input w-full h-10 rounded-xl border-gray-300"
              />

              <label className="label font-medium">
                Nombre de place disponibles *{" "}
              </label>
              <input
                type="number"
                className="input w-full h-10 rounded-xl border-gray-300"
              />

              <label className="label font-medium">Prix * </label>
              <input
                type="number"
                className="input w-full h-10 rounded-xl border-gray-300"
              />

              <label className="label font-medium">Statut *</label>
              <select
                defaultValue="Disponible"
                className="select w-full h-10 rounded-xl border-gray-300"
              >
                <option value="disponible">Disponible</option>
                <option value="complet">Complet</option>
                <option value="annule">Annulé</option>
              </select>

              <label className="label font-medium">
                <span>
                  Image{" "}
                  <span className="text-sm text-gray-400">(Optionnel)</span>
                </span>
              </label>
              <label className="border-2 border-gray-300 border-dashed rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 hover:border-slate-500 transition">
                <input
                  type="file"
                  className="hidden w-full "
                  name="image"
                  accept="image/*"
                />
                <p className="font-medium text-gray-500">
                  Cliquez pour ajouter une image
                </p>
                <p className="text-sm text-gray-500">JPG, PNG - max 2MB</p>
              </label>

              <div>
                <button className="btn btn-block bg-slate-600 mt-5 font-semibold rounded-xl text-white hover:bg-slate-700">
                  Modifier
                </button>
              </div>
            </form>
          </div>

          <section className="flex-1" />
        </main>
      </div>
    </div>
  );
}

export default ModificationEvents;
