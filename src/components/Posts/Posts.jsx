import { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import Post from '../Post/Post';
import styles from './Posts.module.css';

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    // Выполнение запроса на сервер для получения всех постов
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        setAllPosts(response.data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchPosts();
  }, []); // Пустой массив зависимостей гарантирует выполнение запроса только один раз при монтировании компонента

  return (
    <div className={styles.wrapper}>
      <Input />
      <div className={styles.posts}>
        {allPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
