const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

// Роут для теста
app.get('/', (req, res) => {
  res.send('Привет, это серверная часть твоего проекта!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});