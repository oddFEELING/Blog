import * as S from './AppStyles';
import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bloglist from './components/bloglist/Bloglist';
import loader from './common/images/load.gif';
import Blogpage from './components/blogpage/Blogpage';
import client from './client';
import { LoadImg } from './components/blogpage/BlogStyle';
import RandomImg from './components/Randomimage/RandomImg';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post'] {
      title,
      slug,
      description,
      body,
      mainImage{
        asset -> {
          _id,
          url
        },
        alt
      },
      'authorName': author -> name,
    }`
      )
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, []);
  return (
    <S.Container>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/randimg'>
            <RandomImg />
          </Route>
          <Route exact path='/'>
            <S.HeadText>Blog Posts</S.HeadText>
            {isLoading ? (
              <LoadImg src={loader} alt=' ' />
            ) : (
              Posts.map((post) => {
                return (
                  <Bloglist
                    key={post.slug.current}
                    title={post.title}
                    author={post.authorName}
                    img={post.mainImage.asset.url}
                    desc={post.description}
                    slug={post.slug.current}
                  />
                );
              })
            )}
          </Route>
          <Route exact path='/:slug'>
            <Blogpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </S.Container>
  );
}

export default App;
