export function hydrateCadastro() {
  const form = document.getElementById('formCadastro');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Usuário cadastrado com sucesso!");
      form.reset();
    });
  }
}

export function hydrateTarefas() {
  const btn = document.getElementById('addTarefa');
  const input = document.getElementById('novaTarefa');
  const lista = document.getElementById('listaTarefas');

  if (btn && input && lista) {
    btn.addEventListener('click', () => {
      if (input.value.trim() === '') return;
      const li = document.createElement('li');
      li.textContent = input.value;

      const concluir = document.createElement('button');
      concluir.textContent = "✔";
      concluir.onclick = () => li.style.textDecoration = "line-through";

      const excluir = document.createElement('button');
      excluir.textContent = "❌";
      excluir.onclick = () => li.remove();

      li.appendChild(concluir);
      li.appendChild(excluir);
      lista.appendChild(li);

      input.value = '';
    });
  }
}
