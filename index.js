// Função para adicionar texto ao visor da calculadora
function appendToDisplay(value) {
  // Obtém o elemento do visor
  var display = document.getElementById("calculator__display");

  // Verifica se o ponto decimal já está presente no visor
  if (value === "." && display.value.includes(".")) {
    return; // Evita adicionar mais de um ponto decimal
  }

  // Adiciona o valor ao visor
  display.value += value;
}

// Função para calcular o resultado
function calculate() {
  try {
    const input = document.getElementById("calculator__display").value;
    const result = eval(input); // Avalia a expressão
    document.getElementById("calculator__display").value = result;
  } catch (error) {
    document.getElementById("calculator__display").value = "Erro";
  }
}

// Função que reseta o display
function clearDisplay() {
  document.getElementById("calculator__display").value = "";
}
