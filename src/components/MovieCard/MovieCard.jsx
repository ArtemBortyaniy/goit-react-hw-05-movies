import {
  Container,
  Name,
  Title,
  Text,
  TextContainer,
  List,
} from './MovieCard.styled';

export function MovieCard({ movie }) {
  return (
    <Container>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : 'https://img.freepik.com/free-photo/army-soldiers-fighting-with-guns-and-defending-their-country_1303-26673.jpg?size=626&ext=jpg'
        }
        alt={movie.tagline}
      />
      <TextContainer>
        <Name>{movie.title || movie.name}</Name>
        <Title>User score :</Title>
        <Text>{movie.vote_average}</Text>
        <Title>Overview :</Title>
        <Text>{movie.overview}</Text>
        <Title>Genres :</Title>
        <List>
          {movie.genres.map(genre => (
            <li key={genre.id}>
              <Text>|{genre.name}|</Text>
            </li>
          ))}
        </List>
      </TextContainer>
    </Container>
  );
}
