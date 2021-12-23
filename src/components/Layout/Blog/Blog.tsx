import { Link } from 'react-router-dom';
import { blog } from './Blog.interface';
import '../Blog/Blog.css';

function Blog(blog: blog) {
  return (
    <div className="blogWrapper">
      <p>{`User id: ${blog.userId}`}</p>
      <p>{`Blog's id: ${blog.id}`}</p>
      <p>{`title: ${blog.title}`}</p>
      <p>{blog.body}</p>
      <Link className="link" to={blog.link}>
        {blog.text}
      </Link>
    </div>
  );
}

export default Blog;
