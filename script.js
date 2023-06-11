var sorteioEmAndamento = false; // Variável para controlar se o sorteio está em andamento
var numeros = []; // Array com os números disponíveis
var sorteioInterval; // Variável para armazenar o intervalo do sorteio

function iniciarSorteio() {
  if (sorteioEmAndamento) {
    return; // Se o sorteio já estiver em andamento, não faz nada
  }

  var sorteioButton = document.getElementById('sorteio-button');
  sorteioButton.classList.add('button-clicked'); // Adiciona a classe ao botão

  // Desabilita o botão de sorteio
  document.getElementById('sorteio-button').disabled = true;

  // Preenche o array com os números desejados
  for (var i = 0; i <= 100; i++) {
    numeros.push(i);
  }

  sorteioEmAndamento = true; // Define o sorteio como em andamento

  sorteioInterval = setInterval(function () {
    var sorteado = numeros[Math.floor(Math.random() * numeros.length)]; // Sorteia um número aleatório

    document.getElementById('resultado').innerHTML =
      'O número sorteado é: ' + sorteado;

    // Adiciona a classe 'sorteado' ao número sorteado
    document.getElementById('num-' + sorteado).classList.add('sorteado');

    // Remove o número sorteado do array
    numeros.splice(numeros.indexOf(sorteado), 1);

    // Verifica se ainda há números disponíveis
    if (numeros.length === 0) {
      pararSorteio(); // Para o sorteio quando não há mais números
    }
  }, 5000); // Intervalo de 100ms (0.1 segundo)
}

function pararSorteio() {
  // Habilita o botão de sorteio
  var sorteioButton = document.getElementById('sorteio-button');
  sorteioButton.classList.remove('button-clicked'); // Remove a classe do botão
  document.getElementById('sorteio-button').disabled = false;

  sorteioEmAndamento = false; // Define o sorteio como parado

  clearInterval(sorteioInterval); // Limpa o intervalo do sorteio
}

// Gera os números na página
var numerosDiv = document.getElementById('numeros');
for (var i = 0; i <= 100; i++) {
  var numeroDiv = document.createElement('div');
  numeroDiv.innerHTML = i;
  numeroDiv.id = 'num-' + i;
  numeroDiv.classList.add('numero');
  numerosDiv.appendChild(numeroDiv);
}
