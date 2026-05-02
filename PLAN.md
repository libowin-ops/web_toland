# 图南合金官网（苹果风格深色主题）—— 实施计划

> 项目代号：TOLAND-APPLE-DARK
> 创建日期：2026-05-01
> 状态：待批准

---

## 1. 项目愿景

为江苏图南合金股份有限公司（股票代码 300855）打造一个对标苹果官网（apple.com）视觉语言的企业形象单页网站。通过克制的留白、深色主题、毛玻璃导航与产品级视差动画,把"高端装备用高性能合金材料及制品提供方"的定位,转译为可感知的科技质感。

## 2. 关键决策（已与用户确认）

| 维度 | 决策 |
|------|------|
| 技术栈 | HTML + Tailwind (CDN) + GSAP (CDN) |
| 语言 | 中英双语,前端切换 |
| 动效强度 | 苹果产品页级别(多层视差 + ScrollTrigger) |
| Hero 主体 | 高温合金材质特写(金属反光 / 微粒) |

## 3. 设计参考

- **苹果中国官网**(apple.com.cn):黑底产品段落、scroll-snap、文字渐入
- **Vision Pro 介绍页**:视差锁定、章节式叙事
- **M4 芯片介绍页**:大字标题 + 散文式副本
- **基调关键词**:SF Pro / Inter 字体感、纯黑 #000 → 暗灰 #1d1d1f 渐变、73% 亮度毛玻璃

## 4. 信息架构 (IA)

```
首屏 Hero            ← 全屏视差合金特写 + Slogan
  ↓
公司理念 (About)     ← 大字段叙事 + 数据徽章 (创立1991/上市2020/300855)
  ↓
产品系列 (Products)  ← 7 大类卡片(铸造/变形高温/不锈钢/镍基/精密/焊材/电热)
  ↓
产线装备 (Lines)     ← 5 条产线时间轴(冶炼/铸造/锻轧/拉丝/制管)
  ↓
科技创新 (Tech)      ← 双栏:核心技术 + 技术中心
  ↓
新闻动态 (News)      ← 最新 3 条卡片
  ↓
联系我们 (Contact)   ← 地址/投资者/招聘 + Footer
```

## 5. 视觉系统

### 5.1 配色(深色基调)

| Token | Hex | 用途 |
|-------|-----|------|
| `--bg-primary` | #000000 | 主背景 |
| `--bg-elevated` | #1d1d1f | 卡片/抬升面 |
| `--bg-subtle` | #161617 | 次级背景 |
| `--text-primary` | #f5f5f7 | 主文字 |
| `--text-secondary` | #a1a1a6 | 次级文字 |
| `--text-muted` | #6e6e73 | 弱化文字 |
| `--accent-blue` | #0071e3 | 强调链接(苹果蓝) |
| `--accent-cyan` | #2997ff | 高亮辉光 |
| `--border-subtle` | rgba(255,255,255,0.08) | 分割线 |
| `--glass` | rgba(22,22,23,0.72) | 毛玻璃底色 |

### 5.2 排版

- **主字族**:`'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', sans-serif`
- **标题缩放**:`clamp(2.5rem, 6vw, 6rem)`(Hero) / `clamp(1.75rem, 3vw, 3.25rem)`(板块)
- **行高**:标题 1.05,正文 1.6
- **字重**:300(薄正文) / 400(默认) / 600(标题) / 700(仅 Hero 大字)

### 5.3 间距与节奏

- 板块上下 padding:`py-32 md:py-44`
- 容器最大宽:`max-w-7xl`
- 苹果级"呼吸感":单段最长不超过 60 字符英文 / 35 字中文

### 5.4 毛玻璃导航

- `position: sticky` + `backdrop-filter: blur(20px) saturate(180%)`
- 滚动 > 32px 时增加 `border-bottom: 1px solid var(--border-subtle)`
- 高度:64px(桌面) / 56px(移动)

## 6. Hero 视差脚本(GSAP ScrollTrigger)

