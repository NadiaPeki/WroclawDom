import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FacebookShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';
import { SocialIcon } from 'react-social-icons';
import styles from './FullPost.module.css';
import axios from 'axios';

const FullPost = () => {
  const { _id } = useParams(); // Изменено на _id
  const [selectedPost, setSelectedPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3002/posts/${_id}`) // Изменено на _id
      .then(response => {
        if (response.data) {
          setSelectedPost(response.data);
        } else {
          setError('Error fetching post: Empty response data');
        }
      })
      .catch(error => {
        setError('Error fetching post: ' + error.message);
      });
  }, [_id]); // Изменено на _id

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedPost) {
    return <h3>Loading...</h3>;
  }

  const { title, imageUrl, text, date } = selectedPost;
  const postUrl = window.location.href;

  return (
    <div className={styles.fullPostWrapper}>
      <div className={styles.fullPostContent}>
        <h1>{title}</h1>
        <h2>{date}</h2>
        {imageUrl && imageUrl.length > 0 && (
          <img src={imageUrl[0]} alt={title} className={styles.fullPostImage} />
        )}
        <p>{text}</p>
        <div className={styles.shareButtons}>
          <FacebookShareButton url={postUrl}>
            <SocialIcon url='https://www.facebook.com/' title={`Share this post by Facebook`} className={styles.shareButton} />
          </FacebookShareButton>
          <WhatsappShareButton url={postUrl}>
            <SocialIcon url='https://web.whatsapp.com/' title={`Share this post by What's App`} className={styles.shareButton} />
          </WhatsappShareButton>
          <TelegramShareButton url={postUrl}>
            <SocialIcon url='https://web.telegram.org/' title={`Share this post by Telegram`} className={styles.shareButton} />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
