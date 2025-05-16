import axios from 'axios';

export const getBlogs = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}`);
  return res.data;
};

export const createBlog = async (formData) => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const updateBlog = async (id, formData) => {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
  return res.data;
};
