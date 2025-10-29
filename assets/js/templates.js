export const Templates = {
<div class="d-flex gap-2 mt-4">
<button class="btn btn-primary" type="submit">Salvar cadastro</button>
<button class="btn btn-outline-secondary" type="reset">Limpar</button>
</div>
</form>
<div id="cadastroMsg" class="mt-3" aria-live="polite"></div>
</section>`;
},


tarefas() {
return `
<section>
<h2 class="h4 mb-3">Tarefas</h2>
<form id="formTarefa" class="row g-2 mb-3" autocomplete="off">
<div class="col-sm-9 col-md-10">
<input id="novaTarefa" class="form-control" placeholder="Digite a tarefa" required>
</div>
<div class="col-sm-3 col-md-2 d-grid">
<button class="btn btn-primary" type="submit">Adicionar</button>
</div>
</form>
<ul id="listaTarefas" class="list-group"></ul>
<div class="d-flex gap-2 mt-3">
<button id="btnLimparConcluidas" class="btn btn-outline-secondary btn-sm">Limpar concluídas</button>
<button id="btnLimparTudo" class="btn btn-outline-danger btn-sm">Limpar tudo</button>
</div>
</section>`;
},


perfil(data) {
const nome = data?.nome ?? '—';
const email = data?.email ?? '—';
const nasc = data?.nasc ?? '—';
return `
<section>
<h2 class="h4 mb-3">Perfil</h2>
<div class="card">
<div class="card-body">
<p><span class="badge badge-soft">Nome</span> <strong>${nome}</strong></p>
<p><span class="badge badge-soft">Email</span> ${email}</p>
<p><span class="badge badge-soft">Nascimento</span> ${nasc}</p>
<div class="d-flex gap-2 mt-3">
<a href="#/cadastro" class="btn btn-sm btn-outline-primary">Editar Cadastro</a>
<button id="apagarPerfil" class="btn btn-sm btn-outline-danger">Apagar Perfil</button>
</div>
</div>
</div>
</section>`;
},


sobre() {
return `
<section>
<h2 class="h4 mb-3">Sobre</h2>
<p>Exemplo educativo para a Entrega III. Mostra SPA, templates, validação e storage.</p>
</section>`;
}
};
