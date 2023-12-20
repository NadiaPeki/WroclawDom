const axios = require('axios');
const post =
{
    "title": "Tendencje w Projektowaniu i Technologiach Wnętrz: Wrocław na Czele Innowacji",
    "date": "2023-12-18T12:00:00Z",
    "imageUrl": [
        "img/photos/post1photo1.jpg",
        "img/photos/post1photo2.jpg"
    ],
    "text": "W dzisiejszym świecie projektowanie wnętrz przechodzi nieustanne zmiany, inkorporując najnowsze osiągnięcia technologiczne i trendy. W tym artykule przyjrzymy się, jakie tendencje kształtują współczesne wnętrza, a także w jaki sposób innowacyjne technologie wpływają na wygląd naszych domów i mieszkań. Szczególną uwagę poświęcimy Wrocławiowi, gdzie nowoczesne podejścia do projektowania oraz technologie stają się centralnym punktem zainteresowania. Harmonia Przyrody i Technologii Współczesne nurty w projektowaniu wnętrz czerpią inspirację z natury, dążąc do stworzenia harmonii między człowiekiem a otoczeniem. Wrocław, gdzie miejski krajobraz łączy się z bogatą przyrodą, jest areną, gdzie projektanci integrują elementy natury w wnętrza, używając naturalnych materiałów i roślinności. Na przykład, blat z marmuru czy fragmenty drewna wykorzystywane są, aby dodawać unikalności przestrzeni. Minimalizm i Funkcjonalność Trend ku minimalizmowi staje się coraz bardziej popularny w projektowaniu wnętrz. Wraz z nim rozwijają się innowacyjne technologie, umożliwiające maksymalne wykorzystanie przestrzeni. Wrocław, ze swoim dynamicznym rozwojem i nowoczesną infrastrukturą, staje się miejscem, gdzie projektanci dążą do tworzenia funkcjonalnych i estetycznych wnętrz, zoptymalizowanych dla codziennego życia. Inteligentne Technologie w Domu Nowoczesne technologie przenikają nasze życie, czyniąc je bardziej wygodnym i bezpiecznym. Wrocław, będąc jednym z liderów innowacji w Polsce, aktywnie implementuje inteligentne technologie w domach i mieszkaniach. Inteligentny dom we Wrocławiu staje się integralną częścią nowoczesnego stylu życia, oferując automatyzację oświetlenia, ogrzewania, systemów bezpieczeństwa oraz zarządzanie wszystkimi aspektami życia za pomocą aplikacji mobilnych. Ekologiczne Materiały i Zrównoważoność Wzrastająca świadomość ekologiczna przyczynia się do popularności stosowania ekologicznych materiałów w projektowaniu wnętrz. Domy i mieszkania we Wrocławiu stają się miejscem, gdzie projektanci preferują użycie materiałów podlegających recyklingowi i o zrównoważonym charakterze, tworząc ekologicznie odpowiedzialne wnętrza. Sztuka we Wnętrzu: Wpływ Klasyki i Nowoczesności Współczesne wnętrza przekształcają się w prawdziwe dzieła sztuki, gdzie dzieła artystyczne pełnią rolę nie tylko dekoracji, ale także kluczowego elementu. Nadają one niepowtarzalny charakter przestrzeni i stanowią źródło inspiracji zarówno dla projektantów, jak i mieszkańców domów. Nowoczesny design wnętrza współdziała z nowoczesnymi technologiami, aby stworzyć przestrzenie, które odpowiadają potrzebom współczesnego stylu życia. Wrocław, ze swoim dynamicznym rozwojem i dziedzictwem kulturowym, staje się areną eksperymentów w dziedzinie projektowania i innowacji. Przy tworzeniu unikalnego wnętrza w tym mieście, pamiętajcie o wprowadzaniu nowoczesnych technologii i podążajcie za współczesnymi trendami, aby Wasz dom stał się idealnym odzwierciedleniem współczesnego stylu życia."
}



axios.post('http://localhost:3002/posts', post)
    .then(response => {
        console.log('Успешно добавлен пост:', response.data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });