/* ============================================
   图南合金官网 - 在线咨询(浮动按钮 + 表单)
   - 提交方式:mailto:sales@toland-alloy.com (纯静态站,零后端)
   - 触发方式:[data-chat-trigger] 任意元素 + [data-chat-close] 关闭
   ============================================ */
(function () {
  'use strict';

  const TARGET_EMAIL = 'sales@toland-alloy.com';

  function bindUI() {
    const triggers = document.querySelectorAll('[data-chat-trigger]');
    const panel = document.querySelector('[data-chat-panel]');
    const closeBtn = document.querySelector('[data-chat-close]');
    const form = document.querySelector('[data-chat-form]');
    if (!panel || !form) return;

    function open() {
      panel.classList.add('is-open');
      // 焦点放到第一个输入
      const first = panel.querySelector('input, textarea, select');
      if (first) requestAnimationFrame(() => first.focus());
    }
    function close() {
      panel.classList.remove('is-open');
    }

    triggers.forEach((t) => {
      if (t.__tolandBound) return;
      t.__tolandBound = true;
      t.addEventListener('click', (e) => {
        e.preventDefault();
        if (panel.classList.contains('is-open')) close();
        else open();
      });
    });

    if (closeBtn && !closeBtn.__tolandBound) {
      closeBtn.__tolandBound = true;
      closeBtn.addEventListener('click', close);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) {
        close();
      }
    });

    if (!form.__tolandBound) {
      form.__tolandBound = true;
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const name = data.get('name') || '';
        const email = data.get('email') || '';
        const company = data.get('company') || '';
        const topic = data.get('topic') || '';
        const message = data.get('message') || '';

        const lang = (window.tlGetLang ? window.tlGetLang() : 'zh');
        const subject = (lang === 'en'
          ? `[Inquiry · ${topic}] from ${company || name}`
          : `【在线咨询 · ${topic}】来自 ${company || name}`);

        const lines = (lang === 'en')
          ? [
              `Name: ${name}`,
              `Email: ${email}`,
              `Company: ${company}`,
              `Topic: ${topic}`,
              '',
              'Need:',
              message,
            ]
          : [
              `姓名:${name}`,
              `邮箱:${email}`,
              `公司:${company}`,
              `主题:${topic}`,
              '',
              '需求描述:',
              message,
            ];

        const body = lines.join('\n');
        const href = 'mailto:' + TARGET_EMAIL
          + '?subject=' + encodeURIComponent(subject)
          + '&body=' + encodeURIComponent(body);

        window.location.href = href;

        const note = (window.tlT ? window.tlT('chat.thanks') : '已为您打开邮件客户端');
        showToast(note);
        // 清空表单 + 收起面板
        form.reset();
        setTimeout(close, 800);
      });
    }
  }

  function showToast(text) {
    let el = document.querySelector('.tl-toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'tl-toast';
      el.style.cssText = 'position:fixed;left:50%;bottom:32px;transform:translateX(-50%);background:#1d1d1f;color:#fff;padding:10px 18px;border-radius:980px;font-size:0.875rem;box-shadow:0 8px 24px rgba(0,0,0,0.16);z-index:300;opacity:0;transition:opacity 0.25s ease,transform 0.25s ease;';
      document.body.appendChild(el);
    }
    el.textContent = text;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateX(-50%) translateY(-4px)';
    });
    clearTimeout(el.__t);
    el.__t = setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(0)';
    }, 2200);
  }

  function init() {
    if (window.__tolandPartialsReady) bindUI();
    else window.addEventListener('partials:ready', bindUI, { once: true });
    setTimeout(bindUI, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
