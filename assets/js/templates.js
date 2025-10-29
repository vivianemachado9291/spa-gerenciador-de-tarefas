export const Templates = {
  home(){ return `<h1 class="h4">Bem-vindo(a) ao Gerenciador de Tarefas</h1>
    <p>Use o menu para acessar Cadastro, Tarefas e Perfil.</p>`; },

  cadastro(){ return `
    <h2 class="h5">Cadastro</h2>
    <form id="formCadastro">
      <div class="mb-3"><label>Nome</label><input id="nome" class="form-control" required></div>
      <div class="mb-3"><label>Email</label><input id="email" type="email" class="form-control" required></div>
      <div class="mb-3"><label>Confirmar Email</label><input id="email2" type="email" class="form-control" required></div>
      <div class="mb-3"><label>Senha</label><input id="senha" type="password" class="form-control" required></div>
      <div class="mb-3"><label>Confirmar Senha</label><input id="senha2" type="password" class="form-control" required></div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
    <div id="cadastroMsg" class="mt-3"></div>`; },

  tarefas(){ return `
    <h2 class="h5">Tarefas</h2>
    <form id="formTarefa" class="d-flex gap-2 mb-3">
      <input id="novaTarefa" class="form-control" placeholder="Digite a tarefa" required>
      <button class="btn btn-primary" type="submit">Adicionar</button>
    </form>
    <ul id="listaTarefas" class="list-group"></ul>`; },

  perfil(dados){ return `
    <h2 class="h5">Perfil</h2>
    <p><strong>Nome:</strong> ${dados?.nome ?? '—'}</p>
    <p><strong>Email:</strong> ${dados?.email ?? '—'}</p>
    <button id="apagarPerfil" class="btn btn-danger btn-sm">Apagar Perfil</button>`; }
};
