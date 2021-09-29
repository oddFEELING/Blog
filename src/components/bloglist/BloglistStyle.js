import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

export const Container = styled.div`
  height: 180px;
  width: 90%;
  max-width: 1000px;
  display: flex;
  margin: 10px 0;
  border-radius: 15px;
  cursor: pointer;
  backdrop-filter: blur(2.3px);
  background-color: rgba(255, 255, 255, 0.1);
  border-top: thin solid rgba(255, 255, 255, 0.5);
  border-left: thin solid rgba(255, 255, 255, 0.5);
  box-shadow: 3px 3px 9px 3px rgba(0, 0, 0, 0.4);
  transition: 300ms all ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 1080px) {
    height: 250px;
    max-width: 1200px;
  }
`;

export const TitleImg = styled.img`
  height: 100%;
  width: 40%;
  object-fit: cover;
  object-position: center;
  border-radius: 15px 0 0 15px;

  @media screen and (min-width: 1100px) {
    width: 30%;
  }
`;

export const TitleDiv = styled.div`
  height: 100%;
  display: flex;
  width: 70%;
  padding: 0 5%;
  overflow: hidden;
  flex-wrap: wrap;
  position: relative;
  font-family: cambria;
  color: rgba(255, 255, 255, 0.8);
  flex-direction: column;

  h1 {
    position: absolute;
    line-height: 0px;
    right: 0;
    top: 40px;
    z-index: -1;
    font-style: italic;
    letter-spacing: 2px;
    font-size: clamp(2.5rem, 4vw, 5rem);
    color: rgba(205, 102, 123, 0.2);

    @media screen and (min-width: 800px) {
      right: 200px;
    }

    @media screen and (min-width: 1000px) {
      right: 250px;
    }
  }
  h2 {
    font-size: clamp(1.25rem, 2vw, 1.8rem);
    margin: 0;
    line-height: auto;
    letter-spacing: 1px;
    margin-top: 3%;
    color: rgba(255, 255, 255, 0.9);
  }
  h3 {
    line-height: 0px;
    font-size: clamp(0.8rem, 2vw, 1.3rem);
    font-weight: 500;
  }
  p {
    font-size: clamp(0.7rem, 2vw, 1.1rem);
    height: 40px;
    word-wrap: break-word;
  }
`;

export const BlockC = styled(BlockContent)`
  font-size: clamp(0.7rem, 2vw, 1.1rem);
  height: 40px;
  word-wrap: break-word;
`;
