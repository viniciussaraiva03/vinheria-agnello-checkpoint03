
const vinhos = [
  { nome: "Cabernet Sauvignon", tipo: "tinto", safra: 2020, estoque: 12 },
  { nome: "Chardonnay", tipo: "branco", safra: 2022, estoque: 3 },
  { nome: "Rosé Provence", tipo: "rosé", safra: 2023, estoque: 4 },
  { nome: "Merlot Reserva", tipo: "tinto", safra: 2019, estoque: 8 },
  { nome: "Sauvignon Blanc", tipo: "branco", safra: 2021, estoque: 2 }
];
function adicionarVinho(nome, tipo, safra, estoque) {
  const novoVinho = { nome: nome, tipo: tipo, safra: safra, estoque: estoque };
  vinhos.push(novoVinho);
  console.log("Vinho adicionado: " + novoVinho.nome);
}
function listarVinhos() {
  console.log("=== LISTA COMPLETA DE VINHOS ===");
  vinhos.forEach(function(vinho) {
    console.log("Nome: " + vinho.nome + " | Tipo: " + vinho.tipo + " | Safra: " + vinho.safra + " | Estoque: " + vinho.estoque);
  });
}
function mostrarEstoqueBaixo() {
  console.log("=== VINHOS COM ESTOQUE ABAIXO DE 5 ===");
  const estoqueBaixo = vinhos.filter(function(vinho) {
    return vinho.estoque < 5;
  });
  estoqueBaixo.forEach(function(vinho) {
    console.log(vinho.nome + ": " + vinho.estoque + " unidades");
  });
  return estoqueBaixo;
}
function calcularEstoqueTotal() {
  const total = vinhos.reduce(function(soma, vinho) {
    return soma + vinho.estoque;
  }, 0);
  console.log("=== ESTOQUE TOTAL DA VINÍCOLA ===");
  console.log(total + " unidades");
  return total;
}

function mostrarNomesMaiusculos() {
  console.log("=== NOMES DOS VINHOS EM CAIXA ALTA ===");
  const nomes = vinhos.map(function(vinho) {
    return vinho.nome.toUpperCase();
  });
  nomes.forEach(function(nome) {
    console.log(nome);
  });
  return nomes;
}
adicionarVinho("Pinot Noir", "tinto", 2022, 6);

listarVinhos();
mostrarEstoqueBaixo();
calcularEstoqueTotal();
mostrarNomesMaiusculos();
