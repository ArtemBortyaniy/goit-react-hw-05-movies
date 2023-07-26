import { Link } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';

export function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(item => (
        <Item key={item.id}>
          <Link to={`${item.id}`}>{item.title || item.name}</Link>
        </Item>
      ))}
    </List>
  );
}
