const i18n = {
  pt: {
    loadingText: "Carregando Mapa...",
    criticalError: "Erro Crítico",
    errorMsg: "Ocorreu um erro ao inicializar os mapas.",
    howToSolve: "Como resolver:",
    refreshMsg: "Por favor, atualize a página e tente novamente.",
    gameMode: "Modo de Jogo",
    world: "Mundo",
    worldSub: "195 países",
    brazil: "Brasil",
    brazilSub: "27 estados",
    difficulty: "Dificuldade",
    easy: "Fácil",
    easySub: "Com Fronteiras",
    hard: "Difícil",
    hardSub: "Sem Fronteiras",
    playBtn: "PLAY NOW &rarr;",
    step1Title: "Selecionar",
    step1Desc: "Escolha um modo de jogo e nível de dificuldade.",
    step2Title: "Identificar",
    step2Desc: "Clique no globo para tentar adivinhar as regiões.",
    step3Title: "Pontuar",
    step3Desc: "Acerte o máximo que puder e teste seu conhecimento!",
    d3Mode: "MODO 2D (SEM GPU)",
    timeLabel: "TEMPO",
    scoreLabel: "SCORE",
    totalLabel: "TOTAL",
    finishBtn: "Finalizar Jogo",
    instructionBanner: "CLIQUE EM QUALQUER REGIÃO PARA NOMEAR",
    answerPrompt: "NOME DESTA REGIÃO:",
    answerInputPh: "DIGITE AQUI...",
    confirmBtn: "Confirmar",
    skipBtn: "Pular",
    resultTitle: "Partida Concluída",
    resTime: "Tempo",
    resScore: "Acertos",
    resPct: "Aproveitamento",
    resCorrect: "Acertos",
    resWrong: "Não identificados",
    playAgainBtn: "Jogar Novamente",
    backBtn: "Voltar ao Menu",
    // Dynamic
    hintBorder: "[DICA: FRONTEIRAS VISÍVEIS NO MAPA]",
    hit: "[ACERTO]",
    miss: "[ERRO]",
    skipped: "[PULADO]",
    clickToIdentify: "? CLIQUE PARA IDENTIFICAR",
    correctMsg: "CORRETO:",
    incorrectMsg: "INCORRETO",
    errLoad: "Erro ao processar mapa:",
    hudWorld: "MUNDO",
    hudBrazil: "BRASIL",
    hudEasy: "FÁCIL",
    hudHard: "DIFÍCIL"
  },
  en: {
    loadingText: "Loading Map...",
    criticalError: "Critical Error",
    errorMsg: "An error occurred while initializing the maps.",
    howToSolve: "How to resolve:",
    refreshMsg: "Please refresh the page and try again.",
    gameMode: "Game Mode",
    world: "World",
    worldSub: "195 countries",
    brazil: "Brazil",
    brazilSub: "27 states",
    difficulty: "Difficulty",
    easy: "Easy",
    easySub: "With Borders",
    hard: "Hard",
    hardSub: "No Borders",
    playBtn: "PLAY NOW &rarr;",
    step1Title: "Select",
    step1Desc: "Choose a game mode and difficulty level.",
    step2Title: "Identify",
    step2Desc: "Click on the globe to guess the regions.",
    step3Title: "Score",
    step3Desc: "Get as many right as you can and test your knowledge!",
    d3Mode: "2D MODE (NO GPU)",
    timeLabel: "TIME",
    scoreLabel: "SCORE",
    totalLabel: "TOTAL",
    finishBtn: "Finish Game",
    instructionBanner: "CLICK ANY REGION TO NAME IT",
    answerPrompt: "NAME OF THIS REGION:",
    answerInputPh: "TYPE HERE...",
    confirmBtn: "Confirm",
    skipBtn: "Skip",
    resultTitle: "Match Completed",
    resTime: "Time",
    resScore: "Hits",
    resPct: "Accuracy",
    resCorrect: "Hits",
    resWrong: "Not identified",
    playAgainBtn: "Play Again",
    backBtn: "Back to Menu",
    // Dynamic
    hintBorder: "[HINT: BORDERS VISIBLE ON MAP]",
    hit: "[HIT]",
    miss: "[MISS]",
    skipped: "[SKIPPED]",
    clickToIdentify: "? CLICK TO IDENTIFY",
    correctMsg: "CORRECT:",
    incorrectMsg: "INCORRECT",
    errLoad: "Error processing map:",
    hudWorld: "WORLD",
    hudBrazil: "BRAZIL",
    hudEasy: "EASY",
    hudHard: "HARD"
  }
};

let currentLang = 'pt';

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyLanguage();
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) toggleBtn.textContent = currentLang === 'pt' ? 'EN' : 'PT';
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
}

function applyLanguage() {
  const dict = i18n[currentLang];
  
  // Update static elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Update HUD Mode Pill if visible
  const hudModePill = document.getElementById('hud-mode-pill');
  if (hudModePill && typeof State !== 'undefined' && State.mode) {
    const wStr = State.mode === 'world' ? dict.hudWorld : dict.hudBrazil;
    const dStr = State.difficulty === 'easy' ? dict.hudEasy : dict.hudHard;
    hudModePill.textContent = `${wStr} / ${dStr}`;
  }

  // Update Result Mode Tag if visible
  const resultModeTag = document.getElementById('result-mode-tag');
  if (resultModeTag && typeof State !== 'undefined' && State.mode) {
    const wStr = State.mode === 'world' ? dict.hudWorld : dict.hudBrazil;
    const dStr = State.difficulty === 'easy' ? dict.hudEasy : dict.hudHard;
    resultModeTag.textContent = `${wStr} / ${dStr}`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }
});
