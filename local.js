// ═══════════════════════════════════════════
//  local.js — botões do SVG "Local da festa"
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Botão: Ver no mapa ───────────────────────────────────
  // Abre o endereço do evento no Google Maps em nova aba.
  // Para encontrar o link certo: abra o Google Maps,
  // navegue até o local, clique em "Compartilhar" e copie
  // o link curto (maps.app.goo.gl/...).

  const btnVerMapa = document.getElementById('local-ver-mapa');
  if (btnVerMapa) {
    btnVerMapa.addEventListener('click', () => {
      window.open(
        'https://www.google.com/maps/place/Imp%C3%A9rio+Casa+De+Festas/@-30.0453667,-51.0744691,17z/data=!3m1!4b1!4m6!3m5!1s0x95199fba6e964617:0xc98aee317f6dd313!8m2!3d-30.0453667!4d-51.0718942!16s%2Fg%2F11gjs768pd?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D',  // ← substitua pelo link do Google Maps
        '_blank',
        'noopener,noreferrer'
      );
    });
  }

  // ── Como adicionar mais botões ───────────────────────────
  // 1. No index.html, dentro de <div id="hover-local">,
  //    adicione um novo <button> com id, left%, top%, width%, height%
  // 2. Aqui embaixo, copie o bloco acima trocando o id e a URL

});