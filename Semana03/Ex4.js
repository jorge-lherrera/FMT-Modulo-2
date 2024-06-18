const produtos = [
  { nome: "Camiseta", valor: 29.99 },
  { nome: "Calça Jeans", valor: 49.99 },
  { nome: "Tênis", valor: 79.99 },
  { nome: "Boné", valor: 14.99 },
];

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  produtos.forEach((produto) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${produto.nome} - R$ ${produto.valor.toFixed(2)}`;
    productList.appendChild(listItem);
  });
});
