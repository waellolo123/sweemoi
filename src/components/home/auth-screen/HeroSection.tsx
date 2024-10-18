import Image from "next/image";
import AuthButtons from "./AuthButtons";


const HeroSection = () => {
  return (
    <div className="flex h-screen w-full">
      {/* left */}
     <div className="flex-1 flex overflow-hidden bg-[#dadadaa6] relative justify-center items-center z-10  bg-noise">
      {/* <img src="/of-logo.svg" alt="onlygraphlogo" className="absolute opacity-15 -left-1/4 -bottom-52 lg:scale-150 xl:scale-105 scale-[2] pointer-events-none select-none"/> */}
      <div className="flex flex-col gap-2 px-4 text-center">
        <div className="flex items-center justify-center">
         <Image src={"/wael_name.png"} alt="wael name" width={769} height={182} className="mb-10 w-[300px] lg:w-[400px] z-0 pointer-events-none select-none" />
        </div>
        <h1 className="mb-5 text-2xl md:text-3xl text-balance text-gray-600">Hey! Welcome <span className="bg-stone-800 px-2 font-bold text-white">To My</span> Portfolio.</h1>
        <p className=" mb-20 leading-snug text-balance text-center w-full">this is my <span className="bg-[#00b0f0] text-white">fullstack next js </span> Portfolio.Here I regularly publish posts about my creations in web development or graphic motion design, and I offer welcome gifts like mockups, <span className="bg-white"> Thanks </span> to Subscribing</p>
        {/* auth buttons */}
        <AuthButtons />
      </div>
     </div> 
     <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex">
     {/* right */}
      <Image src={"/wael_big3.jpg"} alt="wael" fill className="object-cover opacity-100 pointer-events-none select-none h-full"/>
     </div> 
    </div>
  )
}

export default HeroSection;
