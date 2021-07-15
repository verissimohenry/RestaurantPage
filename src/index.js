import '../style/style.css';

import {
  home
} from './components/home';
import {
  menu
} from './components/menu';
import {
  contact
} from './components/contact';

const linkHome = document.querySelector('.link-home');
const linkMenu = document.querySelector('.link-menu');
const linkContact = document.querySelector('.link-contact');
const homeDiv = document.querySelector('.home-div');
const menuDiv = document.querySelector('.menu-div');
const contactDiv = document.querySelector('.contact-div');
// Show only home page
linkHome.addEventListener('click', () => {
  setDisplayBlock(homeDiv)
  setDisplayNone(menuDiv)
  setDisplayNone(contactDiv)
});

// Show only menu page
linkMenu.addEventListener('click', () => {
  setDisplayNone(homeDiv)
  setDisplayBlock(menuDiv)
  setDisplayNone(contactDiv)
});

// Show only contact page
linkContact.addEventListener('click', () => {
  setDisplayNone(homeDiv)
  setDisplayNone(menuDiv)
  setDisplayBlock(contactDiv)

});

// Sets display - none for passed element
const setDisplayNone = (el) => {
  el.style.display = 'none'
}

// Sets display - block for passed element
const setDisplayBlock = (el) => {
  el.style.display = 'block'
}
