import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Connexion() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErreur(null);
      
      try {
        const response = await axios.post(`http://localhost:3000/auth/login`, {
          email: email,
          password: password
        });
        
        const utilisateur = response.data.utilisateur;

        const roleuh = utilisateur.role?.trim().toLowerCase();

        if(roleuh !== "admin"){
          alert("Accès refusé !");
          console.log("l' utilisateur", response.data);
          setLoading(false);
          return;
        }

        navigate('/dashboard');

        localStorage.setItem(
          "utilisateur",
          JSON.stringify(response.data.utilisateur)
        );

      } catch (error) {
        console.error("L'erreur est : ", error);
        setErreur(error.response?.data?.erreur || "Identifiant incorrect ou le sereveur est éteint.");
        alert("Erreur de connexion !")
      }finally{
        setLoading(false);
      }
      }

  return (
    <>
    <div className="flex flex-1 justify-center items-center h-screen flex-col overflow-y-auto">
        <div className="w-full max-w-lg px-4 m-8 space-y-3">
            <form onSubmit={handleLogin} className="fieldset border shadow-md bg-white rounded-box p-6">

<h1 className="text-xl font-bold text-center mb-5">
              Connexion
            </h1>

            {erreur && (
                <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4 text-center font-medium text-sm">
                {erreur}
              </div>
            )}

            <div className="space-y-3">

              <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" 
  className="grow" 
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required/>
</label>

              <label className="input input-bordered flex items-center gap-2 mb-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password"
   className="grow" 
   placeholder="Mot de passe" 
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   required />
</label>
            </div>

            <div className="mt-3 justify-end">
              <a  href="http://">Mot de passe oublier ?</a>
            </div>

              <div>
                <button disabled={loading} className="btn btn-block rounded-xl bg-slate-600 mt-5 font-semibold btn-md text-white hover:bg-slate-500">
                     {loading ? "Connexion en cours..." : "Connexion"}
                </button>
              </div>
              <div>
                <span></span>
              </div>
            </form>
          </div>
    </div>
          
    </>
  )
}

export default Connexion