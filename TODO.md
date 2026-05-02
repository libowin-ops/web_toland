# TODO — 图南合金官网

> 阶段化任务清单。完成后将 `[ ]` 改为 `[x]`。

## P0 · 规划阶段

- [x] 抓取参考网站内容
- [x] 与用户确认技术栈、双语策略、动效强度、Hero 主体
- [x] 生成 PLAN.md / CLAUDE.md / TODO.md / README.md
- [x] 用户批准计划

## P1 · 项目骨架

- [x] 创建 `index.html` 基础结构(DOCTYPE / meta / Tailwind CDN / 字体)
- [x] 创建 `assets/` 目录树(css / js / images)
- [x] 引入 GSAP + ScrollTrigger CDN
- [x] 配置 SEO meta(描述 / OG / favicon 占位)
- [x] 创建 `assets/css/custom.css` 并写入 CSS 变量

## P2 · 导航与 Hero 占位

- [x] 毛玻璃顶栏(logo + 7 锚点 + 语言切换)
- [x] 滚动 > 32px 时显示 border-bottom
- [x] 移动端汉堡菜单
- [x] Hero 容器 + 占位渐变背景
- [x] 平滑滚动 `scroll-behavior: smooth`

## P3 · Hero 视差动画

- [x] 准备 / 占位高温合金大图(用 CSS 渐变 + SVG 噪点)
- [x] GSAP ScrollTrigger 注册
- [x] Layer 0:深空渐变背景固定
- [x] Layer 1:合金大图 scale + y 视差
- [x] Layer 2:辉光球位移与淡出
- [x] Layer 3:标题文字 y + opacity + blur
- [x] Layer 4:滚动提示箭头淡出
- [x] 移动端动效降级(禁用 scale)

## P4 · 内容板块

- [x] About — 公司理念大字段(成立1991 / 上市2020 / 300855 徽章)
- [x] Products — 7 大产品系列卡片
- [x] Lines — 5 条产线时间轴
- [x] Tech — 核心技术 / 技术中心双栏
- [x] News — 最新 3 条公司新闻
- [x] Contact — 地址 / 投资者 / 招聘
- [x] Footer — 备案 / 版权 / 链接

## P5 · 滚动入场动画

- [x] 标题行级 fade-in + y
- [x] 卡片 stagger 入场
- [x] 自实现 SplitText(中文按字 / 英文按词)
- [x] 全局 prefers-reduced-motion 降级

## P6 · 双语切换

- [x] `assets/js/i18n.js` 字典与 setLang 函数
- [x] 中文文案完整填充
- [x] 英文文案完整填充
- [x] 切换器 UI(中 / EN 胶囊按钮)
- [x] localStorage 持久化
- [x] 切换时同步 `<html lang>`
- [x] 切换时重新触发 SplitText

## P7 · 响应式

- [x] < 640px 移动适配
- [x] 768-1024 平板适配
- [x] ≥ 1280 桌面放大
- [x] iOS Safari `100svh` 修复
- [x] 横屏移动端 Hero 处理(隐藏箭头)

## P8 · 性能与可访问性

- [x] 图片懒加载 + Hero(纯 CSS 渐变,不需外部图片)
- [x] 字体 `font-display: swap`(Google Fonts 默认)
- [x] 颜色对比度 ≥ 4.5:1(WCAG AA 文本色)
- [x] 键盘导航 `:focus-visible`
- [x] 锚点跳转 `aria-label`
- [x] Skip link(键盘可访问性)
- [x] noscript 降级提示
- [x] `<main>` 语义标签
- [x] JSON-LD `Organization` 结构化数据
- [x] Open Graph + Twitter Card 完善

## P9 · 交付

