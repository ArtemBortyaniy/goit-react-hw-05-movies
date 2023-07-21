import axios from 'axios';
import { BASE_URL, API_KEY } from './keyAndBaseUrl';

export async function detailsMovie(movieID) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieID}?api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
