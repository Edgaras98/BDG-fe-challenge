import React, { useEffect, useState } from 'react';
import Navigation from '../../Layout/Navigation/Navigation';
import Blog from '../../Layout/Blog/Blog';
import { getBlogs } from '../../../api/blog-api.requests';
import { HomeContainer } from './Home.styles';

const Home = () => {
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  useEffect(() => {
    getBlogs(setFetchedData);
  }, []);

  return (
    <>
      <Navigation btnText="New post" link="/create" />
      <HomeContainer>
        {fetchedData.length === 0 ? (
          <h2>No Blogs found, please Add new one</h2>
        ) : (
          fetchedData.map((blogs) => (
            <Blog
              key={blogs.id}
              link={`/${blogs.id}`}
              btnText="View Blog"
              {...blogs}
            />
          ))
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
