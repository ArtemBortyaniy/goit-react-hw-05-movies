import { List, Img, Text } from './CastList.styled';
import { Error } from 'components/ReviewsList/ReviewsList.styled';

export const CastList = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <Error>no cast</Error>
      ) : (
        <List>
          {data.map(item => {
            return (
              <li key={item.id}>
                <Img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                      : 'https://img.freepik.com/free-photo/army-soldiers-fighting-with-guns-and-defending-their-country_1303-26673.jpg?size=626&ext=jpg'
                  }
                  alt={item.name}
                />
                <Text>{item.name}</Text>
                <Text>{item.character}</Text>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};
