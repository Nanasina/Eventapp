import { Navigate, replace } from "react-router-dom"

function ProtectRouter({children}) {
  const utilisateur = localStorage.getItem("utilisateur");

  if(!utilisateur){
    return <Navigate to="/" replace />;
  }
  return children
}

export default ProtectRouter;