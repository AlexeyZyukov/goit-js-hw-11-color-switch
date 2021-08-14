import singleDishCardTmpl from '../templates/dish.hbs';
import menuList from '../menu.json';
import '../styles.css';
import '../sass/main.scss';

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuDishesMarkup(menuList);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuDishesMarkup(menuList) {
    return menuList.map(singleDishCardTmpl).join('');
}