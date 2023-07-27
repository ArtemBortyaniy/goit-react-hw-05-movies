import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { serchFilmQuery } from 'services/serchFilmQuery';
import SearchForm from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await serchFilmQuery(query);

        setMoviesData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleFormSubmit = queryParam => {
    setSearchParams({ query: queryParam });
  };

  return (
    <div>
      <SearchForm onSumbit={handleFormSubmit} />
      {moviesData && <MoviesList movies={moviesData} />}
    </div>
  );
};

export default Movies;
