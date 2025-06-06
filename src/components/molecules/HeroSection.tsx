import CardContainer from "./CardContainer"
import useApi from "../../hooks/useApi"
import type { MovieResponse } from "../../types/movies.types"

export default function HeroSection() {
  const { data, error, isLoading } = useApi<MovieResponse>('movie/top_rated')

  return (
    <CardContainer 
      movies={data?.results || []} 
      layout="hero"
      isLoading={isLoading}
      error={error?.message}
    />
  )
}
