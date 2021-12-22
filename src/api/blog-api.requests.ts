import axios from 'axios';

export function getOptions(userInputs) {
  return {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(userInputs),
  };
}

export function getBlogs() {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}`, {
      params: {
        _limit: 10,
      },
    })
    .then((res) => {
      return res.data;
    });
}

export function postBlog(e, userInputs) {
  e.preventDefault();
  axios
    .post(`${process.env.REACT_APP_BASE_URL}`, getOptions(userInputs))
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        alert('success');
      } else {
        alert('Please try again');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editBlog(e, params, userInputs) {
  e.preventDefault();
  axios
    .put(`${process.env.REACT_APP_BASE_URL}/${params}`, getOptions(userInputs))
    .then((response) => {
      if (response.status === 200) {
        alert('Updated!');
      } else {
        alert('Oh no, something went wrong, please try again');
      }
    });
}
