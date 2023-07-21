import axios from 'axios';
import { BASE_URL, API_KEY } from './keyAndBaseUrl';

export async function movieCredits(movieID) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
