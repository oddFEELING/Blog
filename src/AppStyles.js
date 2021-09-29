import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.85)
    ),
    url('https://images.unsplash.com/photo-1424869957178-e53d2c77cbdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80');
  background-position: center;
  background-size: cover;
  overflow-y: scroll;
  background-repeat: no-repeat;
`;
export const HeadText = styled.h1`
  color: rgba(212, 212, 212);
  letter-spacing: 5px;
`;
