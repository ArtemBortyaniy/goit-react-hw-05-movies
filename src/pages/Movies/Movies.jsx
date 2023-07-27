import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { serchFilmQuery } from 'services/serchFilmQuery';
import SearchForm from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryParam, setQueryParam] = useState(searchParams.get('query') || '');
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query') === '';

    if (query) {
      return;
    }

    setQueryParam(searchParams.get('query') || '');
    const fetchData = async () => {
      try {
        const response = await serchFilmQuery(queryParam);

        setMoviesData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [queryParam, searchParams]);

  const handleFormSubmit = queryParam => {
    setSearchParams({ query: queryParam });
    setQueryParam(queryParam);
  };
  
  return (
    <div>
      <SearchForm onSumbit={handleFormSubmit} />
      {moviesData && <MoviesList movies={moviesData}></MoviesList>}
    </div>
  );
};

export default Movies;
