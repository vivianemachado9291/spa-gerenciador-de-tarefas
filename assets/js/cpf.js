// Retorna true se CPF é válido (formato nnn.nnn.nnn-nn ou apenas dígitos)
export function validaCPF(cpf) {
if (!cpf) return false;
cpf = cpf.replace(/\D/g, '');
if (cpf.length !== 11) return false;
if (/^(\d)\1{10}$/.test(cpf)) return false; // sequências


const calc = (base) => {
let sum = 0;
for (let i = 0; i < base; i++) sum += parseInt(cpf[i],10) * (base + 1 - i);
const mod = (sum * 10) % 11;
return (mod === 10) ? 0 : mod;
};


const dv1 = calc(9);
const dv2 = calc(10);
return dv1 === parseInt(cpf[9],10) && dv2 === parseInt(cpf[10],10);
}
