import React from 'react';
import { useEffect, useState } from 'react';
import loader from '../../common/images/load.gif';
import { useParams } from 'react-router-dom';
import client from '../../client';
import * as S from './BlogStyle';

const Blogpage = () => {
  const [SinglePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      body,
      mainImage{
        asset -> {
          _id,
          url
        },
        alt
      },
      "authorName": author -> name,
    }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <S.Container>
      {isLoading ? (
        <S.Container load>
          <S.LoadImg src={loader} alt='' />
        </S.Container>
      ) : (
        <S.Container>
          <h1>{SinglePost.title}</h1>
          <S.HeadImg src={SinglePost.mainImage.asset.url} alt='' />
          <h3>Author: {SinglePost.authorName}</h3>
          <S.PostContent
            blocks={SinglePost.body}
            dataset='production'
            projectId='l55n845z'
          />
        </S.Container>
      )}
    </S.Container>
  );
};

export default Blogpage;
