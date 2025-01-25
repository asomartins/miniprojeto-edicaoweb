const btnAlterarEstilo = document.getElementById('btnAlterarEstilo');
const form = document.getElementById('changestyle-form');
const container = document.querySelector('.container');
const tituloProjeto = document.querySelector('.tituloProjeto');
const textoSaudacao = document.querySelector('.textoSaudacao');
const avatar = document.getElementById('avatar');
const avatarImg = document.querySelector('#avatar img');
const cronometro = document.querySelector('span');

function iniciarCronometro() {
  for (let i = 5; i > 0; i--) {
    setTimeout(() => {
      cronometro.textContent = i;
    }, (5 - i) * 1000);
  }

  setTimeout(() => {
    cronometro.style.display = 'none';
    avatarImg.style.display = 'block';
  }, 5 * 1000);
}

iniciarCronometro();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (btnAlterarEstilo.textContent === 'Voltar para estilo inicial') {
    container.removeAttribute('style');
    tituloProjeto.removeAttribute('style');
    textoSaudacao.removeAttribute('style');
    avatar.removeAttribute('style');
    avatarImg.removeAttribute('style');
    btnAlterarEstilo.textContent = 'Alterar estilo';
  } else {
    container.style.background =
      'linear-gradient(270deg, #660066 0.01%, #993399 100%)';
    tituloProjeto.style.color = '#FFFFFF';
    tituloProjeto.style.borderTop = '2px dashed';
    tituloProjeto.style.borderBottom = '2px dashed';
    textoSaudacao.style.color = '#FFFFFF';
    avatar.style.background =
      'linear-gradient(180deg, #f1a112 0%, #f3b834 50%, #f3a937 100%)';
    avatarImg.style.display = 'block';
    btnAlterarEstilo.textContent = 'Voltar para estilo inicial';
  }
});
