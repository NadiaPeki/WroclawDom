const axios = require('axios');

// Assuming postId is the ID of the post you want to delete
const postId = '659552007bd7df10e00306f1';

// Define the URL for deleting a post, replace 'your_api_url' with the actual API endpoint
const deletePostUrl = `http://localhost:3002/posts/${postId}`;

// Use async/await for cleaner code
async function deletePost() {
    try {
        const response = await axios.delete(deletePostUrl);
        console.log('Post successfully deleted:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

deletePost();
