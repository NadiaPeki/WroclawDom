import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const { imageUrl, title, text, date } = post;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Link
      to={`/posts/${post.title.replace(/\s+/g, '-')}`}
      className={styles.postLink}
      onClick={toggleExpand}
    >
      <div className={styles.post}>
        <h1>{title}</h1>
        <h2>{date}</h2>
        {imageUrl.map((imagePath, _id) => (
          <img
            key={_id}
            src={`${process.env.PUBLIC_URL}${imagePath}?${new Date().getTime()}`}
            alt={title}
            className={styles.postImage}
          />
        ))}
        <p>{isExpanded ? text : `${text.slice(0, 200)}...`}</p>
      </div>
    </Link>
  );
};

export default Post;
