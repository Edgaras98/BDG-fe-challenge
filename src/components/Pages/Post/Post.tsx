import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Post/Post.css';
import { getBlogs } from '../../../api/blog-api.requests';
import Navigation from '../../Layout/Navigation/Navigation';
import Blog from '../../Layout/Blog/Blog';

const Post = () => {
  const [fetchedData, setFetchedData] = useState<any[]>([]);
  const params = useParams().id;

  useEffect(() => {
    const setData = async () => {
      setFetchedData(await getBlogs());
    };
    setData();
  }, []);

  return (
    <>
      <Navigation btnText="New post" link="/create" />
      <section className="postWrap">
        {fetchedData.length === 0 ? (
          <h2>No Blogs found, please Add new one</h2>
        ) : (
          fetchedData
            .filter((blog) => {
              if (params == blog.id) {
                return blog;
              }
            })
            .map((blog) => (
              <Blog
                key={blog.id}
                link={`/edit/${blog.id}`}
                btnText="Edit blog"
                {...blog}
              />
            ))
        )}
      </section>
    </>
  );
};

export default Post;
