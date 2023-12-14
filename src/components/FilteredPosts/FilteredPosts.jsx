import Post from '../Post/Post';
import styles from './FilteredPosts.module.css';

const FilteredPosts = ({ filteredPosts }) => {
  return (
    <div className={styles.filteredPosts}>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      ) : (
        <p className={styles.noResults}>Brak wyników</p>
      )}
    </div>
  );
};

export default FilteredPosts;