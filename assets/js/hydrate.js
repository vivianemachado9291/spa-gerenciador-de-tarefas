export function hydrateCadastro() {
  const form = document.getElementById("cadastroForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Usuário cadastrado com sucesso!");
      form.reset();
    });
  }
}

export function hydrateTarefas() {
  const form = document.getElementById("taskForm");
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  if (form && input && list) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskText = input.value.trim();
      if (!taskText) return;

      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="done">✔</button>
          <button class="delete">✖</button>
        </div>
      `;

      li.querySelector(".done").addEventListener("click", () => {
        li.style.textDecoration = "line-through";
      });

      li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
      });

      list.appendChild(li);
      form.reset();
    });
  }
}
