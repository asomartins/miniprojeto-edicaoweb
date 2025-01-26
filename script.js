const btnAlterarEstilo = document.getElementById('btnAlterarEstilo');
const form = document.getElementById('changestyle-form');
const container = document.querySelector('.container');
const tituloProjeto = document.querySelector('.tituloProjeto');
const textoSaudacao = document.querySelector('.textoSaudacao');
const avatar = document.getElementById('avatar');
const avatarImg = document.querySelector('#avatar img');
const cronometro = document.querySelector('.cronometro');

function iniciarCronometro() {
  let contador = 5;
  const interval = setInterval(() => {
    cronometro.textContent = contador;
    contador--;

    if (contador < 0) {
      clearInterval(interval);
      cronometro.classList.add('hidden');
      avatarImg.classList.remove('hidden');
      avatarImg.classList.add('displayed');
      textoSaudacao.textContent = 'Olá! Clique na ação desejada:';
      btnAlterarEstilo.style.display = 'block';
    }
  }, 1000);
}

iniciarCronometro();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const novoEstiloAplicado =
    btnAlterarEstilo.textContent === 'Voltar para estilo inicial';

  if (novoEstiloAplicado) {
    container.classList.remove('novo-estilo');
    tituloProjeto.classList.remove('titulo-estilizado');
    avatar.classList.remove('avatar-estilizado');
    btnAlterarEstilo.textContent = 'Alterar estilo';
    btnAlterarEstilo.classList.remove('btn-warning');
    btnAlterarEstilo.classList.add('btn-light');
  } else {
    container.classList.add('novo-estilo');
    tituloProjeto.classList.add('titulo-estilizado');
    avatar.classList.add('avatar-estilizado');
    btnAlterarEstilo.textContent = 'Voltar para estilo inicial';
    btnAlterarEstilo.classList.remove('btn-light');
    btnAlterarEstilo.classList.add('btn-warning');
  }
});
