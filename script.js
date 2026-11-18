/* ============================================
   DADOS DAS REDAÇÕES (conteúdo completo)
   ============================================ */
const redacoes = {
  1: {
    titulo: "O impacto das redes sociais na saúde mental dos adolescentes",
    ano: "2024",
    tipo: "Dissertativa-argumentativa",
    texto: `
      <p>Em um mundo cada vez mais conectado, a linha entre o real e o virtual torna-se cada vez mais tênue. As redes sociais, que nasceram com a promessa de aproximar pessoas, hoje também carregam o peso de distâncias emocionais profundas, especialmente entre os adolescentes.</p>
      <p>O excesso de exposição, a busca constante por validação por meio de curtidas e a comparação permanente com vidas “perfeitas” criadas nas telas têm gerado ansiedade, baixa autoestima e, em casos mais graves, depressão. Estudos apontam que o tempo excessivo nas redes está diretamente relacionado a distúrbios do sono e a sintomas de isolamento social.</p>
      <p>No entanto, não se pode demonizar a ferramenta. As redes também são espaços de mobilização, de expressão artística e de apoio emocional. O problema não está na tecnologia em si, mas no uso desequilibrado e na ausência de educação digital crítica.</p>
      <p>É fundamental que escolas, famílias e os próprios jovens construam juntos uma relação mais saudável com o digital. Limitar o tempo de tela, praticar o autoconhecimento e valorizar as interações presenciais são caminhos possíveis. Afinal, a vida real ainda é o lugar onde as memórias mais verdadeiras são construídas.</p>
    `
  },
  2: {
    titulo: "A última aula",
    ano: "2025",
    tipo: "Narrativa",
    texto: `
      <p>O sino tocou pela última vez. Eu olhei para os corredores vazios e senti o peso de três anos que passaram voando. As paredes ainda guardavam os cartazes do grêmio, as mensagens de incentivo escritas no quadro branco e o cheiro de café da sala dos professores.</p>
      <p>Sentei na minha carteira preferida — aquela do fundo, perto da janela — e fechei os olhos. Vi a primeira semana de aula, o nervosismo de conhecer novos colegas, as noites em claro estudando para o ENEM, as risadas no intervalo e as conversas intermináveis sobre o futuro.</p>
      <p>Quando abri os olhos, a sala estava realmente vazia. Só restava o eco da minha respiração e a certeza de que nada seria igual. Peguei a mochila, apaguei a luz e saí. No corredor, encontrei a professora de Português. Ela sorriu e disse apenas: “Agora começa a parte boa.”</p>
      <p>Eu sorri de volta. Talvez ela tivesse razão.</p>
    `
  },
  3: {
    titulo: "Por que a educação precisa de mais humanidade",
    ano: "2025",
    tipo: "Argumentativa",
    texto: `
      <p>Notas altas não garantem cidadãos melhores. É preciso ensinar empatia, escuta e resiliência. Durante o Ensino Médio, percebi que o sistema valoriza excessivamente o desempenho quantitativo e pouco o desenvolvimento emocional e ético dos estudantes.</p>
      <p>Vivemos em uma sociedade marcada por polarizações, preconceitos e falta de diálogo. Se a escola não for o espaço onde se aprende a conviver com a diferença, a ouvir o outro e a resolver conflitos de forma pacífica, quem fará esse papel?</p>
      <p>Projetos de vida, rodas de conversa, mediação de conflitos e o incentivo à expressão artística são caminhos possíveis. Professores que se interessam pela história de cada aluno, e não apenas pelas notas, transformam vidas.</p>
      <p>A educação verdadeiramente transformadora é aquela que forma pessoas inteiras — capazes de pensar criticamente e de sentir profundamente. Porque o mundo precisa tanto de inteligência quanto de humanidade.</p>
    `
  },
  4: {
    titulo: "O cheiro de lanche da cantina",
    ano: "2026",
    tipo: "Crônica",
    texto: `
      <p>Tem cheiros que ficam grudados na memória. O da cantina da escola é um deles: pão de queijo quente saindo do forno, refrigerante gelado e aquele molho de mostarda que todo mundo reclamava, mas pedia mesmo assim.</p>
      <p>No intervalo, a fila era quase um ritual. Conversas sobre provas, fofocas da turma, planos para o fim de semana — tudo acontecia ali, entre o balcão e as mesas de plástico. Às vezes a gente nem comia tanto. O importante era estar junto.</p>
      <p>Hoje, quando passo na frente de alguma padaria e sinto o cheiro de pão de queijo, volto instantaneamente para aqueles quinze minutos de liberdade. O sino ainda não tinha tocado, o futuro ainda parecia distante e a única preocupação era se dava tempo de comprar mais um pastel.</p>
      <p>A cantina fechou as portas no último dia de aula. Mas o cheiro, esse, eu levo comigo.</p>
    `
  }
};

/* ============================================
   ELEMENTOS DO DOM
   ============================================ */
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const navLinks = document.querySelectorAll('.nav__link');
const timelineItems = document.querySelectorAll('.timeline__item');
const redacaoCards = document.querySelectorAll('.redacao-card');

/* ============================================
   MENU MOBILE
   ============================================ */
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('open');
  });
});

/* ============================================
   HEADER SCROLL
   ============================================ */
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* ============================================
   ANIMAÇÃO DA TIMELINE (Intersection Observer)
   ============================================ */
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});

/* ============================================
   MODAL DE REDAÇÕES
   ============================================ */
function abrirModal(id) {
  const redacao = redacoes[id];
  if (!redacao) return;

  modalBody.innerHTML = `
    <h2>${redacao.titulo}</h2>
    <div class="modal__meta">
      <span>${redacao.ano}</span>
      <span>${redacao.tipo}</span>
    </div>
    <div class="modal__texto">
      ${redacao.texto}
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

redacaoCards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.redacao;
    abrirModal(id);
  });
});

modalClose.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', fecharModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    fecharModal();
  }
});

/* ============================================
   ACTIVE NAV LINK (scroll spy)
   ============================================ */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

/* ============================================
   MENSAGEM NO CONSOLE
   ============================================ */
console.log('%c🎓 Site de Formatura — Mariana Costa', 'font-size:16px; font-weight:bold; color:#1a365d;');
console.log('%cDesenvolvido com HTML, CSS e JavaScript puro para a disciplina de Programação Web.', 'color:#4a5568;');
