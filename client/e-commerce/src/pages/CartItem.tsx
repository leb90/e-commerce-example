import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type BookType = {
  quantity: any;
  image: string | undefined;
  id: number;
  title: string;
  author: string;
  price: number;
  cover: string;
}

interface Props {
  item: BookType;
  onAdd: (item: BookType) => void;
  onRemove: (item: BookType) => void;
}

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  height: 80px;
  margin-right: 16px;
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const ItemQuantity = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 16px;
`;

const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005ea0;
  }
`;

const CartItem = ({ item, onAdd, onRemove }: Props) => {
  const handleAdd = () => {
    onAdd(item);
  };

  const handleRemove = () => {
    onRemove(item);
  };

  return (
    <CartItemWrapper>
      <ItemDetails>
        <ItemImage src={item.image} alt={item.title} />
        <>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
        </>
      </ItemDetails>
      <>
        <ItemPrice>${item.price * item.quantity}</ItemPrice>
        <Button onClick={handleRemove}>-</Button>
        <Button onClick={handleAdd}>+</Button>
      </>
    </CartItemWrapper>
  );
};

export default CartItem;
