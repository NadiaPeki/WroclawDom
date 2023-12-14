import { useState } from 'react';
import Input from '../Input/Input';
import FilteredPosts from '../FilteredPosts/FilteredPosts';
import postsData from './postsData';
import styles from './Posts.module.css';

const filterPosts = (allPosts, searchText) => {
  return allPosts.filter((post) => {
    const searchLower = searchText.toLowerCase();
    const postDateLower = post.date.toLowerCase();

    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.text.toLowerCase().includes(searchLower) ||
      postDateLower.includes(searchLower) ||
      postDateLower.replace(/[^\w\s]/gi, '').includes(searchLower)
    );
  });
};

const Posts = () => {
  const [filteredPosts, setFilteredPosts] = useState(postsData);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    // Устанавливаем отфильтрованные посты в состояние
    setFilteredPosts((prevPosts) => filterPosts(prevPosts, text));
    setSearchText(searchText); // Обновляем состояние searchText
  };

  const handleSearchComplete = () => {
    setSearchText(''); // Очищаем состояние searchText
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <Input onSearch={handleSearch} onSearchComplete={handleSearchComplete} />
      </div>
      <FilteredPosts filteredPosts={filteredPosts} />
    </div>
  );
};

export default Posts;