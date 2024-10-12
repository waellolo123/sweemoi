import { Heart, ImageDown, Video } from "lucide-react";
import Image from "next/image";


const CoverImage = () => {
  return (
    <div className="h-44 overflow-hidden relative">
      <Image 
      fill
      className="h-full w-full object-cover select-none pointer-events-none"
      src={"/fff.jpg"} 
      alt="cover-image" 
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" aria-hidden="true"/> */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" aria-hidden="true"/>

      <div className="flex justify-center items-center absolute top-0 left-0 px-2 py-1 z-20 w-full h-full">
        <div className="flex items-center w-full justify-center">
          <div className="flex flex-col gap-2 text-white items-center justify-center">
            <p className="font-bold text-2xl md:text-3xl">John Doe</p>
            <div className="flex gap-2 items-center">

                <div className="flex items-center gap-1">
                    <ImageDown className=" w-4 h-4"/>
                    <span className="text-sm font-bold">45</span>
                </div>

                <span className="text-sm font-bold">|</span>

                <div className="flex items-center gap-1">
                    <Video className=" w-4 h-4"/>
                    <span className="text-sm font-bold">50</span>
                </div>

                <span className="text-sm font-bold">|</span>

                <div className="flex items-center gap-1">
                  <Heart className=" w-4 h-4"/>
                  <span className="text-sm font-bold">12k</span>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoverImage