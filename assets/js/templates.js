export const Templates = {
  home() {
    return `
      <section class="d-flex flex-column gap-3 p-4">
        <h1 class="h4">Gerenciador de Tarefas</h1>
        <p>
          Protótipo acadêmico que demonstra uma <em>SPA</em> com JavaScript,
          Bootstrap e <code>localStorage</code>.
        </p>
        <ul>
          <li>Cadastro de usuário com validação;</li>
          <li>Tarefas: adicionar e excluir (persistem no navegador);</li>
          <li>Perfil exibindo dados salvos;</li>
          <li>Navegação sem recarregar a página.</li>
        </ul>
      </section>
    `;
  },

  cadastro() {
    return `
      <section class="p-4">
        <h2 class="h5 mb-3">Cadastro</h2>
        <form id="formCadastro" novalidate>
          <div class="mb-3">
            <label class="form-label" for="nome">Nome</label>
            <input id="nome" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label" for="email">Email</label>
            <input id="email" type="email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label" for="email2">Confirmar Email</label>
            <input id="email2" type="email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label" for="senha">Senha</label>
            <input id="senha" type="password" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label" for="senha2">Confirmar Senha</label>
            <input id="senha2" type="password" class="form-control" required>
          </div>
          <button class="btn btn-primary" type="submit">Salvar</button>
        </form>
        <div id="cadastroMsg" class="mt-3"></div>
      </section>
    `;
  },

  tarefas() {
    return `
      <section class="p-4">
        <h1 class="h4 mb-3">Tarefas</h1>
        <form id="formTarefa" class="d-flex gap-2 mb-3">
          <input type="text" id="novaTarefa" class="form-control" placeholder="Digite sua tarefa..." required>
          <button type="submit" class="btn btn-primary">Adicionar</button>
        </form>
        <ul id="listaTarefas" class="list-group"></ul>
      </section>
    `;
  },

  perfil(data = {}) {
    const nome  = data.nome  ?? "—";
    const email = data.email ?? "—";
    return `
      <section class="p-4">
        <h2 class="h5 mb-3">Perfil</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <button id="apagarPerfil" class="btn btn-outline-danger btn-sm">Apagar Perfil</button>
      </section>
    `;
  }
};
