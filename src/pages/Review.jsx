import { useState } from "react";
import { Star, User } from "lucide-react";
import imageY from "../assets/images/imageY.png"; // Import du background
import imge from "../assets/images/imge.png"; // Import du titre

export default function ReviewInterface() {
  const [rating, setRating] = useState(0); // État pour gérer la sélection des étoiles

  const reviews = [
    { id: 1, user: "Elyess", rating: 5, comment: "This manga is amazing! The story is captivating and the artwork is beautiful." },
    { id: 2, user: "Dhia", rating: 4, comment: "Very good manga, but the ending feels a bit rushed." },
    { id: 3, user: "Hama", rating: 3, comment: "Not bad, but I expected more." },
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-black bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(195, 7, 63, 0.4), rgba(195, 7, 63, 0.4)), url(${imageY})`,
      }}
    >
      {/* Contenu principal */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl rounded-lg bg-[#c3073f]/80 p-8 backdrop-blur-sm">
          {/* Titre */}
          <div className="mb-6 flex justify-center">
            <img src={imge} alt="User Reviews" className="h-16 w-auto" />
          </div>

          {/* Liste des avis */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="rounded-lg bg-[#ffffff]/10 p-4 backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1b1633]">
                    <User size={16} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">{review.user}</h2>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? "text-yellow-400" : "text-gray-400"}
                          fill={i < review.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-200">{review.comment}</p>
              </div>
            ))}
          </div>

          {/* Formulaire d'ajout d'avis */}
          <div className="mt-6 rounded-lg bg-[#ffffff]/10 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-semibold text-white">Leave a Review</h2>
            <form className="space-y-4">
              {/* Évaluation par étoiles */}
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Your rating:</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < rating ? "text-yellow-400 cursor-pointer" : "text-gray-400 cursor-pointer"}
                      fill={i < rating ? "currentColor" : "none"}
                      onClick={() => setRating(i + 1)}
                    />
                  ))}
                </div>
              </div>

              {/* Commentaire */}
              <textarea
                placeholder="Your comment..."
                className="w-full rounded-lg bg-[#ffffff]/20 p-3 text-sm text-white placeholder-gray-300 focus:outline-none"
                rows={3}
              />

              {/* Bouton de soumission */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#c3073f] px-4 py-2 text-white hover:bg-[#a30636]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
