// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function calcular() {
  const g = document.getElementById('constante').value;
  const m1 = document.getElementById('massa1').value;
  const m2 = document.getElementById('massa2').value;
  const d = document.getElementById('distancia').value;

  const resultado = (g * m1 * m2)/d;

  document.getElementById('resultado').value = resultado
}
