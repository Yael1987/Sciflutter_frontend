// import { ArticlePreviewI, AuthorsPreviewI } from '../_interfaces';

import { ArticlePreview, UserPreview } from "../_interfaces/api";


export const user = {
  _id: '654efd985706e11f3f758ad5',
  name: 'Joselin',
  lastName: 'Hernandez',
  role: 'author',
  photos: {
    profile: '/img/users/ari.jpg',
    cover: '/img/covers/cover-6.png'
  },
  twoStepsAuthentication: false,
  status: 'active',
  socialLinks: [],
  discipline: 'medicina'
}

export const sampleMoreArticles: ArticlePreview[] = [
  {
    author: {
      _id: "1",
      name: 'Neftali',
      lastName: 'Guadarrama',
      photos: {
        profile: '/img/users/user-6.png',
      },
    },
    discipline: 'biologia',
    name: 'La importancia de los zoologicos para la conservacion de especies',
    resume:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.',
    image: '/img/articles-main/Panda.jpg',
    createdAt: '2023-11-25T21:42:03.253Z',
    _id: '1',
  },
  {
    author: {
      _id: "2",
      name: 'Nahomi',
      lastName: 'Zavala',
      photos: {
        profile: '/img/users/user-5.jpg',
      },
    },
    discipline: 'pedagogia',
    name: 'La educacion tradicional y su impacto en el desarrollo de un pais',
    resume:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.',
    image: '/img/articles-main/Educacion.jpg',
    createdAt: '2023-10-25T21:42:03.253Z',
    _id: '2',
  },
  {
    author: {
      _id: "3",
      name: 'Renata',
      lastName: 'Villalobos',
      photos: {
        profile: '/img/users/user-13.jpg',
      },
    },
    discipline: 'medicina',
    name: 'El uso excesivo de los antibioticos y los riesgos que esto implica',
    resume:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.',
    image: '/img/articles-main/Pastillas.jpg',
    createdAt: '2023-11-13T21:42:03.253Z',
    _id: '3',
  },
];

export const sampleMoreAuthors: UserPreview[] = [
  {
    _id: "1",
    name: "Neftali",
    lastName: "Guadarrama",
    photos: {
      profile: "/img/users/user-6.png"
    },
    discipline: "biologia",
    followers: 200,
    likes: 350,
    articles: 7,
  },
  {
    _id: "2",
    name: "Nahomi",
    lastName: "Zavala",
    photos: {
      profile: "/img/users/user-5.jpg"
    },
    discipline: "pedagogia",
    followers: 174,
    likes: 423,
    articles: 6,
  },
  {
    _id: "3",
    name: "Renata",
    lastName: "Villalobos",
    photos: {
      profile: "/img/users/user-13.jpg"
    },
    discipline: "medicina",
    followers: 428,
    likes: 602,
    articles: 8,
  },
  {
    _id: "4",
    name: "Paola",
    lastName: "Rodriguez",
    photos: {
      profile: "/img/users/user-4.png"
    },
    discipline: "medicina",
    followers: 502,
    likes: 728,
    articles: 7,
  },
];

