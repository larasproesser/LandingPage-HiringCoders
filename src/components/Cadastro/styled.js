import styled from 'styled-components';
import Cartão from '../../images/cartão.png';

export const Cadastro = styled.main`
  height: 95vh;
  flex-direction: column;
  background-image: url(${Cartão});
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 50vh;
    padding-bottom: 2rem;
  }
`;

export const Callout = styled.p`
  text-transform: uppercase;
  color: #5e1c6d;
  font-weight: 900;
  font-size: 2.5rem;
  width: max-content;  
  padding: 4px 2.5em;
  margin: 130px 1em 1px 4rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    padding: 0 0.25rem;
  }
`;

export const Headline = styled.section`
  color: #5e1c6d;
  padding: 0.8rem 0;
  font-size: 1.5rem;
  margin: 10px 0 0 18rem;
  padding: 100px 1%;

  @media (max-width: 1023px) {
    margin-top: 1rem;
  }
`;

export const Email = styled.input`
  cursor: text;
  width: 35%;
  border: 2px solid #da79f2;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 100px;
  font-size: 1.5rem;
  margin: 13px 0 0 4rem;

    @media (max-width: 1024px) {
    font-size: 1rem;
  }
  &:focus,
  &:active {
    background-color: white;
    box-shadow: none;
    outline:none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  width: 20%;
  font-weight: 520;
  height: 4rem;
  font-size: 1.5rem;
  background-color: #9e3cb7;
  border-radius: 100px;
  border: 1px solid transparent;
  margin: 13px 0 0 10rem;
  
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const CheckIcon = styled.i`
  color: springgreen;
  font-weight: 520;
`;