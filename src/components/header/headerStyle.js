import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 10vh;
  width: 90%;
  display: flex;
  padding: 0 5%;
  top: 0;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.96);
  z-index: 2;

  h1 {
    font-size: clamp(0.4rem, 4vw, 3rem);
    color: #f1f1f1;
    font-family: Gotham;
    line-height: 0px;
  }
`;

export const Navigate = styled.nav`
  width: 35%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1200px) {
    width: 20%;
    height: 70%;
  }

  p {
    font-size: clamp(0.8rem, 2vw, 1.3rem);
    color: #fff;
    transition: 300ms all ease-in-out;
    text-decoration: none;

    &:hover {
      color: rgba(215, 145, 23);
    }
  }
`;

export const FLink = styled(Link)`
  text-decoration: none;
`;
