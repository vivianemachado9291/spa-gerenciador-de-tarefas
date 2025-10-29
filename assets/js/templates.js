home() {
  return `
    <section class="d-flex flex-column gap-3 p-4">
      <h1 class="h4">Gerenciador de Tarefas</h1>
      <p>
        Este projeto é um protótipo desenvolvido para a disciplina de
        <strong>Experiência Prática III</strong>. Demonstra uma
        <em>Single Page Application (SPA)</em> usando JavaScript, Bootstrap
        e armazenamento local no navegador.
      </p>
      <ul>
        <li>Cadastro de usuário com validação de dados;</li>
        <li>Gerenciamento de tarefas (criar, editar, concluir, excluir);</li>
        <li>Exibição de perfil do usuário;</li>
        <li>Navegação dinâmica sem recarregar a página.</li>
      </ul>
      <p>
        O objetivo é demonstrar manipulação do DOM, eventos, templates JS e
        persistência no <code>localStorage</code>.
      </p>
    </section>
  `;
}
