"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const projectItems = document.querySelectorAll(".project-item-icon-box");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const openModal = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    openModal();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", openModal);
overlay.addEventListener("click", openModal);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (
        this.innerHTML.toLowerCase().trim() === pages[i].dataset.page.trim()
      ) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        if (navigationLinks[i]) {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }
    }
  });
}

const modalName = document.getElementById("modal-name");
const modalType = document.getElementById("modal-type");
const modalDescription = document.getElementById("modal-description");
const modalHref = document.getElementById("modal-href");
const modalGit = document.getElementById("modal-git");
const modalTechnologies = document.getElementById("modal-technologies");

const projects = [
  {
    id: "1",
    name: "WebApp for United Nations",
    type: "web deployment",
    isProfessional: true,
    image: "./assets/images/locked.jpg",
    description:
      "This webapp is confidential and demo can't be shared. NextJS app for accelerating 17 UN targets. Fully Agile. Personal communication with clients. Front-end, Back-end and UI design roles.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "NextJS",
      "NestJS",
      "Prisma",
      "AWS",
      "MantineUI",
      "GoogleMapsAPI",
      "Figma",
      "Axios",
    ],
  },
  {
    id: "2",
    name: "Property management application",
    type: "web deployment",
    isProfessional: true,
    image: "./assets/images/locked.jpg",
    description:
      "This webapp is confidential and demo can't be shared. Create-React-App, implementing some features like ticket and calendar system",
    technologies: [
      "ReactJS",
      "TypeScript",
      "NestJS",
      "Firebase",
      "Redux",
      "Redux SAGA",
      "GraphQL",
      "Rrule",
      "CalendarJS",
      "Sass",
      "ChartJS",
    ],
  },
  {
    id: "3",
    name: "E-commerce application for professional CS:GO team",
    type: "web deployment",
    isProfessional: true,
    image: "./assets/images/locked.jpg",
    description:
      "This webapp is confidential and demo can't be shared. Webapp for sharing information, streams, videos, merchandise for one of the best CS:GO teams, using their custom crypto coin for payments.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "NextJS",
      "NestJS",
      "Shopify",
      "Firebase",
      "Redux",
      "MaterialUI",
      "Sass",
    ],
  },
  {
    id: "4",
    name: "Intelibiz",
    type: "web deployment",
    href: "https://intellibiz.space/",
    isProfessional: true,
    image: "./assets/images/intelli-biz-image.png",
    description:
      "Professional project for IntelliSoft company. Implementing front-end, back-end tasks and integrating AI.",
    technologies: ["Spring", "JavaScript", "ChatGPT API"],
  },
  {
    id: "5",
    name: "Crypto store",
    type: "web deployment",
    href: "https://bom-nft-auction-platform-git-authentication-jivko25.vercel.app/",
    git: "https://github.com/jivko25/BOM-NFT-Auction-Platform",
    isProfessional: false,
    image: "./assets/images/crypto-store-image.png",
    description:
    "Not professional project that uses Back4App as headless CSM. This is final project in the BOOM academy. My first steps in React and Next are with this project.",
    technologies: [
      "NextJS",
      "ReactJS",
      "Back4App",
      "MaterialUI",
      "Sass",
      "Axios",
    ],
  },
  {
    id: "6",
    name: "Movie App",
    type: "web deployment",
    href: "https://mk-it-assignment-fe.vercel.app/",
    git: "https://github.com/jivko25/MK-IT-Assignment-FE",
    isProfessional: false,
    image: "./assets/images/movie-app-image.png",
    description:
      "Not professional project, created as assignment when applying in MK IT. First project with own Back-end, written on ExpressJS, MongoDB and Atlassian ",
    technologies: [
      "ReactJS",
      "TypeScript",
      "MaterialUI",
      "Sass",
      "Axios",
      "Vercel",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "@hapi/joi",
      "Jest",
      "Supertest",
    ],
  },
  {
    id: "7",
    name: "Jobs Website",
    type: "web deployment",
    href: "https://angular-job-website.vercel.app/",
    git: "https://github.com/jivko25/Angular-Job-Website",
    isProfessional: false,
    image: "./assets/images/job-website-image.png",
    description:
      "University project, made for 3 days. The purpose of the project is the same as jobs.bg - companies are creating offers and users are applying for them. Two types of authentication. For back-end is used Back4App",
    technologies: ["Angular", "TypeScript", "Back4App"],
  },
  {
    id: "8",
    name: "Eco system simulator",
    type: "web deployment",
    href: "https://eco-system-simulator.vercel.app/",
    git: "https://github.com/jivko25/Eco-System-Simulator",
    isProfessional: false,
    image: "./assets/images/eco-system-image.png",
    description:
      "University project, made for 1 night. The purpose of the project is to calculate how the population in ecosystem would change depending on animals birth, death and all relations between them.",
    technologies: ["React", "Next", "MaterialUI", "ChartJS", "Sass"],
  },
  {
    id: "9",
    name: "Quiz system",
    type: "web deployment",
    href: "https://boom-quiz-git-master-jivko25.vercel.app/",
    git: "https://github.com/jivko25/Boom-Quiz",
    isProfessional: false,
    image: "./assets/images/quiz-app-image.png",
    description:
      "Quiz app with demo questions('test' is the correct answer to all of them)",
    technologies: ["React", "Next", "MaterialUI", "Sass", "Axios", "PrismJS"],
  },
  {
    id: "10",
    name: "Drawing App",
    type: "web deployment",
    href: "https://drawing-software.vercel.app/",
    git: "https://github.com/jivko25/DrawingSoftware",
    isProfessional: false,
    image: "./assets/images/drawing-app-image.png",
    description:
      "University project for creating copy of 'Paint'",
    technologies: ["JavaScript", 'p5'],
  },
  {
    id: "11",
    name: "AI for Royal family",
    type: "ai deployment",
    git: "https://github.com/jivko25/AI-exercises",
    isProfessional: false,
    image: "./assets/images/no.jpg",
    description:
      "University project for displaying all members of royal family and their relations",
    technologies: ["Prolog"],
  },
  {
    id: "12",
    name: "Budget manager",
    type: "mobile development",
    git: "https://github.com/jivko25/Budget-Android-Java-Application",
    isProfessional: false,
    image: "./assets/images/no.jpg",
    description:
      "University project for building mobile app with team. The purpose of the app is to control the personal finances",
    technologies: ["Java (android)", "SQLite"],
  },
  {
    id: "13",
    name: "Snake game",
    type: "desktop development",
    git: "https://github.com/jivko25/SnakeGame",
    isProfessional: false,
    image: "./assets/images/no.jpg",
    description:
      "University project for building snake game as desktop app",
    technologies: ["Java"],
  },
  {
    id: "14",
    name: "Team management app",
    type: "desktop development",
    git: "https://github.com/jivko25/js-sql-app",
    isProfessional: false,
    image: "./assets/images/no.jpg",
    description:
      "University project for building desktop app for management employees, connected with SQL database",
    technologies: ["Java", "SQL"],
  },
];

