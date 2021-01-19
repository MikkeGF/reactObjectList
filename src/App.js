import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Item from './Item';
import uuid from 'react-uuid';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  flex-direction: column;
`;
const Td = styled.td`
  text-align: center;

`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: pink;
  }
  &:nth-child(odd) {
    background-color: lightgray;
  }
`;
const Th = styled.th`
  padding: 10px;
  background-color: lightgreen;
`;




function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
  const shoppingList = [];
  shoppingList.push(new Item('coffee', 1));
  shoppingList.push(new Item('milk', 2));
  shoppingList.push(new Item('butter', 3));
  shoppingList.push(new Item('cola', 2));
  setItems(shoppingList);
  }, [])
  return (
    <Wrapper>
      <h3>Shopping list</h3>
      <table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Amount</Th>
          </Tr>
          </thead>
          <tbody>
          {
          items.map(item => (
            <Tr key={uuid()}>
              <Td>{item.name}</Td>
              <Td>{item.amount}</Td>
            </Tr>
          ))}
          </tbody>
      </table>
    </Wrapper>
  );
}

export default App;
