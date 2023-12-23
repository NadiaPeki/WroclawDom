const express = require('express');
const { getPosts, getPost, deletePost, addPost, updatePost } = require('../controllers/post-controller');

// Создаем экземпляр роутера
const router = express.Router();

// Создаем роуты для обработки запросов
router.get('/posts', getPosts);
router.get('/posts/:_id', getPost);
router.delete('/posts/:_id', deletePost);
router.post('/posts', addPost);
router.patch('/posts/:_id', updatePost);

module.exports = router;
