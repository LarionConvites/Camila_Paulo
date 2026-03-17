// ─────────────────────────────────────────
//  CONFIGURAÇÃO DOS BOTÕES
//  tipo 'hover-svg' → abre uma camada SVG
//  tipo 'link'      → abre URL externa
//  tipo 'modal'     → abre modal genérico
// ─────────────────────────────────────────

const botoes = {

  'btn-localizacao': {
    tipo: 'hover-svg',
    alvo: 'hover-local',
  },

  'btn-confirmar': {
    titulo: 'Confirmar presença',
    tipo: 'link',
    url: 'https://wa.me/555192906115?text=Pode%20confirmar%20minha%20presen%C3%A7a%20no%20seu%20casamento!'
  },

  'btn-presente': {
    tipo: 'hover-svg',
    alvo: 'hover-presentes',
  },

  'btn-dinheiro': {
    tipo: 'hover-svg',
    alvo: 'hover-pix',
  },

};

// ─────────────────────────────────────────
//  CONTROLE DAS CAMADAS SVG HOVER
// ─────────────────────────────────────────

function abrirHover(id) {
  // Fecha qualquer hover aberto antes de abrir outro
  document.querySelectorAll('.svg-hover-layer').forEach(el => {
    el.classList.remove('visivel');
  });
  const layer = document.getElementById(id);
  if (layer) layer.classList.add('visivel');
}

function fecharHover(id) {
  const layer = document.getElementById(id);
  if (layer) layer.classList.remove('visivel');
}

// Registra botões de fechar em cada camada hover
[
  { fechar: 'fechar-local',     layer: 'hover-local'     },
  { fechar: 'fechar-presentes', layer: 'hover-presentes' },
  { fechar: 'fechar-pix',       layer: 'hover-pix'       },
].forEach(({ fechar, layer }) => {
  const btn = document.getElementById(fechar);
  if (btn) btn.addEventListener('click', () => fecharHover(layer));
});

// ─────────────────────────────────────────
//  MODAL GENÉRICO (botão confirmar presença)
// ─────────────────────────────────────────

const modal         = document.getElementById('modal');
const modalTitulo   = document.getElementById('modal-titulo');
const modalConteudo = document.getElementById('modal-conteudo');
const modalFechar   = document.getElementById('modal-fechar');

function abrirModal(titulo, html) {
  modalTitulo.textContent = titulo;
  modalConteudo.innerHTML = html;
  modal.classList.add('aberto');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  modal.classList.remove('aberto');
  document.body.style.overflow = '';
}

modalFechar.addEventListener('click', fecharModal);
modal.addEventListener('click', (e) => { if (e.target === modal) fecharModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fecharModal(); });

// ─────────────────────────────────────────
//  REGISTRAR CLIQUES NOS BOTÕES PRINCIPAIS
// ─────────────────────────────────────────

Object.entries(botoes).forEach(([id, config]) => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (config.tipo === 'hover-svg') {
      abrirHover(config.alvo);
    } else if (config.tipo === 'link') {
      window.open(config.url, '_blank', 'noopener,noreferrer');
    } else if (config.tipo === 'modal') {
      abrirModal(config.titulo, config.html);
    }
  });
});

// ─────────────────────────────────────────
//  EXPÕE abrirHover / fecharHover globalmente
//  para os scripts específicos de cada SVG
// ─────────────────────────────────────────
window.abrirHover  = abrirHover;
window.fecharHover = fecharHover;
