import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Publication() {
  const [open, setOpen] = useState(false);
  const [nomEvent, setNomEvent] = useState("");
  const [artiste, setArtiste] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [lieu, setLieu] = useState("");
  const [placeDispo, setPlaceDispo] = useState("");
  const [prix, setPrix] = useState("");
  const [statut, setStatut] = useState("Disponible");
  const [image, setImage] = useState(null);
  
  const [loading, setLoading]= useState(false);
  const [erreur, setErreur] = useState(null);

  //gestion de l'envoi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErreur(null);

    const formData = new FormData ();

    formData.append('nom_event', nomEvent);
    formData.append('artiste_groupe', artiste);
    formData.append('description', description);
    formData.append('categorie', categorie);
    formData.append('date_event', date);
    formData.append('heure_event', heure);
    formData.append('lieu', lieu);
    formData.append('place_dispo',placeDispo);
    formData.append('prix', prix);
    formData.append('statut', statut);

    if(image){
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:3000/evenement', formData, {
        //Indiquer à Multer q'un fichier arrive
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      }); 

      console.log("Evénement publié !", response.data)
      alert("L'événement a été publié avec succès !");

    setNomEvent("");
    setArtiste("");
    setDescription("");
    setCategorie("");
    setDate("");
    setHeure("");
    setLieu("");
    setPlaceDispo("");
    setPrix("");
    setImage(null);

    } catch (error) {
      console.error("Erreur lors de la publication : ", error);
      setErreur(error.response?.data?.erreur || "Une erreur est survenu lors de l'envoi.");
      alert("Erreur lors de la publication de l'événement.");
    } finally{
      setLoading(false);
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
          className={`flex flex-1 justify-center items-center flex-col overflow-y-auto bg-base-100 ${open ? "ml-56" : ""}`}
        >
          <div className="w-full max-w-xl px-4 m-5">
            <h1 className="text-2xl font-bold mb-6">
              Publier un événement <br />{" "}
              <span className="text-sm text-gray-400 font-normal">
                Tous les champs marqués d'une astérisque (*) sont obligatoires
                pour la validation de l'événement
              </span>
            </h1>

            {erreur && (
  <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4 font-medium">
    {erreur}
  </div>
)}
            <form onSubmit={handleSubmit} className="fieldset border shadow-md bg-white rounded-box p-6 space-y-3">
              <label className="label font-medium">Nom de l'événement *</label>
              <input
                type="text"
                value={nomEvent}
                onChange={(e) => setNomEvent(e.target.value)}
                className="input w-full h-10 rounded-xl border-gray-300"
                placeholder="Ex: Concert de Jazz"
                required
              />

              <label className="label font-medium">Artiste/Groupe *</label>
              <input
                type="text"
                value={artiste}
                onChange={(e) => setArtiste(e.target.value)}
                className="input w-full h-10 rounded-xl border-gray-300"
                placeholder="Ex: Mahaleo, Denise..."
                required
              />

              <label className="label font-medium">
                <span>
                  Description{" "}
                  <span className="text-sm text-gray-400">(Optionnel)</span>
                </span>
              </label>
              <textarea
                className="textarea w-full rounded-xl border-gray-300"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Concert live avec..."
              ></textarea>

              <label className="label font-medium">Catégorie *</label>
              <input
                type="text"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                className="input w-full rounded-xl h-10 border-gray-300"
                placeholder="Ex: Concert rock métal"
                required
              />
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col flex-1">
                  <label className="label font-medium">Date * </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input w-full rounded-xl h-10 border-gray-300"
                    required
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="label font-medium">Heure * </label>
                  <input
                    type="time"
                    value={heure}
                    onChange={(e) => setHeure(e.target.value)}
                    className="input w-full h-10 rounded-xl border-gray-300"
                    required
                  />
                </div>
              </div>

              <label className="label font-medium">Lieu * </label>
              <input
                type="text"
                value={lieu}
                onChange={(e) => setLieu(e.target.value)}
                className="input w-full h-10 rounded-xl border-gray-300"
                required
              />

              <label className="label font-medium">
                Nombre de place disponibles *{" "}
              </label>
              <input
                type="number"
                min = "0"
                value={placeDispo}
                onChange={(e) => setPlaceDispo(e.target.value)}
                className="input w-full h-10 rounded-xl border-gray-300"
                required
              />

              <label className="label font-medium">Prix * </label>
              <input
                type="number"
                min = "0"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                className="input w-full h-10 rounded-xl border-gray-300"
                required
              />

              <label className="label font-medium">Statut *</label>
              <select
                defaultValue="Disponible"
                value={statut}
                onChange={(e) => setStatut(e.target.value)}
                className="select w-full h-10 rounded-xl border-gray-300"
              >
                <option value="disponible">Disponible</option>
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
                  name="image"
                  className="hidden w-full "
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <p className="font-medium text-gray-500">
                  {image ? `Fichier sélectionné : ${image.name}` : "Cliquez pour ajouter une image"}
                </p>
                <p className="text-sm text-gray-500">JPG, PNG - max 2MB</p>
              </label>

              <div>
                <button type="submit" className="btn btn-block bg-slate-600 mt-5 font-semibold rounded-xl text-white hover:bg-slate-700">
                  {loading ? "Publication en cours..." : "Publier"}
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

export default Publication;
