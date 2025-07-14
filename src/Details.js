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
import csharp from "./assets/techstack/Csharp.png"
import dotnetCore from "./assets/techstack/dotnetCore.png";
import efcore from "./assets/techstack/efcore.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import angular from "./assets/techstack/angular.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import dapper from "./assets/techstack/dapper.png"
import vscode from "./assets/techstack/vscode.png";
import visualstudio from "./assets/techstack/visualstudio.png"
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import swagger from "./assets/techstack/swagger.png"
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/Imaginface.png";
import projectImage2 from "./assets/projects/sathisahakari.png";
import projectImage3 from "./assets/projects/brane.png";
import projectImage4 from "./assets/projects/animestore.png";
import projectImage5 from "./assets/projects/chessgame.png";
import projectImage6 from "./assets/projects/studentregsys.png";

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
  linkedin: "https://www.linkedin.com/in/dipen-stha/",
  github: "https://github.com/dipenshrestha",
  twitter: "https://x.com/Dipen_stha1",
  instagram: "https://www.instagram.com/dipen.sth/",
};

// Enter your Work Experience here
export const workDetails = [
    {
    Position: "Jr. Software Developer",
    Company: `CodeBee Nepal`,
    Location: "Dhalku Marga",
    Type: "Full Time",
    Duration: "9th June - present",
  },
  {
    Position: "Backend Developer",
    Company: `Channakya Software Private Limited`,
    Location: "Baneshwor, Kathmandu",
    Type: "Internship",
    Duration: "24th February - 4th June",
  }
];

// Enter your Volunteering Experience here
export const volDetails = [
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
  csharp: csharp,
  dotnetCore: dotnetCore,
  efcore: efcore,
  js: js,
  react: react,
  angular: angular,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  dapper: dapper,
  vscode: vscode,
  visualstudio: visualstudio,
  postman: postman,
  npm: npm,
  git: git,
  swagger: swagger,
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
    previewLink: "http://sathi-sahakari.infinityfreeapp.com/",
    githubLink: "https://github.com/dipenshrestha/Sathi-Sahakari",
  },
  {
    title: "Brane",
    image: projectImage3,
    description: `Developed "Brane," an e-commerce platform for branded shoe sales, using WordPress for a responsive design and WooCommerce for seamless product management and shopping functionality. To enhance user experience, I integrated secure login and registration features and incorporated the eSewa wallet for convenient local payments, creating a user-friendly and reliable online shopping platform.`,
    techstack: "Wordpress, Woocommerce",
    previewLink: "https://youtu.be/yr1FUwftsE4?si=s7e1_XLFt7p0bFKb",
    githubLink: "https://github.com/dipenshrestha/Brane",
  },
  {
    title: "Student Registration System",
    image: projectImage6,
    description: `The Student Registration System is a web-based application that simplifies the management of students' personal information, benefiting both students and school authorities. It supports essential CRUD operations (Create, Read, Update, Delete) for efficient handling of student records.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    previewLink: "http://student-registration-system.infinityfreeapp.com/",
    githubLink: "https://github.com/dipenshrestha/Student-Registration-System",
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
// export const contactDetails = {
//   email: "dipenchrestha111@gmail.com",
//   phone: "+977 9860744627",
// };

export const contactDetails = {
  email: "dipenchrestha111@gmail.com",
  phone: "+977 9860744627",
  github: "https://github.com/dipenshrestha",
  linkedin: "https://www.linkedin.com/in/dipen-stha/",
};
