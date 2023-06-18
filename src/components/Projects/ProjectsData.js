import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpeg";
import dynamicFormProject from "../../images/projects/dynamic.jpeg";
import gasolineraProject from "../../images/projects/gasolinera.jpeg";
import marvelProject from "../../images/projects/marvel.jpeg";
import rickMorty from "../../images/projects/rick-morty.jpeg";
import tareasProject from "../../images/projects/todo.jpeg";
import criptoProject from "../../images/projects/crypto.jpeg";

export const projectsPortfolio = [
  {
    title: "Rick & Morty API",
    image: rickMorty,
    techs: [
      { name: "React", src: reactImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
    repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
    website: "#!", //ustedes deben colocar aquí el link del enlace público de netlify
  },
  {
    title: "Todo list",
    image: tareasProject,
    techs: [
      { name: "React", src: reactImage },
      { name: "Semantic UI React", src: semanticImage },
    ],
    description:
      "Application created with React JS and to make a list of tasks where you can add or remove it.",
    repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
    website: "#!", //ustedes deben colocar aquí el link del enlace público de netlify
  },
  {
    title: "Simpsons API",
    image: simpsonProject,
    techs: [
      { name: "React JS", src: reactImage },
      { name: "Styled Components", src: styledImage },
    ],
    description:
      "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
    repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
    website: "#!", //ustedes deben colocar aquí el link del enlace público de netlify
  },
  {
    title: "Marvel API",
    image: marvelProject,
    techs: [
      { name: "React", src: reactImage },
      { name: "React Router", src: reactRouterdomImage },
      { name: "Sass", src: sassImage },
      { name: "Semantic", src: semanticImage },
    ],
    description:
      "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
    repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
    website: "#!", //ustedes deben colocar aquí el link del enlace público de netlify
  },
  {
    title: "Dynamic Form",
    image: dynamicFormProject,
    techs: [
      { name: "React JS", src: reactImage },
      { name: "React Bootstrap", src: reactBootstrapImage },
    ],
    description:
      "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
    repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
    website: "#!", //ustedes deben colocar aquí el link del enlace público de netlify
  },
  {
    title: "Fuel Station",
    image: gasolineraProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "Chakra", src: chakraImage },
      { name: "React Router DOM", src: reactRouterdomImage },
    ],
    description:
      "Application created with Vite where you can save the information and see it on a summary.",
    repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
    website: "#!", //ustedes deben colocar aquí el link del enlace público de netlify
  },

  {
    title: "Crypto Conversor",
    image: criptoProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "Styled Components", src: styledImage  },      
    ],
    description:
      "Application created with Vite where you'll can convert coins to crypto.",
    repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
    website: "#!", //ustedes deben colocar aquí el link del enlace público de netlify
  },
];
