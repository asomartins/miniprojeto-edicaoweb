const btnAlterarEstilo = document.querySelector('.btnAlterarEstilo');

function alterarEstilo() {
    const container = document.querySelector('.container');
    const tituloProjeto = document.querySelector('.tituloProjeto');
    const textoSaudacao = document.querySelector('.textoSaudacao');
    container.style.background = 'linear-gradient(270deg, #660066 0.01%, #993399 100%)';
    tituloProjeto.style.color = '#FFFFFF';
    tituloProjeto.style.borderTop = '2px dotted';
    tituloProjeto.style.borderBottom = '2px dotted';
    textoSaudacao.style.color = '#FFFFFF';
}

btnAlterarEstilo.addEventListener('click', alterarEstilo);