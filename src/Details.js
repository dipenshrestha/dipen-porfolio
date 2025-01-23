// Enter all your detials in this file
// Logo images
import logogradient from "./assets/LearnWithDipen.svg";
import logo from "./assets/LearnWithDipen.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/Imaginface.png";
import projectImage2 from "./assets/projects/sathisahakari.png";
import projectImage3 from "./assets/projects/project1.jpg";
import projectImage4 from "./assets/projects/animestore.png";
import projectImage5 from "./assets/projects/chessgame.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Dipen Shrestha",
  tagline: "I Craft Web Experiences: Code, Design, Deliver",
  img: profile,
  about: `Motivated and detail-oriented recent Computer Engineering graduate from Khwopa Engineering College with a strong academic foundation and active volunteer experience. Possess a solid background in programming and design, enhanced by well-honed leadership and communication skills. Passionate about leveraging technical expertise to build a successful career in Professional Services, specializing in innovative programming and design solutions that drive success.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/dipen-stha/",
  github: "https://github.com/dipenshrestha",
  twitter: "https://x.com/Dipen_stha1",
  instagram: "https://www.instagram.com/dipen.sth/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Graphics Designer",
    Company: `Hult Prize at Khwopa Engineering College`,
    Location: "Libali, Bhaktapur",
    Type: "Volunteering Work",
    Duration: "2021 - 2023",
  },
  {
    Position: "Content Creator",
    Company: `IT Students of Nepal (ITSNP)`,
    Location: "Kathmandu",
    Type: "Volunteering Work",
    Duration: "Jul 2022 - Dec 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "SEE",
    Company: "Sunshine National School",
    Location: "Dudhpati, Bhaktapur",
    Type: "Full Time",
    Duration: "2017",
  },
  {
    Position: "+2 Science",
    Company: "Khwopa Secondary School",
    Location: "Dekocha, Bhaktapur",
    Type: "Full Time",
    Duration: "2017-2019",
  },
  {
    Position: "Bachelor in Computer Engineering",
    Company: `Khwopa Engineering College`,
    Location: "Libali, Bhaktapur",
    Type: "Full Time",
    Duration: "2019 - 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "ImaginFace: Text Driven Human Face Generation",
    image: projectImage1,
    description: `Created “ImaginFace” using DC-GAN and DF-GAN on CelebA Dataset which focuses on utilizing GANs 
    to create a range of human faces through training, on extensive datasets of actual human faces. Applied Django Framework to create User Interface and deploy the model in it.`,
    techstack: "Django, DC-GAN, DF-GAN",
    githubLink: "https://github.com/dipenshrestha",
  },
  {
    title: "AnimeStore",
    image: projectImage4,
    description: `Developed a web application designed for anime enthusiasts, offering a wide range of anime products and related services using PHP, HTML/CSS, JavaScript, and MySQL for database connectivity. Focusing on featuring distinct login portals for anime enthusiasts to offer specialized functionalities and services.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    previewLink: "http://animestore.infinityfreeapp.com/",
    githubLink: "https://github.com/dipenshrestha/AnimeStoreProject",
  },
  {
    title: "Sathi Sahakari",
    image: projectImage2,
    description: `Created “Sathi Sahakari” which is an application for maintaining a person's account in the cooperative. Integrated features such as money transactions, account detail views, profile creation, accept or reject transactions and editing functionalities, effectively showcasing CRUD operations. `,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    githubLink: "https://github.com/dipenshrestha/Sathi-Sahakari",
  },
  {
    title: "Brane",
    image: projectImage3,
    description: `Developed "Brane," an e-commerce website for branded shoe sales, using WordPress and WooCommerce for efficient design and seamless functionality. Integrated login and registration plugins for user authentication and eSewa wallet for secure, convenient payments.`,
    techstack: "Wordpress, Woocommerce",
    githubLink: "https://github.com/dipenshrestha/Brane",
  },
  {
    title: "Chess Game",
    image: projectImage5,
    description: `Developed "Chess Game" (Player vs Player) using C/C++ Graphics, focusing on strategic gameplay and object-oriented programming (OOP) principles. Ensured efficient data handling and a user-friendly interface, enhancing the overall gaming experience.`,
    techstack: "C/C++, C graphics",
    githubLink: "https://github.com/dipenshrestha/Chess-Game-Code-in-C-Programming",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "dipenchrestha111@gmail.com",
  phone: "+977 9860744627",
};
