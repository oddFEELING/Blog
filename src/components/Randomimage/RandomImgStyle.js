import styled from 'styled-components';
import loading from '../../common/images/load.gif';

export const Holder = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: rgba(255, 255, 255, 0.8);
    font-family: perpetua;
    letter-spacing: 3px;
    animation: bounce 3s infinite;
    transition: 500s all ease-out;
    animation-play-state: running;
    z-index: 100;
    pointer-events: none;

    @keyframes bounce {
      from {
        transform: translateY(0);
        color: white;
      }
      35% {
        transform: translateY(-30px);
      }
      52% {
        transform: translateY(10px);
        color: lightblue;
      }
      60% {
        transform: translateY(-12px);
      }
      68% {
        transform: translateY(5px);
        color: cyan;
      }
      85% {
        transform: translateY(-5px);
        color: lightgreen;
      }
      to {
        transform: translateY(0px);
      }
    }
  }
`;

export const MainImg = styled.img`
  width: 85%;
  height: 75%;
  object-fit: cover;
  object-position: center;
  background: transparent url(${loading});
  background-size: 120px;
  border: 2px solid rgba(255, 203, 55, 0.6);
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 1000px) {
    width: 60%;
    border-radius: 30px;
    box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const RandBtn = styled.button`
  width: 85%;
  height: 7vh;
  border: none;
  cursor: pointer;
  font-size: clamp(1rem, 3.8vw, 1.5rem);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  border-radius: 10px;
  transition: 300ms all ease-in-out;
  border: thin solid rgba(255, 255, 255, 0.8);
  box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.7);
  color: rgba(255, 255, 255, 0.8);

  @media screen and (min-width: 1000px) {
    height: 7vh;
    width: 50%;
    font-weight: 600;
    box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: rgba(0, 0, 0, 0.7);
    border: thin solid rgba(255, 203, 55, 0.6);
  }
`;
