import { $, mount } from './dom.js';
import { store } from './store.js';

const K_PROFILE='profile', K_TASKS='tasks';

export function hydrateCadastro(root=document){
  const form = $('#formCadastro', root), msg = $('#cadastroMsg', root);
  if(!form) return;

  form.addEventListener('submit', e=>{
    e.preventDefault();
    const nome=$('#nome').value, email=$('#email').value, email2=$('#email2').value,
          senha=$('#senha').value, senha2=$('#senha2').value;

    if(email!==email2 || senha!==senha2){
      msg.innerHTML='<div class="alert alert-danger">Emails ou senhas não coincidem.</div>';
      return;
    }
    store.set(K_PROFILE,{nome,email});
    msg.innerHTML='<div class="alert alert-success">Cadastro salvo!</div>';
  });
}

export function hydrateTarefas(root=document){
  const form=$('#formTarefa', root), lista=$('#listaTarefas', root);
  if(!form) return;

  let tarefas = store.get(K_TASKS, []);

  const render=()=>{
    lista.innerHTML = tarefas.map((t,i)=>`
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${t}</span>
        <button class="btn btn-sm btn-danger apagar" data-i="${i}">X</button>
      </li>`).join('');
  };
  render();

  form.addEventListener('submit', e=>{
    e.preventDefault();
    const val=$('#novaTarefa').value.trim();
    if(!val) return;
    tarefas.push(val);
    store.set(K_TASKS, tarefas);
    render();
    form.reset();
  });

  lista.addEventListener('click', e=>{
    if(e.target.classList.contains('apagar')){
      tarefas.splice(e.target.dataset.i,1);
      store.set(K_TASKS, tarefas);
      render();
    }
  });
}

export function hydratePerfil(root=document){
  const btn=$('#apagarPerfil', root);
  if(btn) btn.addEventListener('click', ()=>{
    store.remove(K_PROFILE);
    location.hash='#/cadastro';
  });
}
