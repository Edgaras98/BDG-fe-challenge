import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BlogInterface } from './Blog.interface';
import '../Blog/Blog.css';

const Blog: FC<BlogInterface> = (blog: BlogInterface) => (
  <div className="blogWrapper">
    <p>{`User id: ${blog.userId}`}</p>
    <p>{`Blog's id: ${blog.id}`}</p>
    <p>{`title: ${blog.title}`}</p>
    <p>{blog.body}</p>
    <Link className="link" to={blog.link}>
      {blog.btnText}
    </Link>
  </div>
);

export default Blog;
