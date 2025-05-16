import React, { useEffect, useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import { getBlogs } from './api';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);

  const fetchData = async () => {
    try {
      const data = await getBlogs();
      setBlogs(data.blogs);
    } catch (err) {
      alert('Failed to fetch blogs');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Simple Blog CRUD</h2>
      <BlogForm fetchData={fetchData} editBlog={editBlog} setEditBlog={setEditBlog} />
      <BlogList blogs={blogs} fetchData={fetchData} setEditBlog={setEditBlog} />
    </div>
  );
};

export default App;
