import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import client from './api/apoloClient';
import Book from './Book';

const BOOKS_QUERY = gql`
  query GetBooks {
    books {
      id
      title
      author
      year
      image
      description
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;


function Books() {
  const { loading, error, data } = useQuery(BOOKS_QUERY, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List>
      {data.books.map((book: any) => (
        <Book key={book.id} book={book} />
      ))}
    </List>
  );
}

export default Books;
