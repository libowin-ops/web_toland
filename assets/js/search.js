/* ============================================
   图南合金官网 - 站内搜索
   - ⌘K / Ctrl+K 打开模态搜索
   - 搜索数据源:assets/data/search-index.json
   - 当前语言:从 tlGetLang() 取
   - 进入搜索结果页:/search/?q=keyword
   ============================================ */
(function () {
  'use strict';

  // BASE: prefer the value set by partials.js; otherwise infer from this script's URL.
  const BASE = (function () {
    if (window.tlBase) return window.tlBase;
    try {
      const src = (document.currentScript && document.currentScript.src) || '';
      const i = src.indexOf('assets/');
      if (i >= 0) return new URL(src.slice(0, i), window.location.href).pathname;
    } catch (e) {}
    return '/';
  })();

  // Convert JSON-index urls like "/about/" or "/product/casting.html" to BASE-prefixed urls.
  function resolveUrl(u) {
    if (!u) return BASE;
    return BASE + String(u).replace(/^\//, '');
  }

  let index = null;       // 搜索数据
  let indexLoading = null; // Promise

  function loadIndex() {
    if (indexLoading) return indexLoading;
    indexLoading = fetch(BASE + 'assets/data/search-index.json', { cache: 'force-cache' })
      .then((r) => r.ok ? r.json() : { items: [] })
      .then((data) => { index = data.items || []; return index; })
      .catch(() => { index = []; return index; });
    return indexLoading;
  }

  function search(q, lang) {
    if (!index || !q) return [];
    const lower = q.toLowerCase();
    const matches = [];
    for (const item of index) {
      const title = (item.title && item.title[lang]) || item.title?.zh || '';
      const desc = (item.desc && item.desc[lang]) || item.desc?.zh || '';
      const tags = (item.tags || []).join(' ');
      const haystack = (title + ' ' + desc + ' ' + tags).toLowerCase();
      if (haystack.indexOf(lower) === -1) continue;
      // 简单评分:标题命中权重最高
      let score = 0;
      if (title.toLowerCase().indexOf(lower) !== -1) score += 10;
      if (desc.toLowerCase().indexOf(lower) !== -1) score += 5;
      if (tags.toLowerCase().indexOf(lower) !== -1) score += 3;
      matches.push({ item, score, title, desc });
    }
    matches.sort((a, b) => b.score - a.score);
    return matches.slice(0, 12);
  }

  function highlight(text, q) {
    if (!q) return escapeHtml(text);
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return escapeHtml(text).replace(re, '<mark>$1</mark>');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function renderResults(results, q) {
    const container = document.querySelector('[data-search-results]');
    if (!container) return;
    if (!q) {
      container.innerHTML = '';
      return;
    }
    if (!results || results.length === 0) {
      const empty = (window.tlT ? window.tlT('search.empty') : 'No results');
      container.innerHTML = `<div class="tl-search-empty">${escapeHtml(empty)}</div>`;
      return;
    }
    container.innerHTML = results.map((m, idx) => `
      <a class="tl-search-result${idx === 0 ? ' is-active' : ''}" href="${resolveUrl(m.item.url)}">
        <h4>${highlight(m.title, q)}</h4>
        <p>${highlight(m.desc, q)}</p>
      </a>
    `).join('');
  }

  function bindUI() {
    const trigger = document.querySelectorAll('[data-search-trigger]');
    const modal = document.querySelector('[data-search-modal]');
    const input = document.querySelector('[data-search-input]');
    if (!trigger.length || !modal || !input) return;

    function open() {
      loadIndex();
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => input.focus());
    }
    function close() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      input.value = '';
      renderResults([], '');
    }

    trigger.forEach((t) => t.addEventListener('click', open));

    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });

    document.addEventListener('keydown', (e) => {
      // ⌘K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.classList.contains('is-open')) close();
        else open();
        return;
      }
      if (!modal.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        const q = input.value.trim();
        if (!q) return;
        // 进入搜索结果页
        location.href = BASE + 'search/?q=' + encodeURIComponent(q);
      }
    });

    let timer = null;
    input.addEventListener('input', async () => {
      const q = input.value.trim();
      if (timer) clearTimeout(timer);
      timer = setTimeout(async () => {
        await loadIndex();
        const lang = (window.tlGetLang ? window.tlGetLang() : 'zh');
        const results = search(q, lang);
        renderResults(results, q);
      }, 80);
    });
  }

  // 暴露给搜索结果页使用
  window.tlSearch = {
    load: loadIndex,
    query: search,
    highlight,
  };

  // 初始绑定:partials 就绪后再绑(子页 nav/modal 在 partials 注入)
  function init() {
    if (window.__tolandPartialsReady) bindUI();
    else window.addEventListener('partials:ready', bindUI, { once: true });
    // 主页内联 partials 不会触发 partials:ready,做一次后置兜底
    setTimeout(bindUI, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
