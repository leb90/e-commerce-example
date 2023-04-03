import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;

export const CartItemTitle = styled.div`
  font-weight: bold;
`;

export const CartItemQuantity = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const CartItemPrice = styled.div`
  font-size: 0.8rem;
`;

export const CartTotal = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;
