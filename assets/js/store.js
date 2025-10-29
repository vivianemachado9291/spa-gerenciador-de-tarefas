const NS = 'tarefas-app';
const K = k => `${NS}:${k}`;

export const store = {
  get(k, fb=null){ try{ return JSON.parse(localStorage.getItem(K(k))) ?? fb; } catch{ return fb; } },
  set(k, v){ localStorage.setItem(K(k), JSON.stringify(v)); },
  remove(k){ localStorage.removeItem(K(k)); }
};
