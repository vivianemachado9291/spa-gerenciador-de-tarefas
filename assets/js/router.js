import { Templates } from "./templates.js";
import { hydrateCadastro, hydrateTarefas } from "./hydrate.js";

export function renderRoute() {
  const app = document.getElementById("app");
  const hash = window.location.hash || "#/home";
  const route = hash.replace("#/", "");

  app.innerHTML = Templates[route] ? Templates[route]() : "<h2>Página não encontrada</h2>";

  if (route === "cadastro") hydrateCadastro();
  if (route === "tarefas") hydrateTarefas();
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", renderRoute);
