import React from 'react';
import BookList from './BookList';

const HomePage: React.FC = () => {
  return (
    <>
      <h1>Welcome to my bookstore</h1>
      <BookList />
    </>
  );
};

export default HomePage;