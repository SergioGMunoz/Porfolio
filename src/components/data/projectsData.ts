const tech = {
  react: {
    text: "react",
    color: "#61DAFB",
  },
  javascript: {
    text: "javascript",
    color: "#F7DF1E",
  },
  java: {
    text: "java",
    color: "#ED8B00",
  },
  swing: {
    text: "swing",
    color: "#ED8B00",
  },
  mysql: {
    text: "mysql",
    color: "#4479A1",
  },
  jdbc: {
    text: "jdbc",
    color: "#ED8B00",
  },
  maven: {
    text: "maven",
    color: "#C71A36",
  },
  html: {
    text: "html",
    color: "#E34F26",
  },
  css: {
    text: "css",
    color: "#1572B6",
  },
  tailwind: {
    text: "tailwind",
    color: "#06B6D4",
  },
  laravel: {
    text: "laravel",
    color: "#FF2D20",
  },
  php: {
    text: "php",
    color: "#777BB4",
  },
  vue: {
    text: "vue",
    color: "#4FC08D",
  },
  vite: {
    text: "vite",
    color: "#646CFF",
  },
};

const projectsData = [
  {
    id: 1,
    titleKey: "projects.BoardGames-manager.title",
    descriptionKey: "projects.BoardGames-manager.description",
    stack: [tech.java, tech.swing, tech.mysql, tech.jdbc, tech.maven],
    picture: "/projects/BoardGames-manager.png",
    link: "https://github.com/SergioGMunoz/BoardGames-manager",
  },
  {
    id: 2,
    titleKey: "projects.Disney-Chatbots.title",
    descriptionKey: "projects.Disney-Chatbots.description",
    stack: [tech.html, tech.css, tech.javascript],
    picture: "/projects/Disney-Chatbots.png",
    link: "https://github.com/SergioGMunoz/Disney-Chatbots",
  },
  {
    id: 3,
    titleKey: "projects.Sistema-de-autenticacion-centralizado.title",
    descriptionKey: "projects.Sistema-de-autenticacion-centralizado.description",
    stack: [tech.laravel, tech.php, tech.vue, tech.react, tech.mysql],
    picture: "/projects/Sistema-de-autenticacion-centralizado.png",
    link: "https://github.com/SergioGMunoz/Central-Auth",
  },
  {
    id: 4,
    titleKey: "projects.MurciaH&R.title",
    descriptionKey: "projects.MurciaH&R.description",
    stack: [tech.react, tech.vite, tech.javascript],
    picture: "/projects/MurciaH&R.png",
    link: "https://github.com/SergioGMunoz/Murcia-H-R",
  },
  {
    id: 5,
    titleKey: "projects.Mechanography-for-developers.title",
    descriptionKey: "projects.Mechanography-for-developers.description",
    stack: [tech.html, tech.tailwind, tech.javascript],
    picture: "/projects/Mechanography-for-developers.png",
    link: "https://github.com/SergioGMunoz/Mechanography-for-developers",
  },
  {
    id: 6,
    titleKey: "projects.Laberinto.title",
    descriptionKey: "projects.Laberinto.description",
    stack: [tech.java, tech.swing, tech.jdbc, tech.mysql],
    picture: "/projects/Laberinto.png",
    link: "https://github.com/SergioGMunoz/Maze-Creator",
  },
  {
    id: 7,
    titleKey: "projects.Lovers-Web-App.title",
    descriptionKey: "projects.Lovers-Web-App.description",
    stack: [tech.react, tech.vite, tech.javascript, tech.css],
    picture: "/projects/Lovers-Web-App.png",
    link: "https://github.com/SergioGMunoz/Lovers-Web-App",
  },
];

export default projectsData;
