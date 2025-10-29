import { Templates } from './templates.js';
import { mount } from './dom.js';
import { store } from './store.js';
import { hydrateCadastro, hydrateTarefas, hydratePerfil } from './hydrate.js';

export function renderRoute($root, path){
  let html='', data=null;
  switch(path){
    case '/cadastro': html=Templates.cadastro(); break;
    case '/tarefas': html=Templates.tarefas(); break;
    case '/perfil': data=store.get('profile'); html=Templates.perfil(data); break;
    default: html=Templates.home();
  }
  mount($root, html);
  if(path==='/cadastro') hydrateCadastro(document);
  if(path==='/tarefas') hydrateTarefas(document);
  if(path==='/perfil') hydratePerfil(document);
}
