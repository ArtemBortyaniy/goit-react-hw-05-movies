import { Error, List } from './ReviewsList.styled';

export const ReviewsList = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <Error>no reviews</Error>
      ) : (
        <List>
          {data.map(item => {
            return (
              <li key={item.id}>
                <b>Author :</b>
                <p>{item.author}</p>
                <p>{item.content}</p>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};
