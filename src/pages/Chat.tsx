import { User } from "lucide-react";
import image from "../assets/images/image.png";
import imageY from "../assets/images/imageY.png";
import logo from "../assets/images/konoha logo.png";

export default function ChatForum() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageY})` }}
        >
          <div className="absolute inset-0 bg-[#c3073f] opacity-80"></div>
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-70">
        <div className="w-full max-w-3xl rounded-lg bg-[#c3073f]/80 p-8 backdrop-blur-sm">
          <div className="mb-8 flex justify-center">
            <img src={image} alt="Chat Forum" className="h-16 w-auto" />
          </div>

          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1b1633]">
                <User size={16} />
              </div>
              <div className="flex-1 max-w-xs rounded-lg bg-[#ffffff]/70 px-4 py-2 text-black">
                bonjour elyess
              </div>
            </div>

            <div className="flex items-center gap-2 flex-row-reverse">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1b1633]">
                <User size={16} />
              </div>
              <div className="flex-1 max-w-xs rounded-lg bg-black px-4 py-2 text-white">
                salut ahmed
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1b1633]">
                <User size={16} />
              </div>
              <div className="flex-1 max-w-xs rounded-lg bg-[#ffffff]/70 px-4 py-2 text-black">
                j'ai achete le manga de naruto
              </div>
            </div>
          </div>

          <div className="relative mt-4 rounded-full bg-[#000000]/25 px-4 py-3 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Votre message..."
              className="w-full bg-transparent text-white placeholder-white/70 focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <img src={logo} alt="Konoha Logo" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}