import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';
const menuRef = document.querySelector('.js-menu');
const markup = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);
