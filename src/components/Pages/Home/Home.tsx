import { useEffect, useState } from 'react';
import Navigation from '../../Layout/Navigation/Navigation';
import Blog from '../../Layout/Blog/Blog';
import { getBlogs } from '../../../api/blog-api.requests';
import '../Home/Home.css';
import { blog } from '../../Layout/Blog/Blog.interface';

const Home = () => {
  const [fetchedData, setFetchedData] = useState<blog[]>([]);

  useEffect(() => {
    const setData = async () => {
      setFetchedData(await getBlogs());
    };
    setData();
  }, []);

  return (
    <>
      <Navigation buttonText="New post" link="/create" />
      <section className="homeWrap">
        {fetchedData.length === 0 ? (
          <h2>No Blogs found, please Add new one</h2>
        ) : (
          fetchedData.map((blogs: blog) => (
            <Blog
              key={blogs.id}
              {...(blogs.link = `/${blogs.id}`)}
              {...(blogs.text = 'View Blog')}
              {...blogs}
            ></Blog>
          ))
        )}
      </section>
    </>
  );
};

export default Home;
