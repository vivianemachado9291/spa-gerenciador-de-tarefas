import { Templates } from './templates.js';
import { hydrateCadastro, hydrateTarefas } from './hydrate.js';

const routes = {
  '/home': Templates.home,
  '/cadastro': Templates.cadastro,
  '/tarefas': Templates.tarefas,
  '/perfil': Templates.perfil
};

export function renderRoute() {
  const app = document.getElementById('app');
  const path = window.location.hash.replace('#', '') || '/home';
  const template = routes[path] || Templates.home;
  app.innerHTML = template();

  // Ativa interações específicas
  if (path === '/cadastro') hydrateCadastro();
  if (path === '/tarefas') hydrateTarefas();
}
