import { movieReviews } from 'services/movieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsMovie() {
      try {
        const response = await movieReviews(movieId);
        setReviewsMovie(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getReviewsMovie();
  }, []);
  return <div> {reviewsMovie && <ReviewsList data={reviewsMovie} />}</div>;
};

export default Reviews;
