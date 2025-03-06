import { Link } from "react-router-dom";
import otkauback from "../assets/images/otkauback.png";
import naruto from "../assets/images/naruto.png";
import dragon from "../assets/images/dragon.jfif";
import demon from "../assets/images/demon.jfif";
import berserk from "../assets/images/berserk.jfif";
import one from "../assets/images/one-piece.png";
import sakamoto from "../assets/images/Sakamoto.png";
import otakuLogo from "../assets/images/WELCOME.webp"; 

export default function Home() {
  const products = [
    { id: 1, name: "NARUTO", image: naruto, slug: "naruto" },
    { id: 2, name: "DRAGON BALL", image: dragon, slug: "dragon-ball" },
    { id: 3, name: "DEMON SLAYER", image: demon, slug: "demon-slayer" },
    { id: 4, name: "BERSERK", image: berserk, slug: "berserk" },
    { id: 5, name: "ONE PIECE", image: one, slug: "one-piece" },
    { id: 6, name: "SAKAMOTO DAYS", image: sakamoto, slug: "sakamoto-days" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gray-300">
            <img
              src={otkauback}
              alt="Manga Collage"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="flex justify-center">
  <img src={otakuLogo} alt="Otaku Verse" className="h-16 w-auto" />
</h1>
          </div>
        </div>
        {/* Product List Section */}
        <div className="bg-[#8E0E2F] text-white p-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider border-b border-white pb-2">
              PRODUCT LIST
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-md overflow-hidden max-w-[250px] mx-auto flex flex-col h-[320px] justify-between shadow-lg"
                >
                  <Link to={`/products/${product.slug}`} className="flex flex-col h-full">
                    <div className="flex-grow flex items-center justify-center p-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="max-h-[240px] object-contain"
                      />
                    </div>
                    <div className="bg-white text-[#8E0E2F] p-3 text-center font-bold text-lg w-full">
                      {product.name}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
