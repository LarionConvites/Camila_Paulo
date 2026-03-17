// ═══════════════════════════════════════════
//  pix.js — botões do SVG "Presente em dinheiro"
// ═══════════════════════════════════════════
//
//  Controla os botões interativos dentro de pix.svg.
//  Adicione cada botão com seu id no index.html
//  dentro de #hover-pix, depois registre abaixo.

document.addEventListener('DOMContentLoaded', () => {

  // ── Botão: Copiar chave PIX ──────────────────
  // <button id="pix-copiar" class="btn-hotspot" style="left:X%; top:Y%; ..."></button>

  const CHAVE_PIX = '60128987030'; // ← substitua pela sua chave PIX

  const btnCopiar = document.getElementById('copiar');
  if (btnCopiar) {
    btnCopiar.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(CHAVE_PIX);

        // Feedback visual: muda o tooltip brevemente
        const original = btnCopiar.getAttribute('data-tooltip') || '';
        btnCopiar.setAttribute('data-tooltip', 'Copiado!');
        setTimeout(() => btnCopiar.setAttribute('data-tooltip', original), 2000);
      } catch {
        // Fallback para navegadores sem suporte
        const input = document.createElement('input');
        input.value = CHAVE_PIX;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
    });
  }

  // ── Adicione mais botões aqui ────────────────
  // const btnX = document.getElementById('pix-xxx');
  // if (btnX) btnX.addEventListener('click', () => { ... });

});