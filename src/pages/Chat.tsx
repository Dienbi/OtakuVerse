import { User } from "lucide-react";
import image from "../assets/images/image.png"; // Importez l'image du titre
import imageY from "../assets/images/imageY.png"; // Importez l'image de fond

export default function ChatForum() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageY})` }} // Utilisez l'image importée ici
        >
          <div className="absolute inset-0 bg-[#c3073f] opacity-80"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-70">
        <div className="w-full max-w-3xl rounded-lg bg-[#c3073f]/80 p-8 backdrop-blur-sm">
          {/* Forum title as an image */}
          <div className="mb-8 flex justify-center">
            <img
              src={image} // Utilisez l'image importée ici
              alt="Chat Forum"
              className="h-16 w-auto" // Ajustez la taille selon vos besoins
            />
          </div>

          {/* Chat messages */}
          <div className="mb-6 space-y-4">
            {/* Message 1 */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1b1633]">
                <User size={16} />
              </div>
              <div className="flex-1 max-w-xs rounded-lg bg-[#ffffff]/70 px-4 py-2 text-black">
                bonjour elyess
              </div>
            </div>

            {/* Message 2 */}
            <div className="flex items-center gap-2 flex-row-reverse"> {/* Inverse l'ordre des éléments */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1b1633]">
                <User size={16} />
              </div>
              <div className="flex-1 max-w-xs rounded-lg bg-black px-4 py-2 text-white">
                salut ahmed
              </div>
            </div>

            {/* Message 3 */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1b1633]">
                <User size={16} />
              </div>
              <div className="flex-1 max-w-xs rounded-lg bg-[#ffffff]/70 px-4 py-2 text-black">
                j'ai achete le manga de naruto
              </div>
            </div>
          </div>

          {/* Message input */}
          <div className="relative mt-4 rounded-full bg-[#b44538]/50 px-4 py-3 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Votre message..."
              className="w-full bg-transparent text-white placeholder-white/70 focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path d="M12 7V5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 19V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 12H7" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}