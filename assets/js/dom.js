export const $ = (sel, ctx=document) => ctx.querySelector(sel);
export const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));


export function mount($target, html) {
$target.setAttribute('aria-busy', 'true');
$target.innerHTML = `<div class="page-enter">${html}</div>`;
$target.setAttribute('aria-busy', 'false');
}


export function on($el, event, selectorOrHandler, handler) {
if (typeof selectorOrHandler === 'function') {
$el.addEventListener(event, selectorOrHandler);
return;
}
$el.addEventListener(event, (e) => {
const match = e.target.closest(selectorOrHandler);
if (match) handler(e, match);
});
}