- [x] 本地预览验证(http://localhost:8080)
- [x] HTTP 200 响应所有静态资源
- [x] 更新 README 启动指引与部署说明
- [ ] 客户截图与交付(由项目所有者执行)
- [ ] (可选)部署到 GitHub Pages 或客户指定环境

## 后续可选优化(不在初次交付内)

- [ ] 替换 Hero 为客户提供的真实合金材质素材
- [ ] 增加联系表单(需后端,如 Formspree / 自建邮件 API)
- [x] 增加新闻详情页/产品详情页(从 SPA 演化为多页)
- [ ] Tailwind 预编译生产版本(去除 CDN,缩小体积)
- [ ] 引入 Lighthouse CI 跨提交跟踪性能与 a11y 分数
- [ ] 加入 OG 预览大图(1200×630 PNG)
- [ ] 加入产品规格页面/数据表下载

## P10 · 白色主题改造(Apple light 风格)

- [x] 重写 `custom.css` 调色板为白色苹果风(#ffffff / #1d1d1f / #0071e3)
- [x] Tailwind 配色 / 内联 config 同步白色主题
- [x] Hero 渐变改为浅银 (#f5f5f7 → #ffffff)
- [x] 卡片改为 1px 边框 + 极淡阴影
- [x] favicon 由黑底改为蓝底白字 T

## P11 · 公共组件与子页基板

- [x] `assets/js/partials.js` — 注入 NAV / FOOTER / chat / search modal
- [x] `partials:ready` 事件 + i18n / search / chat 等待握手
- [x] `assets/css/custom.css` — 新增 `.tl-page-hero` `.tl-breadcrumb` `.tl-section-alt` `.tl-container-narrow`
- [x] `assets/js/i18n.js` 扩容 ~400 keys 覆盖所有子页
- [x] `assets/js/i18n.js` 支持 `data-i18n-attr` (placeholder/aria-label)

## P12 · 关于我们 4 子页

- [x] `/about/index.html` — 公司概况 / 核心价值 / 三个子页入口
- [x] `/about/path.html` — 1991-2024 时间轴
- [x] `/about/structure.html` — 研发 / 制造 / 质量 / 销售
- [x] `/about/honor.html` — 6 项资质荣誉

## P13 · 产品系列 8 页

- [x] `/product/index.html` — 7 卡片入口
- [x] `/product/casting.html` 铸造高温合金
- [x] `/product/deformed.html` 变形高温合金
- [x] `/product/stainless.html` 特种不锈钢
- [x] `/product/nickel.html` 镍基耐蚀合金
- [x] `/product/precision.html` 精密合金
- [x] `/product/welding.html` 焊接材料
- [x] `/product/heating.html` 高电阻电热合金

## P14 · 产线装备 6 页

- [x] `/production/index.html` — 5 卡片入口
- [x] `/production/smelting.html` 特种冶炼产线
- [x] `/production/casting.html` 铸造产线
- [x] `/production/forging.html` 锻轧产线
- [x] `/production/drawing.html` 拉丝产线
- [x] `/production/tubing.html` 制管产线

## P15 · 科技 + 新闻 9 页

- [x] `/technology/index.html` — 6 项核心技术
- [x] `/technology/center.html` — 技术中心 / 产学研 / 实验
- [x] `/news/index.html` — 列表 + 标签筛选
- [x] `/news/post-listing.html` — 上市详情
- [x] `/news/post-innovation.html` — 创新动力
- [x] `/news/post-trends.html` — 制造业趋势
- [x] `/news/company.html` — 公司动态分类
- [x] `/news/industry.html` — 行业资讯分类
- [x] `/news/notice.html` — 公司公告(指引至巨潮)

## P16 · 招聘 / 联系 / 搜索 3 页

- [x] `/careers/index.html` — 4 岗位卡 + 简历投递 callout
- [x] `/contact/index.html` — 6 联系方式 + 在线咨询入口
- [x] `/search/index.html` — 站内搜索结果页(支持 ?q= URL 持久化)

## P17 · 全站搜索

- [x] `assets/js/search.js` — ⌘K / Ctrl+K 模态、Enter 跳转结果页
- [x] `assets/js/search-page.js` — 搜索页输入与结果渲染
- [x] `assets/data/search-index.json` — 30 条索引(覆盖所有可索引页面)
- [x] 高亮命中 `<mark>`,标题/描述/标签三档加权

## P18 · 在线咨询

- [x] `assets/js/chat.js` — 浮动 FAB + 表单 + ESC 关闭
- [x] `mailto:sales@toland-alloy.com` 提交,bilingual 主题/正文
- [x] Toast 提示反馈
- [x] 跨页生效(由 partials.js 注入到所有子页)

## P19 · i18n 扩容与最终交付

- [x] zh / en 各 356 keys,完全对称
- [x] 全 HTML data-i18n 用例 100% 已定义(349/349 命中)
- [x] 30+ 静态页面全部 HTTP 200
- [x] 更新 PLAN / TODO / README

## P20 · 部署改造(子路径友好 + 云部署准备)

- [x] 31 个 HTML 全站绝对路径 → 深度感知相对路径(401 处替换)
- [x] `partials.js` 注入的 NAV / FOOTER 改用 `${BASE}` 模板
- [x] `BASE` 自动从 `document.currentScript.src` 探测,无须人工配置
- [x] `search.js` / `search-page.js` 索引拉取 + 命中跳转都走 `BASE`
- [x] `.gitignore`(macOS / 编辑器 / node_modules)
- [x] `.nojekyll`(关闭 GitHub Pages 的 Jekyll 处理)
- [x] `robots.txt`
- [x] `sitemap.xml`(31 URL,host 占位 toland-alloy.com 可替换)
- [x] 本地 `python3 -m http.server` 全站 200 验证(31/31 HTML + 9 关键资源)
- [x] 跨深度引用解析全部通过(index 54 / about 11 / honor 9 / casting 12 / post 10 / search 9 全部 0 broken)

## P21 · 产品详情页大改(对齐源站 + 表格化 + SVG 装饰)

- [x] custom.css 新增 `.tl-prose` / `.tl-chip-row` / `.tl-chip` / `.tl-table-wrap` / `.tl-spec-table` / `.tl-grade-table` / `.tl-hero-accent` (~125 行)
- [x] i18n 扩容 ~26 个共享表头 / 品种 / 子类键(`tbl.spec_*`、`tbl.bar*`、`tbl.wire*`、`tbl.strip`、`tbl.cold_rolled`、`tbl.hot_rolled`、`tbl.plate`、`tbl.tube_seamless`、`tbl.steel_cast/wrought`、`tbl.cast_master/part`、`tbl.by_agreement`、`tbl.max_weight`、`tbl.grade_domestic/foreign/uns`)
- [x] i18n 7 个产品块全部从 3 应用扩到 7 应用 + 3 段 intro,zh/en 完全对称
- [x] `products.detail_overview` / `detail_grades_count` / `detail_specs_count` 新键
- [x] 7 个产品页全部重写: 概述段落 + chips 行 + 规格表 + 牌号表 + Hero SVG 装饰
- [x] 牌号覆盖: 铸造 15 / 变形 30 / 不锈钢 14 / 镍基 22 / 精密 17 / 焊接 21 / 电热 5
- [x] 嵌入 SVG 装饰: 铸造-晶格 / 变形-流线 / 不锈钢-同心环 / 镍基-蜂巢 / 精密-波形 / 焊接-火花 / 电热-螺旋
- [x] i18n 对称性 419/419,所有 product 页 data-i18n 键 100% 命中
- [x] 31/31 HTML 全部 HTTP 200(本地)


## 后续待办(下一次会话)

### 🚀 部署执行
- [ ] `git init` + 首次 commit(等用户启动)
- [ ] 在 GitHub 创建仓库(用户操作)
- [ ] `git remote add origin` + `git push`
- [ ] GitHub Pages 设置:Source = main 分支 / `/`(根)
- [ ] 验证 `https://USER.github.io/REPO/` 全站可访问
- [ ] 如果选择自定义域名:加 `CNAME` 文件并配置 DNS A/CNAME 记录

### 🌥 云服务器部署预案(任选一种)
- [ ] **Vercel**:`npx vercel` 一键部署,自动 HTTPS / CDN
- [ ] **Netlify**:拖拽目录到 https://app.netlify.com/drop,或绑 GitHub 自动构建
- [ ] **阿里云 OSS / 腾讯云 COS**:开启静态网站托管 + CDN 加速 + HTTPS 证书
- [ ] **自建 Nginx**:`/etc/nginx/sites-available/toland.conf` 配置 try_files + gzip/brotli
- [ ] sitemap 中的 host 替换为实际线上域名
- [ ] 接入 CDN 后开启长缓存(`assets/` 目录 1y、HTML no-cache)

### 🎨 内容增强(可选)
- [ ] Hero 替换为客户提供的真实合金材质素材(目前是 CSS 渐变占位)
- [ ] 加 OG 预览图(1200×630 PNG,微信/Twitter 分享卡)
- [ ] 产品规格 PDF / 数据表下载链接
- [ ] 新闻接 CMS(Strapi / Contentful)或 JSON 数据源
- [ ] 联系表单接后端服务(Formspree / 自建邮件 API)替换当前 mailto

### ⚡️ 工程优化(可选)
- [ ] Tailwind 切预编译版本(去 CDN,减体积、提升首屏)
- [ ] 图片资产压缩 + WebP/AVIF 双格式
- [ ] 接 Lighthouse CI 跨提交跟踪 a11y / 性能分数
- [ ] 加 Web Vitals 上报(可选 Cloudflare Analytics 等无 cookie 方案)
