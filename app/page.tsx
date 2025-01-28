import Image from "next/image";
import Header from "@/app/components/Header";
import { Title } from "@/app/components/Title";
import { IBM_Plex_Mono } from 'next/font/google'

const font = IBM_Plex_Mono({ weight: "500", subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={`relative h-screen w-screen ${font.className}`}>
        <div className="absolute top-0 left-0 z-0 bg-[#0B0A18] w-full h-full">
          <Image
            src="bg.svg"
            alt="background"
            className="w-full h-full object-cover"
            fill
          /> 
          {/* bg code ^ */}
        </div>
        <div className="relative z-10 text-white">
          {/* put content here */}
          <Header />
          <Title />
        </div>
      </div>
    </>
  );
}
