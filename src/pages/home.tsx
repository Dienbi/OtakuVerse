import { Link } from "react-router-dom";
import otkauback from "../assets/images/otkauback.png";
import naruto from "../assets/images/naruto.png";
import dragon from "../assets/images/dragon.jfif";
import demon from "../assets/images/demon.jfif";
import berserk from "../assets/images/berserk.jfif";
import one from "../assets/images/one-piece.png";
import sakamoto from "../assets/images/Sakamoto.png";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "NARUTO",
      image: naruto,
      slug: "naruto",
    },
    {
      id: 2,
      name: "DRAGON BALL",
      image: dragon,
      slug: "dragon-ball",
    },
    {
      id: 3,
      name: "DEMON SLAYER",
      image: demon,
      slug: "demon-slayer",
    },
    {
      id: 4,
      name: "BERSERK",
      image: berserk,
      slug: "berserk",
    },
    {
      id: 5,
      name: "ONE PIECE",
      image: one,
      slug: "one-piece",
    },
    {
      id: 6,
      name: "SAKAMOTO DAYS",
      image: sakamoto,
      slug: "sakamoto-days",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section with Manga Background */}
        <div className="relative h-96 overflow-hidden"> {/* Increased from h-48 to h-96 */}
          <div className="absolute inset-0 bg-gray-300">
            <img
              src={otkauback}
              alt="Manga Collage"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-[#e91e63] tracking-wider px-4 py-2">
              WELCOME TO OTAKU VERSE
            </h1>
          </div>
        </div>

        {/* Product List Section */}
        <div className="bg-[#8E0E2F] text-white p-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider border-b border-white pb-2">
              PRODUCT LIST
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-md overflow-hidden max-w-[200px] mx-auto">
                  <Link to={`/products/${product.slug}`}>
                    <div className="aspect-[3/4] relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-white text-[#8E0E2F] p-2 text-center font-bold text-sm">
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