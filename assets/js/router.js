import { Templates } from './templates.js';
import { mount } from './dom.js';
import { store } from './store.js';


export const routes = {
'/home': () => Templates.home(),
'/cadastro': () => Templates.cadastro(),
'/tarefas': () => Templates.tarefas(),
'/perfil': () => Templates.perfil(store.get('profile', {})),
'/sobre': () => Templates.sobre(),
};


export function resolveRoute(path) {
return routes[path] ? path : '/home';
}


export function renderRoute($root, path) {
const html = (routes[path] || routes['/home'])();
mount($root, html);
}
