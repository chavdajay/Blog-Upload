import React, { useState, useEffect } from 'react';
import { createBlog, updateBlog } from '../api';

const BlogForm = ({ fetchData, editBlog, setEditBlog }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title);
      setDescription(editBlog.description);
      setDate(editBlog.date);
      setPreview(`${process.env.REACT_APP_API_URL.replace('/api', '')}/uploads/${editBlog.image}`);
    }
  }, [editBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !date) return alert('Fill all fields');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);
    if (image) formData.append('image', image);

    try {
      if (editBlog) {
        await updateBlog(editBlog._id, formData);
        alert('Blog updated');
      } else {
        await createBlog(formData);
        alert('Blog created');
      }
      fetchData();
      resetForm();
    } catch {
      alert('Something went wrong');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setImage(null);
    setPreview(null);
    setEditBlog(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 border p-3 rounded shadow-sm bg-light">
      <h5>{editBlog ? 'Update Blog' : 'Create Blog'}</h5>

      <input className="form-control mb-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />

      <textarea className="form-control mb-2" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />

      <input type="date" className="form-control mb-2" value={date} onChange={(e) => setDate(e.target.value)} required />

      <input type="file" className="form-control mb-2" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

      {preview && <img src={preview} alt="preview" className="img-thumbnail mb-2" style={{ width: '150px' }} />}

      <button type="submit" className="btn btn-primary w-100">{editBlog ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default BlogForm;
