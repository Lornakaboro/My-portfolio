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