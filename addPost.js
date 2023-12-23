const axios = require('axios');

const post = {
    "title": "Tendencje w Projektowaniu i Technologiach Wnętrz: Wrocław na Czele Innowacji",
    "date": "2023-12-18T12:00:00Z",
    "imageUrl": [
        "../img/photos/post1photo1.jpg",
        "../img/photos/post1photo2.jpg"
    ],
    "text": "W dzisiejszym świecie projektowanie wnętrz przechodzi nieustanne zmiany, inkorporując najnowsze osiągnięcia technologiczne i trendy. ... (ваш текст)"
};

axios.post('http://localhost:3002/posts', post)
    .then(response => {
        console.log('Успешно добавлен пост:', response.data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
