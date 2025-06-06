import Image from '../atoms/Image'

interface CardProps {
  title: string
  imagePath: string
  popularity: number
  description?: string
  release_date?: string
  original_language?: string
  layout?: "hero" | "continue" | "popular" | "trailer"
}

export default function Card({ title, imagePath, popularity, description, release_date, original_language, layout = "popular" }: CardProps) {
  const baseStyle = "rounded-xl overflow-hidden shadow-lg bg-zinc-800 text-white"
  const layoutStyles = {
    hero: "h-48 md:h-64 col-span-full",
    continue: "h-28 md:h-36",
    popular: "h-28 md:h-36",
    trailer: "h-28 md:h-46",
  }

  return (
    <div className={`${baseStyle} ${layoutStyles[layout]} relative group`}>
      <Image 
        path={imagePath} 
        alt={title} 
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
      />
      
      {/* Contenido siempre visible - se oculta en hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-2 md:p-3 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-sm md:text-base font-bold text-white line-clamp-1">{title}</h3>
        <div className="flex items-center gap-1 text-yellow-400">
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs md:text-sm font-semibold">{popularity.toFixed(1)}</span>
        </div>
      </div>

      {/* Contenido en hover */}
      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 md:p-3 flex flex-col">
        <div className="flex-grow overflow-y-auto text-xs md:text-sm text-gray-200 scrollbar-thin">
          {description && (
            <p className="mb-2">{description}</p>
          )}
        </div>
        <div className="pt-2 border-t border-gray-700 mt-2">
          <div className="flex justify-between items-center text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-1 text-yellow-400">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{popularity.toFixed(1)}</span>
            </div>
            <div className="flex gap-2 md:gap-4">
              {release_date && <span>{new Date(release_date).getFullYear()}</span>}
              {original_language && (
                <span className="uppercase">{original_language}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
