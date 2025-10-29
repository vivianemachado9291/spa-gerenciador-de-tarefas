export const $ = (s, ctx=document) => ctx.querySelector(s);

export function mount(target, html){
  target.innerHTML = `<div class="page-enter">${html}</div>`;
}
