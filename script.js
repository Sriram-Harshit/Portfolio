// #skills section START
const skillsSection = document.getElementById("skills");

// Heading
const skillsHeading = document.createElement("h2");
skillsHeading.textContent = "Skills";
skillsSection.appendChild(skillsHeading);

// Description
const description = document.createElement("p");
description.innerHTML =
  "As a Full-Stack Developer, I have gained experience with various technologies and tools.<br><br>Here's an overview of the skills I've acquired:";
skillsSection.appendChild(description);

// Subsection Aligner
const alignerSection = document.createElement("section");
alignerSection.className = "tt-aligner";
skillsSection.appendChild(alignerSection);

// List of Tools and Technologies
const toolsList = document.createElement("ul");
toolsList.className = "tools-and-technologies";
alignerSection.appendChild(toolsList);

// Skills Data
const skills = [
  {
    title: "Programming Languages",
    technologies: [{ iconClass: "fab fa-python", name: "Python" }],
  },
  {
    title: "Front-End Development",
    technologies: [
      { iconClass: "fab fa-html5", name: "HTML" },
      { iconClass: "fab fa-css3-alt", name: "CSS" },
      { iconClass: "fab fa-js-square", name: "JavaScript" },
      { iconClass: "fab fa-react", name: "React.js" },
      { iconClass: "fab fa-bootstrap", name: "Bootstrap" },
    ],
  },
  {
    title: "Back-End Development",
    technologies: [
      { iconClass: "fab fa-node", name: "Node.js" },
      { iconClass: "fas fa-cogs", name: "Express.js" },
      { iconClass: "fas fa-plug", name: "RESTful APIs" },
    ],
  },
  {
    title: "Databases",
    technologies: [
      { iconClass: "fas fa-database", name: "MongoDB" },
      { iconClass: "fas fa-database", name: "SQL" },
    ],
  },
  {
    title: "Version Control",
    technologies: [
      { iconClass: "fab fa-git", name: "Git" },
      { iconClass: "fab fa-github", name: "GitHub" },
    ],
  },
  {
    title: "Development Tools",
    technologies: [
      { iconClass: "fas fa-code", name: "VS Code" },
      { iconClass: "fas fa-plug", name: "Postman" },
    ],
  },
];

// Loop through the skills and appending them
skills.forEach((skill) => {
  const toolItem = document.createElement("li");
  toolItem.className = "tools";
  toolsList.appendChild(toolItem);

  const toolTitle = document.createElement("strong");
  toolTitle.textContent = skill.title;
  toolItem.appendChild(toolTitle);

  const techList = document.createElement("ul");
  techList.className = "technologies";
  toolItem.appendChild(techList);

  skill.technologies.forEach((tech) => {
    const techItem = document.createElement("li");

    const icon = document.createElement("i");
    icon.className = tech.iconClass;
    techItem.appendChild(icon);

    const techName = document.createElement("span");
    techName.textContent = tech.name;
    techItem.appendChild(techName);

    techList.appendChild(techItem);
  });
});

// Closing Paragraph
const closingParagraph = document.createElement("p");
closingParagraph.textContent =
  "I am always looking to expand my skill set and work on innovative projects that allow me to enhance my expertise in both front-end and back-end development.";
skillsSection.appendChild(closingParagraph);
// #skills section END

const projects = [
  {
    title: "The Store",
    description:
      "A brief description of the project. This project is about building a portfolio website.",
    url: "https://the-store-cl7n.vercel.app/#/",
    preview: "images/The Store.png",
  },
  {
    title: "Emoji Game",
    description:
      "A brief description of the project. This project is a simple to-do list application.",
    url: "https://harshitemojigam.ccbp.tech/",
    preview: "images/Emoji Game.png",
  },
  {
    title: "Todo's",
    description:
      "A brief description of the project. This project is a simple to-do list application.",
    url: "https://todosappharshit.ccbp.tech/",
    preview: "images/TODOS.png",
  },
];

const projectsSection = document.getElementById("projects");

// Create and append the "Projects" header
const header = document.createElement("h2");
header.textContent = "Projects";
projectsSection.appendChild(header);

// Create the project container dynamically
const projectContainer = document.createElement("div");
projectContainer.className = "project-container";
projectsSection.appendChild(projectContainer);

// Loop through each project and create HTML dynamically
projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";

  projectDiv.innerHTML = `
      <img src="${project.preview}" alt="${project.title} Preview" class="project-preview">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

  // Add an onclick event to open the project URL in a new tab
  projectDiv.onclick = () => window.open(project.url, "_blank");

  // Append the project card to the container
  projectContainer.appendChild(projectDiv);
  // Create a new <p> element for the error message
  const projectNote = document.createElement("p");

  // Set the text content of the error message
});

// BACKGROUND SPACE
// Function to create stars
function createStars() {
  const starCount = 100; // Number of stars
  const container = document.getElementById("stars-container"); // Use a specific container for stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Randomize position of stars within the viewport
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;

    star.style.left = `${xPos}px`;
    star.style.top = `${yPos}px`;

    // Randomize animation duration and delay for twinkling effect
    const duration = Math.random() * 2 + 1; // Duration between 1s and 3s
    const delay = Math.random() * 2; // Delay between 0s and 2s

    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    container.appendChild(star);
  }
}

// Function to generate shooting stars
function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  // Randomize initial position for shooting stars within the viewport
  const yPos = Math.random() * window.innerHeight;

  shootingStar.style.top = `${yPos}px`;

  // Random horizontal direction for the shooting star
  const direction = Math.random() > 0.5 ? "right" : "left";
  shootingStar.style.left =
    direction === "right" ? "-10px" : `${window.innerWidth + 10}px`;

  // Append shooting star to the container
  document.body.appendChild(shootingStar);

  // Remove the shooting star after the animation ends
  setTimeout(() => {
    shootingStar.remove();
  }, 3000); // Match the animation duration (3 seconds)
}

// Create stars on page load
window.onload = () => {
  createStars();

  // Create shooting stars every 5 seconds
  setInterval(createShootingStar, 5000); // Adjust interval timing to sync with stars' twinkle
};
