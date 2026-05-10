import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


function Publication() {
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
        <main className={`flex flex-1 justify-center items-center flex-col overflow-y-auto ${open ? 'ml-56' : ''}`}>
          <form className="fieldset bg-base-200 border-base-300 rounded-box p-6 w-full max-w-2xl m-8">
    <label className="label">Nom de l'événement *</label>
    <input type="text" className="input w-full h-10" />

    <label className="label">Artist/Groupe *</label>
    <input type="text" className="input w-full h-10" />

    <label className="label">Description </label>
    <textarea className="textarea textarea-lg"></textarea>

    <label className="label">Catégorie *</label>
    <select defaultValue="Concert" className="select w-full h-10">
        <option>Concert</option>
        <option>Festival</option>
        <option>Conférence</option>
        <option>Théatre</option>
        <option>Cinéma</option>
        <option>Soirée</option>
 </select>

  <div className="flex gap-4">
    <div className="flex flex-col">
      <label className="label ">Date * </label>
      <input type="date" className="input w-full h-10" />
    </div>

    <div className="flex flex-col">
      <label className="label">Heure * </label>
      <input type="time" className="input w-full h-10" />
    </div>
  </div>
    
    <label className="label">Lieu * </label>
    <input type="text" className="input w-full h-10" /> 

    <label className="label">Nombre de place disponibles * </label>
    <input type="number" className="input w-full h-10" />

    <label className="label">Paf * </label>
    <input type="number" className="input w-full h-10" />  

    <label className="label">Statut *</label>
    <select defaultValue="Disponible" className="select w-full h-10">
        <option>Disponible</option>
        <option>Complet</option>
        <option>Annulé</option>
 </select>

    <label className="label">Image </label>
    <fieldset className="fieldset">
  <input type="file" className="file-input input-xl w-full " />
  <label className="label">Taille maximun 2MB</label>
</fieldset>
</form>

          <section className="flex-1" />
        </main>
      </div>
    </div>
  )
}

export default Publication