import { renderRoute } from './router.js';

window.addEventListener('hashchange', renderRoute);
window.addEventListener('load', renderRoute);
