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
  if (reduceMotion) return;

  const isMobile = window.innerWidth < 768;

  function init() {
    initHeroParallax();
    initHeroIntro();
    initSectionStagger();
  }

  // ============================================
  // Hero 多层视差(scrub)
  // ============================================
  function initHeroParallax() {
    const hero = document.querySelector('.tl-hero');
    if (!hero) return;

    const image = hero.querySelector('.tl-hero-image');
    const glow = hero.querySelector('.tl-hero-glow');
    const content = hero.querySelector('.tl-hero-content');
    const arrow = hero.querySelector('.tl-hero-arrow');

    if (image) {
      gsap.to(image, {
        yPercent: -12,
        scale: isMobile ? 1 : 1.18,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

    if (glow) {
      gsap.to(glow, {
        yPercent: -45,
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
  // Hero 入场时间线
  // ============================================
  function initHeroIntro() {
    const content = document.querySelector('.tl-hero-content');
    if (!content) return;

    const title = content.querySelector('.tl-hero-title');
    const subtitle = content.querySelector('.tl-hero-subtitle');
    const buttons = content.querySelectorAll('.tl-btn');

    const tl = gsap.timeline({ delay: 0.15 });

    if (title) {
      // 处理多行标题
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
