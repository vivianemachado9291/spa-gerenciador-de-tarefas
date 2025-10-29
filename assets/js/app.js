import { $, mount } from './dom.js';
import { renderRoute, resolveRoute } from './router.js';
import { hydrateCadastro, hydrateTarefas, hydratePerfil } from './hydrate.js';


const $app = $('#app');


function hydrateCurrent() {
// Chama os hidratores conforme a página atual
const hash = location.hash || '#/home';
const path = hash.replace('#','');
if (path === '/cadastro') hydrateCadastro(document);
if (path === '/tarefas') hydrateTarefas(document);
if (path === '/perfil') hydratePerfil(document);
}


function onRouteChange() {
const path = resolveRoute((location.hash || '#/home').replace('#',''));
renderRoute($app, path);
hydrateCurrent();
}


window.addEventListener('hashchange', onRouteChange);
window.addEventListener('DOMContentLoaded', onRouteChange);
