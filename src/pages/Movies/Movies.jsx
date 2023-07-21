import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { serchFilmQuery } from 'services/serchFilmQuery';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Form, Input, Button } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryParam, setQueryParam] = useState(searchParams.get('query') || '');
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    setQueryParam(searchParams.get('query') || '');
    const fetchData = async () => {
      try {
        const response = await serchFilmQuery(queryParam);

        setMoviesData(response.data.results);
        setQueryParam('');
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleInputChange = e => {
    setQueryParam(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: queryParam });
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <label>
          <Input type="text" value={queryParam} onChange={handleInputChange} />
        </label>
        <Button type="submit">Search</Button>
      </Form>
      {moviesData && <MoviesList movies={moviesData}></MoviesList>}
    </div>
  );
};

export default Movies;
