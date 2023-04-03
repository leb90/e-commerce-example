import React, { createContext, useReducer } from 'react';

export type BookType = {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
  image: string;
  price: number;
  cover: string;
};

interface BookInCart extends BookType {
  quantity: number;
}

const calculateTotalItems = (books: BookInCart[]) => {
  return books.reduce((total, book) => total + book.quantity, 0);
};

interface CartStateType {
  books: BookInCart[];
  total: number;
}

interface CartContextType {
  state: CartStateType;
  dispatch: React.Dispatch<any>;
}

interface CartActionType {
  type: 'ADD_BOOK' | 'REMOVE_BOOK';
  book: BookType;
}

const CartContext = createContext<CartContextType>({
  state: {
    books: [],
    total: 0,
  },
  dispatch: () => {},
});

const cartReducer = (state: CartStateType, action: CartActionType) => {
  switch (action.type) {
    case 'ADD_BOOK':
      const bookToAdd = action.book;
      const existingBookIndex = state.books.findIndex(
        (book) => book.id === bookToAdd.id
      );
      if (existingBookIndex !== -1) {
        const newBooks = [...state.books];
        const existingBook = newBooks[existingBookIndex];
        const updatedBook = {
          ...existingBook,
          quantity: existingBook.quantity + 1,
        };
        newBooks[existingBookIndex] = updatedBook;
        return {
          ...state,
          books: newBooks,
          total: state.total + updatedBook.price,
        };
      } else {
        const newBook: BookInCart = { ...bookToAdd, quantity: 1 };
        return {
          ...state,
          books: [...state.books, newBook],
          total: state.total + newBook.price,
        };
      }
    case 'REMOVE_BOOK':
      const bookToRemove = action.book;
      const bookToRemoveIndex = state.books.findIndex(
        (book) => book.id === bookToRemove.id
      );
      const existingBook = state.books[bookToRemoveIndex];
      const newBooks = [...state.books];
      if (existingBook.quantity > 1) {
        const updatedBook = {
          ...existingBook,
          quantity: existingBook.quantity - 1,
        };
        newBooks[bookToRemoveIndex] = updatedBook;
        return {
          ...state,
          books: newBooks,
          total: state.total - updatedBook.price,
        };
      } else {
        newBooks.splice(bookToRemoveIndex, 1);
        return {
          ...state,
          books: newBooks,
          total: state.total - existingBook.price,
        };
      }
    default:
      throw new Error('Invalid action type');
  }
};

interface CartContextProviderProps {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, {
    books: [],
    total: 0,
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider, calculateTotalItems };
