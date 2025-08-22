// Import your project images at the top.
// Loyiha rasmlaringizni yuqorida import qiling.
import portfolioImage from "../assets/img/img-project-portfolio/portfolio-480.png";
import eCommerceImage from "../assets/img/img-project-E-commerce/project-E-commerce-640.png";
import quteGeneratorImage from "../assets/img/img-quote-generator/quote-generator.jpg";

// This is your local "database" for projects.
// Bu sizning loyihalaringiz uchun lokal "ma'lumotlar bazasi".
export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React to showcase my skills and projects. Features a modern UI and clean code.",
    imageUrl: portfolioImage,
    projectLink: "#", // Add the real link to the project here
    githubLink: "https://github.com/SindorKholikberdiev/Portfolio", // Add the real GitHub link
  },
  {
    id: 2,
    title: "Random Quote Generator",
    description:
      "A simple and fun application that fetches random quotes from an API and displays them. A great exercise in handling API requests.",
    imageUrl: quteGeneratorImage,
    projectLink:
      "https://sindorkholikberdiev.github.io/Project-Simple-quote-generator/",
    githubLink:
      "https://github.com/SindorKholikberdiev/Project-Simple-quote-generator",
  },
  {
    id: 3,
    title: "E-commerce Store Front",
    description:
      "A front-end for an e-commerce platform, demonstrating product listing, filtering, and a shopping cart using React state management.",
    imageUrl: eCommerceImage,
    projectLink: "#",
    githubLink: "#1",
  },

  // You can add more projects here.
  // Bu yerga yana loyihalar qo'shishingiz mumkin.
  // {
  //   id: 4,
  //   title: "...",
  //   description: "...",
  //   imageUrl: anotherImage,
  //   projectLink: "#",
  //   githubLink: "#"
  // }
];
