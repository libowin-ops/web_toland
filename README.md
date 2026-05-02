# 图南合金苹果风格官网

为江苏图南合金股份有限公司(深交所创业板 300855)打造的苹果风格白色主题响应式多页网站。

## 特性

- 苹果白色主题(`#ffffff` 主背景 / `#1d1d1f` 主文字 / `#0071e3` 强调蓝)、Inter 字体、毛玻璃导航
- 30 余个静态页面:首页 / 关于(4)/ 产品(8)/ 产线(6)/ 科技(2)/ 新闻(7)/ 招聘(1)/ 联系(1)/ 搜索(1)
- GSAP 多层视差 Hero(scrub + 入场时间线)
- IntersectionObserver 入场 + 自实现 SplitText(中文按字 / 英文按词)
- 中英双语切换(`localStorage` 持久化,`data-i18n` + `data-i18n-attr` 双属性支持)
- 全站搜索:`⌘K` / `Ctrl+K` 弹出模态、Enter 跳转结果页、`<mark>` 高亮命中
- 在线咨询:浮动 FAB + 表单,提交方式为 `mailto:` 拼装(零后端)
- 公共导航 / 页脚 / 搜索 / 咨询通过 `partials.js` 注入,所有子页一行 mount 即生效
- 响应式(汉堡菜单 / 横屏 Hero / iOS svh)
- 可访问性:Skip link、`focus-visible`、JSON-LD、`prefers-reduced-motion` 降级
- 零构建、零后端依赖,Tailwind 与 GSAP 经 CDN 加载

## 技术栈

- HTML5(语义化)
- Tailwind CSS(CDN)+ 自定义 `tl-*` 前缀样式
- GSAP 3 + ScrollTrigger(CDN)
- 原生 JavaScript(IIFE,无框架)

## 本地预览

```bash
# 进入项目目录后任选一种
npx http-server . -p 8080
python3 -m http.server 8080
```

打开 http://localhost:8080

## 控制台调试技巧

```js
setLang('en')        // 切换到英文
setLang('zh')        // 切换到中文
tlGetLang()          // 当前语言
tlSearch.load()      // 预热搜索索引
localStorage.removeItem('toland-lang')  // 清掉持久化偏好
```

按 `⌘K` / `Ctrl+K` 打开站内搜索;按 `Esc` 关闭搜索 / 咨询面板。

## 文档索引

- [PLAN.md](./PLAN.md) — 实施计划与设计规范(配色 / 排版 / 视差脚本 / 性能预算)
- [CLAUDE.md](./CLAUDE.md) — Claude Code 工作指引(目录结构 / 开发约定)
- [TODO.md](./TODO.md) — 阶段任务清单(P0–P19,全部勾选)

## 文件结构

```
.
├── index.html                       # 首页(含 Hero 视差)
├── about/
│   ├── index.html                   # 关于我们 总览
│   ├── path.html                    # 发展历程
│   ├── structure.html               # 组织架构
│   └── honor.html                   # 荣誉资质
├── product/
│   ├── index.html                   # 产品系列入口(7 卡片)
│   ├── casting.html                 # 铸造高温合金
│   ├── deformed.html                # 变形高温合金
│   ├── stainless.html               # 特种不锈钢
│   ├── nickel.html                  # 镍基耐蚀合金
│   ├── precision.html               # 精密合金
│   ├── welding.html                 # 焊接材料
│   └── heating.html                 # 高电阻电热合金
├── production/
│   ├── index.html                   # 产线入口
│   ├── smelting.html                # 特种冶炼
│   ├── casting.html                 # 铸造
│   ├── forging.html                 # 锻轧
│   ├── drawing.html                 # 拉丝
│   └── tubing.html                  # 制管
├── technology/
│   ├── index.html                   # 6 项核心技术
│   └── center.html                  # 技术中心
├── news/
│   ├── index.html                   # 新闻动态(全部)
│   ├── company.html                 # 公司动态分类
│   ├── industry.html                # 行业资讯分类
│   ├── notice.html                  # 公司公告(指引至巨潮)
│   ├── post-listing.html            # 上市详情
│   ├── post-innovation.html         # 创新动力详情
│   └── post-trends.html             # 制造业趋势详情
├── careers/index.html               # 人才招聘
├── contact/index.html               # 联系我们
├── search/index.html                # 站内搜索结果页
├── assets/
│   ├── css/custom.css               # CSS 变量 + 苹果风原生样式
│   ├── js/
│   │   ├── partials.js              # 公共组件注入(NAV / FOOTER / chat / search modal)
│   │   ├── i18n.js                  # 中英字典 + setLang(zh/en 各 356 keys)
│   │   ├── main.js                  # 导航 / 菜单 / SplitText / 入场观察
│   │   ├── parallax.js              # GSAP Hero 视差 + 板块 stagger
│   │   ├── search.js                # ⌘K 模态 + 索引加载 + 命中高亮
│   │   ├── search-page.js           # 搜索结果页(?q= 持久化)
│   │   └── chat.js                  # 在线咨询 FAB + mailto 提交
│   └── data/
│       └── search-index.json        # 30 条搜索索引
├── PLAN.md / CLAUDE.md / TODO.md
└── README.md                        # 本文件
```

## 子页约定

每个子页只需:

```html
<div data-tl-nav-mount></div>     <!-- 由 partials.js 注入完整导航 + 搜索弹窗 -->
<main>...</main>
<div data-tl-footer-mount></div>  <!-- 由 partials.js 注入完整页脚 + 咨询面板 -->
```

注入完成后会派发 `partials:ready`,`i18n.js` / `search.js` / `chat.js` 监听该事件再绑定。

## 部署

纯静态文件,可直接部署到任意静态托管。

### GitHub Pages
```bash
git init && git add . && git commit -m "init"
gh repo create toland-alloy-site --public --source=. --push
gh repo edit --enable-pages --pages-branch=main --pages-path=/
```

### Vercel
```bash
npx vercel
```

### Netlify Drop
拖拽整个目录到 https://app.netlify.com/drop

### 阿里云 OSS / 腾讯云 COS
上传整个目录,绑定 CDN,开启静态网站托管(默认首页 `index.html`)。

## 浏览器支持

- 现代浏览器(Safari 14+ / Chrome 88+ / Firefox 87+ / Edge 88+)
- 不支持 IE
- iOS Safari 14+ / Android Chrome 88+

## 关键设计决策

| 决策 | 原因 |
|------|------|
| 不使用 React/Next.js | 静态多页站,零构建优先,部署最简 |
| Tailwind 走 CDN 而非编译 | 加快迭代,生产可后续切预编译 |
| 公共组件用 JS 注入而非 SSR | 保持纯静态,部署友好;mount 点 + `partials:ready` 事件保证首屏正确 |
| 在线咨询用 `mailto:` 而非表单提交 | 零后端;邮件客户端拼装 subject/body 即可 |
| 搜索索引手维护 JSON | 内容数量可控(<50 页),无需 Lunr / Fuse 等额外依赖 |
| 自实现 SplitText | GSAP 商业插件费用高,中文按字切分需求轻量自写更合适 |

## 已知限制 / 后续工作

- Hero 视觉为 CSS 渐变占位,可由客户素材替换
- 在线咨询为 `mailto:` 模式,无后端表单服务
- 新闻 / 产品规格为静态文案,可后续接入 CMS / JSON 数据源
- Tailwind 使用 CDN,生产可切预编译版本以减少体积

## 许可

代码遵循 MIT;文案与图片版权归江苏图南合金股份有限公司所有。
