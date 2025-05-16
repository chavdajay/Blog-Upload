const express = require('express');
const multer = require('multer');
const { createBlog, getBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');

const router = express.Router();

// Image Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), createBlog);
router.get('/', getBlogs);
router.put('/:id', upload.single('image'), updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
