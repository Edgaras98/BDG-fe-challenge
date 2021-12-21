import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BlogInterface } from './Blog.interface';
import { BlogWrapper } from './Blog.styles';

const Blog: FC<BlogInterface> = (props: BlogInterface) => (
  <BlogWrapper>
    <p>{`User id: ${props.userId}`}</p>
    <p>{`Blog's id: ${props.id}`}</p>
    <p>{`title: ${props.title}`}</p>
    <p>{props.body}</p>
    <Link className="link" to={props.link}>
      {props.btnText}
    </Link>
  </BlogWrapper>
);

export default Blog;
