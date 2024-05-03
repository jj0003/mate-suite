import Image from "next/image";
import Link from "next/link"; // Import Link if you want to make the button a link
import { Button } from "@/components/ui/button"
import GradientMain from "@/assets/images/GradientMain.svg";
import { BUILD_ID_FILE } from "next/dist/shared/lib/constants";


export default function Home() {
  return (
    <div className="flex flex-col px-40">
      <div className="flex flex-col items-start bg-white shadow-lg rounded-lg p-10 mb-8 mt-8">
        {/* Image */}
        <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden">
          <Image
            src={GradientMain} // Replace with your image path
            layout="fill"
            objectFit="cover"
            alt="Mate Suite Gradient"
          />
        </div>
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mt-4">
          Welcome to the Mate Suite!
        </h1>
        
        {/* Subtitle */}
        <p className="text-center text-gray-600 mt-2 mb-4 uppercase tracking-widest">
          We engineer productivity.
        </p>
        
        {/* Button */}
        <Button className="text-xs text-center uppercase tracking-widest">
          <Link href="/login">Learn more</Link>
        </Button>
      </div>
      <div className="flex flex-row items-start bg-white shadow-lg rounded-lg p-10 mb-8 gap-10">
        {/* ToDo Mate*/}
        <div className="relative w-1/3 h-48 sm:h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden">
          <Image
            src={GradientMain}
            layout="fill"
            objectFit="cover"
            alt="Mate Suite Gradient"
          />
          <Button>
            <Link href="/login">ToDo Mate</Link>
          </Button>
        </div>
        {/* Budget Mate*/}
        <div className="relative w-1/3 h-48 sm:h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden">
          <Image
            src={GradientMain}
            layout="fill"
            objectFit="cover"
            alt="Mate Suite Gradient"
          />
        </div>
        {/* ToDo Mate*/}
        <div className="relative w-1/3 h-48 sm:h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden">
          <Image
            src={GradientMain}
            layout="fill"
            objectFit="cover"
            alt="Mate Suite Gradient"
          />
        </div>

      </div>
    </div>

    
  );
}