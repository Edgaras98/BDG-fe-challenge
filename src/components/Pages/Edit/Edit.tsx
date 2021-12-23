import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { editBlog } from '../../../api/blog-api.requests';
import Navigation from '../../Layout/Navigation/Navigation';
import Form from '../../Layout/Form/Form';

const Edit = () => {
  const [userInputs, setUserInputs] = useState({});
  const params = useParams().id;

  return (
    <>
      <Navigation buttonText="home" link="/" />
      <h1>Posts ID: {params}</h1>
      <Form
        text="update values"
        titlePlaceholder="New title"
        bodyPlaceholder="New body"
        handleClick={(e) => editBlog(params, userInputs)}
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

export default Edit;
