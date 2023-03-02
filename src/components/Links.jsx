//{
// name:'',
// url:'',
// img:'',
// note: '',
//}

import coolSound from '../img_links/cool_sound.png';
import onlineFotoshop from '../img_links/online_fotoshop.png';
import nanoid from '../img_links/nanoid.jpg';
import svgomg from '../img_links/svgomg.jpg';
import motion from '../img_links/motion.jpg';
import prop_types from '../img_links/prop_types.jpg';
import icon_moon from '../img_links/icon_moon.jpg';
import axios from '../img_links/axios.jpg';

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
    name: 'SVGOMG',
    url: 'https://www.framer.com/motion/introduction/',
    img: svgomg,
    note: 'підготовка перед спрайтом очищюе все зайте в ',
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
    name: 'сделает спрайт',
    url: 'https://icomoon.io/app/#/select',
    img: icon_moon,
    note: 'зробе спрайт з іконок типу один файл з усіма іконками !головне прибрати їх колір! отак: 1.бургер меню зправа 2.properties 3.remove all colors',
  },
  {
    name: 'для запитів на апі',
    url: 'https://axios-http.com/uk/docs/intro',
    img: axios,
    note: 'поможе надіслати запит на сервер з API зроби тіпа http посилання і можна в нього вставить шо надо [npm install axios]',
  },
];

export default Links;