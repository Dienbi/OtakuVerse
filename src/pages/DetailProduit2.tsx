import { useState } from "react"
import naruto from "../assets/images/naruto-1-kana.webp";
import nukuregular from "../assets/images/nkukur1.webp";
import confirm from "../assets/images/confirm.webp";
import cancel from "../assets/images/cancel.webp";
export default function ProductDetails() {
  const [productData, setProductData] = useState({
    image: "/placeholder.svg?height=200&width=400",
    description: "xxxxxxxxxxxxxxxxxx\nxxxxxxxxxxxxxxxxxx",
    author: "xxxxxxxxx",
    reference: "xxxxxxxxx",
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#800020] p-4">
      <div className="w-full max-w-md space-y-6">
        <img src={nukuregular} alt="Demon Slayer Volume 1 Cover" className="mt-3 mb-6" />

        {/* Image container */}
        <div className="bg-[#D9D9D9] p-2 rounded-md">
          <img
            src={naruto}
            alt="Product image"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Details container */}
        <div className="bg-[#D9D9D9] p-4 rounded-md space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-black">Description:</h2>
            <p className="whitespace-pre-line text-2xl text-black">{productData.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <span className="font-bold text-2xl text-black">Auteur:</span>
            <span className="col-span-2 text-2xl text-black">{productData.author}</span>

            <span className="font-bold text-2xl text-black">Reference:</span>
            <span className="col-span-2 text-2xl text-black">{productData.reference}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button className="bg-[#D9D9D9] text-black text-2xl px-6 py-3 rounded-md font-bold tracking-wider hover:bg-gray-300 transition-colors">
          <img src={confirm} alt="Demon Slayer Volume 1 Cover" className="mt-2 mb-2" />
          </button>
          <button className="bg-[#D9D9D9] text-black text-2xl px-6 py-3 rounded-md font-bold tracking-wider hover:bg-gray-300 transition-colors">
          <img src={cancel} alt="Demon Slayer Volume 1 Cover" className="mt-2 mb-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
