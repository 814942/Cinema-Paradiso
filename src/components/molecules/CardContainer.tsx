import Card from "./Card"
import { Loading } from '../atoms/State/Loading';
import { Error } from '../atoms/State/Error';
import type { Movie } from "../../types/movies.types";

interface Props {
  title?: string
  movies?: Movie[]
  layout: "hero" | "continue" | "popular"
  isLoading?: boolean
  error?: string | null
  className?: string
}

export default function CardContainer({ 
  title, 
  movies = [], 
  layout, 
  isLoading = false, 
  error = null,
  className = '',
}: Props) {
  if (error) {
    return <Error message={error} className="mt-2" />
  }

  if (isLoading) {
    return <Loading title={title} className="mt-2" />
  }

  return (
    <section className={`space-y-4 ${className}`}>
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      <div className="flex overflow-x-auto pb-6 px-4 -mx-4 scrollbar-thin">
        <div className="flex gap-4 pr-4">
          {movies.map((movie: Movie) => (
            <div key={movie.id} className="flex-shrink-0 w-40 md:w-48">
              <Card
                title={movie.title}
                imagePath={movie.backdrop_path || movie.poster_path || ''}
                popularity={movie.vote_average}
                description={movie.overview}
                release_date={movie.release_date}
                original_language={movie.original_language}
                layout={layout}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
