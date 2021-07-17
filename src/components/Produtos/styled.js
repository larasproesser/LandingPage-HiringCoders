import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;

export const Headline = styled.h1`
  color: #9319a0;
  text-align: center;
  font-weight: 900;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    margin: 3rem 3rem;
  }
  @media (max-width: 500px) {
   flex-direction: column;
   align-items: center;
  }
`;

export const Product = styled.img`
  width: 13rem;
  height: 13rem;
  padding: 2px 3em 0 1em;
  @media (max-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`;