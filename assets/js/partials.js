/* ============================================
   图南合金官网 - 公共组件注入
   - 子页通过 <div data-tl-nav-mount></div> / <div data-tl-footer-mount></div>
     由本脚本注入统一的导航与页脚 HTML
   - 注入完成后派发 partials:ready,让 i18n / search / chat 接管
   ============================================ */
(function () {
  'use strict';

  // Detect site base from this script's URL so absolute / project-page deploys both work.
  // partials.js lives at <BASE>assets/js/partials.js — strip everything from "assets/" onward.
  const BASE = (function () {
    try {
      const src = (document.currentScript && document.currentScript.src) || '';
      const i = src.indexOf('assets/');
      if (i >= 0) {
        const u = new URL(src.slice(0, i), window.location.href);
        return u.pathname; // e.g. "/" or "/repo-name/"
      }
    } catch (e) {}
    return '/';
  })();
  window.tlBase = BASE;

  const NAV_HTML = `
<nav class="tl-nav" role="navigation" aria-label="主导航" data-tl-nav>
  <div class="max-w-tl mx-auto h-full px-6 flex items-center justify-between">
    <a href="${BASE}" class="flex items-baseline gap-1.5 select-none" aria-label="Toland Alloy Home">
      <span class="text-base md:text-lg font-semibold tracking-tight" data-i18n="nav.brand">图南合金</span>
      <span class="text-[10px] md:text-xs text-tl-muted tracking-[0.18em] uppercase" data-i18n="nav.brand_en">TOLAND</span>
    </a>

    <ul class="hidden md:flex items-center gap-7 text-sm">
      <li><a href="${BASE}about/" data-i18n="nav.about">关于我们</a></li>
      <li><a href="${BASE}product/" data-i18n="nav.products">产品系列</a></li>
      <li><a href="${BASE}production/" data-i18n="nav.lines">产线装备</a></li>
      <li><a href="${BASE}technology/" data-i18n="nav.tech">科技创新</a></li>
      <li><a href="${BASE}news/" data-i18n="nav.news">新闻动态</a></li>
      <li><a href="${BASE}careers/" data-i18n="nav.careers">人才招聘</a></li>
      <li><a href="${BASE}contact/" data-i18n="nav.contact">联系我们</a></li>
    </ul>

    <div class="flex items-center gap-2">
      <button class="tl-search-trigger" data-search-trigger aria-label="搜索">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
        </svg>
      </button>
      <div class="tl-lang-switch hidden sm:inline-flex" role="group" aria-label="语言切换">
        <button data-lang="zh" aria-label="切换中文">中</button>
        <button data-lang="en" aria-label="Switch to English">EN</button>
      </div>
      <button class="md:hidden text-tl-text p-2 -mr-2"
              data-menu-toggle
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="菜单">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <path d="M3 6h18M3 12h18M3 18h18"/>
        </svg>
      </button>
    </div>
  </div>

  <div class="tl-mobile-menu" id="mobile-menu" data-menu>
    <ul class="px-6 py-4 flex flex-col">
      <li><a href="${BASE}about/" data-i18n="nav.about">关于我们</a></li>
      <li><a href="${BASE}product/" data-i18n="nav.products">产品系列</a></li>
      <li><a href="${BASE}production/" data-i18n="nav.lines">产线装备</a></li>
      <li><a href="${BASE}technology/" data-i18n="nav.tech">科技创新</a></li>
      <li><a href="${BASE}news/" data-i18n="nav.news">新闻动态</a></li>
      <li><a href="${BASE}careers/" data-i18n="nav.careers">人才招聘</a></li>
      <li><a href="${BASE}contact/" data-i18n="nav.contact">联系我们</a></li>
      <li class="pt-3 mt-2">
        <div class="tl-lang-switch" role="group" aria-label="语言切换">
          <button data-lang="zh">中</button>
          <button data-lang="en">EN</button>
        </div>
      </li>
    </ul>
  </div>
</nav>

<div class="tl-search-modal" data-search-modal role="dialog" aria-modal="true" aria-label="站内搜索">
  <div class="tl-search-panel">
    <div class="tl-search-input-row">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
      </svg>
      <input type="text" class="tl-search-input" data-search-input
             placeholder="搜索产品、产线、新闻……" autocomplete="off"
             data-i18n="search.placeholder" data-i18n-attr="placeholder">
      <span class="tl-search-kbd">ESC</span>
    </div>
    <div class="tl-search-results" data-search-results></div>
  </div>
</div>

<a href="#main" class="tl-skip-link" data-i18n="a11y.skip">跳过导航</a>
`;

  const FOOTER_HTML = `
<footer class="tl-footer" data-tl-footer>
  <div class="tl-container grid grid-cols-2 md:grid-cols-5 gap-8 pb-10">
    <div class="col-span-2">
      <a href="${BASE}" class="flex items-baseline gap-1.5 mb-3">
        <span class="text-base font-semibold text-tl-text" data-i18n="nav.brand">图南合金</span>
        <span class="text-[10px] text-tl-muted tracking-[0.18em] uppercase" data-i18n="nav.brand_en">TOLAND</span>
      </a>
      <p class="text-tl-secondary text-xs leading-relaxed max-w-xs" data-i18n="footer.tagline">高端装备用高性能合金材料及制品提供方。</p>
    </div>
    <div>
      <h4 data-i18n="footer.col_company">公司</h4>
      <ul class="space-y-2">
        <li><a href="${BASE}about/" data-i18n="nav.about">关于我们</a></li>
        <li><a href="${BASE}about/path.html" data-i18n="footer.path">发展历程</a></li>
        <li><a href="${BASE}about/structure.html" data-i18n="footer.structure">组织架构</a></li>
        <li><a href="${BASE}about/honor.html" data-i18n="footer.honor">荣誉资质</a></li>
      </ul>
    </div>
    <div>
      <h4 data-i18n="footer.col_business">业务</h4>
      <ul class="space-y-2">
        <li><a href="${BASE}product/" data-i18n="nav.products">产品系列</a></li>
        <li><a href="${BASE}production/" data-i18n="nav.lines">产线装备</a></li>
        <li><a href="${BASE}technology/" data-i18n="nav.tech">科技创新</a></li>
        <li><a href="${BASE}technology/center.html" data-i18n="footer.tech_center">技术中心</a></li>
      </ul>
    </div>
    <div>
      <h4 data-i18n="footer.col_contact">联系</h4>
      <ul class="space-y-2">
        <li><a href="${BASE}news/" data-i18n="nav.news">新闻动态</a></li>
        <li><a href="${BASE}careers/" data-i18n="nav.careers">人才招聘</a></li>
        <li><a href="${BASE}contact/" data-i18n="nav.contact">联系我们</a></li>
        <li><button type="button" data-chat-trigger class="hover:text-tl-text" data-i18n="contact.consult">在线咨询</button></li>
      </ul>
    </div>
  </div>
  <div class="tl-container border-t border-black/[0.06] pt-6 flex flex-col md:flex-row md:justify-between gap-3 text-tl-muted">
    <p data-i18n="footer.copyright">© 2026 江苏图南合金股份有限公司 版权所有</p>
    <p data-i18n="footer.icp">苏公网安备 32118102000283 号</p>
  </div>
</footer>

<button class="tl-chat-fab" data-chat-trigger aria-label="在线咨询" data-i18n="contact.consult" data-i18n-attr="aria-label">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
</button>

<aside class="tl-chat-panel" data-chat-panel role="dialog" aria-label="在线咨询">
  <div class="tl-chat-header">
    <h3 data-i18n="chat.title">在线咨询</h3>
    <button class="tl-chat-close" data-chat-close aria-label="关闭">×</button>
  </div>
  <div class="tl-chat-body">
    <p data-i18n="chat.intro">留下需求,我们的销售工程师会在 1 个工作日内回复。</p>
  </div>
  <form class="tl-chat-form" data-chat-form>
    <div class="tl-chat-field">
      <label for="chat-name" data-i18n="chat.name">姓名</label>
      <input id="chat-name" name="name" type="text" required>
    </div>
    <div class="tl-chat-field">
      <label for="chat-email" data-i18n="chat.email">邮箱</label>
      <input id="chat-email" name="email" type="email" required>
    </div>
    <div class="tl-chat-field">
      <label for="chat-company" data-i18n="chat.company">公司</label>
      <input id="chat-company" name="company" type="text">
    </div>
    <div class="tl-chat-field">
      <label for="chat-topic" data-i18n="chat.topic">主题</label>
      <select id="chat-topic" name="topic">
        <option value="product" data-i18n="chat.topic_product">产品咨询</option>
        <option value="quote" data-i18n="chat.topic_quote">询价报价</option>
        <option value="tech" data-i18n="chat.topic_tech">技术合作</option>
        <option value="other" data-i18n="chat.topic_other">其他</option>
      </select>
    </div>
    <div class="tl-chat-field">
      <label for="chat-message" data-i18n="chat.message">需求描述</label>
      <textarea id="chat-message" name="message" required></textarea>
    </div>
    <button type="submit" class="tl-chat-submit" data-i18n="chat.submit">发送咨询</button>
  </form>
</aside>
`;

  function inject() {
    const navMount = document.querySelector('[data-tl-nav-mount]');
    const footerMount = document.querySelector('[data-tl-footer-mount]');

    if (navMount) navMount.outerHTML = NAV_HTML;
    if (footerMount) footerMount.outerHTML = FOOTER_HTML;

    // 标记 ready 并派发事件,供 i18n / search / chat / main 接管
    window.__tolandPartialsReady = true;
    window.dispatchEvent(new CustomEvent('partials:ready'));

    // 由于 main.js 在 partials 注入前就执行过(没找到 nav/menu),
    // 注入后我们补一次基础的导航交互
    rebindNav();
  }

  function rebindNav() {
    // 滚动状态
    const nav = document.querySelector('.tl-nav');
    if (nav && !nav.__tolandBound) {
      nav.__tolandBound = true;
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

    // 移动菜单
    const menuBtn = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    if (menuBtn && menu && !menuBtn.__tolandBound) {
      menuBtn.__tolandBound = true;
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

    // 语言切换
    document.querySelectorAll('.tl-lang-switch button').forEach((btn) => {
      if (btn.__tolandBound) return;
      btn.__tolandBound = true;
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (typeof window.setLang === 'function') window.setLang(lang);
      });
    });
  }

  // 暴露给可能的动态注入需求
  window.tlInjectPartials = inject;

  // 启动
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
