// router.js
import { Templates } from "./templates.js";
import { mount, $ } from "./dom.js";
import { store } from "./store.js";
import { hydrateCadastro, hydrateTarefas, hydratePerfil } from "./hydrate.js";

function render(path){
  let html = "";
  switch (path) {
    case "/cadastro": html = Templates.cadastro(); break;
    case "/tarefas":  html = Templates.tarefas();  break;
    case "/perfil":   html = Templates.perfil(store.get("profile", {})); break;
    default:          html = Templates.home();
  }
  mount($("#app"), html);

  if (path === "/cadastro") hydrateCadastro(document);
  if (path === "/tarefas")  hydrateTarefas(document);
  if (path === "/perfil")   hydratePerfil(document);
}

export function startRouter(){
  const resolve = () => {
    const path = (location.hash || "#/home").replace("#", "");
    render(path);
  };
  window.addEventListener("hashchange", resolve);
  window.addEventListener("load", resolve);
}
