import styled from "styled-components";
import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export type BookType = {
  quantity: any;
  image: string | undefined;
  id: number;
  title: string;
  author: string;
  price: number;
  cover: string;
};

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  max-width: 800px;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
`;

const ModalAuthor = styled.p`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
`;

const ModalYear = styled.p`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
`;

const ModalImage = styled.img`
  max-width: 80%;
  height: auto;
  margin: 0.5rem 0;
`;

const ModalDescription = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
`;

const CoverImage = styled.img`
  width: 100px;
  height: 150px;
  margin-right: 1rem;
`;

const BookInfo = styled.div`
  flex: 1;
`;

const BookTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const BookAuthor = styled.p`
  margin: 0.5rem 0;
`;

const BookDescription = styled.p`
  margin: 0.5rem 0;
`;

const Button = styled.button`
  background-color: #f9d5e5;
  border: none;
  border-radius: 4px;
  color: #333;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f0b5c1;
  }
`;

function Book({ book }: { book: any }) {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(CartContext);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = (book: BookType) => {
    if (book) {
        dispatch({ type: 'ADD_BOOK', book: book });
      }
  };

  return (
    <ListItem>
      <CoverImage src={book.image} alt={book.title} />
      <BookInfo>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>by {book.author}</BookAuthor>
        <BookDescription>{book.description}</BookDescription>
        <Button onClick={() => handleAddToCart(book)}>
          Add to Cart ({state.books.length})
        </Button>
        <Button onClick={handleOpenModal}>View Details</Button>
      </BookInfo>
      {showModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
            <ModalTitle>{book.title}</ModalTitle>
            <ModalAuthor>by {book.author}</ModalAuthor>
            <ModalYear>Year: {book.year}</ModalYear>
            <ModalImage src={book.image} alt={book.title} />
            <ModalDescription>{book.description}</ModalDescription>
          </ModalContent>
        </Modal>
      )}
    </ListItem>
  );
}
export default Book;
