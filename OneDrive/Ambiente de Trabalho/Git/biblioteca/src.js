// Biblioteca do Bairro — Leonor Ferreira

// ---------- Exercício 1: Olá, consola ----------
console.log("Bem-vindos à Biblioteca do Bairro!");
// Na consola:
// > 2026 - 1987
// ← 39
// Erro de propósito (só para ver o erro; apaga as // para testar):
// console.lg("teste");
// TypeError: console.lg is not a function

// ---------- Exercício 2: Os dados da biblioteca ----------
const nome = "Biblioteca do Bairro";
const contacto = "leonor ferreira, 06/11/2026";
let livros = 1250;
livros = livros - 3; // três empréstimos
console.log(livros); // 1247
console.log(`A ${nome} tem ${livros} livros disponíveis.`);
console.log(typeof nome, typeof contacto, typeof livros);
console.log(nome.toUpperCase());

// ---------- Exercício 3: Aberta ou fechada? ----------
const dia = "sábado";
const hora = 11;
let aberta;
if (dia === "domingo") {
  aberta = false;
} else if (dia === "sábado") {
  aberta = hora >= 10 && hora < 13;
} else {
  aberta = hora >= 9 && hora < 19;
}
console.log(aberta ? "Aberta" : "Fechada");

// ---------- Exercício 4: Funções da biblioteca ----------
function estaAberta(dia, hora) {
  if (dia === "domingo") return false;
  if (dia === "sábado") return hora >= 10 && hora < 13;
  return hora >= 9 && hora < 19;
}

function calcularMulta(dias) {
  return dias > 15 ? (dias - 15) * 0.5 : 0;
}

function formatarEuros(valor) {
  return valor.toFixed(2).replace(".", ",") + " €";
}

function mensagemMulta(dias) {
  const multa = calcularMulta(dias);
  if (multa === 0) return "Sem multa";
  return `Multa a pagar: ${formatarEuros(multa)}`;
}

console.log(estaAberta("sábado", 11)); // true
console.log(estaAberta("domingo", 11)); // false
console.log(estaAberta("terça", 19)); // false
console.log(mensagemMulta(10)); // Sem multa
console.log(mensagemMulta(22)); // Multa a pagar: 3,50 €

// ---------- Exercício 5: Lista de leituras ----------
// (o nome é "leituras" porque "livros" já existe no exercício 2)
const leituras = ["Os Maias", "Mensagem", "A Sibila",
  "Os Lusíadas", "Aparição"];
leituras.push("Memorial do Convento", "Ensaio sobre a Cegueira");
console.log(leituras.length); // 7

leituras.forEach((titulo, i) => {
  console.log(`${i + 1}. ${titulo}`);
});

const longos = leituras.filter(t => t.length > 10);
const maiusculas = leituras.map(t => t.toUpperCase());
console.log(longos, maiusculas);
