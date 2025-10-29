import { renderRoute } from './router.js';
const $app = document.getElementById('app');

function onRoute(){
  const path=(location.hash||'#/home').replace('#','');
  renderRoute($app, path);
}
window.addEventListener('hashchange', onRoute);
window.addEventListener('DOMContentLoaded', onRoute);
