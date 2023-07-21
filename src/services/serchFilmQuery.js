import axios from 'axios';
import { BASE_URL, API_KEY } from './keyAndBaseUrl';

export async function serchFilmQuery(searchQuery) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
