import Dashboard from "./pages/Dashboard"
import Profil from "./pages/Profil"
import Publication from "./pages/Publication"
import Reservation from "./pages/Reservation"
import Events from "./pages/Events"
import { Routes,Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/publication" element={<Publication />}/>
      <Route path="/evenement" element={<Events />}/>
      <Route path="/reservation" element={<Reservation />}/>
      <Route path="/profil" element={<Profil />}/>

    </Routes>
    </>
  )
}

export default App
