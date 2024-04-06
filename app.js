let toggleNavStatus = false;

// toggle mobile menu
const toggleNav = function () {
  const getSidebar = document.querySelector('.navbar-menu');
  const getSidebarLinks = document.querySelectorAll('.side-nav a');
  const getSidebarVisibility = document.querySelector('.side-nav');
  const htmlGrab = document.querySelector('html');
  const hamburger = document.querySelector('.hamburger');

  hamburger.classList.toggle('is-active');

  if (toggleNavStatus === false) {
    getSidebarVisibility.style.visibility = 'visible';
    getSidebarVisibility.style.pointerEvents = 'initial';

    getSidebarLinks.forEach((item) => {
      item.style.opacity = '1';
      item.style.visibility = 'visible';
    });
    getSidebar.style.width = '60%';
    htmlGrab.classList.add('clicked');
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarLinks.forEach((item) => {
      item.style.opacity = '0';
      item.style.transitionDelay = '0s';
      item.style.visibility = 'hidden';
    });
    getSidebar.style.width = '0';
    htmlGrab.classList.remove('clicked');
    toggleNavStatus = false;
    getSidebarVisibility.style.pointerEvents = 'none';
  }
};
const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', toggleNav);

// dark mode
const body = document.querySelector('body');
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.dark-mode-button');

const enableDarkMode = () => {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// handle nav logo display
const navLogo = document.querySelector('.nav-logo');

const handleResize = () => {
  if (window.innerWidth < 1024) {
    navLogo.style.display = 'none';
  } else {
    navLogo.style.display = 'block';
  }
};

window.addEventListener('resize', handleResize);
handleResize();
