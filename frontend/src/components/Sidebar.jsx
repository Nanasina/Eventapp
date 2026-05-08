import { LayoutDashboard,CalendarCheck,Ticket, User, LogOut  } from "lucide-react";

function Sidebar() {

  return (
    <>
<div className="flex flex-col h-[calc(100vh-4rem)] w-64">
        <ul className="menu bg-base-200 rounded-box w-56 flex flex-col h-full">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Accueil
    </a>
  </li>
  <li>
    <a>
        <div 
        className="h-5 w-5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2">
            <LayoutDashboard className="h-5 w-5"/>
          </div>
      Dashboard
    </a>
  </li>
  <li>
    <a>
     <div 
        className="h-5 w-5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2">
            <CalendarCheck className="h-5 w-5"/>
          </div>
      Evénements
    </a>
  </li>
  <li>
    <a>
     <div 
        className="h-5 w-5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2">
            <Ticket className="h-5 w-5"/>
          </div>
      Réservations
    </a>
  </li>
  <li>
    <a>
     <div 
        className="h-5 w-5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2">
            <User className="h-5 w-5"/>
          </div>
      Mon profil
    </a>
  </li>
  <li className="mt-auto">
    <a>
     <div 
        className="h-5 w-5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        >
            <LogOut className="h-5 w-5"/>
          </div>
      Déconnexion
    </a>
  </li>
</ul>
    </div>
    </>
  )
}

export default Sidebar