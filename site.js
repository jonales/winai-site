/* WINAI · comportamento próprio da página.
   A engine (scrollcraft.js) não é editada; aqui ficam o fólio, os contadores
   em pt-BR e a bobina do capítulo III. */
(function () {
  'use strict';

  var reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.min(Math.max(v, a), b); };
  var suave = function (t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };

  // ---- fólio ------------------------------------------------------------
  var secoes = Array.prototype.slice.call(document.querySelectorAll('[data-capitulo]'));
  var folioNum = document.querySelector('.folio__num');
  var folioTit = document.querySelector('.folio__titulo');
  var links = Array.prototype.slice.call(document.querySelectorAll('.folio__lista a'));
  var atual = null;

  function folio() {
    var meio = innerHeight * 0.5, achou = secoes[0];
    for (var i = 0; i < secoes.length; i++) {
      if (secoes[i].getBoundingClientRect().top <= meio) achou = secoes[i];
    }
    if (achou === atual) return;
    atual = achou;
    var num = achou.getAttribute('data-capitulo');
    folioNum.textContent = num;
    folioTit.textContent = achou.getAttribute('data-titulo');
    document.body.classList.toggle('tem-capitulo', !!num);
    document.body.setAttribute('data-chao', achou.classList.contains('chao-papel') ? 'papel' : 'escuro');
    var id = achou.id === 'intervalo' ? 'venda' : achou.id;
    links.forEach(function (a) { a.setAttribute('aria-current', a.getAttribute('data-ir') === id ? 'true' : 'false'); });
  }

  // ---- contadores em pt-BR (a engine formata no padrão inglês) -----------
  var fmt = new Intl.NumberFormat('pt-BR');
  var contas = Array.prototype.slice.call(document.querySelectorAll('[data-conta]'));
  function contar(el) {
    var fim = parseFloat(el.getAttribute('data-conta')) || 0;
    if (reduz) { el.textContent = fmt.format(fim); return; }
    var t0 = null;
    function quadro(agora) {
      if (t0 === null) t0 = agora;
      var t = Math.min((agora - t0) / 1400, 1);
      el.textContent = fmt.format(Math.round(fim * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(quadro);
    }
    requestAnimationFrame(quadro);
  }
  if ('IntersectionObserver' in window && contas.length) {
    contas.forEach(function (el) { if (!reduz) el.textContent = '0'; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { contar(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.6 });
    contas.forEach(function (el) { io.observe(el); });
  }

  // ---- a bobina -----------------------------------------------------------
  // Cada passo da venda imprime o seu trecho do cupom numa janela de --sc-p.
  // O papel sobe da fenda: o que já saiu é o começo do cupom, como na
  // impressora térmica de verdade. No fim a serrilha aparece e o papel solta.
  var venda = document.getElementById('venda');
  var papel = venda && venda.querySelector('.bobina__papel');
  var janela = venda && venda.querySelector('.bobina__janela');
  var trechos = papel ? Array.prototype.slice.call(papel.querySelectorAll('.bobina__trecho')) : [];
  var janelas = [[0.02, 0.14], [0.2, 0.31], [0.4, 0.48], [0.6, 0.72], [0.8, 0.9]];
  var marcas = [], total = 0, alturaJanela = 0;

  function medir() {
    if (!papel) return;
    marcas = trechos.map(function (t) { return t.offsetTop + t.offsetHeight; });
    total = papel.offsetHeight;
    marcas[marcas.length - 1] = total;
    alturaJanela = janela.clientHeight;
  }

  function bobina() {
    if (!papel || !marcas.length) return;
    var r = venda.getBoundingClientRect();
    var p = clamp(-r.top / Math.max(r.height - innerHeight, 1), 0, 1);
    var impresso = 8, giro = 0, imprimindo = false;

    if (reduz) {
      // Sem deslocamento: o cupom já está impresso e cada trecho acende no seu passo.
      impresso = Math.min(total, alturaJanela);
      trechos.forEach(function (t, i) { t.style.opacity = p >= janelas[i][0] ? '1' : '0.14'; });
    } else {
      var antes = 8;
      for (var i = 0; i < janelas.length; i++) {
        var a = janelas[i][0], b = janelas[i][1];
        if (p < a) break;
        var t = suave((p - a) / (b - a));
        impresso = antes + (marcas[i] - antes) * t;
        if (t > 0 && t < 1) imprimindo = true;
        antes = marcas[i];
      }
      if (p > 0.93) {
        var s = suave((p - 0.93) / 0.07);
        impresso += s * 36;
        giro = -2.2 * s;
      }
    }
    papel.style.setProperty('--impresso', impresso.toFixed(1));
    papel.style.setProperty('--giro', giro.toFixed(2) + 'deg');
    venda.classList.toggle('esta-imprimindo', imprimindo);
  }

  var pendente = false;
  function quadro() { pendente = false; folio(); bobina(); }
  function pedir() { if (!pendente) { pendente = true; requestAnimationFrame(quadro); } }

  addEventListener('scroll', pedir, { passive: true });
  addEventListener('resize', function () { medir(); pedir(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { medir(); pedir(); });
  addEventListener('load', function () { medir(); pedir(); });
  medir(); pedir();
})();
