# CLAUDE.md — 项目工作指引

> 该文件供后续在该项目下工作的 Claude Code 实例阅读,提供快速上下文。

## 项目概览

- **项目名**:图南合金苹果风格官网
- **客户**:江苏图南合金股份有限公司(深交所创业板 300855)
- **业务**:高温合金、精密合金、特种不锈钢的研发生产,服务航空航天、船舶、能源等高端装备制造
- **网址参考**:https://www.toland-alloy.com/
- **风格参考**:apple.com 深色主题
- **核心 Slogan**:高端装备用高性能合金材料及制品提供方

## 技术栈

- 静态 HTML + Tailwind CSS(CDN 模式,生产前可选预编译)
- GSAP 3 + ScrollTrigger(CDN)
- 原生 JavaScript(不引入框架)
- 双语:自实现 i18n.js,基于 `data-i18n` 属性

## 目录结构

```
/
├── CLAUDE.md          # 本文件
├── PLAN.md            # 实施计划
├── TODO.md            # 任务清单
├── README.md          # 启动说明
├── index.html         # 单页入口
├── assets/
│   ├── css/custom.css # Tailwind 之上的覆盖样式
│   ├── js/
│   │   ├── i18n.js    # 双语切换
│   │   ├── parallax.js# Hero 视差
│   │   └── main.js    # 通用交互
│   └── images/        # 视觉资源
```

## 开发约定

### 代码风格
- HTML 使用语义化标签(`<section>` `<nav>` `<article>` `<footer>`)
- Tailwind class 顺序:layout → spacing → color → effects
- 自定义类用 `tl-` 前缀(toland 缩写),例:`.tl-glass` `.tl-hero-layer`
- JS 用 IIFE 或 ES module 包裹,避免污染全局

### 文案约定
- 所有可翻译文案放 `data-i18n="namespace.key"`,禁止硬编码两语
- key 命名:`section.field`,例:`hero.title` `products.casting.name`
- 同一 DOM 不写两份语言文本

### 视觉约定
- 颜色一律使用 PLAN.md §5.1 定义的 CSS 变量,不另起色板
- 标题字号用 `clamp()`,正文用固定 Tailwind 类
- 板块间距统一 `py-32 md:py-44`

### 动效约定
- ScrollTrigger 在元素入场后 disable autoRefresh,避免反复重排
- 移动端禁用重视差(`window.innerWidth < 768` 时降级)
- `prefers-reduced-motion: reduce` 时整体降级为纯 fade

## 常见任务

### 启动本地预览
```bash
# 任选其一
npx http-server . -p 8080
python3 -m http.server 8080
```
打开 http://localhost:8080

### 控制台手动切换语言
```js
setLang('en')  // 或 'zh'
```

## 性能注意事项

- Hero 大图使用 `<img fetchpriority="high">`
- 其余图片 `loading="lazy"`
- GSAP 实例在退出视口时 `kill()` 释放
- 不引第三方分析脚本(除非用户明确要求)

## 不要做的事

- 不要把图片直接从 toland-alloy.com 下载使用(版权)
- 不要把两份语言硬编码到 HTML 里
- 不要为 IE 添加 polyfill(项目仅支持现代浏览器)
- 不要引入第三方 UI 组件库(保持苹果风格的纯净)

## 联系

由项目工作目录持有人维护。改动前如有疑问,使用 AskUserQuestion 与用户确认。
