import { Link } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import styles from './Post.module.css';

const Post = ({ post, smallSize }) => {
  const { imageUrl, title, text, date, slug } = post;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Link
      to={`/posts/${slug}`}
      className={`${styles.postLink} ${smallSize ? styles.smallSize : ''}`}
      onClick={toggleExpand}
    >
      <div className={styles.post}>
        {!smallSize && <h1>{title}</h1>}
        {!smallSize && <h2>{format(new Date(date), 'dd.MM.yyyy')}</h2>}
        <img
          src={`${process.env.PUBLIC_URL}${imageUrl[0]}?${new Date().getTime()}`}
          alt={title}
          className={styles.postImage}
        />
        {smallSize && <h1>{title}</h1>}
        {!smallSize && (
          <div className={styles.postContent}>
            {isExpanded ? <p>{text}</p> : <p>{`${text.slice(0, 165)}...`}</p>}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Post;
