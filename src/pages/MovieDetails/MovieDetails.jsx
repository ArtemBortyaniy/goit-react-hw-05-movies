import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { detailsMovie } from 'services/detailsMovie';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { List, LinkTo } from './MovieDetails.styled';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

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
  }, [movieId]);
  return (
    <div>
      <button type="button" onClick={() => navigate('/')}>
        go to back
      </button>
      {movieDetails && <MovieCard movie={movieDetails} />}
      <List>
        <li>
          <LinkTo to={'cast'}>Cast</LinkTo>
        </li>
        <li>
          <LinkTo to={'reviews'}>Reviews</LinkTo>
        </li>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
