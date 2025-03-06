import { Link } from "react-router-dom"; // Compatible avec Vite
import itachi from "../assets/images/itachi.png";

export default function ModifyProfile() {
  return (
    <main className="flex-grow flex">
      {/* Left Side - Character Image */}
      <div className="w-1/2 bg-[#8E0E2F] relative overflow-hidden">
        <h1 className="text-white text-4xl font-bold uppercase tracking-wider p-6">EDIT PROFILE</h1>
        <img
          src={itachi}
          alt="Itachi Uchiha"
          className="absolute bottom-0 left-0 h-[90%] object-contain z-10"
        />
      </div>

      {/* Right Side - Profile Info (design amélioré avec formulaire statique) */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-[#8E0E2F] uppercase">Modify Your Profile</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block uppercase font-semibold text-sm text-gray-700">Username</label>
              <input
                value="ShadowNinja42"
                readOnly
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block uppercase font-semibold text-sm text-gray-700">Firstname</label>
              <input
                value="Hiro"
                readOnly
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block uppercase font-semibold text-sm text-gray-700">Lastname</label>
              <input
                value="Yamada"
                readOnly
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block uppercase font-semibold text-sm text-gray-700">Address</label>
              <input
                value="Osaka, Japan"
                readOnly
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block uppercase font-semibold text-sm text-gray-700">Phone Number</label>
              <input
                value="080-9876-5432"
                readOnly
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block uppercase font-semibold text-sm text-gray-700">Email</label>
              <input
                value="hiro.yamada@ninja.net"
                readOnly
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block uppercase font-semibold text-sm text-gray-700">Password</label>
              <input
                value="kagebunshin88"
                type="password"
                readOnly
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              className="bg-[#8E0E2F] hover:bg-[#6b0a23] text-white font-semibold rounded-md px-8 py-2 transition-colors duration-300"
              disabled
            >
              Validate Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}