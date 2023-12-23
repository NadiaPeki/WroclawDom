const Post = require('../models/post')

const handleError = (res, error) => {
    res.status(500).json({error})
}

const getPosts = (req, res) => {
    Post
      .find()  
      .then((posts) => {
        res
        .status(200)
        .json(posts)
      })
      .catch((err) => handleError(res, err))
}

const getPost = (req, res) => {
  const postId = req.params.id; // Получаем id из параметров запроса

  Post.findOne({ _id: postId })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    })
    .catch((err) => {
      console.error('Error fetching post:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

const deletePost = (req, res) => {
    Post
    .findByIdAndDelete(req.params.id)  
          .then((post) => {
            res
            .status(200)
            .json(post)
          })
          .catch((err) => handleError(res, err))
}

const addPost = (req, res) => {
    const post = new Post(req.body)
            post
            .save()
            .then((result) => {
              res
              .status(200)
              .json(result)
            })
            .catch((err) => handleError(res, err))
}

const updatePost = (req, res) => {
    Post
            .findByIdAndUpdate(req.params.id, req.body)
            .then((result) => {
              res
            .status(200)
            .json(result)
            })
            .catch((err) => handleError(res, err))
}

module.exports = {
    getPosts,
    getPost,
    deletePost,
    addPost,
    updatePost
}