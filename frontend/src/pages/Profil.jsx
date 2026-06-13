import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profil() {
  const [open, setOpen] = useState(false);
  const [nomUser, setNomUser] = useState("");
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate();

useEffect(() => {
      const chargmentProfil = async () => {
        try {
           const response = await axios.get(`http://localhost:3000/auth/utilisateur/${5}`);
      const data = response.data;
      console.log(data);

      setNomUser(data.nom);
      setEmail(data.email);
      setRole(data.role);

        } catch (error) {
          console.error("Erreur lors du chargement : ", error)
        }
      
  }
 chargmentProfil();
}, []);

const handleModificationProfil = async (e) => {
   e.preventDefault();
  try {
    await axios.put(`http://localhost:3000/auth/utilisateur/${5}`,
      {
        nom: nomUser,
        email: email
      }
    );

   alert("Profil mis à jour avec succès !");
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
    alert("Impossible de modifier l'événement.");
  }
};

  const handleLogout = () => {
    console.log("Deconnexion");
    localStorage.removeItem("utilisateur");
    navigate("/");
  }
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
          className={`flex flex-1 justify-center items-center flex-col overflow-y-auto ${open ? "ml-56" : ""}`}
        >
          <div className="w-full max-w-lg px-4 m-8">
            <h1 className="text-2xl font-bold mb-6">
              Mon profil <br />{" "}
              <span className="text-sm text-gray-400 font-normal">
                Gérez vos informations personnelles et les paramètres de votre
                compte
              </span>
            </h1>

            <div className="card bg-white w-full shadow-sm rounded-box border mb-5">
              <div className="card-body">
                <div className="avatar placeholder flex gap-8 items-center">
                  <div className="bg-neutral text-neutral-content w-24 rounded-full">
                    <span className="text-3xl">{nomUser ? nomUser.charAt(0).toUpperCase() : "?"}</span>
                  </div>

                  <div className="flex flex-col mt-5">
                    <p className="font-bold text-m text-base-content">
                      {nomUser}
                    </p>
                    <p className="text-sm font-semibold text-base-content/60">
                      {(role?.trim())}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="fieldset border shadow-md bg-white rounded-box p-6">
              <label className="label font-medium">Nom </label>
              <input
                type="text"
                className="input w-full rounded-xl border-gray-300"
                value={nomUser}
                onChange={(e) => setNomUser(e.target.value)}
              />

              <label className="label font-medium">Email</label>
              <input
                type="text"
                className="input w-full rounded-xl border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div>
                <button
                 className="btn btn-block rounded-xl bg-slate-600 mt-5 font-semibold btn-md text-white hover:bg-slate-500"
                 onClick={handleModificationProfil}
                 >
                  Modifier le profil
                </button>
                
                <Link to = {`/modificationMotdepasse`}>
                <button className="btn btn-block rounded-xl btn-outline mt-5 font-semibold btn-md text-slate-600">
                  Changer de mot de passe
                </button>
                </Link>

                {/* Séparateur visuel discret */}
                <div className="divider my-2"></div>

                <button 
                className="btn btn-block rounded-xl btn-ghost btn-md mt-5 font-semibold text-error hover:bg-error/10"
                onClick={handleLogout}
                >
                  Déconnexion
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

export default Profil;
