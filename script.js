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

// for mobile
const popup = document.getElementById('mobile-popup');

function closePopUp() {
  popup.classList.add('hide-mobile-popup');
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
    linkToLiveVersion: '#!',
    linkToSource: '#!',
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
  },
];

function getTechnologies(technologies) {
  let tech = '';
  for (let i = 0; i < technologies.length; i += 1) {
    const currentTechnology = technologies[i];
    tech += `<li class='tag'>${currentTechnology}</li>`;
  }
  return tech;
}

function generateMobileProjectData(projectList) {
  let data = '';
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
                <a href='#!' class='project-link' onclick='openPopUp(${i})'>
                    See Project
                </a>
            </div>
        `;
  }
  return data;
}

document.getElementById('mobile-works').innerHTML = generateMobileProjectData(projectData);

function openPopUp(index) {
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


