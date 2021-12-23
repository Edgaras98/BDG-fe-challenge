import { useState } from 'react';
import Navigation from '../../Layout/Navigation/Navigation';
import Form from '../../Layout/Form/Form';
import { postBlog } from '../../../api/blog-api.requests';

const Create = () => {
  const [userInputs, setUserInputs] = useState({});

  return (
    <>
      <Navigation buttonText="home" link="/" />
      <h1>Create new Blog</h1>
      <Form
        text="Post"
        titlePlaceholder="title"
        bodyPlaceholder="body"
        handleClick={(e) => postBlog(userInputs)}
        titleOnChange={(e) => {
          setUserInputs({
            ...userInputs,
            title: e.target.value,
          });
        }}
        bodyOnChange={(e) => {
          setUserInputs({
            ...userInputs,
            body: e.target.value,
          });
        }}
      />
    </>
  );
};

export default Create;
