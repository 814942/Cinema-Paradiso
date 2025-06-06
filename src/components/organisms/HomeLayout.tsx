import HeroSection from "../molecules/HeroSection"
import PopularSection from "../molecules/PopularSection"
import ContinueWatchingSection from "../molecules/ContinueWatchingSection"
import { Trailer } from "../molecules/Trailer"
import { GenresFilters } from "../molecules/GenresFilters"

export default function HomeLayout() {
  return (
    <div className="flex h-screen bg-zinc-900 text-white overflow-hidden ">
      {/* Sidebar izquierdo */}
      <div className="w-[30%] flex flex-col border-r border-gray-800">
        <div className="h-[70%] overflow-hidden hover:overflow-y-auto pr-2 scrollbar-thin">
          <Trailer />
        </div>
        <div className="h-[30%] overflow-hidden hover:overflow-y-auto pr-2 border-t border-gray-800 scrollbar-thin">
          <GenresFilters />
        </div>
      </div>
      
      {/* Contenido principal con scroll */}
      <div className="w-[70%] overflow-y-auto scrollbar-thin">
        <div className="space-y-8 p-6">
          <HeroSection />
          <PopularSection />
          <ContinueWatchingSection />
        </div>
      </div>
    </div>
  )
}
