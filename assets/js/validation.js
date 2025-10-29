import { validaCPF } from './cpf.js';


export function emailValido(v) {
return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}


export function forcaSenha(v) {
// mínimo 8: maiúscula, minúscula, número, símbolo
const score = [
/.{8,}/.test(v), /[A-Z]/.test(v), /[a-z]/.test(v), /\d/.test(v), /[^A-Za-z0-9]/.test(v)
].reduce((a,b)=>a+(b?1:0),0);
return score; // 0..5
}


export function idadeMinima(dataISO, anos=16) {
try {
const d = new Date(dataISO);
if (Number.isNaN(+d)) return false;
const hoje = new Date();
let idade = hoje.getFullYear() - d.getFullYear();
const m = hoje.getMonth() - d.getMonth();
if (m < 0 || (m === 0 && hoje.getDate() < d.getDate())) idade--;
return idade >= anos && d < hoje;
} catch { return false; }
}


export function cpfValido(cpf) { return validaCPF(cpf); }
