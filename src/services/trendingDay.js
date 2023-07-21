import axios from 'axios';
import { BASE_URL, API_KEY } from './keyAndBaseUrl';

export async function trendingDay() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
