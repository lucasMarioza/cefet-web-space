// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function alternarExpandido(evt) {
    const botao = evt.currentTarget;
    const paragrafo = botao.parentElement;
    paragrafo.classList.toggle('expandido')
    botao.textContent = botao.textContent === '+' ? '-' : '+';
}

const botoes = document.querySelectorAll('#aliens p button');
botoes.forEach(botao => (
    botao.addEventListener('click', alternarExpandido)
));
