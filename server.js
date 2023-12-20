const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/post')
const postRoutes = require('./routes/post-routes')


const PORT = process.env.PORT || 3002;
const URL = 'mongodb://localhost:27017/postsbox'

const app = express();
app.use(express.json());
app.use(postRoutes)

mongoose
.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(`DB Connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`)
});



