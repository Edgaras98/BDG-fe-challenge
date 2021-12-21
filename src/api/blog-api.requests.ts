import axios from 'axios';

//GET all Blogs

export function getBlogs(setFetchedData) {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}`, {
      params: {
        _limit: 10,
      },
    })
    .then((res) => {
      setFetchedData(res.data);
    })
    .catch((error) => {
      alert('error');
    });
}

//GET Blog by ID

export function getBlogById(
  blogId,
  setUsersId,
  setBlogID,
  setTitleName,
  setBodyName,
  setFetchedData,
) {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/${blogId}`)
    .then((res) => {
      setFetchedData(res.data);
      setUsersId(res.data.userId);
      setBlogID(res.data.id);
      setTitleName(res.data.title);
      setBodyName(res.data.body);
    })
    .catch((error) => {
      alert(error);
    });
}

//POST new Blog

export function postBlog(e, userInputs) {
  e.preventDefault();
  axios
    .post(`${process.env.REACT_APP_BASE_URL}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(userInputs),
    })
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

//Edit Blog

export function editBlog(e, blogId, userInputs) {
  e.preventDefault();
  axios
    .put(`${process.env.REACT_APP_BASE_URL}/${blogId}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(userInputs),
    })
    .then((response) => {
      if (response.status === 200) {
        alert('Updated!');
      } else {
        alert('Oh no, something went wrong, please try again');
      }
    })
    .catch((error) => {
      alert(error);
    });
}
