import { Link } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';

export function MoviesList({ movies, path = '' }) {
  return (
    <List>
      {movies &&
        movies.map(item => (
          <Item key={item.id}>
            <Link to={`${path}${item.id}`}>{item.title || item.name}</Link>
          </Item>
        ))}
    </List>
  );
}
