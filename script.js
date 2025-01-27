/* Variáveis globais */
const btnAlterarEstilo = document.getElementById('btnAlterarEstilo');
const btnChuvaTetris = document.getElementById('btnChuvaTetris');
const form = document.getElementById('formMudarEstilo');
const container = document.querySelector('.container');
const tituloProjeto = document.querySelector('.tituloProjeto');
const textoSaudacao = document.querySelector('.textoSaudacao');
const avatar = document.getElementById('avatar');
const avatarImg = document.querySelector('#avatar img');
const cronometro = document.querySelector('.cronometro');
const blocos = document.querySelectorAll('.bloco');
const tetrisL = document.getElementById('tetrisL');
const tetrisZ = document.getElementById('tetrisZ');

/* Função para exibir um cronômetro de 5 segundos e, após o término, exibe o texto de boas vindas e os botões */
function iniciarAnimacaoBoasVindas() {
  let contador = 5;
  /* Exibe um número a cada um segundo, a partir do 5 */
  const interval = setInterval(() => {
    cronometro.textContent = contador;
    contador--;

    /* Após o contador decrementar até -1 o contador para de ser exibido, as classes que esconde os elementos da div texto são removidas e a classe que exibe os elementos são adicionadas */
    if (contador < 0) {
      clearInterval(interval);
      cronometro.classList.add('hidden');
      avatarImg.classList.remove('hidden');
      avatarImg.classList.add('displayed');
      textoSaudacao.classList.remove('hidden');
      textoSaudacao.classList.add('displayed');
      btnAlterarEstilo.classList.remove('hidden');
      btnAlterarEstilo.classList.add('displayed');
      btnChuvaTetris.classList.remove('hidden');
      btnChuvaTetris.classList.add('displayed');
    }
  }, 1000);
}

iniciarAnimacaoBoasVindas();

let animacaoAtiva = false;

// Ouvinte p/ o submit
form.addEventListener('submit', (e) => {
  // Impede o envio padrão do form
  e.preventDefault();

  //Identifica qual botão foi clicado
  const botaoAtivado = e.submitter;

  if (botaoAtivado.id === 'btnAlterarEstilo') {
    const novoEstiloAplicado =
      btnAlterarEstilo.textContent === 'Voltar para estilo inicial';

    if (novoEstiloAplicado) {
      // Remove o estilo e retorna ao inicial
      container.classList.remove('novo-estilo');
      tituloProjeto.classList.remove('titulo-estilizado');
      avatar.classList.remove('avatar-estilizado');
      btnAlterarEstilo.textContent = 'Alterar estilo';
      btnAlterarEstilo.classList.remove('btn-warning');
      btnAlterarEstilo.classList.add('btn-light');
      btnChuvaTetris.classList.remove('btn-warning');
      btnChuvaTetris.classList.add('btn-light');
      for (const bloco of blocos) {
        bloco.classList.remove('bloco-estilizado');
      }
    } else {
      // Aplica o estilo
      container.classList.add('novo-estilo');
      tituloProjeto.classList.add('titulo-estilizado');
      avatar.classList.add('avatar-estilizado');
      btnAlterarEstilo.textContent = 'Voltar para estilo inicial';
      btnAlterarEstilo.classList.remove('btn-light');
      btnAlterarEstilo.classList.add('btn-warning');
      btnChuvaTetris.classList.remove('btn-light');
      btnChuvaTetris.classList.add('btn-warning');
      for (const bloco of blocos) {
        bloco.classList.add('bloco-estilizado');
      }
    }
  } else if (botaoAtivado.id == 'btnChuvaTetris') {
    // Alterna o estado da animação
    animacaoAtiva = !animacaoAtiva;

    //Operador ternário para definir o texto do botão
    btnChuvaTetris.textContent = animacaoAtiva
      ? 'Parar chuva de tetris'
      : 'Chuva de tetris';
    if (animacaoAtiva) {
      // Inicia as animações adicionando as suas respectivas classes p/ obter o comportamento
      tetrisL.classList.add('animate');
      tetrisZ.classList.add('animate');

      // Exibir os blocos e ativar animação inicial
      tetrisL.classList.remove('hidden');
      tetrisZ.classList.remove('hidden');
    } else {
      // Esconde os Tetriminos
      tetrisL.classList.add('hidden');
      tetrisZ.classList.add('hidden');
      // Para as animações
      tetrisL.classList.remove('animate');
      tetrisZ.classList.remove('animate');
    }
  }
});
