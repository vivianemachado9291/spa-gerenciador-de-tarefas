const NS = 'entregaIII/v1';


function key(k) { return `${NS}:${k}`; }


export const store = {
get(k, fallback=null) {
try { return JSON.parse(localStorage.getItem(key(k))) ?? fallback; }
catch { return fallback; }
},
set(k, val) { localStorage.setItem(key(k), JSON.stringify(val)); },
remove(k) { localStorage.removeItem(key(k)); },
clearAll() {
Object.keys(localStorage).forEach(k => { if (k.startsWith(NS+':')) localStorage.removeItem(k); });
}
};
