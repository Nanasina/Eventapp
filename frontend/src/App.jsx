import Dashboard from "./pages/Dashboard"
import Profil from "./pages/Profil"
import Publication from "./pages/Publication"
import Reservation from "./pages/Reservation"
import Events from "./pages/Events"
import Connexion from "./components/Connexion"
import { Routes,Route } from "react-router-dom";
import ModificationEvents from "./pages/ModificationEvents"
import ProtectRouter from "./components/ProtectRouter"
import ModificationPassword from "./components/ModificationPassword"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Connexion/>}/>
      <Route path="/dashboard" element={ <ProtectRouter><Dashboard/></ProtectRouter>}/>
      <Route path="/publication" element={<ProtectRouter><Publication /></ProtectRouter>}/>
      <Route path="/evenement" element={<ProtectRouter><Events /></ProtectRouter>}/>
      <Route path="/reservation" element={<ProtectRouter><Reservation /></ProtectRouter>}/>
      <Route path="/profil" element={<ProtectRouter><Profil /></ProtectRouter>}/>
      <Route path="/modification/:id" element={<ProtectRouter><ModificationEvents/></ProtectRouter>}/>
      <Route path="/modificationMotdepasse" element={<ProtectRouter><ModificationPassword/></ProtectRouter>}/>
    </Routes>
    </>
  )
}

export default App
