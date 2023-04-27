let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector('.navbar-menu');
  let getSidebarLinks = document.querySelectorAll('.side-nav a');
  let getSidebarVisibility = document.querySelector('.side-nav');
  var htmlGrab = document.querySelector('html');
  const hamburger = document.querySelector('.hamburger');

  hamburger.classList.toggle('is-active');

  if (toggleNavStatus === false) {
    getSidebarVisibility.style.visibility = 'visible';
    getSidebarVisibility.style.pointerEvents = 'initial';

    getSidebarLinks.forEach((item, index) => {
      console.log(item);
      item.style.opacity = '1';
      item.style.visibility = 'visible';
    });
    getSidebar.style.width = '60%';
    htmlGrab.classList.add('clicked');
    toggleNavStatus = true;
    servicesUL.classList.add('clicked');
  } else if (toggleNavStatus === true) {
    getSidebarLinks.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transitionDelay = '0s';
      item.style.visibility = 'hidden';
    });
    getSidebar.style.width = '0';
    htmlGrab.classList.remove('clicked');
    toggleNavStatus = false;
    servicesUL.classList.remove('clicked');
    getSidebarVisibility.style.pointerEvents = 'none';
  }
};

var body = document.querySelector('body');

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

if (darkMode == 'enabled') {
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
