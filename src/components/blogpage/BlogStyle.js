import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: ${(props) => (props.load ? 'center' : '')};
  flex-direction: ${(props) => (props.load ? 'row' : 'column')};
  align-items: center;

  h1 {
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 1px;
    font-family: perpetua;
    padding: 0 3px;
    text-align: center;
    font-size: clamp(1.3rem, 5.5vw, 3rem);

    @media screen and (min-width: 1000px) {
      border-bottom: 1.5px solid rgba(113, 203, 55, 0.6);
    }
  }
  h3 {
    color: white;
    align-self: flex-start;
    margin-left: 10%;
    font-weight: 500;

    @media screen and (min-width: 800px) {
      margin-left: 12.5%;
    }

    @media screen and (min-width: 1000px) {
      margin-left: 15%;
    }
  }
`;

export const HeadImg = styled.img`
  width: 85%;
  height: 60vh;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 800px) {
    width: 75%;
    height: 70vh;
  }
`;

export const LoadTxt = styled.h1`
  font-size: clamp(1.3rem, 10vw, 5rem);
  font-family: cambria;
`;

export const LoadDiv = styled.div`
  height: 60vh;
  width: 90%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1494423500016-801283cf7eeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const LoadImg = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;

  @media screen and (min-width: 1000px) {
    height: 120px;
    width: 120px;
  }
`;

export const PostContent = styled(BlockContent)`
  width: 90%;
  font-size: clamp(0.7rem, 2vw, 1.1rem);
  word-wrap: break-word;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: justify;
  padding: 20px 10px;

  @media screen and (min-width: 1000px) {
    border-top: 1.5px solid rgba(255, 203, 55, 0.6);
  }
`;
