const Blog = require('../models/blogPost');

exports.createBlog = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const image = req.file ? req.file.filename : null;

    const newBlog = new Blog({ title, description, date, image });
    await newBlog.save();
    res.status(200).json({ msg: 'Blog created successfully', newBlog });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', err });
  }
};


exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', err });
  }
};


exports.updateBlog = async (req, res) => {
  try {
    const updateData = req.body;
    if (req.file) updateData.image = req.file.filename;

    const updated = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updated) return res.status(404).json({ msg: 'Blog not found' });

    res.status(200).json({ msg: 'Blog updated', updated });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', err });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: 'Blog not found' });
    res.status(200).json({ msg: 'Blog deleted', deleted });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', err });
  }
};