export const sampleArticlesPreview: ArticlePreview[] = [
  {
    author: {
      _id: "1",
      name: "Neftali",
      lastName: "Guadarrama",
      photos: {
        profile: "/img/users/user-6.png",
      },
    },
    discipline: "biologia",
    name: "La importancia de los zoologicos para la conservacion de especies",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Panda.jpg",
    createdAt: "2023-11-25T21:42:03.253Z",
    _id: "1",
  },
  {
    author: {
      _id: "2",
      name: "Nahomi",
      lastName: "Zavala",
      photos: {
        profile: "/img/users/user-5.jpg",
      },
    },
    discipline: "pedagogia",
    name: "La educacion tradicional y su impacto en el desarrollo de un pais",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Educacion.jpg",
    createdAt: "2023-10-25T21:42:03.253Z",
    _id: "2",
  },
  {
    author: {
      _id: "3",
      name: "Renata",
      lastName: "Villalobos",
      photos: {
        profile: "/img/users/user-13.jpg",
      },
    },
    discipline: "medicina",
    name: "El uso excesivo de los antibioticos y los riesgos que esto implica",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2023-11-13T21:42:03.253Z",
    _id: "3",
  },
  {
    author: {
      _id: "3",
      name: "Renata",
      lastName: "Villalobos",
      photos: {
        profile: "/img/users/user-13.jpg",
      },
    },
    discipline: "medicina",
    name: "La importancia de las vacunas y la desinformacion al respecto",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2022-11-13T21:42:03.253Z",
    _id: "4",
  },
  {
    author: {
      _id: "8",
      name: "Roberto",
      lastName: "Estrada",
      photos: {
        profile: "/img/users/user-7.jpg",
      },
    },
    discipline: "medicina",
    name: "El constante bombardeo de la desinformacion en el area de la salud",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2020-10-02T21:42:03.253Z",
    _id: "5",
  },
  {
    author: {
      _id: "1",
      name: "Neftali",
      lastName: "Guadarrama",
      photos: {
        profile: "/img/users/user-6.png",
      },
    },
    discipline: "biologia",
    name: "La creciente poblacion de fauna feral como un problema de salud publica",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2023-09-01T21:42:03.253Z",
    _id: "6",
  },
  {
    author: {
      _id: "1",
      name: "Neftali",
      lastName: "Guadarrama",
      photos: {
        profile: "/img/users/user-6.png",
      },
    },
    discipline: "biologia",
    name: "El animalismo extremo puede ser tan peligroso como la caza excesiva para la conservacion de especies",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2021-07-15T21:42:03.253Z",
    _id: "7",
  },
  {
    author: {
      _id: "2",
      name: "Nahomi",
      lastName: "Zavala",
      photos: {
        profile: "/img/users/user-5.jpg",
      },
    },
    discipline: "pedagogia",
    name: "La neces_idad de ver mas alla en la educacion y dejar de repetir metodos obsoletos.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2022-10-08T21:42:03.253Z",
    _id: "8",
  },
  {
    author: {
      _id: "6",
      name: "Yael",
      lastName: "De Jesus",
      photos: {
        profile: "/img/users/user-1.jpg",
      },
    },
    discipline: "tecnologia",
    name: "El acelerado desarrollo de las tecnologias y que futuro depara para muchas profesiones",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2023-02-20T21:42:03.253Z",
    _id: "9",
  },
  {
    author: {
      _id: "1",
      name: "Neftali",
      lastName: "Guadarrama",
      photos: {
        profile: "/img/users/user-6.png",
      },
    },
    discipline: "biologia",
    name: "La falta de apoyo a programas de conservacion de especies y porqué es tan importante",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2023-01-22T21:42:03.253Z",
    _id: "10",
  },
  {
    author: {
      _id: "7",
      name: "Nahayeli",
      lastName: "Is_idro",
      photos: {
        profile: "/img/users/user-2.jpg",
      },
    },
    discipline: "psicologia",
    name: "La esquizofrenia, los mitos y real_idades detras de este trastorno mental",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2023-06-01T21:42:03.253Z",
    _id: "11",
  },
  {
    author: {
      _id: "7",
      name: "Nahayeli",
      lastName: "Is_idro",
      photos: {
        profile: "/img/users/user-2.jpg",
      },
    },
    discipline: "psicologia",
    name: "La latente neces_idad de la terapia en la sociedad actual",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2020-09-10T21:42:03.253Z",
    _id: "12",
  },
  {
    author: {
      _id: "9",
      name: "Diana",
      lastName: "Almanzar",
      photos: {
        profile: "/img/users/user-9.png",
      },
    },
    discipline: "tecnologia",
    name: "La saturacion del mercado laboral tecnologico y que relacion tienen los bootcamps con esto",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2023-08-21T21:42:03.253Z",
    _id: "13",
  },
  {
    author: {
      _id: "8",
      name: "Roberto",
      lastName: "Estrada",
      photos: {
        profile: "/img/users/user-7.jpg",
      },
    },
    discipline: "medicina",
    name: "El autodiagnostico como un agravante de los problemas de salud",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2022-05-28T21:42:03.253Z",
    _id: "14",
  },
  {
    author: {
      _id: "7",
      name: "Nahayeli",
      lastName: "Is_idro",
      photos: {
        profile: "/img/users/user-2.jpg",
      },
    },
    discipline: "psicologia",
    name: "La creciente desinformacion acerca de los trastornos deb_ido a las redes sociales",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2023-05-02T21:42:03.253Z",
    _id: "15",
  },
  {
    author: {
      _id: "5",
      name: "Joselin",
      lastName: "Hernandez",
      photos: {
        profile: "/img/users/ari.jpg",
      },
    },
    discipline: "medicina",
    name: "Las superbacterias como un problema alarmante en el sector de salud",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2022-09-20T21:42:03.253Z",
    _id: "16",
  },
  {
    author: {
      _id: "9",
      name: "Diana",
      lastName: "Almanzar",
      photos: {
        profile: "/img/users/user-9.png",
      },
    },
    discipline: "pedagogia",
    name: "Como la educacion indiv_idualista ha afectado severamente el desarrollo de la sociedad",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquamerat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate ipsum ac vehicula sagittis. Aliquam erat ligula, sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi nibh.",
    image: "/img/articles-main/Pastillas.jpg",
    createdAt: "2022-03-19T21:42:03.253Z",
    _id: "17",
  },
];

