// ═══════════════════════════════════════════
//  presentes.js — botões do SVG "Presentes"
// ═══════════════════════════════════════════
//
//  Controla os botões interativos dentro de presentes.svg.
//  Adicione cada botão com seu id no index.html
//  dentro de #hover-presentes, depois registre abaixo.

document.addEventListener('DOMContentLoaded', () => {

  // ── Botão: Abrir lista de presentes (ex: site da loja) ──
  // <button id="presentes-lista" class="btn-hotspot" style="left:X%; top:Y%; ..."></button>

  const btnLista = document.getElementById('presentes-lista');
  if (btnLista) {
    btnLista.addEventListener('click', () => {
      window.open(
        'https://',  // ← substitua pelo link da lista de presentes
        '_blank',
        'noopener,noreferrer'
      );
    });
  }

  // ── Adicione mais botões aqui ────────────────
  // const btnX = document.getElementById('presentes-xxx');
  // if (btnX) btnX.addEventListener('click', () => { ... });

});