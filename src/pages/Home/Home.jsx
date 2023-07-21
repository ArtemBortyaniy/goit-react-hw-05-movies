import { useState, useEffect } from 'react';
import { trendingDay } from 'services/trendingDay';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  const [trendingData, setTrendingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await trendingDay();
        setTrendingData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Title>Trending Today</Title>
      <MoviesList movies={trendingData} path={'movies/'} />
    </div>
  );
};

export default Home;
