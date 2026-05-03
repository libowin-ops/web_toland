/* ============================================
   图南合金官网 - GSAP 视差与滚动动画
   ============================================ */
(function () {
  'use strict';

  if (typeof gsap === 'undefined') {
    console.warn('[Toland] GSAP not loaded, parallax disabled');
    return;
  }
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  function init() {
    if (!reduceMotion) {
      initHeroParallax();
      initHeroMouseParallax();
      initHeroDots();
      initHeroIntro();
      initSectionStagger();
      initScrollProgress();
    } else {
      // reduced-motion 仅做基础淡入
      initSectionStaggerStatic();
    }
    initCounterAnimation();
  }

  // ============================================
  // Hero 多层视差(scrub)
  // ============================================
  function initHeroParallax() {
    const hero = document.querySelector('.tl-hero');
    if (!hero) return;

    const svg = hero.querySelector('.tl-hero-svg');
    const lattice = hero.querySelector('.tl-hero-lattice-g');
    const dots = hero.querySelector('.tl-hero-dots');
    const content = hero.querySelector('.tl-hero-content');
    const arrow = hero.querySelector('.tl-hero-arrow');

    if (svg) {
      gsap.to(svg, {
        yPercent: -10,
        scale: isMobile ? 1 : 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

    if (lattice && !isMobile) {
      gsap.to(lattice, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

    if (dots) {
      gsap.to(dots, {
        yPercent: -18,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

    if (content) {
      gsap.to(content, {
        yPercent: -25,
        opacity: 0,
        filter: 'blur(8px)',
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

    if (arrow) {
      gsap.to(arrow, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '15% top',
          scrub: 0.5,
        },
      });
    }
  }

  // ============================================
  // Hero 鼠标视差(只桌面)
  // ============================================
  function initHeroMouseParallax() {
    if (isMobile) return;
    const hero = document.querySelector('.tl-hero');
    if (!hero) return;
    const lattice = hero.querySelector('.tl-hero-lattice-g');
    const dots = hero.querySelector('.tl-hero-dots');
    if (!lattice && !dots) return;

    const xToL = lattice ? gsap.quickTo(lattice, 'x', { duration: 0.6, ease: 'power3.out' }) : null;
    const yToL = lattice ? gsap.quickTo(lattice, 'y', { duration: 0.6, ease: 'power3.out' }) : null;
    const xToD = dots ? gsap.quickTo(dots, 'x', { duration: 0.9, ease: 'power3.out' }) : null;
    const yToD = dots ? gsap.quickTo(dots, 'y', { duration: 0.9, ease: 'power3.out' }) : null;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      if (xToL) xToL(cx * -16);
      if (yToL) yToL(cy * -10);
      if (xToD) xToD(cx * 22);
      if (yToD) yToD(cy * 14);
    });
    hero.addEventListener('mouseleave', () => {
      if (xToL) xToL(0);
      if (yToL) yToL(0);
      if (xToD) xToD(0);
      if (yToD) yToD(0);
    });
  }

  // ============================================
  // Hero 发光点漂浮动画(GSAP randomized)
  // ============================================
  function initHeroDots() {
    const dots = document.querySelectorAll('.tl-hero-dots .tl-dot');
    if (!dots.length) return;
    const limit = isMobile ? 8 : dots.length;
    dots.forEach((dot, i) => {
      if (i >= limit) {
        dot.style.display = 'none';
        return;
      }
      const dur = 4 + Math.random() * 4;
      const delay = Math.random() * 3;
      const dy = 6 + Math.random() * 14;
      gsap.to(dot, {
        y: `+=${dy}`,
        opacity: 0.4 + Math.random() * 0.5,
        duration: dur,
        delay,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    });
  }

  // ============================================
  // Hero 入场时间线
  // ============================================
  function initHeroIntro() {
    const content = document.querySelector('.tl-hero-content');
    if (!content) return;

    const title = content.querySelector('.tl-hero-title');
    const subtitle = content.querySelector('.tl-hero-subtitle');
    const cta = content.querySelector('.tl-hero-cta');
    const buttons = cta ? cta.querySelectorAll('.tl-btn') : content.querySelectorAll('.tl-btn');

    const tl = gsap.timeline({ delay: 0.15 });

    if (title) {
      const lines = title.querySelectorAll('.tl-line');
      const target = lines.length > 0 ? lines : [title];
      tl.from(target, {
        y: 48,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }
    if (subtitle) {
      tl.from(
        subtitle,
        { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', clearProps: 'transform,opacity' },
        '-=0.7'
      );
    }
    if (buttons.length) {
      tl.from(
        buttons,
        { y: 16, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform,opacity' },
        '-=0.5'
      );
    }
  }

  // ============================================
  // 板块卡片 stagger 入场
  // ============================================
  function initSectionStagger() {
    document.querySelectorAll('[data-stagger]').forEach((group) => {
      const items = group.children;
      if (!items || items.length === 0) return;

      gsap.from(items, {
        y: 32,
        opacity: 0,
        duration: 0.95,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: group,
          start: 'top 82%',
          once: true,
        },
      });
    });

    document.querySelectorAll('.tl-fade-in').forEach((el) => {
      gsap.from(el, {
        y: 24,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    });
  }

  function initSectionStaggerStatic() {
    // 简化:只立即设置 opacity 1
    document.querySelectorAll('.tl-fade-in').forEach((el) => {
      el.style.opacity = '1';
    });
  }

  // ============================================
  // 顶部 1px 滚动进度条
  // ============================================
  function initScrollProgress() {
    let bar = document.querySelector('.tl-scroll-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'tl-scroll-progress';
      bar.setAttribute('aria-hidden', 'true');
      document.body.appendChild(bar);
    }
    let raf = null;
    const update = () => {
      const scrollTop = window.scrollY;
      const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
      const pct = Math.min(100, Math.max(0, (scrollTop / max) * 100));
      bar.style.width = pct + '%';
      raf = null;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (raf) return;
        raf = requestAnimationFrame(update);
      },
      { passive: true }
    );
    update();
  }

  // ============================================
  // About 数据墙计数动画(IntersectionObserver)
  // ============================================
  function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const animate = (el) => {
      const target = parseFloat(el.dataset.count) || 0;
      const dur = parseInt(el.dataset.countDuration, 10) || 1600;
      const decimals = parseInt(el.dataset.countDecimals, 10) || 0;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const v = target * ease(t);
        el.textContent = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = decimals ? target.toFixed(decimals) : Math.round(target).toLocaleString();
      };
      requestAnimationFrame(step);
    };
    if (reduceMotion) {
      counters.forEach((el) => {
        const target = parseFloat(el.dataset.count) || 0;
        const decimals = parseInt(el.dataset.countDecimals, 10) || 0;
        el.textContent = decimals ? target.toFixed(decimals) : Math.round(target).toLocaleString();
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !e.target.__counted) {
            e.target.__counted = true;
            animate(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
    );
    counters.forEach((el) => io.observe(el));
  }

  // ============================================
  // 启动
  // ============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
