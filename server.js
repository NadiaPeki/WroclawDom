const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/post');

const app = express();
const PORT = process.env.PORT || 3002;
const URL = 'mongodb://127.0.0.1:27017/postsbox';


const corsOptions = {
  origin: 'http://localhost:3000', // Замените на домен вашего фронтенда
  optionsSuccessStatus: 200,
  credentials: true, // добавьте эту опцию, если используете куки или заголовок авторизации
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Middleware для обработки JSON в запросах
app.use(express.json());


// Подключение роутов
const postRoutes = require('./routes/post-routes');
app.use(postRoutes);

// Подключение к MongoDB
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB Connection error: ${err}`));


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
