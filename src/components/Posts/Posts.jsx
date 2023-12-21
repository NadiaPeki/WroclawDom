import { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import FilteredPosts from '../FilteredPosts/FilteredPosts';
import styles from './Posts.module.css';

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState('');

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

  const handleSearch = (text) => {
    // Обновление состояния searchText
    setSearchText(text);
  };

  return (
    <div className={styles.wrapper}>
      <Input onSearch={handleSearch} />
      <FilteredPosts allPosts={allPosts} searchText={searchText} />
    </div>
  );
};

export default Posts;
