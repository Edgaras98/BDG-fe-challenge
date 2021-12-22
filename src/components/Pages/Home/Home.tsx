import { useEffect, useState } from 'react';
import Navigation from '../../Layout/Navigation/Navigation';
import Blog from '../../Layout/Blog/Blog';
import { getBlogs } from '../../../api/blog-api.requests';
import '../Home/Home.css';

const Home = () => {
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  useEffect(() => {
    const setData = async () => {
      setFetchedData(await getBlogs());
    };
    setData();
  });

  return (
    <>
      <Navigation btnText="New post" link="/create" />
      <section className="homeWrap">
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
      </section>
    </>
  );
};

export default Home;
