(function () {
  'use strict';

  // BASE: prefer partials.js value; otherwise infer from this script's URL.
  var BASE = (function () {
    if (window.tlBase) return window.tlBase;
    try {
      var src = (document.currentScript && document.currentScript.src) || '';
      var i = src.indexOf('assets/');
      if (i >= 0) return new URL(src.slice(0, i), window.location.href).pathname;
    } catch (e) {}
    return '/';
  })();

  function resolveUrl(u) {
    if (!u) return BASE;
    return BASE + String(u).replace(/^\//, '');
  }

  function getLang() {
    if (window.tlGetLang) return window.tlGetLang();
    return document.documentElement.lang === 'en' ? 'en' : 'zh';
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function highlight(text, query) {
    if (!query) return escapeHtml(text);
    var escaped = escapeHtml(text);
    var terms = query.trim().split(/\s+/).filter(Boolean);
    terms.forEach(function (t) {
      var re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      escaped = escaped.replace(re, '<mark>$1</mark>');
    });
    return escaped;
  }

  function render(query, results) {
    var box = document.getElementById('search-page-results');
    var meta = document.getElementById('search-page-meta');
    if (!box) return;
    var lang = getLang();

    if (!query) {
      box.innerHTML = '';
      if (meta) meta.textContent = (window.tlT ? window.tlT('search.tip', '') : '');
      return;
    }

    if (!results.length) {
      box.innerHTML = '<div class="tl-empty-state">' +
        escapeHtml(window.tlT ? window.tlT('search.empty', '没有找到匹配的内容') : '没有找到匹配的内容') +
        ' — <strong>' + escapeHtml(query) + '</strong></div>';
      if (meta) meta.textContent = '';
      return;
    }

    if (meta) {
      var tmpl = (window.tlT ? window.tlT('search.results_count', '共 {count} 条结果') : '共 ' + results.length + ' 条结果');
      meta.textContent = tmpl.replace('{count}', results.length);
    }

    box.innerHTML = results.map(function (r) {
      var title = r.title || (r.item && r.item.url) || '';
      var desc = r.desc || '';
      var url = resolveUrl((r.item && r.item.url) || '#');
      return '<a href="' + url + '" class="tl-search-result-card">' +
        '<h3>' + highlight(title, query) + '</h3>' +
        '<p>' + highlight(desc, query) + '</p>' +
        '<span class="tl-search-result-url">' + escapeHtml(url) + '</span>' +
        '</a>';
    }).join('');
  }

  function runQuery(query) {
    if (!window.tlSearch) {
      setTimeout(function () { runQuery(query); }, 80);
      return;
    }
    window.tlSearch.load().then(function () {
      var results = window.tlSearch.query(query, getLang());
      render(query, results);
    });
  }

  function getQueryFromURL() {
    try {
      var u = new URL(window.location.href);
      return u.searchParams.get('q') || '';
    } catch (e) { return ''; }
  }

  function setQueryInURL(q) {
    try {
      var u = new URL(window.location.href);
      if (q) u.searchParams.set('q', q); else u.searchParams.delete('q');
      window.history.replaceState({}, '', u.toString());
    } catch (e) {}
  }

  function init() {
    var input = document.getElementById('search-page-input');
    if (!input) return;

    var initialQ = getQueryFromURL();
    if (initialQ) {
      input.value = initialQ;
      runQuery(initialQ);
    }

    var debounceTimer;
    input.addEventListener('input', function () {
      var q = this.value.trim();
      setQueryInURL(q);
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () { runQuery(q); }, 180);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { this.value = ''; setQueryInURL(''); render('', []); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
