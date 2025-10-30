export const Templates = {
  home() {
    return `
      <section>
        <h1>Bem-vinda ao Gerenciador de Tarefas</h1>
        <p>Aqui você pode anotar suas tarefas, acompanhar o que já foi feito e marcar como concluídas de forma simples e rápida.</p>
        </section>
    `;
  },

  cadastro() {
    return `
      <section>
        <h2>Cadastro de Usuário</h2>
        <form onsubmit="alert('Usuário cadastrado!'); return false;">
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    `;
  },

  tarefas() {
    return `
      <section>
        <h2>Tarefas</h2>
        <p>Digite uma tarefa no campo abaixo e clique em "Adicionar".</p>
        <form id="taskForm">
          <input type="text" id="taskInput" placeholder="Digite uma tarefa" required />
          <button type="submit">Adicionar</button>
        </form>
        <ul id="taskList"></ul>
      </section>
    `;
  },

  perfil() {
    return `
      <section>
        <h2>Perfil</h2>
        <p>Gerencie suas informações pessoais aqui.</p>
        <ul>
          <li><strong>Nome:</strong> Viviane Machado</li>
          <li><strong>E-mail:</strong> exemplo@email.com</li>
        </ul>
      </section>
    `;
  }
};
