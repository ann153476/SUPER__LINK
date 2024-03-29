// {
// name:'',
// url:'',
// img:,
// note: '',
// }

import coolSound from '../img_links/cool_sound.png';
import onlineFotoshop from '../img_links/online_fotoshop.png';
import nanoid from '../img_links/nanoid.jpg';
import svgomg from '../img_links/svgomg.jpg';
import motion from '../img_links/motion.jpg';
import prop_types from '../img_links/prop_types.jpg';
import icon_moon from '../img_links/icon_moon.jpg';
import axios from '../img_links/axios.jpg';
import react_dom from '../img_links/react_dom.jpg';
import freesvg from '../img_links/freesvg.jpg';
import icons8 from '../img_links/icons8.jpg';
import redux_toolkit from '../img_links/redux_toolkit.jpg';
import persist from '../img_links/persist.jpg';
import redux_i from '../img_links/redux_i.jpg';
import sass from '../img_links/sass.jpg';
import swiper from '../img_links/swiper.jpg';
import partial from '../img_links/partials.jpg';
import uiverse from '../img_links/uiverse.jpg';

const Links = [
  {
    name: 'прикольные звуки сайт',
    url: 'https://zvukipro.com/audio/556-zvuki-magii.html',
    img: coolSound,
    note: '',
  },
  {
    name: 'онлайн фотошоп',
    url: 'https://online-photoshop.org/edit/',
    img: onlineFotoshop,
    note: '',
  },
  {
    name: 'nanoid npm',
    url: 'https://www.npmjs.com/package/nanoid',
    img: nanoid,
    note: 'для создания уникального key на каждый элемент который мепаэться рандомно присваевает код',
  },

  {
    name: 'цікаві анімації',
    url: 'https://www.framer.com/motion/introduction/',
    img: motion,
    note: 'багато анімацій кнопок на реакті треба ковірятись npm!',
  },
  {
    name: 'prop_types',
    url: 'https://www.npmjs.com/package/prop-types',
    img: prop_types,
    note: 'створюе прототипи пропсів щоб задати тип пропса який передається типу для цього ну хз це дуже нада) [npm i prop-types]',
  },

  {
    name: 'для запитів на апі',
    url: 'https://axios-http.com/uk/docs/intro',
    img: axios,
    note: 'поможе надіслати запит на сервер з API зроби тіпа http посилання і можна в нього вставить шо надо [npm install axios]',
  },
  {
    name: 'react_ROUTER_DOM',
    url: 'https://www.npmjs.com/package/react-router-dom',
    img: react_dom,
    note: 'для створення типа нових вікон в сайті але це не нова сторінка а її частина (швидка загрузка сторінки) [npm i react-router-dom]',
  },
  {
    name: 'SVGOMG',
    url: 'https://www.framer.com/motion/introduction/',
    img: svgomg,
    note: 'підготовка перед спрайтом очищюе все зайте в ',
  },
  {
    name: 'сделает спрайт',
    url: 'https://icomoon.io/app/#/select',
    img: icon_moon,
    note: 'зробе спрайт з іконок типу один файл з усіма іконками !головне прибрати їх колір! отак: 1.бургер меню зправа 2.properties 3.remove all colors',
  },
  {
    name: 'халявні SVG',
    url: 'https://www.reshot.com/free-svg-icons/arrow/?page=7',
    img: freesvg,
    note: 'халявні SVG',
  },
  {
    name: 'svg8',
    url: 'https://icons8.com/',
    img: icons8,
    note: 'є халявні але не всі',
  },
  {
    name: 'redux_toolkit',
    url: 'https://redux-toolkit.js.org/introduction/getting-started',
    img: redux_toolkit,
    note: 'npm install react-redux     npm install react-redux',
  },
  {
    name: 'persist',
    url: 'https://www.npmjs.com/package/redux-persist',
    img: persist,
    note: 'для зберігання в локал стореджі дз 6',
  },
  {
    name: 'redux_i',
    url: 'https://redux-toolkit.js.org/introduction/getting-started',
    img: redux_i,
    note: 'npm install @reduxjs/toolkit npm install react-redux',
  },
  {
    name: 'npm-sass-npm_i_sass',
    url: 'https://www.npmjs.com/package/sass',
    img: sass,
    note: 'для подключения sass',
  },
  {
    name: 'прикольные свайперы',
    url: 'https://swiperjs.com/get-started',
    img: swiper,
    note: 'открывай core копируй html css styles пример в swiper test самое главное заимпортировать js css',
  },
  {
    name: 'partials <include> html',
    url: 'https://www.npmjs.com/package/posthtml-include?activeTab=readme',
    img: partial,
    note: 'для корирования кода html через тег include важно продумать структуру страниц бо там ебаться с путями ../../',
  },
  {
    name: 'uiverse',
    url: 'https://uiverse.io/all',
    img: uiverse,
    note: 'куча крутых кнопок и тд.',
  },
];

export default Links;
