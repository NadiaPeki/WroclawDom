const mongoose = require('mongoose');
const slugify = require('slugify');
const Post = require('./models/post');

mongoose.connect('mongodb://127.0.0.1:27017/postsbox', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updatePosts = async () => {
  try {
    const existingPosts = await Post.find();

    for (const post of existingPosts) {
      const newSlug = slugify(post.title);
      post.slug = newSlug;
      await post.save();
      console.log(`Updated slug for post ${post._id}`);
    }

    console.log('Update completed.');
  } catch (error) {
    console.error('Error updating posts:', error);
  } finally {
    mongoose.disconnect();
  }
};

updatePosts();
