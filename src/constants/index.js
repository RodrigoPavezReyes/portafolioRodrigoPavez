import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `Soy un desarrollador Full Stack apasionado por la tecnología y comprometido con la excelencia. Mi misión es transformar ideas en aplicaciones funcionales y escalables, utilizando las últimas tecnologías y las mejores prácticas en desarrollo. Con una formación sólida en desarrollo web full stack, manejo tecnologías front-end como HTML, CSS, JavaScript, React, y React Flex, complementadas con un dominio en backend utilizando Node.js, MongoDB, y NestJS. Actualmente, estoy ampliando mi experiencia en la nube con AWS, lo que me permite diseñar y desplegar aplicaciones robustas y seguras. Estoy aquí para aportar mis habilidades en proyectos que demanden calidad, eficiencia, y un enfoque orientado a resultados.`;

export const TITLE_ABOUT = `Transformo desafíos en soluciones tecnológicas innovadoras`
export const ABOUT_TEXT = `Mi trayectoria en el desarrollo web se caracteriza por una constante evolución y un profundo compromiso con la tecnología. Desde mis inicios, he estado motivado por una curiosidad insaciable por comprender y dominar las aplicaciones web. Me especializo en el desarrollo front-end y back-end, enfocándome en crear experiencias de usuario excepcionales y sistemas robustos.`;

export const ABOUT_TEXT_2=`Valoro el trabajo en equipo y creo que la colaboración es clave para el éxito de cualquier proyecto. Estoy dispuesto a compartir mi conocimiento y aprender de otros, contribuyendo a un entorno dinámico y productivo. Mi objetivo es aplicar mis conocimientos en proyectos desafiantes, aportar valor tangible y llevar cualquier proyecto al siguiente nivel.`


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Landing Page",
    image: project1,
    description:
      "Landing Page informativa,con tecnologias CSS y HTML, tiene una interfaz de usuario intuitiva y responsiva. Este proyecto se enfoca en la experiencia del usuario y un diseño atractivo.",
    technologies: ["HTML", "CSS", "React","Firebase", "Bootstrap"],
    link:"https://rodrigopavezreyes.github.io/ArteMaderaProyect/"
  },

  {
    title: "App Rick and Morty",
    image: project2,
    description:
      "Aplicación que consume la API de Rick and Morty, presentando personajes y episodios con un diseño creado en CSS nativo. El diseño simula el estilo visual de la API oficial, ofreciendo una experiencia coherente y atractiva.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://rodrigopavezreyes.github.io/app-rickAndMorty-react/"
  },
  {
    title: "Chat en tiempo real",
    image: project3,
    description:
      "Implementé un chat en tiempo real utilizando WebSocket, Node.js y Express, permitiendo una comunicación instantánea entre usuarios. Este proyecto se centra en la eficiencia y la interactividad, ofreciendo una experiencia de chat fluida y responsiva.",
    technologies: ["HTML", "CSS", "Node","Express", "Websocket"],
    link: "https://jungle-picayune-sunset.glitch.me"
  },
  {
    title: "To-do-list",
    image: project4,
    description:
      "Aplicación de lista de tareas utilizando React, que permite a los usuarios gestionar y organizar sus actividades diarias de manera sencilla. La aplicación es interactiva y eficiente, con una interfaz clara y fácil de usar.",
    technologies: ["HTML", "CSS", "React"],
    link:"https://rodrigopavezreyes.github.io/to-do-list-app/"
  },
  {
    title: "E-commerce",
    image: project5,
    description:
      "e-commerce utilizando React, CSS y HTML, con un diseño moderno y funcional, enfocado en la usabilidad y la experiencia del usuario, con carrito de compras integrado.",
    technologies: ["HTML", "CSS", "React"],
    link:"https://rodrigopavezreyes.github.io/e-commerce/"
  },
  
];

export const CONTACT = {
  address: "Córdoba Capital, Argentina ",
  phone: "+54 9 3516256448",
  email: "rodrigopavez.developer@gmail.com",
};
