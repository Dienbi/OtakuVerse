import type React from "react";
import "../App.css";
import naruto from "../assets/images/naruto-1-kana.webp";
import nukuregular from "../assets/images/nkukur1.webp";
import wassim from "../assets/images/wassim.jpg";
import bye from "../assets/images/bbbbbbbb.webp";
import aa from "../assets/images/100.webp";
import savedorlater from "../assets/images/svsv.webp";
import demons from "../assets/images/demons.webp";
import phbook from "../assets/images/phbook.webp";

import { JSX } from "react";
import { useNavigate } from "react-router-dom";  // Importer useNavigate

const DetailProduit: React.FC = () => {
  const navigate = useNavigate();  // Initialiser le hook useNavigate

  const renderStars = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`} >
          ★
        </span>
      );
    }
    return stars;
  };

  const ReviewCard: React.FC = () => {
    return (
      <div className="bg-[#D9D9D9] p-3 rounded-lg">
        <div className="mb-1 flex">{renderStars(3)}</div>
        <p className="mb-2 text-sm font-medium text-left ml-5">Review title</p>
        <p className="mb-2 text-xs text-gray-500 text-left ml-5">Review body</p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img src={wassim} alt="User" className="object-cover w-full h-full" />
          </div>
          <span className="text-xs text-gray-500">Wassim Trabelsi</span>
        </div>
      </div>
    );
  };

  // Fonction pour la navigation lorsque le bouton est cliqué
  const handleClick = () => {
    navigate("/detail2");  // Naviguer vers la page detail2
  };

  return (
    <div className="min-h-screen bg-maroon-800 p-6 text-white">
      <img src={nukuregular} alt="Demon Slayer Volume 1 Cover" className="mt-3 mb-6" />

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <div className="flex items-center justify-center bg-[#D9D9D9] p-2 rounded-md">
          <div className="relative w-72 h-96">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${naruto})` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col bg-[#D9D9D9] p-6 rounded-lg text-black">
          <h2 className="mb-2 text-xl font-bold tracking-wide">
            <img
              src={demons}
              alt="Demon Slayer Volume 1 Cover"
              className="mt-4 mb-4 block mx-auto"
            />
          </h2>

          <p className="mb-4 text-3xl font-bold text-center">  <img
              src={demons}
              alt="Demon Slayer Volume 1 Cover"
              className="mt-4 mb-4 block mx-auto"
            /></p>


          <div className="mb-4">
            <p className="mb-2 text-lg font-bold tracking-wide"> <img
              src={phbook}
              alt="Demon Slayer Volume 1 Cover"
              className="mt-4 mb-4 block mx-auto"
            /></p>
            <p className="mb-2 text-lg font-bold text-left ml-8">Version:</p>

            <div className="flex flex-col gap-2.5 ml-24">
              <button className="w-fit px-3 py-1 bg-maroon text-white rounded-md font-bold hover:bg-maroon/90">
                Numérique
              </button>
              <button className="w-fit px-5 py-1 bg-maroon text-white rounded-md font-bold hover:bg-maroon/90">
                Physique
              </button>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <div className="flex justify-center">
              <button className="px-12 py-2 bg-maroon text-white rounded-lg font-bold" onClick={handleClick}>
                <img src={bye} alt="Demon Slayer Volume 1 Cover" className="mt-2 mb-2" />
              </button>
            </div>

            <button className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-gray-700 flex justify-center">
              <img src={savedorlater} alt="Demon Slayer Volume 1 Cover" className="mt-2 mb-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#D9D9D9] p-4 rounded-lg text-black">
        <h3 className="mb-4 text-sm font-medium text-gray-500">Latest reviews</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <ReviewCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProduit;
