import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import {
  CartContainer,
  CartList,
  CartItem,
  CartItemTitle,
  CartItemQuantity,
  CartItemPrice,
  CartTotal,
} from "./CartStyles";

type BookType = {
  quantity: any;
  image: string | undefined;
  id: number;
  title: string;
  author: string;
  price: number;
  cover: string;
};



const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleRemoveBook = (book: BookType) => {
    dispatch({ type: "REMOVE_BOOK", book });
  };

  return (
    <CartContainer>
      <CartList>
        {state.books.length === 0 ? (
          <CartItemTitle>Your cart is empty</CartItemTitle>
        ) : (
          state.books.map((book) => (
            <CartItem key={book.id}>
              <CartItemTitle>{book.title}</CartItemTitle>
              <CartItemQuantity>x{book.quantity}</CartItemQuantity>
              <CartItemPrice>${book.price * book.quantity}</CartItemPrice>
              <button onClick={() => handleRemoveBook(book)}>Remove</button>
            </CartItem>
          ))
        )}
      </CartList>
      <CartTotal>Total: ${state.total.toFixed(2)}</CartTotal>
    </CartContainer>
  );
};

export default Cart;
