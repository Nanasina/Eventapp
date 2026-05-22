import Dashboard from "./pages/Dashboard"
import Profil from "./pages/Profil"
import Publication from "./pages/Publication"
import Reservation from "./pages/Reservation"
import Events from "./pages/Events"
import Connexion from "./components/Connexion"
import { Routes,Route } from "react-router-dom";
import ModificationEvents from "./pages/ModificationEvents"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/publication" element={<Publication />}/>
      <Route path="/evenement" element={<Events />}/>
      <Route path="/reservation" element={<Reservation />}/>
      <Route path="/profil" element={<Profil />}/>
      <Route path="/modification" element={<ModificationEvents/>}/>
      <Route path="/connexion" element={<Connexion/>}/>
    </Routes>
    </>
  )
}

export default App
