function interact() {
  const nome = prompt("Por favor, insira seu nome:");

  if (nome === null || nome.trim() === "") {
    alert("Erro: Você não inseriu um nome.");
    return;
  }

  const desejaContinuar = confirm(
    `Você inseriu o nome "${nome}". Deseja continuar?`
  );

  if (desejaContinuar) {
    alert("Obrigado por continuar!");
  } else {
    alert("Você escolheu encerrar. Até logo!");
  }
}
