import { ReactNode } from "react"


const RotatedText = ({children}: {children: ReactNode}) => {
  return (
    <span className="relative whitespace-nowrap">
      <span 
      aria-hidden="true"
      className="absolute bg-sky-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 mx-2" />
      <div className="relative uppercase">
        {children}
      </div>
    </span>
  )
}

export default RotatedText