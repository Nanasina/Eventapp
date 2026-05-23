function Connexion() {

  return (
    <>
    <div className="flex flex-1 justify-center items-center flex-col overflow-y-auto">
        <div className="w-full max-w-lg px-4 m-8 space-y-3">
            <form className="fieldset border shadow-md bg-white rounded-box p-6">

<h1 className="text-2xl font-bold text-center mb-5">
              Se connecter
            </h1>

            <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" />
</label>

              {/* <label className="label font-medium">Nom </label>
              <input
                type="text"
                className="input w-full rounded-xl border-gray-300"
              /> */}

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
  <input type="text" className="grow" placeholder="Email" />
</label>

              {/* <label className="label font-medium">Email</label>
              <input
                type="text"
                className="input w-full rounded-xl border-gray-300"
              /> */}

              <label className="input input-bordered flex items-center gap-2">
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
  <input type="password" className="grow" value="password" />
</label>

<div className="form-control flex ">
  <label className="label cursor-pointer">
    <input type="checkbox" className="checkbox checkbox-sm" />
  </label>
  <span >Se souvenir de moi</span>
</div>

              <div>
                <button className="btn btn-block rounded-xl bg-slate-600 mt-5 font-semibold btn-md text-white hover:bg-slate-500">
                  Modifier le profil
                </button>

                <button className="btn btn-block rounded-xl btn-outline mt-5 font-semibold btn-md text-slate-600">
                  Changer de mot de passe
                </button>

                {/* Séparateur visuel discret */}
                <div className="divider my-2"></div>

                <button className="btn btn-block rounded-xl btn-ghost btn-md mt-5 font-semibold text-error hover:bg-error/10">
                  Déconnexion
                </button>
              </div>
            </form>
          </div>
    </div>
          
    </>
  )
}

export default Connexion