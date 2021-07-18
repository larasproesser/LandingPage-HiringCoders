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
    padding-bottom: 1rem;
  }
`;
export const Callout = styled.p`
  text-transform: uppercase;
  color: #5E1C6D;
  font-weight: 900;
  font-size: 3.5rem;
  width: max-content; 
  margin-left: 5%;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-left: 5rem;
    margin-top: 2.5em;
    padding-top: 2rem;
  }
`;
export const Headline = styled.section`
  color: #5E1C6D;
  padding: 0.8rem 0;
  font-size: 1.5rem;
  margin: 10px 0 0 18rem;
  padding: 80px 1%;

  @media (max-width: 1023px) {
    margin-left: 7.3rem;
    margin-top: -1rem;
    padding-bottom: 1em;
    font-size: 1.3rem;
  }
`;
export const Email = styled.input`
  cursor: text;
  width: 35%;
  border: 2px solid #DA79F2;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 100px;
  font-size: 1.5rem;
  margin: 13px 0 0 4rem;

    @media (max-width: 1024px) {
    font-size: 1rem;
    margin-left: 2rem;
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
  background-color: #9E3CB7;
  border-radius: 100px;
  border: 1px solid transparent;
  margin: 14px 0 0 12rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-left: 6.5rem;
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