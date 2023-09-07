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
      if (this.innerHTML.toLowerCase().trim() === pages[i].dataset.page.trim()) {
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

const modalName = document.getElementById('modal-name');
const modalType = document.getElementById('modal-type');
const modalDescription = document.getElementById('modal-description');
const modalHref = document.getElementById('modal-href');
const modalGit = document.getElementById('modal-git');
const modalTechnologies = document.getElementById('modal-technologies');

const projects = [
  {
    id: "1",
    name: "Crypto store",
    type: "web deployment",
    href: "https://bom-nft-auction-platform-git-authentication-jivko25.vercel.app/",
    git: "https://github.com/jivko25/BOM-NFT-Auction-Platform",
    isProfessional: false,
    image: "./assets/images/crypto-store-image.png",
    description: "Not professional project that uses Back4App as headless CSM. This is final project in the BOOM academy. My first steps in React and Next are with this project.",
    technologies: ['NextJS', 'ReactJS', 'Back4App', 'MaterialUI', 'Sass', 'Axios'],
  },
  {
    id: "2",
    name: "Movie App",
    type: "web deployment",
    href: "https://mk-it-assignment-fe.vercel.app/",
    git: "https://github.com/jivko25/MK-IT-Assignment-FE",
    isProfessional: false,
    image: "./assets/images/movie-app-image.png",
    description: "Not professional project, created as assignment when applying in MK IT. First project with own Back-end, written on ExpressJS, MongoDB and Atlassian ",
    technologies: ['ReactJS', 'TypeScript', 'MaterialUI', 'Sass', 'Axios', 'Vercel', 'NodeJS', 'ExpressJS', 'MongoDB', 'JWT', '@hapi/joi', 'Jest', 'Supertest'],
  },
  {
    id: "3",
    name: "Intelibiz",
    type: "web deployment",
    href: "https://intellibiz.space/",
    isProfessional: true,
    image: "./assets/images/intelli-biz-image.png",
    description: "Professional project for IntelliSoft company. Implementing front-end, back-end tasks and integrating AI.",
    technologies: ['Spring', 'JavaScript', 'ChatGPT API'],
  },
  {
    id: "4",
    name: "Eco system simulator",
    type: "web deployment",
    href: "https://eco-system-simulator.vercel.app/",
    git: 'https://github.com/jivko25/Eco-System-Simulator',
    isProfessional: false,
    image: "./assets/images/eco-system-image.png",
    description: "University project, made for 1 night. The purpose of the project is to calculate how the population in ecosystem would change depending on animals birth, death and all relations between them.",
    technologies: ['React', 'Next', 'MaterialUI', 'ChartJS', 'Sass'],
  },
  {
    id: "5",
    name: "Jobs Website",
    type: "web deployment",
    href: "https://angular-job-website.vercel.app/",
    git: 'https://github.com/jivko25/Angular-Job-Website',
    isProfessional: false,
    image: "./assets/images/job-website-image.png",
    description: "University project, made for 3 days. The purpose of the project is the same as jobs.bg - companies are creating offers and users are applying for them. Two types of authentication. For back-end is used Back4App",
    technologies: ['Angular', 'TypeScript', 'Back4App'],
  },
  {
    id: "6",
    name: "WebApp for United Nations",
    type: "web deployment",
    isProfessional: true,
    image: "./assets/images/locked.jpg",
    description: "This webapp is confidential and demo can't be shared. NextJS app for accelerating 17 UN targets. Fully Agile. Personal communication with clients. Front-end, Back-end and UI design roles.",
    technologies: ['ReactJS', 'TypeScript', 'NextJS', 'NestJS', 'AWS', 'MantineUI', 'GoogleMapsAPI', 'Figma', 'Axios'],
  },
];

const portfolioLink = document.getElementById("portfolio-link");
const projectsWrapper = document.querySelector(".project-list");

portfolioLink.addEventListener("click", () => {
  projectsWrapper.innerHTML = ""
  projects.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-item");
    projectItem.classList.add("active");
    projectItem.setAttribute("data-filter-item", true);
    projectItem.setAttribute("data-category", project.type);
    projectItem.innerHTML = `
    <a href="#">
      <figure class="project-img">
        <div id="${project.id}" class="project-item-icon-box" data-title="${project.name}" data-type="${project.type}" data-href="${project.href}" data-image="${project.image}" data-description="${project.description}" data-technologies="${project.technologies}">
          <ion-icon name="eye-outline"></ion-icon>
        </div>

        <img
          src="${project.image}"
          alt="summary"
          loading="lazy"
        />
      </figure>

      <h3 class="project-title">${project.name}</h3>

      <p class="project-category">${project.type}</p>
    </a>`;

    projectsWrapper.appendChild(projectItem);

    document.getElementById(project.id).addEventListener('click', function() {
      modalName.innerHTML = project.name;
      modalType.innerHTML = project.type;
      modalDescription.innerHTML = project.description;
      if(!project.href){
        modalHref.querySelector('button').disabled = true
      }
      else {
        modalHref.querySelector('button').disabled = false
        modalHref.href = project.href;
      }
      if(!project.git){
        modalGit.querySelector('button').disabled = true
      }
      else {
        modalGit.querySelector('button').disabled = false
        modalGit.href = project.git;
      }
      modalTechnologies.innerHTML = ''
      project.technologies.forEach(technology => {
        const newItem = document.createElement('li');
        newItem.innerHTML = technology;
        modalTechnologies.appendChild(newItem)
      })
      openModal()
    })
  });
});
