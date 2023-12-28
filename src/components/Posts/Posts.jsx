import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import styles from './Posts.module.css';

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        setAllPosts(response.data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div className={styles.wrapper}>
      <div className={styles.posts}>
        {allPosts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
