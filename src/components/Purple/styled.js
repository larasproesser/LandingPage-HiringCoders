import styled from 'styled-components';
import PurpleFriday from '../../images/purplefriday.jpg';

export const Purple = styled.main`
  height: 100vh;
  background-image: url(${PurpleFriday});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 50vh;
    padding-bottom: 2rem;
  }
`;

export const Login = styled.a`
  font-weight: 120;
  font-size: 30px;
  color: white;
  margin: 20px 1500px 10px 1rem;

  @media (max-width: 1024px) {
    display: none;
    padding: 15px 0=2rem 0 3px;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 30px;
  padding-top: 35px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    padding: 15px 2rem 0 5px;
    margin-left: 45%;
    margin-right: -48%;
  }
`;