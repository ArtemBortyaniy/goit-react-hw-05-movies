import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { detailsMovie } from 'services/detailsMovie';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { List, LinkTo } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getInfoMovie() {
      try {
        const response = await detailsMovie(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getInfoMovie();
  }, []);
  return (
    <div>
      {movieDetails && <MovieCard movie={movieDetails} />}
      <List>
        <li>
          <LinkTo to={'cast'}>Cast</LinkTo>
        </li>
        <li>
          <LinkTo to={'reviews'}>Reviews</LinkTo>
        </li>
      </List>
      <Outlet></Outlet>
    </div>
  );
};

export default MovieDetails;
