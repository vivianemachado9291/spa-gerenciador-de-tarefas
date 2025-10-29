import { Templates } from "./templates.js";
import { mount, $ } from "./dom.js";

export function router() {
  const routes = {
    "#/home": Templates.home,
    "#/cadastro": Templates.cadastro,
    "#/tarefas": Templates.tarefas,
    "#/perfil": Templates.perfil
  };

  function resolve() {
    const hash = window.location.hash || "#/home";
    const page = routes[hash] ? routes[hash]() : Templates.home();
    mount($("#app"), page);
  }

  window.addEventListener("hashchange", resolve);
  window.addEventListener("load", resolve);
}
