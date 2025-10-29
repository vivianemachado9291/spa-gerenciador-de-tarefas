import { $, on } from './dom.js';
if (!text) return;
tarefas.push({ id: crypto.randomUUID(), text, done:false, created: Date.now() });
save();
input.value='';
render();
});


lista.addEventListener('click', (e) => {
const li = e.target.closest('li[data-id]');
if (!li) return;
const id = li.getAttribute('data-id');
const i = tarefas.findIndex(t=>t.id===id);
if (i<0) return;


if (e.target.classList.contains('toggle')) {
tarefas[i].done = e.target.checked;
save();
render();
}
if (e.target.classList.contains('apagar')) {
tarefas.splice(i,1); save(); render();
}
if (e.target.classList.contains('editar')) {
const span = li.querySelector('span');
const editing = span.getAttribute('contenteditable') === 'true';
if (!editing) {
span.setAttribute('contenteditable','true');
span.focus();
e.target.textContent = 'Salvar';
} else {
const t = (span.textContent||'').trim();
if (t) tarefas[i].text = t;
span.setAttribute('contenteditable','false');
e.target.textContent = 'Editar';
save(); render();
}
}
});


const btnLimparConcluidas = root.querySelector('#btnLimparConcluidas');
const btnLimparTudo = root.querySelector('#btnLimparTudo');
btnLimparConcluidas?.addEventListener('click', ()=>{ tarefas = tarefas.filter(t=>!t.done); save(); render(); });
btnLimparTudo?.addEventListener('click', ()=>{ tarefas = []; save(); render(); });


render();
}


export function hydratePerfil(root=document) {
const data = store.get('profile');
const btn = root.querySelector('#apagarPerfil');
btn?.addEventListener('click', ()=> {
store.remove('profile');
location.hash = '#/cadastro';
});
}
