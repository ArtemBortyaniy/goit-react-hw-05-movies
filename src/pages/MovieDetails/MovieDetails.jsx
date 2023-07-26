import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { detailsMovie } from 'services/detailsMovie';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { List, LinkTo } from './MovieDetails.styled';
import { Suspense, useRef } from 'react';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

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
      <LinkTo to={backLinkHref.current}>Go to back</LinkTo>
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
