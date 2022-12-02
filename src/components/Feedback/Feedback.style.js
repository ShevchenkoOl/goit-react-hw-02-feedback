import styled from 'styled-components';

export const Container = styled.div`
max-width: 40%;
margin-right: auto;
margin-left: auto;
padding-bottom: 10px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 0.5rem;
`;

export const Title = styled.h2`
margin: 0;
padding: 2rem;
text-align: center;
color: #000;
font-weight: bold;
font-size: 16px;
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

export const Button = styled.button`
width: 80px;
height: 25px;
border-radius: 5px;
`;

export const StatisticsList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
`;