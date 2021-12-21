import React, { useState } from 'react';
import Navigation from '../../Layout/Navigation/Navigation';
import Form from '../../Layout/Form/Form';
import { postBlog } from '../../../api/blog-api.requests';

const Create = () => {
  const [userInputs, setUserInputs] = useState({});
  return (
    <>
      <Navigation btnText="home" link="/" />
      <h1>Create new Blog</h1>
      <Form
        btnText="Post"
        firstPlaceholder="title"
        secondPlaceholder="body"
        handleSubmit={(e) => postBlog(e, userInputs)}
        firstOnChange={(e) => {
          setUserInputs({
            ...userInputs,
            title: e.target.value,
          });
        }}
        secondOnChange={(e) => {
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
