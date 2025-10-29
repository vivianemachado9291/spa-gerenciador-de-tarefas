static home() {
  return `
    <section class="d-flex flex-column gap-3 p-4">
      <h1 class="h4">Gerenciador de Tarefas</h1>
      <p>
        Este projeto é um protótipo desenvolvido para a disciplina de 
        <strong>Experiência Prática III</strong>. 
        Ele demonstra a construção de uma aplicação web do tipo 
        <em>Single Page Application (SPA)</em>, utilizando JavaScript, Bootstrap 
        e armazenamento local no navegador.
      </p>
      <p>
        Funcionalidades incluídas:
        <ul>
          <li>Cadastro de usuário com validação de dados;</li>
          <li>Gerenciamento de tarefas (criar, editar, excluir, concluir);</li>
          <li>Exibição de perfil do usuário;</li>
          <li>Navegação dinâmica sem recarregar a página.</li>
        </ul>
      </p>
      <p>
        O objetivo é demonstrar manipulação do DOM, eventos, templates JavaScript e 
        persistência de dados no <code>localStorage</code>, simulando uma aplicação real.
      </p>
    </section>
  `;
}
