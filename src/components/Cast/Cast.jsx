import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from 'services/movieCredits';
import { CastList } from 'components/CastList/CastList';

const Cast = () => {
  const [creditsMovie, setCreditsMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCreditsMovie() {
      try {
        const response = await movieCredits(movieId);
        setCreditsMovie(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    }

    getCreditsMovie();
  }, []);
  return <div>{creditsMovie && <CastList data={creditsMovie} />}</div>;
};

export default Cast;
