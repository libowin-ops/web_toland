/* ============================================
   图南合金官网 - 通用交互
   导航 / 菜单 / 语言切换 / 入场动画
   ============================================ */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================
  // 导航滚动状态
  // ============================================
  const nav = document.querySelector('.tl-nav');
  if (nav) {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 32);
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============================================
  // 移动端汉堡菜单
  // ============================================
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ============================================
  // 语言切换按钮
  // ============================================
  document.querySelectorAll('.tl-lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (typeof window.setLang === 'function') window.setLang(lang);
    });
  });

  // ============================================
  // SplitText 替代 - 中文按字 / 英文按词
  // ============================================
  function splitText(el) {
    if (el.dataset.splitDone === '1') return;
    const text = el.textContent.trim();
    const isCN = /[一-龥]/.test(text);
    el.innerHTML = '';

    if (isCN) {
      Array.from(text).forEach((ch, i) => {
        if (ch === '\n') {
          el.appendChild(document.createElement('br'));
          return;
        }
        const span = document.createElement('span');
        span.className = 'tl-char';
        span.style.transitionDelay = `${i * 0.03}s`;
        span.textContent = ch;
        el.appendChild(span);
      });
    } else {
      const words = text.split(/(\s+)/);
      let idx = 0;
      words.forEach((w) => {
        if (/^\s+$/.test(w)) {
          el.appendChild(document.createTextNode(w));
          return;
        }
        if (w === '') return;
        const span = document.createElement('span');
        span.className = 'tl-char';
        span.style.transitionDelay = `${idx * 0.05}s`;
        span.textContent = w;
        el.appendChild(span);
        idx += 1;
      });
    }

    el.dataset.splitDone = '1';
  }

  // ============================================
  // IntersectionObserver - fade-in 入场
  // ============================================
  const fadeIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeIO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll('.tl-fade-in').forEach((el) => fadeIO.observe(el));

  // ============================================
  // SplitText 元素的入场
  // ============================================
  function setupSplitObserver() {
    if (reduceMotion) {
      document.querySelectorAll('[data-split]').forEach((el) => {
        el.querySelectorAll('.tl-char').forEach((c) => c.classList.add('is-visible'));
      });
      return;
    }

    const splitIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.tl-char').forEach((c) => c.classList.add('is-visible'));
            splitIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-split]').forEach((el) => {
      // i18n 已经把多行 \n 变成 <span class="tl-line">,需要在每个 line 内做切分
      const lines = el.querySelectorAll('.tl-line');
      if (lines.length > 0) {
        lines.forEach((line) => splitText(line));
      } else {
        splitText(el);
      }
      splitIO.observe(el);
    });
  }

  // 初始化 split (等 i18n 完成后)
  function initSplit() {
    document.querySelectorAll('[data-split]').forEach((el) => {
      // 重置 splitDone 标记
      el.dataset.splitDone = '';
      el.querySelectorAll('.tl-char').forEach((c) => c.classList.remove('is-visible'));
    });
    setupSplitObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSplit);
  } else {
    initSplit();
  }

  // 语言切换时重新切分
  window.addEventListener('langchange', () => {
    // 延迟以等 i18n 替换 DOM 完成
    setTimeout(initSplit, 50);
  });
})();