export const sampleAuthorsPreview: UserPreview[] = [
  {
    _id: "1",
    name: "Neftali",
    lastName: "Guadarrama",
    photos: {
      profile: "/img/users/user-6.png"
    },
    discipline: "biologia",
    followers: 200,
    likes: 350,
    articles: 7,
  },
  {
    _id: "2",
    name: "Nahomi",
    lastName: "Zavala",
    photos: {
      profile: "/img/users/user-5.jpg"
    },
    discipline: "pedagogia",
    followers: 174,
    likes: 423,
    articles: 6,
  },
  {
    _id: "3",
    name: "Renata",
    lastName: "Villalobos",
    photos: {
      profile: "/img/users/user-13.jpg"
    },
    discipline: "medicina",
    followers: 428,
    likes: 602,
    articles: 8,
  },
  {
    _id: "4",
    name: "Paola",
    lastName: "Rodriguez",
    photos: {
      profile: "/img/users/user-4.png"
    },
    discipline: "medicina",
    followers: 502,
    likes: 728,
    articles: 7,
  },
  {
    _id: "5",
    name: "Joselin",
    lastName: "Hernandez",
    photos: {
      profile: "/img/users/ari.jpg"
    },
    discipline: "medicina",
    followers: 502,
    likes: 728,
    articles: 7,
  },
  {
    _id: "6",
    name: "Yael",
    lastName: "De Jesus",
    photos: {
      profile: "/img/users/user-1.jpg"
    },
    discipline: "tecnologia",
    followers: 502,
    likes: 728,
    articles: 7,
  },
  {
    _id: "7",
    name: "Nahayeli",
    lastName: "Is_idro",
    photos: {
      profile: "/img/users/user-2.jpg"
    },
    discipline: "psicologia",
    followers: 502,
    likes: 728,
    articles: 7,
  },
  {
    _id: "8",
    name: "Roberto",
    lastName: "Estrada",
    photos: {
      profile: "/img/users/user-7.jpg"
    },
    discipline: "medicina",
    followers: 502,
    likes: 728,
    articles: 7,
  },
  {
    _id: "9",
    name: "Diana",
    lastName: "Almanzar",
    photos: {
      profile: "/img/users/user-9.png"
    },
    discipline: "tecnologia",
    followers: 502,
    likes: 728,
    articles: 7,
  },
];