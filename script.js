/* eslint no-unused-vars: 0 */

function toggleMobileMenu() {
  document
    .getElementById('nav-dropdown-menu')
    .classList.toggle('hidden-dropdown-menu');
}

function openDropdownItem(menuElement, menuLink) {
  document
    .getElementById('nav-dropdown-menu')
    .classList.toggle('hidden-dropdown-menu');
}

const projectData = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/tonic-work.png',
    technologies: ['html', 'css', 'javascript'],
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    linkToLiveVersion: 'https://lornakaboro.github.io/To-Do-list/',
    linkToSource: 'https://github.com/Lornakaboro/To-Do-list',
    desktopName: 'Todo-list',
    desktopDescription:
      'To do list is a task management project built using pure javascript(ES6) , HTML, CSS, and Webpack..',
    desktopFeaturedImage: './images/todo-list-project.png',
    desktopPointersTitle: 'CANOPY',
    desktopPointersLevel: 'Back End Dev',
    desktopPointersYear: '2015',
    desktopTechnologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/multi-post-stories.png',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    desktopName: 'Multi-Post Stories',
    desktopDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    desktopFeaturedImage: './images/multi-post-stories-desktop.png',
    desktopPointersTitle: 'CANOPY',
    desktopPointersLevel: 'Back End Dev',
    desktopPointersYear: '2015',
    desktopTechnologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/tonic-work2.png',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    desktopName: 'Facebook 360',
    desktopDescription:
      'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    desktopFeaturedImage: './images/facebook.png',
    desktopPointersTitle: 'FACEBOOK',
    desktopPointersLevel: 'Full Stack Dev',
    desktopPointersYear: '2015',
    desktopTechnologies: ['html', 'css', 'javascript', 'Ruby on rails'],
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/multi-post-stories2.png',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    desktopName: 'Uber Navigation',
    desktopDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    desktopFeaturedImage: './images/uber-navigation.png',
    desktopPointersTitle: 'Uber',
    desktopPointersLevel: 'Lead Developer',
    desktopPointersYear: '2018',
    desktopTechnologies: ['html', 'css', 'javascript', 'Ruby on rails'],
  },
];
// for mobile
const popup = document.getElementById('mobile-popup');

function closePopUp() {
  popup.classList.add('hide-mobile-popup');
}
// desktop
const desktopPopUp = document.getElementById('desktop-popup');
function closeDesktopPopUp() {
  desktopPopUp.classList.add('hide-desktop-popup');
}

function getTechnologies(technologies) {
  let tech = '';
  for (let i = 0; i < technologies.length; i += 1) {
    const currentTechnology = technologies[i];
    tech += `<li class='tag'>${currentTechnology}</li>`;
  }
  return tech;
}

function generateProjectData(projectList, platform) {
  let data = '';

  if (platform === 'mobile') {
    for (let i = 0; i < projectList.length; i += 1) {
      const currentProject = projectData[i];
      const technologies = getTechnologies(currentProject.technologies);
      data += `
              <div class='work'>
                  <img src='${currentProject.featuredImage}' class='work-image' alt='multi-post-stories2'>
                  <h2 class='work-title'>${currentProject.name}</h2>
                  <div class="work-pointers">
                    <h3>CANOPY</h3>
                    <div class="work-pointers-bullets"></div>
                    <p>Back End Dev</p>
                    <div class="work-pointers-bullets"></div>
                  <p>2015</p>
                  </div>
                  <p class='work-description'>${currentProject.description}</p>
                  <ul class='tags'>
                      ${technologies}
                  </ul>
                  <a href='#!' class='project-link' onclick='openPopUp(${i}, "mobile")'>
                      See Project
                  </a>
              </div>
          `;
    }
  }
  if (platform === 'desktop') {
    for (let i = 0; i < projectList.length; i += 1) {
      const currentProject = projectData[i];
      let workReverse = '';
      let tech = '';
      for (let j = 0; j < currentProject.desktopTechnologies.length; j += 1) {
        const currentTechnology = currentProject.desktopTechnologies[j];
        tech += `<li class='tag'>${currentTechnology}</li>`;
      }
      if (i % 2 !== 0) {
        workReverse = 'work-reverse';
      }
      data += `
              <div class='work ${workReverse}'>
                  <img src='${currentProject.desktopFeaturedImage}' class='work-image' alt='image of a website hero-section'>
                  <div class='work-description-section'>
                      <h2 class='work-title'>${currentProject.desktopName}</h2>
                      <div class="work-pointers">
                        <h3>${currentProject.desktopPointersTitle}</h3>
                        <div class="work-pointers-bullets"></div>
                        <p>${currentProject.desktopPointersLevel}</p>
                        <div class="work-pointers-bullets"></div>
                        <p>${currentProject.desktopPointersYear}</p>
                      </div>
                      <p class='work-description'>${currentProject.desktopDescription}</p>
                      <ul class='tags'>
                          ${tech}
                      </ul>
                      <a href='#!' class='project-link' onclick='openPopUp(${i}, "desktop")' >
                       See Project
                      </a>
                  </div>
              </div>
          `;
    }
  }
  return data;
}

