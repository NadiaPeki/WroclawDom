import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
    setSearchText(''); // Очищаем значение после поиска
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Вызываем функцию поиска при нажатии Enter
      onSearch(searchText);
      setSearchText(''); // Очищаем значение после поиска
    }
  };

  return (
    <div className={styles.inputWithButton}>
      <input
        type="text"
        placeholder="Wpisz tekst do wyszukania"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.inputButton}>
        Szukaj
      </button>
    </div>
  );
};

export default Input;
