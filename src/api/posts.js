import instance from './index';

const getPosts = async () => {
  const response = await instance.get('/posts');
  return response.data;
};

const getSinglePost = async (id) => {
  const response = await instance.get(`/posts/${id}`);
  return response.data;
};

const deletePost = async (id) => {
  const response = await instance.delete(`/posts/${id}`);
  return response.data;
};

const addPost = async (post) => {
  const response = await instance.post('/posts', post);
  console.log(response.data);
  return response.data;
};

const addComment = async (id, comment) => {
  const response = await instance.post(`/posts/${id}/comments`, comment);
  return response.data;
};

const viewComments = async (id) => {
  const response = await instance.post(`/posts/${id}`);
  return response.data;
};

const deleteComment = async (id) => {
  const response = await instance.delete(`/posts/comments/${id}`);
  return response.data;
};

export {
  getPosts,
  getSinglePost,
  deletePost,
  addPost,
  addComment,
  viewComments,
  deleteComment,
};