document.getElementById('mobile-works').innerHTML = generateProjectData(
  projectData,
  'mobile',
);

function openPopUp(index, screen) {
  if (screen === 'mobile') {
    const technologiesUsed = getTechnologies(projectData[index].technologies);
    const data = `
      <div class='work'>
          <div class='mobile-popup-title'>
              <h2 class='work-title'>${projectData[index].name}</h2>
              <i class='fa-regular fa-x mobile-popup-x-icon' onclick='closePopUp()'></i>
          </div>
          <div class="work-pointers">
            <h3>CANOPY</h3>
            <div class="work-pointers-bullets"></div>
            <p>Back End Dev</p>
            <div class="work-pointers-bullets"></div>
            <p>2015</p>
          </div>
          <img src='${projectData[index].featuredImage}' class='work-image' alt='image of a lady doing yoga'>
          <p class='work-description'>${projectData[index].description}</p>
          <ul class='tags'>
              ${technologiesUsed}
          </ul>
          <div class='mobile-popup-links'>
              <a href='${projectData[index].linkToLiveVersion}' class='mobile-popup-project-link mobile-popup-project-link1'>
                  See live
                  <img src='./images/Popup-icon.png' alt='image of a small icon' class='popup-icon'>
              </a>
              <a href='${projectData[index].linkToSource}' class='mobile-popup-project-link'>
                  See Source
                  <img src='./images/github-vector.png' alt='github icon' class='popup-icon'>
              </a>
          </div>
      </div>
      `;
    popup.innerHTML = data;
    popup.classList.remove('hide-mobile-popup');
  }
  if (screen === 'desktop') {
    const currentProjectData = projectData[index];
    const desktopTechnologies = getTechnologies(
      projectData[index].desktopTechnologies,
    );
    const data = `
      <div class='desktop-popup' >
          <div class='desktop-popup-title'>
              <h2 class='work-title'>${currentProjectData.name}</h2>
          <i class='fa-regular fa-x desktop-dropdown-x-icon' onclick='closeDesktopPopUp()'></i>
          </div>
          <div class="work-pointers">
            <h3>${currentProjectData.desktopPointersTitle}</h3>
            <div class="work-pointers-bullets"></div>
            <p>${currentProjectData.desktopPointersLevel}</p>
            <div class="work-pointers-bullets"></div>
            <p>${currentProjectData.desktopPointersYear}</p>
        </div>
        <img src='${currentProjectData.desktopFeaturedImage}' class='desktop-popup-work-image' alt='image of a website hero-section'>
          <div class='desktop-popup-description'>
              <div class='desktop-popup-work-description'>
                  <p>${currentProjectData.desktopDescription}</p>
              </div>
              <div class='desktop-popup-items'>
                  <ul class=' desktop-popup-tags'>
                  ${desktopTechnologies}
                  </ul>
                  <a href='${currentProjectData.linkToLiveVersion}' class=' desktop-popup-project-link'>
                  See live
                      <img src='./images/Popup-icon.png' alt='image of a small icon' class='popup-icon'>
                  </a>
                  <a href='${currentProjectData.linkToSource}' class=' desktop-popup-project-link'>
                  See Source
                      <img src='./images/github-vector.png' alt='github icon' class='popup-icon'>
                  </a>
              </div>
          </div>
      </div>
      `;
    desktopPopUp.innerHTML = data;
    desktopPopUp.classList.remove('hide-desktop-popup');
  }
}
document.querySelector('#desktop-works').innerHTML = generateProjectData(
  projectData,
  'desktop',
);
// form validation

const form = document.getElementById('contact-form-content');
const email = document.getElementById('contact-form-email');
const errormsg = document.getElementById('contact-form-error');
const message = document.getElementById('contact-form-message');
const userName = document.getElementById('contact-form-username')


form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    errormsg.style.display = 'block';
    e.preventDefault();
  }
  localStorage.setItem("contact-form-username", userName.value);
  localStorage.setItem("contact-form-email", email.value);
  localStorage.setItem("contact-form-message", message.value);
});

userName.value = localStorage.getItem("contact-form-username");
email.value = localStorage.getItem("contact-form-email");
message.value = localStorage.getItem("contact-form-message");