const portfolioLink = document.getElementById("portfolio-link");
const projectsWrapper = document.querySelector(".project-list");

portfolioLink.addEventListener("click", () => {
  projectsWrapper.innerHTML = "";
  projects
    .sort((a, b) => +a.id - +b.id)
    .forEach((project) => {
      const projectItem = document.createElement("li");
      projectItem.classList.add("project-item");
      projectItem.classList.add("active");
      projectItem.setAttribute("data-filter-item", true);
      projectItem.setAttribute("data-category", project.type);
      projectItem.innerHTML = `
    <a href="#">
      <figure class="project-img">
        <div id="${project.id}" class="project-item-icon-box" data-title="${
        project.name
      }" data-type="${project.type}" data-href="${project.href}" data-image="${
        project.image
      }" data-description="${project.description}" data-technologies="${
        project.technologies
      }">
          <ion-icon name="eye-outline"></ion-icon>
        </div>

        <img
          src="${project.image}"
          alt="summary"
          loading="lazy"
        />
      </figure>

      <h3 class="project-title">${project.name}</h3>

      <p class="project-category">${
        project.isProfessional ?
        `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FEC965" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12l0 .01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </svg>`
      : ''}${project.type}</p>
    </a>`;

      projectsWrapper.appendChild(projectItem);

      document
        .getElementById(project.id)
        .addEventListener("click", function () {
          modalName.innerHTML = project.name;
          modalType.innerHTML = project.type;
          modalDescription.innerHTML = project.description;
          if (!project.href) {
            modalHref.querySelector("button").disabled = true;
          } else {
            modalHref.querySelector("button").disabled = false;
            modalHref.href = project.href;
          }
          if (!project.git) {
            modalGit.querySelector("button").disabled = true;
          } else {
            modalGit.querySelector("button").disabled = false;
            modalGit.href = project.git;
          }
          modalTechnologies.innerHTML = "";
          project.technologies.forEach((technology) => {
            const newItem = document.createElement("li");
            newItem.innerHTML = technology;
            modalTechnologies.appendChild(newItem);
          });
          openModal();
        });
    });
});

const certificationsLink = document.getElementById("certifications-link");
const certificationsWrapper = document.querySelector(".certifications-wrapper");
const certifications = [
  {
    id: "1",
    name: "New Leader English certificate C1",
    link: "./assets/images/ZhivkoEvgenievUzunov.jpg",
  },
  {
    id: "2",
    name: "SoftUni Java Programming Basics",
    link: "https://softuni.bg/certificates/details/85314/df0bac61",
  },
  {
    id: "3",
    name: "SoftUni Java Programming Fundamentals",
    link: "https://softuni.bg/certificates/details/96643/d9e5c7ba",
  },
  {
    id: "4",
    name: "SoftUni Java ООП",
    link: "https://softuni.bg/certificates/details/104137/fcb455a4",
  },
  {
    id: "5",
    name: "SoftUni Java Advanced",
    link: "https://softuni.bg/certificates/details/105612/80713fa2",
  },
  {
    id: "6",
    name: "SoftUni MySQL",
    link: "https://softuni.bg/certificates/details/107738/7ad003f2",
  },
  {
    id: "7",
    name: "SoftUni Java Spring Data",
    link: "https://softuni.bg/certificates/details/110146/18c39644",
  },
  {
    id: "8",
    name: "SoftUni JavaSpring Advanced",
    link: "https://softuni.bg/certificates/details/114852/5d8251e0",
  },
  {
    id: "9",
    name: "SoftUni JavaScript Applications",
    link: "https://softuni.bg/certificates/details/120959/a1fba643",
  },
  {
    id: "10",
    name: "HackerRank SQL(basic)",
    link: "https://www.hackerrank.com/certificates/8e99cdd6b6cb",
  },
  {
    id: "11",
    name: "HackerRank JavaScript(basic)",
    link: "https://www.hackerrank.com/certificates/1163262b00dc",
  },
];

certificationsLink.addEventListener("click", () => {
  certificationsWrapper.innerHTML = "";
  certifications.forEach((certificate) => {
    const newItem = document.createElement("div");
    newItem.classList.add("certificate-item");
    newItem.style.display = 'flex';
    newItem.innerHTML = `<span class="certificate-name" style="color:white;">${certificate.name}</span><span class="certificate-link"><a target='_blank' href=${certificate.link}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FEC965" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 15l6 -6" />
    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
  </svg></a></span>`;

    certificationsWrapper.appendChild(newItem);
  });
});
