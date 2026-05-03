/* ============================================
   图南合金官网 - 双语字典与切换器
   - data-i18n="key"        => textContent (或 META content / INPUT placeholder)
   - data-i18n-attr="attr"  => 配合 data-i18n,把翻译写到指定属性
   - data-i18n-html="key"   => innerHTML(白名单受限,仅项目内可控字符串)
   ============================================ */
(function () {
  'use strict';

  const dict = {
    zh: {
      // Meta
      'meta.title': '江苏图南合金股份有限公司 | 高端装备用高性能合金材料及制品提供方',
      'meta.description': '江苏图南合金股份有限公司(300855),专注高温合金、精密合金、特种不锈钢等高性能合金材料的研发与生产,服务航空航天、船舶、能源等高端装备制造领域。',

      // Navigation
      'nav.brand': '图南合金',
      'nav.brand_en': 'TOLAND',
      'nav.about': '关于我们',
      'nav.products': '产品系列',
      'nav.lines': '产线装备',
      'nav.tech': '科技创新',
      'nav.news': '新闻动态',
      'nav.careers': '人才招聘',
      'nav.contact': '联系我们',
      'nav.menu': '菜单',
      'a11y.skip': '跳过导航',

      // Search
      'search.placeholder': '搜索产品、产线、新闻……',
      'search.empty': '没有找到匹配的内容',
      'search.title': '搜索',
      'search.eyebrow': '搜索',
      'search.page_title': '搜索图南合金',
      'search.page_lead': '在产品、产线、技术、关于、新闻等内容中进行全站检索。',
      'search.tip': '提示:支持产品名称、规格牌号、行业关键词。',

      // Hero (首页)
      'hero.title': '为高端装备,\n锻造合金的极限。',
      'hero.subtitle': '高端装备用高性能合金材料及制品提供方。深耕航空航天、船舶、能源等关键领域三十余年。',
      'hero.cta_primary': '了解产品',
      'hero.cta_secondary': '联系我们',

      // About 首页板块
      'about.eyebrow': '关于图南',
      'about.title': '三十余年,\n只为一种坚守。',
      'about.body': '江苏图南合金股份有限公司创立于 1991 年,2020 年于深交所创业板上市,是一家专注于高温合金、精密合金、特种不锈钢等高性能合金材料及其制品研发、生产与销售的国家高新技术企业。',
      'about.values_label': '企业核心价值观',
      'about.values': '忠诚 · 创新 · 诚信 · 勤勉',
      'about.stat1_value': '1991',
      'about.stat1_label': '成立年份',
      'about.stat2_value': '2020.07',
      'about.stat2_label': '深交所创业板上市',
      'about.stat3_value': '300855',
      'about.stat3_label': '股票代码',
      'about.stat4_value': '7',
      'about.stat4_label': '产品系列',
      'about.more': '深入了解图南',

      // About 子页
      'about.page_eyebrow': '关于图南',
      'about.page_title': '一家用三十余年\n专注一种材料的公司。',
      'about.page_lead': '从 1991 年的一间车间,到如今上市的国家高新技术企业,图南始终把自己置于一种特殊材料的视野中 —— 高性能合金。',
      'about.intro_title': '公司概况',
      'about.intro_p1': '江苏图南合金股份有限公司,坐落于长三角制造业腹地的江苏丹阳。公司聚焦于高温合金、精密合金、特种不锈钢、镍基耐蚀合金等高性能材料的研发、生产与销售,为航空航天、船舶动力、能源石化等高端装备制造领域提供关键基础原材料。',
      'about.intro_p2': '2020 年 7 月 23 日,公司在深圳证券交易所创业板挂牌上市,股票代码 300855,开启资本驱动的高质量发展新阶段。',
      'about.values_title': '核心价值',
      'about.values_loyalty_t': '忠诚',
      'about.values_loyalty_d': '对客户、对团队、对国家产业链的长期承诺。',
      'about.values_innovation_t': '创新',
      'about.values_innovation_d': '让研发投入成为穿越周期的最大确定性。',
      'about.values_integrity_t': '诚信',
      'about.values_integrity_d': '把每一炉钢、每一批料、每一次承诺当作签名。',
      'about.values_diligence_t': '勤勉',
      'about.values_diligence_d': '把工艺细节当作信仰,用日复一日累积优势。',
      'about.path_link': '发展历程',
      'about.structure_link': '组织架构',
      'about.honor_link': '荣誉资质',

      // 发展历程
      'about.path_eyebrow': '发展历程',
      'about.path_title': '从一间车间,\n到一座产业平台。',
      'about.path_1991_t': '1991 · 创立',
      'about.path_1991_d': '于江苏丹阳成立,从特种合金的小批量加工起步。',
      'about.path_2000_t': '2000 · 体系建设',
      'about.path_2000_d': '完成 ISO 质量管理体系认证,正式进入航空航天供应链。',
      'about.path_2008_t': '2008 · 高温合金深耕',
      'about.path_2008_d': '高温合金产线扩建,镍基耐蚀合金打入石化用户。',
      'about.path_2015_t': '2015 · 技术中心',
      'about.path_2015_d': '获评省级企业技术中心,产学研合作体系成型。',
      'about.path_2020_t': '2020 · 上市',
      'about.path_2020_d': '深交所创业板挂牌,股票代码 300855,资本平台正式落地。',
      'about.path_2024_t': '至今 · 持续投入',
      'about.path_2024_d': '继续在变形高温合金、精密合金等战略品类扩大产能。',

      // 组织架构
      'about.structure_eyebrow': '组织架构',
      'about.structure_title': '一支专业团队,\n围绕材料展开。',
      'about.structure_lead': '公司围绕"研发 - 制造 - 质量 - 销售"四条主线设置组织架构,确保每一个环节都有专业团队对接。',
      'about.structure_rd_t': '研发中心',
      'about.structure_rd_d': '高温合金 / 精密合金 / 焊材 / 工艺四个研究方向,与高校共建实验室。',
      'about.structure_mfg_t': '制造中心',
      'about.structure_mfg_d': '冶炼、铸造、锻轧、拉丝、制管五大产线协同的现场组织。',
      'about.structure_qa_t': '质量中心',
      'about.structure_qa_d': '理化分析、无损检测、力学性能等全流程实验室与认证体系。',
      'about.structure_sales_t': '销售与服务',
      'about.structure_sales_d': '面向航空航天、能源、船舶、化工等行业的客户经理与技术支持。',

      // 荣誉资质
      'about.honor_eyebrow': '荣誉资质',
      'about.honor_title': '资质与荣誉,\n是客户给我们的标尺。',
      'about.honor_lead': '过去三十余年,我们在客户与监管的双重审视中持续积累以下资质与荣誉。',
      'about.honor_h1_t': '国家高新技术企业',
      'about.honor_h1_d': '持续多届认定,享受国家高新技术企业相关政策。',
      'about.honor_h2_t': '省级企业技术中心',
      'about.honor_h2_d': '由江苏省工信主管部门认定的研发创新载体。',
      'about.honor_h3_t': '航空航天供方资质',
      'about.honor_h3_d': '通过国内主要航空航天主机厂的合格供方审核。',
      'about.honor_h4_t': 'ISO 质量管理体系',
      'about.honor_h4_d': 'ISO 9001 等核心管理体系认证。',
      'about.honor_h5_t': '上市公司资质',
      'about.honor_h5_d': '深交所创业板上市公司,股票代码 300855。',
      'about.honor_h6_t': '专利成果',
      'about.honor_h6_d': '在高温合金冶炼、变形等方向累积发明与实用新型专利数十项。',

      // Products 首页板块
      'products.eyebrow': '产品系列',
      'products.title': '七大体系,\n覆盖高端制造关键材料。',
      'products.subtitle': '从铸造到焊接,从航空发动机到核电反应堆 —— 我们为最严苛的工况提供答案。',
      'products.casting_name': '铸造高温合金',
      'products.casting_desc': '应用于航空、燃气轮机领域,承受极端温度与机械应力的关键部件。',
      'products.deformed_name': '变形高温合金',
      'products.deformed_desc': '燃气轮机、飞机、航空发动机、石油化工等高温环境的首选材料。',
      'products.stainless_name': '特种不锈钢',
      'products.stainless_desc': '航空、交通运输、船舶、核电等新能源领域的耐蚀高强材料。',
      'products.nickel_name': '镍基耐蚀合金',
      'products.nickel_desc': '抵御腐蚀性介质的卓越性能,守护苛刻化工环境。',
      'products.precision_name': '精密合金',
      'products.precision_desc': '具备特殊物理性能,服务仪器仪表与精密器件制造。',
      'products.welding_name': '焊接材料',
      'products.welding_desc': '匹配各类高温合金母材的高质量焊接解决方案。',
      'products.heating_name': '高电阻电热合金',
      'products.heating_desc': '高温环境下的电热转换材料,贡献于工业加热与精密制造。',
      'products.more': '查看全部产品',

      // Products 子页通用
      'products.page_title': '七大产品系列\n覆盖高端制造关键材料',
      'products.page_lead': '点击任意产品,查看典型应用、规格范围与对应的工艺路径。',
      'products.detail_apps': '典型应用',
      'products.detail_specs': '规格范围',
      'products.detail_grades': '常见牌号',
      'products.detail_lines': '对应产线',
      'products.detail_inquiry': '咨询此产品',
      'products.related_title': '相关产品系列',
      'products.detail_overview': '产品概述',
      'products.detail_grades_count': '共 {n} 个牌号',
      'products.detail_specs_count': '共 {n} 个规格',

      // 表头与品种通用词
      'tbl.spec_steeltype': '钢种',
      'tbl.spec_variety': '品种',
      'tbl.spec_subtype': '子类',
      'tbl.spec_size': '规格',
      'tbl.grade_domestic': '国内牌号',
      'tbl.grade_foreign': '国外牌号',
      'tbl.grade_uns': 'UNS / 编号',
      'tbl.cast_master': '铸造母合金',
      'tbl.cast_part': '精密铸件',
      'tbl.bar': '棒材',
      'tbl.bar_hot': '热轧棒',
      'tbl.bar_cold': '冷拉棒',
      'tbl.bar_forge': '锻棒',
      'tbl.wire': '丝材',
      'tbl.wire_round': '圆丝',
      'tbl.wire_shaped': '异形丝',
      'tbl.strip': '带材',
      'tbl.cold_rolled': '冷轧',
      'tbl.hot_rolled': '热轧',
      'tbl.plate': '板材',
      'tbl.tube_seamless': '无缝管材',
      'tbl.steel_cast': '特种不锈钢(铸造)',
      'tbl.steel_wrought': '特种不锈钢(变形)',
      'tbl.by_agreement': '协议',
      'tbl.max_weight': '最大浇注重量 650 kg',

      // 铸造高温合金
      'p_casting.title': '铸造高温合金',
      'p_casting.lead': '为航空发动机热端部件、燃气轮机叶片、关键结构件提供精密铸造材料。',
      'p_casting.intro1': '公司可自主生产铸造高温合金母合金及精密铸件产品。铸造高温合金母合金是用铸造方法成型零件的一类高温合金,具有更高的合金化程度的成分范围,更高的服役温度范围。',
      'p_casting.intro2': '精密铸件是应用于航空发动机、燃气轮机热端部分的关键部件,包括机匣类大型复杂薄壁结构件、涡轮转动及导向叶片、整体叶盘、导向器、扩压器等。',
      'p_casting.intro3': '公司是国内少数掌握高温合金近净型熔模精密铸造核心技术的生产企业之一。',
      'p_casting.app1': '航空发动机机匣',
      'p_casting.app2': '涡轮转动叶片',
      'p_casting.app3': '涡轮导向叶片',
      'p_casting.app4': '整体叶盘',
      'p_casting.app5': '导向器',
      'p_casting.app6': '扩压器',
      'p_casting.app7': '燃气轮机热端部件',

      // 变形高温合金
      'p_deformed.title': '变形高温合金',
      'p_deformed.lead': '通过塑性变形成型的高温合金,广泛用于航空发动机盘件、燃烧室、紧固件与高温管路。',
      'p_deformed.intro1': '变形高温合金是用变形方法成型零件的一类高温合金,具有比铸造合金更细致的等轴晶粒组织、更高的强度和良好的横向性能。',
      'p_deformed.intro2': '产品涵盖棒材、丝材、带材、板材与无缝管材,可按盘件、环件、机匣、紧固件、燃烧室部件等应用进行定制化生产。',
      'p_deformed.intro3': '公司具备从真空感应到锻造、轧制、拉丝全流程能力,牌号体系覆盖国内 GH 系列与对应国际牌号。',
      'p_deformed.app1': '航空发动机涡轮盘',
      'p_deformed.app2': '航空发动机环件与机匣',
      'p_deformed.app3': '燃烧室部件',
      'p_deformed.app4': '紧固件与连接件',
      'p_deformed.app5': '高温管路与法兰',
      'p_deformed.app6': '航天结构件',
      'p_deformed.app7': '工业燃机热端部件',

      // 特种不锈钢
      'p_stainless.title': '特种不锈钢',
      'p_stainless.lead': '兼具耐腐蚀与高强度的特种不锈钢,服务于核电、船舶、化工、石油及高端交通装备。',
      'p_stainless.intro1': '特种不锈钢具有优良的耐腐蚀性与抗氧化性,在高温、高压及强腐蚀介质环境中保持稳定的力学与服役性能。',
      'p_stainless.intro2': '公司可提供铸造特种不锈钢与变形特种不锈钢两大体系,产品形态包括铸件、棒材、丝材、锻件及板材。',
      'p_stainless.intro3': '材料体系覆盖马氏体、奥氏体、双相、沉淀硬化等不同强化机制,可针对极端工况进行定制化匹配。',
      'p_stainless.app1': '核电主管道与堆内构件',
      'p_stainless.app2': '船舶动力与结构件',
      'p_stainless.app3': '化工反应器与压力容器',
      'p_stainless.app4': '石油钻采与海工装备',
      'p_stainless.app5': '高端交通装备紧固件',
      'p_stainless.app6': '阀门、泵、密封件',
      'p_stainless.app7': '高温炉用结构件',

      // 镍基耐蚀合金
      'p_nickel.title': '镍基耐蚀合金',
      'p_nickel.lead': '抵御复杂腐蚀介质的镍基合金,服务石化、海工、能源、烟气脱硫与新能源装备的关键部位。',
      'p_nickel.intro1': '镍基耐蚀合金以镍为基体,通过添加铬、钼、铜、钴等元素,在还原性、氧化性及含氯化物等多种腐蚀介质中均具有优异的耐蚀性能。',
      'p_nickel.intro2': '公司可提供棒材、丝材、带材、板材、无缝管材等多种产品形态,牌号体系对应国内 NS 系列以及 INCONEL、HASTELLOY、INCOLOY 等国际牌号。',
      'p_nickel.intro3': '产品广泛应用于石油化工、海洋工程、能源装备、烟气脱硫和新能源装备中的耐蚀关键部件。',
      'p_nickel.app1': '石化反应器与塔器内构件',
      'p_nickel.app2': '海洋工程平台关键件',
      'p_nickel.app3': '烟气脱硫装置',
      'p_nickel.app4': '核电与新能源装备耐蚀部件',
      'p_nickel.app5': '高温管路、阀门、泵',
      'p_nickel.app6': '湿法冶金、电解装置',
      'p_nickel.app7': '高酸性油气田管路',

      // 精密合金
      'p_precision.title': '精密合金',
      'p_precision.lead': '具备特殊磁性、热膨胀、弹性等物理性能的精密合金,用于仪器仪表、电子器件与精密器件。',
      'p_precision.intro1': '精密合金是指具有特殊物理性能(如热膨胀、磁性、弹性、热双金属、电阻等)的功能型合金,广泛应用于精密仪器与电子工业。',
      'p_precision.intro2': '公司可提供棒材、丝材、带材、板材等产品形态,材料体系包括铁镍系、铁镍钴系、铁铬系等多种类型。',
      'p_precision.intro3': '典型牌号涵盖 4J29(KOVAR)、4J36(INVAR)、1J50、1J85、3J53(可伐封接、低膨胀、软磁、弹性合金)等。',
      'p_precision.app1': '电子器件玻璃与陶瓷封接',
      'p_precision.app2': '精密仪器与传感器',
      'p_precision.app3': '电真空与磁性元件',
      'p_precision.app4': '热双金属、温控元件',
      'p_precision.app5': '弹性元件与精密发条',
      'p_precision.app6': '低温与航天精密器件',
      'p_precision.app7': '钟表、定时器机芯零件',

      // 焊接材料
      'p_welding.title': '焊接材料',
      'p_welding.lead': '与各类高温合金、镍基合金、不锈钢母材匹配的焊丝、焊条与焊带,服务关键焊接接头。',
      'p_welding.intro1': '焊接材料是指焊接时所消耗材料的通称,包括焊条、焊丝、焊剂、气体、电极、衬垫等。',
      'p_welding.intro2': '公司主要生产镍基焊丝产品,牌号涵盖 ER 系列(ERNi-1、ERNiCr-3、ERNiCrFe-7、ERNiCrMo-3、ERNiCrMo-4、ERNiCrCoMo-1 等),与 INCONEL、HASTELLOY、MONEL 等国际牌号一一对应。',
      'p_welding.intro3': '产品广泛应用于航空发动机、电力、化工、海工等领域中关键合金部件的焊接、堆焊与修复。',
      'p_welding.app1': '航空发动机部件焊接',
      'p_welding.app2': '燃气轮机热端部件焊接',
      'p_welding.app3': '化工反应器焊接修复',
      'p_welding.app4': '能源装备耐蚀堆焊',
      'p_welding.app5': '海工平台与船舶结构件焊接',
      'p_welding.app6': '镍合金管道、容器焊接',
      'p_welding.app7': '高温合金机匣与导向器修复',

      // 高电阻电热合金
      'p_heating.title': '高电阻电热合金',
      'p_heating.lead': '面向工业加热、热处理炉与高温电器的高电阻电热合金材料,具备高电阻率与优良抗氧化性能。',
      'p_heating.intro1': '高电阻电热合金主要分为镍铬系与铁铬铝系两类,具有较高的电阻率、良好的高温抗氧化性与较长的使用寿命。',
      'p_heating.intro2': '公司可提供圆丝、扁丝、冷轧带、热轧带等产品形态,典型牌号包括 Cr20Ni80、Cr30Ni70、Cr20Ni35、Cr15Ni60、Cr20Ni30 等。',
      'p_heating.intro3': '产品广泛应用于工业电加热、热处理炉、家用电器、电热元件、半导体设备及高温电器等领域。',
      'p_heating.app1': '工业加热与热处理炉',
      'p_heating.app2': '家用电器加热元件',
      'p_heating.app3': '半导体设备加热体',
      'p_heating.app4': '高温电器元件',
      'p_heating.app5': '熔铝、熔锌等熔炼炉',
      'p_heating.app6': '电热毯、电饭煲、烤箱',
      'p_heating.app7': '风电、机车制动电阻',

      // Production 首页板块
      'lines.eyebrow': '产线装备',
      'lines.title': '从冶炼到成型,\n五条产线一气呵成。',
      'lines.subtitle': '完整的工艺闭环让我们能够把控材料的每一个微观细节。',
      'lines.smelting_name': '特种冶炼产线',
      'lines.smelting_desc': '从纯净度起步 —— 真空感应、电渣重熔等先进熔炼工艺,确保合金原子级均匀。',
      'lines.casting_name': '铸造产线',
      'lines.casting_desc': '复杂形状高温合金部件的精密铸造能力,应对高温段叶片等关键件。',
      'lines.forging_name': '锻轧产线',
      'lines.forging_desc': '通过塑性变形优化材料微观组织与力学性能,提升综合服役表现。',
      'lines.drawing_name': '拉丝产线',
      'lines.drawing_desc': '从棒坯到细丝的全规格拉拔成型,涵盖广泛直径与表面要求。',
      'lines.tubing_name': '制管产线',
      'lines.tubing_desc': '高精度无缝管材生产,服务能源、石化与航空领域。',
      'lines.more': '查看产线装备详情',

      // Production 子页通用
      'lines.page_title': '五条产线,\n完整工艺闭环。',
      'lines.page_lead': '冶炼 → 铸造 → 锻轧 → 拉丝 → 制管,关键工艺全部自有,不外协。',
      'lines.detail_capability': '装备能力',
      'lines.detail_output': '常见产品形态',
      'lines.detail_processes': '关键工艺',
      'lines.detail_inquiry': '咨询此产线',

      // 冶炼
      'l_smelting.title': '特种冶炼产线',
      'l_smelting.lead': '高温合金的纯净度从这里开始。多种熔炼方法组合,确保夹杂、气体、有害元素压到极低水平。',
      'l_smelting.cap': '真空感应炉(VIM) / 真空电弧重熔炉(VAR) / 电渣重熔炉(ESR) / 真空自耗炉',
      'l_smelting.out': '高温合金母合金锭、定向凝固坯料、电极棒',
      'l_smelting.proc': '真空冶炼 · 双联熔炼 · 三联熔炼 · 定向凝固',

      // 铸造
      'l_casting.title': '铸造产线',
      'l_casting.lead': '面向高温段叶片、燃气轮机部件等复杂形状的精密铸造能力。',
      'l_casting.cap': '熔模精密铸造 / 真空浇注 / 定向凝固炉 / 单晶炉',
      'l_casting.out': '航空发动机叶片、燃气轮机叶片、复杂结构铸件',
      'l_casting.proc': '蜡模制壳 · 真空浇注 · 定向凝固 · 单晶生长',

      // 锻轧
      'l_forging.title': '锻轧产线',
      'l_forging.lead': '通过塑性变形优化材料微观组织,提升力学与服役性能。',
      'l_forging.cap': '高温锻造液压机 / 多向模锻 / 热轧线 / 退火炉',
      'l_forging.out': '高温合金棒材、盘件锻坯、异形锻件',
      'l_forging.proc': '自由锻 · 模锻 · 多火次开坯 · 控温热轧',

      // 拉丝
      'l_drawing.title': '拉丝产线',
      'l_drawing.lead': '从棒坯到细丝的全规格拉拔成型,服务紧固件、焊材与精密器件。',
      'l_drawing.cap': '多道次连拉机 / 中间退火炉 / 表面处理线 / 在线测径仪',
      'l_drawing.out': '高温合金丝、不锈钢丝、精密合金丝、焊丝',
      'l_drawing.proc': '多道次拉拔 · 中间退火 · 表面处理 · 在线检测',

      // 制管
      'l_tubing.title': '制管产线',
      'l_tubing.lead': '高精度无缝管材生产,覆盖能源、石化、航空等高要求场景。',
      'l_tubing.cap': '冷轧管机 / 冷拔机 / 真空热处理炉 / 涡流探伤',
      'l_tubing.out': '高温合金管、镍基耐蚀合金管、不锈钢精密管',
      'l_tubing.proc': '冷轧 · 冷拔 · 真空热处理 · 全管涡流检测',

      // Technology 板块
      'tech.eyebrow': '科技创新',
      'tech.title': '创新,\n是图南的第一动力。',
      'tech.subtitle': '我们持续投入研发,以核心技术构建竞争壁垒。',
      'tech.core_title': '核心技术',
      'tech.core_desc': '掌握高温合金真空冶炼、定向凝固、变形加工等关键工艺。多项核心技术达到国际先进水平,已申请发明专利数十项。',
      'tech.center_title': '技术中心',
      'tech.center_desc': '建有省级企业技术中心,与国内多所知名高校、科研院所建立产学研合作,形成持续创新的研发体系。',

      // Technology 子页 - 核心技术
      'tech.page_title': '我们把核心技术\n看作长期资产。',
      'tech.page_lead': '研发不是一个项目,而是一种节奏 —— 真空冶炼、变形工艺、合金设计在多年里持续迭代。',
      'tech.t1_t': '真空冶炼工艺',
      'tech.t1_d': '从原料到母合金,整个熔炼流程在真空 / 保护气氛下完成,把夹杂与气体降到极低水平。',
      'tech.t2_t': '定向凝固与单晶',
      'tech.t2_d': '面向高温段叶片的定向凝固与单晶生长能力,提升高温蠕变与抗疲劳性能。',
      'tech.t3_t': '变形高温合金',
      'tech.t3_d': '从棒坯到锻件的多火次塑性变形工艺,提升组织均匀性与力学性能。',
      'tech.t4_t': '焊接材料体系',
      'tech.t4_d': '与典型高温合金母材相匹配的焊材体系,覆盖航空航天的关键焊接接头。',
      'tech.t5_t': '精密合金设计',
      'tech.t5_d': '面向特定磁性、膨胀系数、弹性模量的精密合金成分与工艺设计能力。',
      'tech.t6_t': '在线检测与认证',
      'tech.t6_d': '从化学成分到无损检测的在线质量保证体系,匹配主机厂供方审核标准。',

      // Technology 子页 - 技术中心
      'tech.center_page_title': '一座持续运转的\n材料研发中心。',
      'tech.center_page_lead': '省级企业技术中心 · 与国内多所高校、科研院所建立稳定的产学研合作。',
      'tech.center_p1_t': '研发组织',
      'tech.center_p1_d': '高温合金 / 精密合金 / 焊材 / 工艺四个研究方向并行推进,既有基础研究也有工程化项目。',
      'tech.center_p2_t': '产学研合作',
      'tech.center_p2_d': '与国内材料类知名高校、研究所开展合作课题与联合实验,共同培养行业人才。',
      'tech.center_p3_t': '实验与检测',
      'tech.center_p3_d': '从化学分析到力学性能,从金相到无损检测的完整实验设施支撑日常研发。',
      'tech.center_p4_t': '专利与论文',
      'tech.center_p4_d': '在高温合金冶炼、变形与焊材方向持续产出发明专利与学术论文。',

      // News 板块
      'news.eyebrow': '新闻动态',
      'news.title': '关于我们,\n关于行业。',
      'news.item1_title': '图南股份在深交所创业板成功上市',
      'news.item1_date': '2020.07.23',
      'news.item1_desc': '挂牌仪式于深圳证券交易所举行,公司开启全新发展阶段。',
      'news.item2_title': '第一动力:以创新引领发展',
      'news.item2_date': '2020.06.10',
      'news.item2_desc': '回顾创新发展进程,瞻望中国制造业的未来路径。',
      'news.item3_title': '全球制造业的六大重要趋势',
      'news.item3_date': '2020.05.26',
      'news.item3_desc': '智能化、高端化、绿色化、自动化、服务化、品牌化共同塑造制造业新格局。',
      'news.more': '查看全部新闻',

      // News 子页
      'news.page_title': '新闻动态',
      'news.page_lead': '公司动态、行业洞察与重要公告。',
      'news.tab_all': '全部',
      'news.tab_company': '公司动态',
      'news.tab_industry': '行业资讯',
      'news.tab_notice': '公司公告',
      'news.read_more': '阅读全文',
      'news.back': '返回新闻列表',
      'news.cat_company_lead': '关于公司发展、上市、产能扩张等重大事件的官方记录。',
      'news.cat_industry_lead': '高温合金、特种钢、精密合金行业的趋势观察与技术报道。',
      'news.cat_notice_lead': '作为深交所创业板上市公司(300855),依据信息披露要求发布的正式公告。',
      'news.notice_redirect': '公司正式公告以深交所披露为准,请前往巨潮资讯网查询。',
      'news.notice_link': '前往巨潮资讯网 →',
      'news.post1_title_short': '上市公告',
      'news.post2_title_short': '创新观察',
      'news.post3_title_short': '行业趋势',

      // News 详情页
      'news.post1_body_p1': '2020 年 7 月 23 日,江苏图南合金股份有限公司在深圳证券交易所创业板正式挂牌上市,股票代码 300855。挂牌仪式在深交所举行,这是公司近三十年发展中具有标志性意义的一天。',
      'news.post1_body_p2': '上市将进一步打开公司在高端装备用合金材料领域的成长空间,使我们能够以更稳健的资本结构投入下一个十年的研发与产能建设。',

      'news.post2_body_p1': '"创新是引领发展的第一动力" —— 这一表述不只是口号。从研发投入比、专利数,到一线工艺迭代,创新已经渗透到中国制造业的每一个细节。',
      'news.post2_body_p2': '对于图南而言,创新不是一个部门的工作,而是从冶炼到焊接、从材料到工艺的整体节奏。我们相信,在高温合金这条赛道上,技术领先是唯一可持续的护城河。',

      'news.post3_body_p1': '智能化、高端化、绿色化、自动化、服务化、品牌化 —— 这是当下全球制造业的六个共同方向。每一个方向都对应着供应链上不同环节的角色。',
      'news.post3_body_p2': '高性能合金是这场变革的物理基础。无论是更高的工作温度、更轻的结构,还是更耐腐蚀的服役环境,材料体系是终点的一部分。',

      // Careers
      'careers.eyebrow': '人才招聘',
      'careers.title': '与图南共同\n锻造材料的下一刻。',
      'careers.lead': '我们寻找在材料、冶金、机械、化学相关方向有热情的工程师与管理者。',
      'careers.r1_t': '材料研发工程师',
      'careers.r1_d': '高温合金 / 精密合金研发方向,负责合金成分与工艺研究。',
      'careers.r2_t': '冶炼工艺工程师',
      'careers.r2_d': '真空冶炼、电渣重熔等关键工艺的现场工艺技术工作。',
      'careers.r3_t': '质量工程师',
      'careers.r3_d': '负责理化分析、无损检测、质量体系运行与持续改进。',
      'careers.r4_t': '销售工程师',
      'careers.r4_d': '面向航空航天、能源、化工等行业的客户技术对接与商务推进。',
      'careers.contact': '简历投递',
      'careers.contact_desc': '请将简历发送至公司人力资源邮箱(详见联系页),并在标题中标注应聘岗位。',
      'careers.email_action': '发送至 hr@toland-alloy.com',

      // Contact 板块
      'contact.eyebrow': '联系我们',
      'contact.title': '让合金\n成为你的伙伴。',
      'contact.address_title': '公司地址',
      'contact.address_value': '江苏省丹阳市凤林大道 9 号',
      'contact.zip_title': '邮政编码',
      'contact.zip_value': '212352',
      'contact.investor_title': '投资者关系',
      'contact.investor_value': '深交所创业板 300855',
      'contact.career_title': '人才招聘',
      'contact.career_value': '招聘职位 / 在线留言',
      'contact.more': '联系详情',
      'contact.consult': '在线咨询',

      // Contact 详情页
      'contact.page_title': '欢迎与我们建立\n直接的对话。',
      'contact.page_lead': '关于产品、合作、采购或职业,选择最方便的方式联系到我们。',
      'contact.tel_title': '总机',
      'contact.tel_value': '+86 (0) 511 8633 8888',
      'contact.fax_title': '传真',
      'contact.fax_value': '+86 (0) 511 8633 8666',
      'contact.email_title': '商务邮箱',
      'contact.email_value': 'sales@toland-alloy.com',
      'contact.ir_title': '投资者关系',
      'contact.ir_value': 'ir@toland-alloy.com',
      'contact.hr_title': '人力资源',
      'contact.hr_value': 'hr@toland-alloy.com',
      'contact.map_title': '公司位置',
      'contact.map_note': '江苏省丹阳市凤林大道 9 号 · 邮编 212352',
      'contact.form_intro': '或留下信息,我们的销售工程师会在 1 个工作日内回复。',

      // Search results page
      'search.results_title': '搜索结果',
      'search.results_for': '关于',
      'search.results_count': '共 {count} 条结果',

      // Chat
      'chat.title': '在线咨询',
      'chat.intro': '留下需求,我们的销售工程师会在 1 个工作日内回复。',
      'chat.name': '姓名',
      'chat.email': '邮箱',
      'chat.company': '公司',
      'chat.topic': '主题',
      'chat.topic_product': '产品咨询',
      'chat.topic_quote': '询价报价',
      'chat.topic_tech': '技术合作',
      'chat.topic_other': '其他',
      'chat.message': '需求描述',
      'chat.submit': '发送咨询',
      'chat.thanks': '已为您打开邮件客户端,请确认后发送 ✉️',

      // Footer
      'footer.tagline': '高端装备用高性能合金材料及制品提供方。',
      'footer.col_company': '公司',
      'footer.col_business': '业务',
      'footer.col_contact': '联系',
      'footer.path': '发展历程',
      'footer.structure': '组织架构',
      'footer.honor': '荣誉资质',
      'footer.tech_center': '技术中心',
      'footer.copyright': '© 2026 江苏图南合金股份有限公司 版权所有',
      'footer.icp': '苏公网安备 32118102000283 号',
      'footer.contact_phone': '+86 0510-8631-8838',
      'footer.contact_email': 'sales@toland-alloy.com',
      'footer.contact_address': '江苏省丹阳市凤林大道 9 号',

      // Breadcrumb
      'crumb.home': '首页',
      'crumb.about': '关于我们',
      'crumb.products': '产品系列',
      'crumb.lines': '产线装备',
      'crumb.tech': '科技创新',
      'crumb.news': '新闻动态',
      'crumb.careers': '人才招聘',
      'crumb.contact': '联系我们',
    },
    en: {
      'meta.title': 'Jiangsu Toland Alloy Co., Ltd. | High-Performance Alloys for Critical Equipment',
      'meta.description': 'Jiangsu Toland Alloy Co., Ltd. (Stock 300855) — a national high-tech enterprise specializing in superalloys, precision alloys, and specialty stainless steels for aerospace, marine, and energy industries.',

      'nav.brand': 'TOLAND',
      'nav.brand_en': 'ALLOY',
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.lines': 'Production',
      'nav.tech': 'Technology',
      'nav.news': 'News',
      'nav.careers': 'Careers',
      'nav.contact': 'Contact',
      'nav.menu': 'Menu',
      'a11y.skip': 'Skip to content',

      'search.placeholder': 'Search products, lines, news…',
      'search.empty': 'No matches found',
      'search.title': 'Search',
      'search.eyebrow': 'Search',
      'search.page_title': 'Search Toland Alloy',
      'search.page_lead': 'Find content across products, production lines, technology, about and news.',
      'search.tip': 'Tip: search by product name, grade, or industry keyword.',

      'hero.title': 'Engineered alloys.\nFor what matters most.',
      'hero.subtitle': 'A trusted partner for high-performance alloy materials in aerospace, marine, and energy industries — for more than three decades.',
      'hero.cta_primary': 'Explore Products',
      'hero.cta_secondary': 'Contact Us',

      'about.eyebrow': 'About Toland',
      'about.title': 'Three decades.\nOne purpose.',
      'about.body': 'Founded in 1991 and listed on the Shenzhen ChiNext Board in 2020, Jiangsu Toland Alloy Co., Ltd. is a national high-tech enterprise dedicated to the R&D, production, and sales of superalloys, precision alloys, and specialty stainless steels.',
      'about.values_label': 'Core Values',
      'about.values': 'Loyalty · Innovation · Integrity · Diligence',
      'about.stat1_value': '1991',
      'about.stat1_label': 'Founded',
      'about.stat2_value': '2020.07',
      'about.stat2_label': 'Listed on ChiNext',
      'about.stat3_value': '300855',
      'about.stat3_label': 'Stock Code',
      'about.stat4_value': '7',
      'about.stat4_label': 'Product Lines',
      'about.more': 'Explore Toland',

      'about.page_eyebrow': 'About Toland',
      'about.page_title': 'A company built around\none material — for three decades.',
      'about.page_lead': 'From a single workshop in 1991 to a publicly listed national high-tech enterprise — Toland has stayed inside the same field of view: high-performance alloys.',
      'about.intro_title': 'Company Profile',
      'about.intro_p1': 'Headquartered in Danyang, Jiangsu, in the heart of the Yangtze River Delta manufacturing belt, Toland focuses on the R&D, production and sales of superalloys, precision alloys, specialty stainless steels and nickel-based corrosion-resistant alloys — supplying critical raw materials to aerospace, marine power, and energy/petrochemical equipment.',
      'about.intro_p2': 'On July 23, 2020, the company listed on the Shenzhen ChiNext Board under stock code 300855 — opening a new chapter of capital-driven growth.',
      'about.values_title': 'Core Values',
      'about.values_loyalty_t': 'Loyalty',
      'about.values_loyalty_d': 'Long-term commitment to customers, the team, and the national supply chain.',
      'about.values_innovation_t': 'Innovation',
      'about.values_innovation_d': 'R&D investment is the strongest signal we can send through any cycle.',
      'about.values_integrity_t': 'Integrity',
      'about.values_integrity_d': 'Every melt, every batch, every promise is treated as a signature.',
      'about.values_diligence_t': 'Diligence',
      'about.values_diligence_d': 'Process detail, repeated daily, compounds into competitive edge.',
      'about.path_link': 'History',
      'about.structure_link': 'Organization',
      'about.honor_link': 'Honors',

      'about.path_eyebrow': 'History',
      'about.path_title': 'From a single workshop\nto an industrial platform.',
      'about.path_1991_t': '1991 · Founded',
      'about.path_1991_d': 'Founded in Danyang, Jiangsu — starting with small-batch processing of specialty alloys.',
      'about.path_2000_t': '2000 · System Building',
      'about.path_2000_d': 'ISO quality system certified; entered aerospace supply chain.',
      'about.path_2008_t': '2008 · Superalloy Focus',
      'about.path_2008_d': 'Superalloy capacity expanded; nickel-based alloys delivered to petrochemical clients.',
      'about.path_2015_t': '2015 · Tech Center',
      'about.path_2015_d': 'Recognized as a provincial-level enterprise technology center.',
      'about.path_2020_t': '2020 · IPO',
      'about.path_2020_d': 'Listed on Shenzhen ChiNext (300855); capital platform established.',
      'about.path_2024_t': 'Today · Ongoing',
      'about.path_2024_d': 'Continued capacity investment in wrought superalloys and precision alloys.',

      'about.structure_eyebrow': 'Organization',
      'about.structure_title': 'A specialized team,\nbuilt around materials.',
      'about.structure_lead': 'The organization is structured along four spines — R&D, manufacturing, quality, and sales — so every link in the chain has owners.',
      'about.structure_rd_t': 'R&D Center',
      'about.structure_rd_d': 'Four directions: superalloys, precision alloys, welding consumables, process — joint labs with leading universities.',
      'about.structure_mfg_t': 'Manufacturing',
      'about.structure_mfg_d': 'Floor organization across smelting, casting, forging, drawing, and tubing lines.',
      'about.structure_qa_t': 'Quality',
      'about.structure_qa_d': 'Full-flow lab and certification: chemistry, NDT, mechanical testing.',
      'about.structure_sales_t': 'Sales & Service',
      'about.structure_sales_d': 'Account managers and technical support for aerospace, energy, marine and chemical sectors.',

      'about.honor_eyebrow': 'Honors',
      'about.honor_title': 'The credentials our customers\nuse to measure us.',
      'about.honor_lead': 'Over three decades of certifications and recognitions earned from customers and regulators.',
      'about.honor_h1_t': 'National High-Tech Enterprise',
      'about.honor_h1_d': 'Continuously recognized across multiple cycles.',
      'about.honor_h2_t': 'Provincial Tech Center',
      'about.honor_h2_d': 'Designated R&D platform by Jiangsu authorities.',
      'about.honor_h3_t': 'Aerospace Supplier Status',
      'about.honor_h3_d': 'Qualified by major domestic aerospace OEMs.',
      'about.honor_h4_t': 'ISO Quality Systems',
      'about.honor_h4_d': 'ISO 9001 and related management certifications.',
      'about.honor_h5_t': 'Public Company',
      'about.honor_h5_d': 'Shenzhen ChiNext listed company, ticker 300855.',
      'about.honor_h6_t': 'Patents',
      'about.honor_h6_d': 'Dozens of invention and utility patents in superalloy melting and forming.',

      'products.eyebrow': 'Products',
      'products.title': 'Seven systems.\nFor every demanding mission.',
      'products.subtitle': 'From casting to welding, from jet engines to nuclear reactors — answers for the most challenging conditions.',
      'products.casting_name': 'Cast Superalloys',
      'products.casting_desc': 'Critical components for aerospace and gas turbines, withstanding extreme temperature and stress.',
      'products.deformed_name': 'Wrought Superalloys',
      'products.deformed_desc': 'Material of choice for gas turbines, aircraft, jet engines, and petrochemical applications.',
      'products.stainless_name': 'Specialty Stainless Steel',
      'products.stainless_desc': 'Corrosion-resistant, high-strength materials for aerospace, transit, marine, and nuclear sectors.',
      'products.nickel_name': 'Nickel-Based Corrosion Alloys',
      'products.nickel_desc': 'Outstanding resistance against corrosive media in demanding chemical environments.',
      'products.precision_name': 'Precision Alloys',
      'products.precision_desc': 'Specialized physical properties for instruments, sensors, and precision components.',
      'products.welding_name': 'Welding Materials',
      'products.welding_desc': 'High-quality welding solutions matched to a wide range of superalloy substrates.',
      'products.heating_name': 'High-Resistance Heating Alloys',
      'products.heating_desc': 'Electric-thermal materials for industrial heating in high-temperature service.',
      'products.more': 'View All Products',

      'products.page_title': 'Seven product systems\nfor critical equipment.',
      'products.page_lead': 'Click any product to see typical applications, specifications and the corresponding process route.',
      'products.detail_apps': 'Typical Applications',
      'products.detail_specs': 'Specification Range',
      'products.detail_grades': 'Common Grades',
      'products.detail_lines': 'Related Production Lines',
      'products.detail_inquiry': 'Inquire about this product',
      'products.related_title': 'Related Product Series',
      'products.detail_overview': 'Overview',
      'products.detail_grades_count': '{n} grades',
      'products.detail_specs_count': '{n} specifications',

      'tbl.spec_steeltype': 'Steel type',
      'tbl.spec_variety': 'Variety',
      'tbl.spec_subtype': 'Sub-type',
      'tbl.spec_size': 'Specification',
      'tbl.grade_domestic': 'Domestic',
      'tbl.grade_foreign': 'International',
      'tbl.grade_uns': 'UNS / Code',
      'tbl.cast_master': 'Cast master alloy',
      'tbl.cast_part': 'Precision casting',
      'tbl.bar': 'Bar',
      'tbl.bar_hot': 'Hot-rolled bar',
      'tbl.bar_cold': 'Cold-drawn bar',
      'tbl.bar_forge': 'Forged bar',
      'tbl.wire': 'Wire',
      'tbl.wire_round': 'Round wire',
      'tbl.wire_shaped': 'Shaped wire',
      'tbl.strip': 'Strip',
      'tbl.cold_rolled': 'Cold-rolled',
      'tbl.hot_rolled': 'Hot-rolled',
      'tbl.plate': 'Plate',
      'tbl.tube_seamless': 'Seamless tube',
      'tbl.steel_cast': 'Stainless (cast)',
      'tbl.steel_wrought': 'Stainless (wrought)',
      'tbl.by_agreement': 'By agreement',
      'tbl.max_weight': 'Max pour weight 650 kg',

      'p_casting.title': 'Cast Superalloys',
      'p_casting.lead': 'Precision-cast materials for hot-section components in aero engines, gas turbines and critical structural parts.',
      'p_casting.intro1': 'Toland produces both cast superalloy master alloys and precision investment castings. Cast superalloys are formed directly into parts via casting; they accept a higher level of alloying than wrought grades and serve at higher operating temperatures.',
      'p_casting.intro2': 'Investment castings serve as critical hot-section parts in aero engines and gas turbines, including large complex thin-wall casings, rotating and guide vane blades, integrally bladed disks, nozzle guides and diffusers.',
      'p_casting.intro3': 'Toland is one of a small number of domestic producers mastering near-net-shape investment-casting technology for superalloys.',
      'p_casting.app1': 'Aero engine casings',
      'p_casting.app2': 'Turbine rotating blades',
      'p_casting.app3': 'Turbine guide vanes',
      'p_casting.app4': 'Integrally bladed disks',
      'p_casting.app5': 'Nozzle guides',
      'p_casting.app6': 'Diffusers',
      'p_casting.app7': 'Gas turbine hot-section components',

      'p_deformed.title': 'Wrought Superalloys',
      'p_deformed.lead': 'Deformation-formed superalloys for engine disks, combustors, fasteners and high-temperature piping.',
      'p_deformed.intro1': 'Wrought superalloys are formed by plastic deformation. They achieve a finer equiaxed grain structure, higher strength, and superior transverse properties compared to cast counterparts.',
      'p_deformed.intro2': 'Available in bar, wire, strip, plate and seamless tube — customizable for disks, rings, casings, fasteners and combustor components.',
      'p_deformed.intro3': 'Capability spans vacuum induction melting through forging, rolling and drawing. The grade system covers domestic GH-series and their international equivalents.',
      'p_deformed.app1': 'Aero engine turbine disks',
      'p_deformed.app2': 'Engine rings and casings',
      'p_deformed.app3': 'Combustor components',
      'p_deformed.app4': 'Fasteners and connectors',
      'p_deformed.app5': 'High-temperature piping & flanges',
      'p_deformed.app6': 'Aerospace structural parts',
      'p_deformed.app7': 'Industrial gas turbine hot-section parts',

      'p_stainless.title': 'Specialty Stainless Steel',
      'p_stainless.lead': 'Corrosion-resistant high-strength stainless steels for nuclear, marine, chemical, petroleum and high-end transit equipment.',
      'p_stainless.intro1': 'Specialty stainless steels deliver excellent corrosion resistance and oxidation stability under high-temperature, high-pressure and aggressive chemical environments.',
      'p_stainless.intro2': 'Toland offers both cast and wrought stainless families, with deliverables including castings, bars, wires, forgings and plates.',
      'p_stainless.intro3': 'The grade system spans martensitic, austenitic, duplex and precipitation-hardening categories — matched to the toughest service conditions.',
      'p_stainless.app1': 'Nuclear primary piping & internals',
      'p_stainless.app2': 'Marine power and structural parts',
      'p_stainless.app3': 'Chemical reactors and pressure vessels',
      'p_stainless.app4': 'Oil & gas drilling and offshore equipment',
      'p_stainless.app5': 'High-end transit fasteners',
      'p_stainless.app6': 'Valves, pumps and seals',
      'p_stainless.app7': 'Furnace structural parts',

      'p_nickel.title': 'Nickel-Based Corrosion Alloys',
      'p_nickel.lead': 'Nickel alloys engineered to resist complex corrosive media in petrochemical, offshore, energy, FGD and new-energy applications.',
      'p_nickel.intro1': 'Nickel-based corrosion alloys use nickel as the matrix, alloyed with chromium, molybdenum, copper and cobalt to deliver outstanding resistance against reducing, oxidizing and chloride-bearing media.',
      'p_nickel.intro2': 'Available as bars, wires, strips, plates and seamless tubes. The grade system corresponds to domestic NS-series and international INCONEL, HASTELLOY and INCOLOY families.',
      'p_nickel.intro3': 'Used in critical corrosion-resistant components across petrochemical, offshore, energy, FGD and new-energy equipment.',
      'p_nickel.app1': 'Reactor and tower internals',
      'p_nickel.app2': 'Offshore platform components',
      'p_nickel.app3': 'Flue-gas desulphurization (FGD) systems',
      'p_nickel.app4': 'Nuclear and new-energy corrosion-critical parts',
      'p_nickel.app5': 'High-temperature piping, valves, pumps',
      'p_nickel.app6': 'Hydrometallurgy and electrolysis equipment',
      'p_nickel.app7': 'Sour oil & gas pipework',

      'p_precision.title': 'Precision Alloys',
      'p_precision.lead': 'Functional alloys with engineered magnetic, expansion and elastic properties for instruments, sensors and electronic devices.',
      'p_precision.intro1': 'Precision alloys are functional metals with engineered physical properties — controlled thermal expansion, soft magnetism, elasticity, thermo-bimetallic response and resistivity — used widely across instrumentation and electronics.',
      'p_precision.intro2': 'Toland supplies bars, wires, strips and plates across iron-nickel, iron-nickel-cobalt and iron-chromium families.',
      'p_precision.intro3': 'Representative grades include 4J29 (KOVAR), 4J36 (INVAR), 1J50, 1J85 and 3J53 — covering glass-to-metal sealing, low-expansion, soft-magnetic and elastic-alloy use cases.',
      'p_precision.app1': 'Glass-to-metal and ceramic-to-metal sealing',
      'p_precision.app2': 'Precision instruments and sensors',
      'p_precision.app3': 'Vacuum tubes and magnetic components',
      'p_precision.app4': 'Thermo-bimetallic and temperature control elements',
      'p_precision.app5': 'Elastic elements and precision springs',
      'p_precision.app6': 'Cryogenic and aerospace precision components',
      'p_precision.app7': 'Watch and timer movement parts',

      'p_welding.title': 'Welding Materials',
      'p_welding.lead': 'Welding wires, electrodes and strips matched to superalloy, nickel-alloy and stainless steel substrates.',
      'p_welding.intro1': 'Welding materials cover all consumables required for welding — including electrodes, filler wires, fluxes, shielding gases, electrodes and backing.',
      'p_welding.intro2': 'Toland focuses on nickel-based welding wires across the ER-series — ERNi-1, ERNiCr-3, ERNiCrFe-7, ERNiCrMo-3, ERNiCrMo-4, ERNiCrCoMo-1 and more — corresponding to international INCONEL, HASTELLOY and MONEL grades.',
      'p_welding.intro3': 'Used to weld, overlay and repair critical alloy components across aerospace, power, chemical and offshore industries.',
      'p_welding.app1': 'Aero engine component welding',
      'p_welding.app2': 'Gas turbine hot-section welding',
      'p_welding.app3': 'Repair welding of chemical reactors',
      'p_welding.app4': 'Corrosion-resistant overlay welding',
      'p_welding.app5': 'Offshore platforms and ship structural welding',
      'p_welding.app6': 'Nickel-alloy piping and pressure vessel welding',
      'p_welding.app7': 'Repair of superalloy casings and guide vanes',

      'p_heating.title': 'High-Resistance Heating Alloys',
      'p_heating.lead': 'High-resistance heating alloys for industrial furnaces, heat-treatment lines and high-temperature electrical components.',
      'p_heating.intro1': 'High-resistance heating alloys split into nickel-chromium and iron-chromium-aluminum families. They feature high resistivity, excellent oxidation resistance at temperature, and long service life.',
      'p_heating.intro2': 'Available as round wire, flat wire, cold-rolled strip and hot-rolled strip. Typical grades include Cr20Ni80, Cr30Ni70, Cr20Ni35, Cr15Ni60 and Cr20Ni30.',
      'p_heating.intro3': 'Used widely across industrial heating, heat-treatment, home appliances, heating elements, semiconductor equipment and high-temperature electronics.',
      'p_heating.app1': 'Industrial heating and heat-treatment furnaces',
      'p_heating.app2': 'Home appliance heating elements',
      'p_heating.app3': 'Heater elements in semiconductor equipment',
      'p_heating.app4': 'High-temperature electrical components',
      'p_heating.app5': 'Aluminum and zinc melting furnaces',
      'p_heating.app6': 'Electric blankets, rice cookers, ovens',
      'p_heating.app7': 'Wind power and locomotive braking resistors',

      'lines.eyebrow': 'Production',
      'lines.title': 'From melt to form.\nFive lines, one flow.',
      'lines.subtitle': 'A complete process loop, allowing us to control every microscopic detail.',
      'lines.smelting_name': 'Specialty Smelting',
      'lines.smelting_desc': 'Starting from purity — vacuum induction, electroslag remelting, and advanced melting techniques.',
      'lines.casting_name': 'Casting',
      'lines.casting_desc': 'Precision casting of complex superalloy components for hot-section turbine blades and beyond.',
      'lines.forging_name': 'Forging & Rolling',
      'lines.forging_desc': 'Optimizing microstructure and mechanical properties through plastic deformation.',
      'lines.drawing_name': 'Wire Drawing',
      'lines.drawing_desc': 'Full-spectrum drawing capability from billet to fine wire across diameter ranges.',
      'lines.tubing_name': 'Tube Manufacturing',
      'lines.tubing_desc': 'High-precision seamless tubes for energy, petrochemical, and aerospace applications.',
      'lines.more': 'See production capabilities',

      'lines.page_title': 'Five lines.\nOne complete process loop.',
      'lines.page_lead': 'Smelting → Casting → Forging → Drawing → Tubing — every critical step is in-house.',
      'lines.detail_capability': 'Equipment',
      'lines.detail_output': 'Typical Output',
      'lines.detail_processes': 'Key Processes',
      'lines.detail_inquiry': 'Inquire about this line',

      'l_smelting.title': 'Specialty Smelting',
      'l_smelting.lead': 'The starting point of superalloy purity — multiple melting techniques combined to drive impurities, gases and trace elements to extreme lows.',
      'l_smelting.cap': 'VIM / VAR / ESR / Vacuum consumable furnace',
      'l_smelting.out': 'Master alloy ingots, directionally solidified billets, electrodes',
      'l_smelting.proc': 'Vacuum melting · Duplex · Triplex · Directional solidification',

      'l_casting.title': 'Casting',
      'l_casting.lead': 'Precision casting capability for hot-section blades and complex-shape turbine components.',
      'l_casting.cap': 'Investment casting / Vacuum pouring / Directional solidification / Single-crystal furnaces',
      'l_casting.out': 'Aero & gas turbine blades, complex-structure castings',
      'l_casting.proc': 'Wax mold · Vacuum pour · DS growth · Single-crystal growth',

      'l_forging.title': 'Forging & Rolling',
      'l_forging.lead': 'Plastic deformation that refines microstructure and lifts mechanical performance.',
      'l_forging.cap': 'Hot-forging hydraulic press / Multi-direction die forging / Hot rolling / Annealing furnaces',
      'l_forging.out': 'Superalloy bars, disk forging blanks, special-shape forgings',
      'l_forging.proc': 'Open-die · Closed-die · Multi-heat cogging · Controlled hot rolling',

      'l_drawing.title': 'Wire Drawing',
      'l_drawing.lead': 'Full-spectrum drawing from billet to fine wire — fasteners, welding consumables and precision components.',
      'l_drawing.cap': 'Multi-pass drawers / Intermediate annealing / Surface treatment / Inline gauging',
      'l_drawing.out': 'Superalloy wire, stainless wire, precision-alloy wire, welding wire',
      'l_drawing.proc': 'Multi-pass drawing · Annealing · Surface finish · Inline inspection',

      'l_tubing.title': 'Tube Manufacturing',
      'l_tubing.lead': 'High-precision seamless tubes for energy, petrochemical and aerospace service.',
      'l_tubing.cap': 'Cold pilger mills / Cold draw benches / Vacuum heat treatment / Eddy-current NDT',
      'l_tubing.out': 'Superalloy tubes, nickel-alloy corrosion-resistant tubes, stainless precision tubes',
      'l_tubing.proc': 'Cold rolling · Cold drawing · Vacuum heat treatment · Full-tube ECT',

      'tech.eyebrow': 'Technology',
      'tech.title': 'Innovation\nis our first principle.',
      'tech.subtitle': 'Continuous investment in R&D, building competitive moats with core technology.',
      'tech.core_title': 'Core Technology',
      'tech.core_desc': 'Mastery of vacuum melting, directional solidification, and deformation processing for superalloys. Multiple core technologies reach international advanced levels, with dozens of patents filed.',
      'tech.center_title': 'Technology Center',
      'tech.center_desc': 'A provincial-level enterprise technology center, with industry-academia-research collaborations across leading Chinese universities and institutes.',

      'tech.page_title': 'Core technology\nis a long-term asset.',
      'tech.page_lead': 'R&D is not a project, it is a tempo — vacuum melting, deformation, alloy design, iterating year after year.',
      'tech.t1_t': 'Vacuum Melting',
      'tech.t1_d': 'From feedstock to master alloy under vacuum or protective atmosphere — driving inclusions and gases to extremely low levels.',
      'tech.t2_t': 'DS & Single Crystal',
      'tech.t2_d': 'Directional solidification and single-crystal growth for hot-section blades — improved creep and fatigue resistance.',
      'tech.t3_t': 'Wrought Superalloys',
      'tech.t3_d': 'Multi-heat plastic deformation from billet to forging — uniform microstructure and mechanical performance.',
      'tech.t4_t': 'Welding Materials',
      'tech.t4_d': 'A welding consumables system matched to typical superalloy substrates, covering critical aerospace joints.',
      'tech.t5_t': 'Precision Alloy Design',
      'tech.t5_d': 'Composition and process design for tailored magnetic, expansion and elastic properties.',
      'tech.t6_t': 'Inline Inspection',
      'tech.t6_d': 'End-to-end inline quality system — chemistry, NDT, mechanical — matched to OEM supplier audits.',

      'tech.center_page_title': 'A continuously running\nmaterials R&D center.',
      'tech.center_page_lead': 'Provincial-level enterprise technology center · Stable industry-academia-research partnerships.',
      'tech.center_p1_t': 'R&D Organization',
      'tech.center_p1_d': 'Four parallel directions — superalloys, precision alloys, welding, process — covering both basic research and engineering.',
      'tech.center_p2_t': 'Industry-Academia-Research',
      'tech.center_p2_d': 'Joint research with leading materials universities and institutes; co-developing industry talent.',
      'tech.center_p3_t': 'Lab & Inspection',
      'tech.center_p3_d': 'Full lab capabilities from chemistry to mechanical testing, metallography to NDT.',
      'tech.center_p4_t': 'Patents & Papers',
      'tech.center_p4_d': 'Continuous output of patents and academic papers in melting, deformation and welding.',

      'news.eyebrow': 'News',
      'news.title': 'Updates from us\nand our industry.',
      'news.item1_title': 'Toland Lists on the Shenzhen ChiNext Board',
      'news.item1_date': '2020.07.23',
      'news.item1_desc': 'Listing ceremony held at the Shenzhen Stock Exchange, marking a new chapter for the company.',
      'news.item2_title': 'Innovation as the Primary Driver',
      'news.item2_date': '2020.06.10',
      'news.item2_desc': 'A retrospective on innovation-led development and the future of Chinese manufacturing.',
      'news.item3_title': 'Six Trends Shaping Global Manufacturing',
      'news.item3_date': '2020.05.26',
      'news.item3_desc': 'Smart, premium, green, automated, service-oriented, and brand-led — the new manufacturing.',
      'news.more': 'View All News',

      'news.page_title': 'News',
      'news.page_lead': 'Company updates, industry insights and important notices.',
      'news.tab_all': 'All',
      'news.tab_company': 'Company',
      'news.tab_industry': 'Industry',
      'news.tab_notice': 'Notices',
      'news.read_more': 'Read more',
      'news.back': 'Back to all news',
      'news.cat_company_lead': 'Official records of company milestones, listings, and capacity expansion.',
      'news.cat_industry_lead': 'Industry trend observations and technical coverage of superalloys, specialty steels, and precision alloys.',
      'news.cat_notice_lead': 'As a Shenzhen ChiNext-listed company (300855), formal disclosures filed under regulatory requirements.',
      'news.notice_redirect': 'Official announcements are filed via the Shenzhen Stock Exchange — please refer to CNINFO.',
      'news.notice_link': 'Go to CNINFO →',
      'news.post1_title_short': 'Listing announcement',
      'news.post2_title_short': 'Innovation insight',
      'news.post3_title_short': 'Industry trends',

      'news.post1_body_p1': 'On July 23, 2020, Jiangsu Toland Alloy listed on the Shenzhen ChiNext Board under stock code 300855. The listing ceremony at the Shenzhen Stock Exchange marked a milestone in the company\'s near-three-decade journey.',
      'news.post1_body_p2': 'The listing further opens our growth space in high-end equipment alloys, allowing us to invest in the next decade of R&D and capacity from a stronger capital base.',

      'news.post2_body_p1': '"Innovation is the primary driver of development" — more than a slogan. From R&D intensity and patents to floor-level process iteration, innovation has worked its way into every detail of Chinese manufacturing.',
      'news.post2_body_p2': 'For Toland, innovation is not the work of one department — it is a tempo running through melting, welding, materials and process. Technical leadership is the only durable moat in superalloys.',

      'news.post3_body_p1': 'Smart · premium · green · automated · service-oriented · brand-led — six common directions in global manufacturing. Each maps to a different node in the supply chain.',
      'news.post3_body_p2': 'High-performance alloys are the physical foundation under this transformation. Higher operating temperature, lighter structure, better corrosion resistance — material systems are part of the destination.',

      'careers.eyebrow': 'Careers',
      'careers.title': 'Forge the next moment\nof material with us.',
      'careers.lead': 'We hire engineers and managers passionate about materials, metallurgy, mechanical and chemical disciplines.',
      'careers.r1_t': 'R&D Engineer (Materials)',
      'careers.r1_d': 'Superalloy / precision alloy R&D — composition and process research.',
      'careers.r2_t': 'Smelting Process Engineer',
      'careers.r2_d': 'On-floor process work for vacuum melting, electroslag remelting and related lines.',
      'careers.r3_t': 'Quality Engineer',
      'careers.r3_d': 'Owns chemistry, NDT, mechanical testing and continuous improvement of QMS.',
      'careers.r4_t': 'Sales Engineer',
      'careers.r4_d': 'Customer technical and commercial work for aerospace, energy and chemical sectors.',
      'careers.contact': 'Resume Submission',
      'careers.contact_desc': 'Send resumes to the HR mailbox listed on the contact page; please include the role in the subject line.',
      'careers.email_action': 'Email hr@toland-alloy.com',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Make alloy\na part of your work.',
      'contact.address_title': 'Address',
      'contact.address_value': 'No. 9 Fenglin Avenue, Danyang, Jiangsu, China',
      'contact.zip_title': 'Postal Code',
      'contact.zip_value': '212352',
      'contact.investor_title': 'Investor Relations',
      'contact.investor_value': 'ChiNext 300855',
      'contact.career_title': 'Careers',
      'contact.career_value': 'Open Roles / Inquiries',
      'contact.more': 'Contact details',
      'contact.consult': 'Online Inquiry',

      'contact.page_title': 'Open a direct\nconversation with us.',
      'contact.page_lead': 'Whether about products, partnerships, procurement or careers — pick the channel that suits you best.',
      'contact.tel_title': 'Phone',
      'contact.tel_value': '+86 (0) 511 8633 8888',
      'contact.fax_title': 'Fax',
      'contact.fax_value': '+86 (0) 511 8633 8666',
      'contact.email_title': 'Sales',
      'contact.email_value': 'sales@toland-alloy.com',
      'contact.ir_title': 'Investor Relations',
      'contact.ir_value': 'ir@toland-alloy.com',
      'contact.hr_title': 'HR',
      'contact.hr_value': 'hr@toland-alloy.com',
      'contact.map_title': 'Location',
      'contact.map_note': 'No. 9 Fenglin Avenue, Danyang, Jiangsu · 212352',
      'contact.form_intro': 'Or leave us a note — a sales engineer will respond within one business day.',

      'search.results_title': 'Search Results',
      'search.results_for': 'for',
      'search.results_count': '{count} results',

      'chat.title': 'Online Inquiry',
      'chat.intro': 'Tell us your need — a sales engineer will respond within one business day.',
      'chat.name': 'Name',
      'chat.email': 'Email',
      'chat.company': 'Company',
      'chat.topic': 'Topic',
      'chat.topic_product': 'Product question',
      'chat.topic_quote': 'Quote / RFQ',
      'chat.topic_tech': 'Technical partnership',
      'chat.topic_other': 'Other',
      'chat.message': 'Your need',
      'chat.submit': 'Send',
      'chat.thanks': 'Mail client opened — please confirm and send ✉️',

      'footer.tagline': 'High-performance alloy materials for critical equipment.',
      'footer.col_company': 'Company',
      'footer.col_business': 'Business',
      'footer.col_contact': 'Contact',
      'footer.path': 'History',
      'footer.structure': 'Organization',
      'footer.honor': 'Honors',
      'footer.tech_center': 'Tech Center',
      'footer.copyright': '© 2026 Jiangsu Toland Alloy Co., Ltd. All rights reserved.',
      'footer.icp': 'ICP Filing No. 32118102000283',
      'footer.contact_phone': '+86 0510-8631-8838',
      'footer.contact_email': 'sales@toland-alloy.com',
      'footer.contact_address': '9 Fenglin Avenue, Danyang, Jiangsu',

      'crumb.home': 'Home',
      'crumb.about': 'About',
      'crumb.products': 'Products',
      'crumb.lines': 'Production',
      'crumb.tech': 'Technology',
      'crumb.news': 'News',
      'crumb.careers': 'Careers',
      'crumb.contact': 'Contact',
    },
  };

  function applyLang(lang) {
    const d = dict[lang] || dict.zh;
    document.documentElement.lang = (lang === 'en') ? 'en' : 'zh-CN';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = d[key];
      if (typeof value !== 'string') return;

      // 显式属性目标(data-i18n-attr="placeholder|aria-label|title|alt|content")
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
        return;
      }

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
        return;
      }
      if (el.tagName === 'META') {
        el.setAttribute('content', value);
        return;
      }
      if (el.tagName === 'OPTION') {
        el.textContent = value;
        return;
      }
      if (value.includes('\n')) {
        el.innerHTML = value
          .split('\n')
          .map((line) => `<span class="tl-line">${escapeHtml(line)}</span>`)
          .join('');
      } else {
        el.textContent = value;
      }
    });

    // 文档标题
    if (d['meta.title']) document.title = d['meta.title'];

    // 切换器状态
    document.querySelectorAll('.tl-lang-switch button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 通知其他模块语言已切换
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function setLang(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    localStorage.setItem('toland-lang', lang);
    applyLang(lang);
  }

  function getInitialLang() {
    const saved = localStorage.getItem('toland-lang');
    if (saved === 'zh' || saved === 'en') return saved;
    const sys = (navigator.language || 'zh').toLowerCase();
    return sys.startsWith('en') ? 'en' : 'zh';
  }

  // 全局暴露
  window.setLang = setLang;
  window.tlGetLang = () => localStorage.getItem('toland-lang') || getInitialLang();
  window.tlDict = () => dict;
  window.tlT = (key, fallback) => {
    const lang = window.tlGetLang();
    return (dict[lang] && dict[lang][key]) || fallback || key;
  };

  // 初始化:仅在外壳已注入后再 apply,这样 partials 注入的 [data-i18n] 也能被翻译
  function ready() {
    // 监听一次 partials:ready,如果已经 ready 就直接 apply
    if (window.__tolandPartialsReady) {
      applyLang(getInitialLang());
    } else {
      let applied = false;
      const tryApply = () => {
        if (applied) return;
        applied = true;
        applyLang(getInitialLang());
      };
      window.addEventListener('partials:ready', tryApply, { once: true });
      // 防御:如果没有 partials(主页),延后到下一帧仍要 apply
      setTimeout(tryApply, 0);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
