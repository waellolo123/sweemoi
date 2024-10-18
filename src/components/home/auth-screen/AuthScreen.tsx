import HeroSection from "./HeroSection";
import TodaysHighlight from "./TodaysHighlight";
import MasonaryGrid from "./MasonaryGrid";
import Features from "./Features";
import Testimonials from "./Testimonials";
import PricingPage from "@/components/Pricing";
import Pricing from "@/components/Pricing";
import Team from "./Team";


const AuthScreen = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="mb-20 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center text-gray-700">
            My Graphic Motion Design Portfolio
            <span className="text-2xl md:text-4xl ml-1">👇</span>
          </p>
          {/* featured post */}
          <div className="flex flex-col gap-10 mt-10">
            <TodaysHighlight />
            <div className="mt-24 ">
              <p className="text-2xl md:text-5xl text-center tracking-tighter font-bold text-gray-700">
                Here are some of my graphic creations 
              </p>
              <MasonaryGrid />
            </div>
            <Features />
            <Testimonials />
            <Pricing />
            <Team />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthScreen;