// ─────────────────────────────────────────
//  CONFIGURAÇÃO DOS BOTÕES
//  Edite apenas este objeto para personalizar
//  cada botão sem precisar mexer no resto do código.
// ─────────────────────────────────────────
const mensagem = encodeURIComponent("Pode confirmar minha presença!");
const botoes = {

  'btn-localizacao': {
    titulo: 'Localização',
    tipo: 'link',                         // 'link' | 'modal'
    url: 'https://www.google.com/maps/place/Rua+Beco+dos+Soares,+3085+-+Vila+Augusta,+Viam%C3%A3o+-+RS,+94510-270/@-30.0671429,-51.0782731,17z/data=!3m1!4b1!4m5!3m4!1s0x95199e8ab8bec4b5:0xfc35152a8ef67a38!8m2!3d-30.0671476!4d-51.0756982?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D',   // ← substitua pelo link do Google Maps
  },


  'btn-confirmar': {
    titulo: 'Confirmar presença',
    tipo: 'link',
    url: `https://wa.me/5551992906115?text=${mensagem}`,           // ← substitua pelo link do Google Forms
  },

  'btn-presente': {
    titulo: 'Sugestões de presente',
    tipo: 'modal',
    html: `
      <ul style="margin-top:10px; padding-left:18px;">
        <li>Sugestão 1</li>
        <li>Sugestão 2</li>
        <li>Sugestão 3</li>
      </ul>
    `,
  },

  'btn-dinheiro': {
    titulo: 'Presente em dinheiro',
    tipo: 'modal',
    html: `
      <p>Para presentear em dinheiro, utilize a chave PIX abaixo:</p>
      <p style="margin-top:12px; font-size:17px; font-weight:700; letter-spacing:1px;">
        chave@pix.com
      </p>
    `,
  },

};

// ─────────────────────────────────────────
//  LÓGICA (não precisa editar abaixo)
// ─────────────────────────────────────────

const modal        = document.getElementById('modal');
const modalTitulo  = document.getElementById('modal-titulo');
const modalConteudo = document.getElementById('modal-conteudo');
const modalFechar  = document.getElementById('modal-fechar');

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

// Fechar ao clicar no X
modalFechar.addEventListener('click', fecharModal);

// Fechar ao clicar fora da caixa
modal.addEventListener('click', (e) => {
  if (e.target === modal) fecharModal();
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharModal();
});

// Registrar clique em cada botão
Object.entries(botoes).forEach(([id, config]) => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (config.tipo === 'link') {
      window.open(config.url, '_blank', 'noopener,noreferrer');
    } else {
      abrirModal(config.titulo, config.html);
    }
  });
});
