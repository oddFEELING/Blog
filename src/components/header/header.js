import React from 'react';
import * as S from './headerStyle';

const Header = () => {
  return (
    <S.Container>
      <h1>🌹oddFEELING</h1>
      <S.Navigate>
        <S.FLink to='/'>
          <p>Home</p>
        </S.FLink>
        <S.FLink to='/randimg'>
          <p>Random Images</p>
        </S.FLink>
      </S.Navigate>
    </S.Container>
  );
};

export default Header;
