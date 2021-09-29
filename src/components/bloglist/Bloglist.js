import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './BloglistStyle';

const Bloglist = (props) => {
  const { title, author, desc, img, slug } = props;
  const hist = useHistory();

  const handleClick = () => {
    hist.push(`/${slug}`);
  };
  return (
    <S.Container onClick={handleClick}>
      <S.TitleImg src={img} alt='' />
      <S.TitleDiv>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <S.BlockC blocks={desc} projectId='l55n845z' dataset='production' />
        <h1>{author}</h1>
      </S.TitleDiv>
    </S.Container>
  );
};

export default Bloglist;
