import useApi from "../../hooks/useApi"
import type { IGenresData } from "../../types/genres.types"
import { Loading } from '../atoms/State/Loading';
import { Error } from '../atoms/State/Error';
import { Chip } from '../atoms/Chip';

export function GenresFilters() {
  const { data, isLoading, error } = useApi<IGenresData>('genre/movie/list');

  if (isLoading) {
    return <Loading title="Cargando géneros" />
  }

  if (error) {
    return <Error message={error.message} />
  }

  return (
    <div className="p-4 bg-gray-900">
      <h2 className="text-xl font-bold text-cwhite mb-4">Favourite genres</h2>
      <div className="flex flex-wrap gap-3">
        {data?.genres?.map((genre) => (
          <Chip
            key={genre.id}
            id={genre.id}
            label={genre.name}
            className="px-3 py-1.5 text-sm cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}
