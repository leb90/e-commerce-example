import React, { useState, useContext } from "react";
import BookList from "./BookList";
import Cart from "./Cart";
import { CartContext, calculateTotalItems } from "../contexts/CartContext";
import styled from "styled-components";

const CartButton = styled.div`
  position: relative;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CartTooltip = styled.div`
  position: absolute;
  top: calc(2em + 10px);
  left: 13em;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  min-width: 200px;
  z-index: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out,
    transform 0.3s ease-out;
`;

const CartBadge = styled.div`
  position: absolute;
  top: 50%;
  right: -50%;
  transform: translate(50%, -50%);
  background-color: red;
  color: white;
  border-radius: 50%;
  font-size: 0.8rem;
  padding: 0.3rem;
  min-width: 1rem;
  min-height: 1rem;
  text-align: center;
  z-index: 2;
`;

const BookListContainer = styled.div`
  margin-top: 32px;
`;

const CartContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover ${CartTooltip} {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0%);
    transition-delay: 0.3s;
  }
`;

const HomePage: React.FC = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const { state } = useContext(CartContext);
  const totalItems = calculateTotalItems(state.books);

  const handleTooltipToggle = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  return (
    <>
      <CartContainer>
        <CartButton
          onMouseEnter={handleTooltipToggle}
          onMouseLeave={handleTooltipToggle}
        >
          <i className="fas fa-shopping-cart"></i>
          {state.total >= 0 && <CartBadge>{totalItems}</CartBadge>}
        </CartButton>
        <CartTooltip className="cart-tooltip">
          <Cart />
        </CartTooltip>
      </CartContainer>
      <BookListContainer>
        <BookList />
      </BookListContainer>
    </>
  );
};

export default HomePage;
