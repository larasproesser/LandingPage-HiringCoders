import styled from 'styled-components';
import PurpleFriday from '../../images/purplefriday.jpg';

export const Purple = styled.main`
  height: 110vh;
  background-image: url(${PurpleFriday});
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;

  @media (max-width: 1024px) {
    height: 50vh;
    padding-bottom: 2rem;
  }
`;

export const Login = styled.a`
  font-weight: 120;
  font-size: 25px;
  color: white;
  width: 13%;
  margin: 1rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 25px;

  @media (max-width: 1024px) {
    margin: 0.7rem 3.4375rem;
    width: 15%;
    font-size: 1.3rem;
  }
`;