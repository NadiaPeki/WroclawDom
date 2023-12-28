const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/post');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;
const URL = 'mongodb://127.0.0.1:27017/postsbox';

const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200,
  credentials: true, 
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Middleware для обработки JSON в запросах
app.use(express.json());

// Middleware для обработки ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Подключение роутов
const postRoutes = require('./routes/post-routes');
app.use(postRoutes);

// Middleware для обслуживания статических файлов
app.use(express.static(path.join(__dirname, 'public')));

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
