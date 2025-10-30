export const Templates = {
  home: () => `
    <section>
      <h1>Bem-vinda ao Gerenciador de Tarefas</h1>
      <p>Use o menu acima para navegar.</p>
    </section>
  `,

  cadastro: () => `
    <section>
      <h2>Cadastro</h2>
      <form id="formCadastro">
        <input type="text" placeholder="Nome" required>
        <input type="email" placeholder="Email" required>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  `,

  tarefas: () => `
    <section>
      <h2>Tarefas</h2>
      <input id="novaTarefa" type="text" placeholder="Digite sua tarefa">
      <button id="addTarefa">Adicionar</button>
      <ul id="listaTarefas"></ul>
    </section>
  `,

  perfil: () => `
    <section>
      <h2>Perfil</h2>
      <p>Aqui você pode visualizar as informações do usuário.</p>
    </section>
  `
};
