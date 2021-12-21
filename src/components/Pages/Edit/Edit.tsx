import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { editBlog } from '../../../api/blog-api.requests';
import Navigation from '../../Layout/Navigation/Navigation';
import Form from '../../Layout/Form/Form';

const Edit = () => {
  const [userInputs, setUserInputs] = useState({});
  const params = useParams();
  const blogId = params.id;
  const baseUrl: string = process.env.REACT_APP_BASE_URL as string;
  return (
    <>
      <Navigation btnText="home" link="/" />
      <h1>Posts ID: {params.id}</h1>
      <Form
        btnText="update values"
        firstPlaceholder="New title"
        secondPlaceholder="New body"
        handleSubmit={(e) => editBlog(e, blogId, userInputs)}
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

export default Edit;
