import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';

export function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(item => (
        <Item key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title || item.name}
          </Link>
        </Item>
      ))}
    </List>
  );
}
