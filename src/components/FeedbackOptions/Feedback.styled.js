import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  padding-bottom: 10px;
  align-items: center;
  background: rgb(220, 220, 220);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 2rem;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 24px;
`;

export const Button = styled.button`
  width: auto;
  height: auto;
  border-radius: 5px;
  border: 2px solid black;
  background: rgb(215, 215, 215);
  color: balck;
  &:focus,
  :hover {
    outline: none;
    box-shadow: 0 0 0 3px lightskyblue;
    background-color: #aaa;
  }
`;

export const List = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 25px;
  display: flex;
  justify-content: center;
`;