```
Layer 0  深空背景渐变(固定)
Layer 1  合金材质大图  (scrub: scale 1 → 1.15, y: 0 → -120)
Layer 2  彩色高光辉光球(y: 0 → -240, opacity 0.6 → 0)
Layer 3  Slogan 中英副标(y: 0 → -180, opacity 1 → 0, blur 0 → 8px)
Layer 4  滚动提示箭头  (opacity 1 → 0, 0~10% 滚动)
```

- **触发**:滚动 0% → 100%(视口高度)
- **缓动**:scrub 用线性,元素入场用 `power3.out`
- **移动端**:禁用 layer 1 缩放,仅保留位移,降低合成层负担

## 7. 板块动效

| 板块 | 动效 |
|------|------|
| About | 行级 SplitText(自实现)渐入,淡蓝光晕从下浮起 |
| Products | 卡片 scroll-snap 横向滑动;hover 时提升 + 高光扫光 |
| Lines | 步骤条左滑入场,连接线从上到下绘制 |
| Tech | 双栏左右错位上滑,数字 counter |
| News | 列表项依序 fade-in + y:+20 → 0 |
| Contact | Footer 玻璃化 + 地图占位模糊聚焦 |

## 8. 双语策略

- 单 HTML 文件,可翻译文案标 `data-i18n="key"`
- `assets/js/i18n.js` 提供:
  - `dict.zh = { hero_title: "...", ... }`
  - `dict.en = { hero_title: "...", ... }`
  - `setLang(lang)` 遍历 DOM 替换文本
  - `localStorage.setItem('lang', lang)` 持久化
  - 切换器位于导航右上角:"中 / EN" 胶囊按钮
- `<html lang="">` 同步切换

## 9. 响应式断点

- `< 640px` 移动单列,导航折叠汉堡
- `≥ 768px` 平板两栏
- `≥ 1024px` 桌面完整布局
- `≥ 1280px` 放大间距与字号

## 10. 实施阶段

| 阶段 | 内容 | 交付物 |
|------|------|--------|
| P0 | 规划文档 | CLAUDE.md / PLAN.md / TODO.md / README.md |
| P1 | 项目骨架 | index.html 初始结构 + Tailwind CDN + 资源目录 |
| P2 | 毛玻璃导航 + 占位 Hero | 顶栏 + 锚点跳转 |
| P3 | Hero 视差 | GSAP scrub 多层视差 |
| P4 | 内容板块(中文版) | 7 板块基础结构 + 文案 |
| P5 | 滚动入场动画 | 各板块 ScrollTrigger 编排 |
| P6 | 双语切换 | i18n.js + en 字典 |
| P7 | 响应式打磨 | 移动 / 平板 / 桌面适配 |
| P8 | 性能与 a11y | 懒加载 / 对比度 / 键盘导航 |
| P9 | 终验交付 | README 启动指引 + 截图 |

## 11. 资源准备

- **Hero 大图**:高温合金抛光面 / 涡轮叶片,2560×1440,深色基调。先用 placeholder.co 或 CSS 渐变占位,后续可替换为真实素材或 AI 生成
- **产品图标**:SVG line icon,颜色 `var(--text-secondary)`
- **字体**:Google Fonts 加载 Inter,中文回退到 PingFang SC / 系统默认

## 12. 性能预算

- LCP < 2.5s (4G 模拟)
- CLS < 0.05
- 图片全 `loading="lazy"`,Hero 用 `fetchpriority="high"`
- GSAP 仅加载 core + ScrollTrigger,不引商业插件,SplitText 自实现

## 13. 风险与备注

- **苹果字体版权**:SF Pro 仅 Apple 平台免费,跨平台用 Inter 替代
- **图片版权**:所有合金 / 产品图须授权或 AI 生成,不直接抓取原网站图
- **GSAP 商业授权**:免费版不含 SplitText / DrawSVG,采用替代实现
- **中文断行**:英文 SplitText 按词,中文按字,需自定义切割

## 14. 待确认事项

- [ ] 是否需要联系表单(涉及后端,默认仅展示邮箱 / 电话)
- [ ] 是否需要 WCAG AA 级合规
- [ ] 是否部署到指定域名 / GitHub Pages
- [ ] 是否需要替换 Hero 图为客户提供素材

---

> 计划经用户批准后进入 P1 阶段开始编码。
