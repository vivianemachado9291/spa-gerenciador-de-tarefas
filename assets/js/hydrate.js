import { $ } from "./dom.js";
import { store } from "./store.js";

const K_PROFILE = "profile";
const K_TASKS   = "tasks";

export function hydrateCadastro(root = document) {
  const form = $("#formCadastro", root);
  const msg  = $("#cadastroMsg", root);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome   = $("#nome").value.trim();
    const email  = $("#email").value.trim();
    const email2 = $("#email2").value.trim();
    const senha  = $("#senha").value;
    const senha2 = $("#senha2").value;

    if (email !== email2 || senha !== senha2) {
      msg.innerHTML = `<div class="alert alert-danger">Emails ou senhas não coincidem.</div>`;
      return;
    }

    store.set(K_PROFILE, { nome, email }); // (não salvamos senha)
    msg.innerHTML = `<div class="alert alert-success">
      Cadastro salvo! <a class="alert-link" href="#/perfil">Ver perfil</a>
    </div>`;
  });
}

export function hydrateTarefas(root = document) {
  const form  = $("#formTarefa", root);
  const input = $("#novaTarefa", root);
  const lista = $("#listaTarefas", root);
  if (!form || !input || !lista) return;

  let tarefas = store.get(K_TASKS, []); // [{text, done}]

  const render = () => {
    lista.innerHTML = tarefas.map((t, i) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span style="text-decoration:${t.done ? "line-through" : "none"}">${t.text}</span>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-success" data-action="toggle" data-i="${i}">Concluir</button>
          <button class="btn btn-sm btn-danger"  data-action="remove" data-i="${i}">Excluir</button>
        </div>
      </li>`).join("");
    store.set(K_TASKS, tarefas);
  };
  render();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    tarefas.push({ text: val, done: false });
    input.value = "";
    render();
  });

  lista.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const i = Number(btn.dataset.i);
    if (btn.dataset.action === "toggle") tarefas[i].done = !tarefas[i].done;
    if (btn.dataset.action === "remove") tarefas.splice(i, 1);
    render();
  });
}

export function hydratePerfil(root = document) {
  const btn = $("#apagarPerfil", root);
  if (btn) btn.addEventListener("click", () => {
    store.remove(K_PROFILE);
    location.hash = "#/cadastro";
  });
}
