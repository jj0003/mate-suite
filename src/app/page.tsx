import Image from "next/image";
import Link from "next/link"; // Import Link if you want to make the button a link
import { Button } from "@/components/ui/button"
import GradientMain from "@/assets/images/GradientMain.svg";
import GradientToDoMate from "@/assets/images/GradientToDoMate.svg";
import GradientBudgetMate from "@/assets/images/GradientBudgetMate.svg";
import GradientCookMate from "@/assets/images/GradientCookMate.svg";
import GradientAboutSection from "@/assets/images/GradientAboutSection.svg";



export default function Home() {
  return (
    <div className="flex flex-col px-40">
      <div className="flex flex-col items-start bg-white shadow-lg rounded-lg p-10 mb-10 mt-10">
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
        <h1 className="text-3xl font-bold text-center mt-4 capitalize">
          Welcome to the MateSuite!
        </h1>
        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-4 uppercase tracking-widest">
          We engineer productivity.
        </p> 
        {/* Button */}
        <Button className="text-xs text-center uppercase tracking-widest">
          <Link href="/login">Learn more</Link>
        </Button>
      </div>



      {/* Row of Cards*/}
      <div className="bg-white shadow-lg rounded-lg p-10 mb-10">
        <h1 className="text-3xl font-bold text-center mb-10 capitalize">
          Get to know our products
        </h1>
      <div className="flex flex-row  gap-10">

        {/* Card 1*/}
        <div className="relative w-1/3 h-48 sm:h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image
            src={GradientToDoMate}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          {/* Content Colum */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4 text-white">ToDo Mate</h1>
            {/* Button */}
            <Button className="text-xs text-center uppercase tracking-widest">
              <Link href="/your-link">Organize your day now</Link>
            </Button>
          </div>
        </div>

        {/* Card 2*/}
        <div className="relative w-1/3 h-48 sm:h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image
            src={GradientBudgetMate}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4 text-white">Budget Mate</h1>
            {/* Button */}
            <Button className="text-xs text-center uppercase tracking-widest">
              <Link href="/your-link">Take back your finances</Link>
            </Button>
          </div>
        </div>

        {/* Card 3*/}
        <div className="relative w-1/3 h-48 sm:h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image
            src={GradientCookMate}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4 text-white">Cook Mate</h1>
            {/* Button */}
            <Button className="text-xs text-center uppercase tracking-widest">
              <Link href="/your-link">Start cooking now</Link>
            </Button>
          </div>
        </div>
      </div>
      </div>


      <div className="flex items-start bg-white shadow-lg rounded-lg p-10 mb-10 gap-10">
        <div className="flex flex-col items-start ">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mt-4 capitalize ">
            Who we are
          </h1>
          {/* Subtitle */}
          <p className="text-center text-gray-600 mb-2 uppercase tracking-widest">
            connect with the humans behind the code.
          </p> 
          <p className="mb-4">
            Transparency is at the core of everything we do, which is why we publish our apps and their full code as Free and Open Source Software (FOSS). We're driven by a passion for empowering individuals and fostering collaboration. Join us in our mission to create a more transparent, open, and empowering digital world for all.
          </p>
          {/* Button */}
          <Button className="text-xs text-center uppercase tracking-widest mb-4">
            <Link href="/login">get to know us</Link>
          </Button>
        </div>

      </div>




    </div>

    
  );
}