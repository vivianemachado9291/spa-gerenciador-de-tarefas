tarefas() {
  return `
    <section class="p-4">
      <h1 class="h4 mb-3">Tarefas</h1>
      
      <!-- Formulário de adição -->
      <form id="formTarefa" class="d-flex gap-2 mb-3">
        <input type="text" id="novaTarefa" class="form-control" placeholder="Digite sua tarefa..." required>
        <button type="submit" class="btn btn-primary">Adicionar</button>
      </form>

      <!-- Lista -->
      <ul id="listaTarefas" class="list-group">
        <!-- As tarefas aparecem aqui via JavaScript -->
      </ul>
    </section>
  `;
}
