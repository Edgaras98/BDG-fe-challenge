import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Layout/Navigation/Navigation';
import Blog from '../../Layout/Blog/Blog';
import { PostContainer } from './Post.styles';
import { getBlogById } from '../../../api/blog-api.requests';

const Post = () => {
  const [fetchedData, setFetchedData] = useState<any[]>([]);
  const [usersId, setUsersId] = useState(Number);
  const [BlogsId, setBlogID] = useState(Number);
  const [titleName, setTitleName] = useState('');
  const [bodyName, setBodyName] = useState('');

  const params = useParams();
  const blogId = params.id;

  useEffect(() => {
    getBlogById(
      blogId,
      setUsersId,
      setBlogID,
      setTitleName,
      setBodyName,
      setFetchedData,
    );
  }, []);

  return (
    <>
      <Navigation btnText="New post" link="/create" />
      <PostContainer>
        {fetchedData.length === 0 ? (
          <h2>No Blogs found, please Add new one</h2>
        ) : (
          <Blog
            key={BlogsId}
            link={`/edit/${BlogsId}`}
            userId={usersId}
            id={BlogsId}
            title={titleName}
            body={bodyName}
            btnText="Edit blog"
          />
        )}
      </PostContainer>
    </>
  );
};

export default Post;
