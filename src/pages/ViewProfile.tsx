import { Link } from "react-router-dom"; // Compatible avec Vite
import itachi from "../assets/images/itachi.png";
import profileImage from "../assets/images/user.webp"; // Remplace par ton image
export default function ViewProfile() {
  return (
    <main className="flex-grow flex">
      {/* Left Side - Character Image */}
      <div className="w-1/2 bg-[#8E0E2F] relative overflow-hidden">
        <h1 className="text-white text-4xl font-bold uppercase tracking-wider p-6">PROFILE</h1>
        <img
          src={itachi}
          alt="Itachi Uchiha"
          className="absolute bottom-0 left-0 h-[90%] object-contain z-10"
        />
      </div>

      {/* Right Side - Profile Info (design amélioré) */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-6 space-y-6">
       

<h2 className="flex justify-center">
  <img src={profileImage} alt="Profile" className="h-12 w-auto" />
</h2>


          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-300 pb-2">
              <span className="w-1/3 uppercase font-semibold text-sm text-gray-700">Username</span>
              <p className="w-2/3 text-lg text-gray-900">ShadowNinja42</p>
            </div>

            <div className="flex items-center border-b border-gray-300 pb-2">
              <span className="w-1/3 uppercase font-semibold text-sm text-gray-700">Firstname</span>
              <p className="w-2/3 text-lg text-gray-900">Hiro</p>
            </div>

            <div className="flex items-center border-b border-gray-300 pb-2">
              <span className="w-1/3 uppercase font-semibold text-sm text-gray-700">Lastname</span>
              <p className="w-2/3 text-lg text-gray-900">Yamada</p>
            </div>

            <div className="flex items-center border-b border-gray-300 pb-2">
              <span className="w-1/3 uppercase font-semibold text-sm text-gray-700">Address</span>
              <p className="w-2/3 text-lg text-gray-900">Osaka, Japan</p>
            </div>

            <div className="flex items-center border-b border-gray-300 pb-2">
              <span className="w-1/3 uppercase font-semibold text-sm text-gray-700">Phone Number</span>
              <p className="w-2/3 text-lg text-gray-900">080-9876-5432</p>
            </div>

            <div className="flex items-center border-b border-gray-300 pb-2">
              <span className="w-1/3 uppercase font-semibold text-sm text-gray-700">Email</span>
              <p className="w-2/3 text-lg text-gray-900">hiro.yamada@ninja.net</p>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button className="bg-[#8E0E2F] hover:bg-[#6b0a23] text-white font-semibold rounded-md px-8 py-2 transition-colors duration-300">
              <Link to="/modify-profile">Modify Profile</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}