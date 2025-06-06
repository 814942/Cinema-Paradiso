import CardContainer from "./CardContainer"
import useApi from "../../hooks/useApi"
import type { MovieResponse } from "../../types/movies.types"

export default function PopularSection() {
  const { data, error, isLoading } = useApi<MovieResponse>('movie/popular')

  return (
    <CardContainer 
      title="Popular" 
      movies={data?.results || []} 
      layout="popular"
      isLoading={isLoading}
      error={error?.message}
    />
  )
}
