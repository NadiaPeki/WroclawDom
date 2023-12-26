import { Link } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const { imageUrl, title, text, date, slug } = post;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Link
      to={`/posts/${slug}`} // Изменили ссылку с /posts/${post._id} на /posts/${slug}
      className={styles.postLink}
      onClick={toggleExpand}
    >
      <div className={styles.post}>
        <h1>{title}</h1>
        <h2>{format(new Date(date), 'dd.MM.yyyy')}</h2>
        {imageUrl.map((imagePath, _id) => (
          <img
            key={_id}
            src={`${process.env.PUBLIC_URL}${imagePath}?${new Date().getTime()}`}
            alt={title}
            className={styles.postImage}
          />
        ))}
        <p>{isExpanded ? text : `${text.slice(0, 300)}...`}</p>
      </div>
    </Link>
  );
};

export default Post;
