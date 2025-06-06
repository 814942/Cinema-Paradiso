import CardContainer from "./CardContainer"
import useApi from "../../hooks/useApi"
import type { MovieResponse } from "../../types/movies.types"

export default function ContinueWatchingSection() {
  const { data, error, isLoading } = useApi<MovieResponse>('movie/now_playing')

  return (
    <CardContainer 
      title="Continue Watching" 
      movies={data?.results || []} 
      layout="continue"
      isLoading={isLoading}
      error={error?.message}
    />
  )
}
