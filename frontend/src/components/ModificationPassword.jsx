import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ModificationPassword() {
     const [open, setOpen] = useState(false);

  return (
    <>
     <div className="min-h-screen flex flex-col">
          <Navbar open={open} setOpen={setOpen} />
          <div className="flex flex-1">
            {open && (
              <div className="fixed left-0 top-16 h-auto z-10">
                <Sidebar />
              </div>
            )}
            <main
              className={`flex flex-1 justify-center items-center flex-col overflow-y-auto ${open ? "ml-56" : ""}`}
            >
              <div className="w-full max-w-lg px-4 m-8">
                <h1 className="text-2xl font-bold mb-6">
                  Changer de mot de passe <br />{" "}
                  <span className="text-sm text-gray-400 font-normal">
                    Gérez vos informations personnelles et les paramètres de votre
                    compte
                  </span>
                </h1>
    
    
                <form className="fieldset border shadow-md bg-white rounded-box p-6">
                  <label className="label font-medium">Ancien mot de passe </label>
                  <input
                    type="text"
                    className="input w-full rounded-xl border-gray-300"
                  />
    
                  <label className="label font-medium">Nouveau mot de passe</label>
                  <input
                    type="text"
                    className="input w-full rounded-xl border-gray-300"
                  />

                  <label className="label font-medium"> Retapez le nouveau mot de passe</label>
                  <input
                    type="text"
                    className="input w-full rounded-xl border-gray-300"
                  />
    
                  <div>
                    <button
                     className="btn btn-block rounded-xl bg-slate-600 mt-5 font-semibold btn-md text-white hover:bg-slate-500"
                     >
                     Confirmer
                    </button>
                  </div>
                </form>
              </div>
    
              <section className="flex-1" />
            </main>
          </div>
        </div>
    </>
  )
}

export default ModificationPassword