import axios from 'axios';
import { BASE_URL, API_KEY } from './keyAndBaseUrl';

export async function movieReviews(movieID) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
