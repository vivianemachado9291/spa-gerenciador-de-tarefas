export function hydrateTarefas(root) {
  const form = root.querySelector("#formTarefa");
  const input = root.querySelector("#novaTarefa");
  const lista = root.querySelector("#listaTarefas");

  // Carrega do localStorage
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  function render() {
    lista.innerHTML = "";
    tarefas.forEach((tarefa, i) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span style="text-decoration:${tarefa.done ? "line-through" : "none"}">
          ${tarefa.text}
        </span>
        <div>
          <button class="btn btn-sm btn-success me-2" data-action="toggle" data-index="${i}">✔</button>
          <button class="btn btn-sm btn-danger" data-action="remove" data-index="${i}">✘</button>
        </div>
      `;
      lista.appendChild(li);
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    tarefas.push({ text: input.value, done: false });
    input.value = "";
    render();
  });

  lista.addEventListener("click", e => {
    if (e.target.dataset.action === "toggle") {
      const i = e.target.dataset.index;
      tarefas[i].done = !tarefas[i].done;
      render();
    }
    if (e.target.dataset.action === "remove") {
      const i = e.target.dataset.index;
      tarefas.splice(i, 1);
      render();
    }
  });

  render();
}
