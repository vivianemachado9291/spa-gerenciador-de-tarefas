export const Templates = {
  home: () => `
    <h1>Bem-vinda ao Gerenciador de Tarefas</h1>
    <p>Use o menu acima para navegar.</p>
  `,

  cadastro: () => `
    <h2>Cadastro</h2>
    <form id="cadastroForm">
      <input type="text" placeholder="Nome" required>
      <input type="email" placeholder="Email" required>
      <button type="submit" class="add">Cadastrar</button>
    </form>
  `,

  tarefas: () => `
    <h2>Tarefas</h2>
    <form id="taskForm">
      <input type="text" id="taskInput" placeholder="Digite uma tarefa" required>
      <button type="submit" class="add">Adicionar</button>
    </form>
    <ul id="taskList"></ul>
  `,

  perfil: () => `
    <h2>Perfil</h2>
    <p>Aqui você pode visualizar e editar seu perfil.</p>
  `
};
