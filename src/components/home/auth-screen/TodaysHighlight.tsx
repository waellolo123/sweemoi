"use client";
import { CldVideoPlayer } from 'next-cloudinary';




const TodaysHighlight = () => {
  return (
    <div className='w-full md:w-3/4 mx-auto'>
      <CldVideoPlayer 
      width="960"
      height="540"
      className='rounded-md'
      src='https://res.cloudinary.com/dyesiteib/video/upload/v1729245783/Graphic_motion_design_professionnal_resume_omsud8.mp4'
      />
    </div>
  )
}

export default TodaysHighlight;