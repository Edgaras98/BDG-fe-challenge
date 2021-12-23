import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Post/Post.css';
import { getBlogs } from '../../../api/blog-api.requests';
import Navigation from '../../Layout/Navigation/Navigation';
import Blog from '../../Layout/Blog/Blog';
import { blog } from '../../Layout/Blog/Blog.interface';

const Post = () => {
  const [fetchedData, setFetchedData] = useState<blog[]>([]);
  const params = useParams().id;

  useEffect(() => {
    const setData = async () => {
      setFetchedData(await getBlogs());
    };
    setData();
  }, []);

  return (
    <>
      <Navigation buttonText="New post" link="/create" />
      <section className="postWrap">
        {fetchedData.length === 0 ? (
          <h2>No Blogs found, please Add new one</h2>
        ) : (
          fetchedData
            .filter((blogs: blog) => {
              if (Number(params) == blogs.id) {
                return blogs;
              }
            })
            .map((blogs: blog) => (
              <Blog
                key={blogs.id}
                {...(blogs.link = `/edit/${blogs.id}`)}
                {...(blogs.text = 'View Blog')}
                {...blogs}
              />
            ))
        )}
      </section>
    </>
  );
};

export default Post;
