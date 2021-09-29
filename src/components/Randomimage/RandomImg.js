import React, { useState } from 'react';
import * as S from './RandomImgStyle';

const RandomImg = () => {
  const [Rand, setRand] = useState('https://source.unsplash.com/random');

  const handleClick = () => {
    setRand('https://source.unsplash.com/random');
    window.location.reload();
  };
  return (
    <S.Holder>
      <h1>Splash it!💦</h1>
      <S.MainImg src={Rand} alt='' />
      <S.RandBtn onClick={handleClick}> 😆SHPLASH!!</S.RandBtn>
    </S.Holder>
  );
};

export default RandomImg;
