// 判断题.js
// copy($lodash.uniqBy((get_bytype(arr,'判断')),item=>item.q).map(({a,o,q},id)=>{
	// return id+'\t'+q+'\t'+o[a[0]]
// }).join('\r\n'))

// arr_ = arr_.split('\n')
// arr_.pop()
// copy(arr_.map(item=>{
	// let i = item.split('\t')
	// return {a:[['正确', '错误'].indexOf(i[1]) ], o:  ['正确', '错误'], q:i[0]}
// }))
; (function (root, factory) {
  if (typeof module !== 'undefined' && typeof exports === "object") {
    // CommonJS
    module.exports = exports = factory(root);
  } else if (typeof define === "function" && (define.amd || define.cmd)) {
    // AMD
    define([], factory);
  } else {
    // Global (browser)
    return factory(root);
  }
})(typeof window !== 'undefined' ? window : global, function (root) {
let tiku = [
	{
		"q": "《安全生产法》对事故的报告作出了具体的规定,生产经营单位发生生产安全事故后,事故现场有关人员应当立即报告本单位安全管理部门。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《常用危险化学品的分类及标志》(GB13690-1992)规定了常用危险化学品的标志,共设主标志11种和副标志16种。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《常用危险化学品的分类及标志》中此图形为爆炸品的安全标志。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《常用危险化学品的分类及标志》中此图形为不燃气体的安全标志。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《常用危险化学品的分类及标志》中此图形为易燃液体的安全标志。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《工伤保险条例》规定了工伤保险基金组成和征收办法。工伤保险费由个人缴纳。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《化学品安全技术说明书》采用\"两个品种一卡\"的方式编写。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《生产安全事故报告和调查处理条例》适用于生产经营活动中发生的造成人身伤亡或者直接经济损失的生产安全事故的报告和调查处理,以及环境污染事故、核设施事故的报告和调查处理。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《危险化学品安全管理条例》规定除运输工具加油站、加气站外,危险化学品的生产装置和储存设施,与河流、湖泊、风景名胜和自然保护区域距离必须符合国家标准或者国家有关规定。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《危险化学品经营许可证管理办法》适用民用爆炸品、放射性物品、核能物质和城镇燃气等危险化学品经营销售活动。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《中华人民共和国安全生产法》规定,从业人员发现危及人身安全的紧急时,无权停止作业或者在采取可能的应急措施后撤离作业场所。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《中华人民共和国安全生产法》规定,两个以上生产经营单位在同一作业区域内进行可能危及对方安全生产的生产经营活动,未签订安全生产管理协议或者未指定专职安全生产管理人员进行安全检查与协调的,责令限期改正,可以处二万元以下的罚款。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《中华人民共和国安全生产法》规定,生产经营单位必须投保安全生产责任保险。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《中华人民共和国安全生产法》规定,危险物品的生产、经营、储存单位以及矿山、建筑施工单位的主要负责人和安全生产管理人员,应当由有关主管部门对其安全生产知识和管理能力考核合格后方可任职。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《中华人民共和国突发事件应对法》所称突发事件,是指突然发生,造成社会危害,需要采取应急措施的事件。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "《中华人民共和国消防法》规定,单位的安全管理人员是本单位的消防安全责任人。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "2005年7月19日,某地一化工有限公司所属分装厂,分装农药。由于没有严格的防护措施,几名临时招聘的女工在倒装农药时,先后发生头晕、恶心、呕吐等中毒症状,相继被送到医院。因抢救及时没有人员死亡。根据上述事实,请判断,因该公司招聘人员为临时工,所以不用为她们配备劳动保护用品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "2006年4月19日,某树脂制品有限公司生产过程中大量使用有机溶剂甲苯,人工操作,没有通风设施。员工方某发生疑似急性甲苯中毒,4月20日经诊断为“轻度甲苯中毒”。经职业卫生监督人员现场检查发现,该公司未向卫生行政部门申报存在职业危害因素,未组织操作人员上岗前、在岗期间、离岗时的职业健康检查,未设立职业健康监护档案;无工作场所职业病危害因素监测及评价资料;未建立职业病防治管理制度和职业病危害事故应急 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "2007年11月24日7时51分,某公司上海销售分公司租赁经营的浦三路油气加注站,在停业检修时发生液化石油气储罐爆炸事故,造成4人死亡、30人受伤,周围部分建筑物等受损,直接经济损失960万元。事故调查组认定:造成这次事故的直接原因是:液化石油气储罐卸料后没有用氮气置换清洗,储罐内仍残留液化石油气;在用压缩空气进行管道气密性试验时,没有将管道与液化石油气储罐用盲板隔断,致使压缩空气进入了液化石油气 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "D类火灾是指固体火灾。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "安全技术措施计划制度是生产经营单位生产财务计划的一个组成部分,是提高经济效益的重要保证制度。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "安全监管监察和有关部门是事故隐患排查治理和防控的责任主体。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "安全设备的安装、使用、检测、改造和报废不符合国家标准或者行业标准的,可加强管理继续运行。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "安全疏散距离是指厂房最近工作地点到外部出口或楼梯的距离。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "安全文化的建设对安全生产的保障作用不明显。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "按事故频发倾向理论,事故频发倾向者的存在是工业事故发生的次要原因。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "按照《安全生产法》的规定,生产、经营、储存、使用危险物品的车间、商店、仓库可以与员工宿舍在同一座建筑物内,但不得与员工放在同一楼层。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "按照《建筑设计防火规范》可燃固体,其火灾危险性为丁类。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "爆炸品的包装箱不宜直接在地面上放置,最好铺垫20厘米左右的水泥块或钢材铺垫。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "爆炸品与其他非爆炸品严禁混储混运,点火器材、起爆器材与炸药、爆炸性药品以及发射药、烟火等其他爆炸品可以共同储存和运输。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "爆炸物品可与其他类物品同储,但必须采取隔离措施且限量储存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "爆炸下限越低,爆炸极限范围越宽,危险性越小。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "本质安全化原则只可以应用于设备、设施,不能应用于建设项目。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "编制应急救援预案的目的是确保不发生事故。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "不定期对作业环境空气中有毒物质进行监测是防毒作业环境管理的重要内容。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "不同种类毒品、危险程度和灭火方法不同的毒害品可同库混存,性质相抵的禁止同库混存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "采样器内剩余的油样及洗刷采样器的油品必须倒回罐内。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "参加应急预案评审人员与所评审预案的生产经营单位有利害关系的,可以参加。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "参与演练单位不可对本单位的演练情况进行总结。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "成年男性平均感知电流比女性大,因此男性比女性对电流更敏感。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "储存的危险化学品应有符合国家标准要求的明显标志,同一区域储存两种或两种以上不同级别的危险品时,应按最低等级危险物品的性能标志。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "储存危险化学品的建筑是否安装通风设备,根据具体情况而定。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "储存危险化学品的建筑通排风系统的通风管应采用易燃材料制作。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "储存危险化学品的建筑物可以有地下室或其他地下建筑。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "储存危险化学品建筑采暖的热媒温度不应过高,可采用机械采暖。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "储存危险化学品建筑采暖的热媒温度不应过高,热水采暖不应超过60℃。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "储存危险化学品建筑的通排风系统可不考虑导除静电的接地装置。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "储存危险化学品建筑物内不宜增设采暖设施。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "触电事故是由于人直接接触带电体发生的事故。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "从事剧毒化学品、易制爆危险化学品经营的企业,应当向所在地县级人民政府安全生产监督管理部门提出申请。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "从事危险化学品零售业务的店面内只许存放民用小包装的危险化学品,其存放总量不得超过2吨。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "从事危险化学品批发业务的企业,所经营的危险化学品可以存放在业务经营场所。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "存放过放射性物品的地方,单位如果存放其他物品,单位应当指派专人负责进行彻底清洗。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "存在高毒作业的危险化学品建设项目的防护设施、设计,未经卫生行政部门审查同意,可进行施工操作。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "大中型危险化学品仓库应选址在远离市区和居民区的当地主导风向的上风方向和河流下游的区域。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "大中型危险化学品仓库应选址在远离市区和居民区的当地主导风向的上风向和河流上游的地域。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "带防毒面具进入容器作业时,当感到身体不适或呼吸困难时,应及时取下面罩休息。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "单位负责人接到有关人员事故报告后,应当于6小时向事故发生地县级以上人民政府安全生产监督管理部门和负有安全生产监督管理职责的有关部门报告。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "单位或者个人违反《中华人民共和国突发事件应对法》,导致突发事件发生或者危害扩大,给他人人身、财产造成损害的,不用承担任何责任。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "单位要根据需要,没有必要引进、采用先进适用的应急救援技术装备。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "当某种化学品具有两种及两种以上的危险性时,用危险性最小的警示词。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "电火花就是指事故火花。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "电流通过人体内部,对人体伤害程度受电流大小影响,而与其他因素无关。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "电石(碳化钙)可以露天存放。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "督促、检查本单位的安全生产工作,及时消除生产安全事故隐患是生产经营单位安全管理人员的职责,而非主要负责人的职责。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "对储存易燃介质或毒性程度为极度、高度或中度危害介质的压力容器,应在安全阀或爆破片的排出口装设导管,可直接排入大气。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "对于实行安全生产许可的生产经营单位,未应急预案备案登记的,在申请安全生产许可证时,可以不提供相应的应急预案备案登记表,仅提供应急预案。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "对于危险性较大的重点设备、重点岗位和重点场所,生产经营单位应当制定重点工作岗位的现场处置方案。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "对于正常人体而言,感知阈值平均为0.5毫安,并与时间因素相关。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "发生危险化学品事故,事故单位安全管理人员应当立即按照本单位危险化学品应急预案组织救援,并向当地安全生产监督管理部门和环境保护、公安、卫生主管部门报告。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "凡确诊患有职业病的职工,可由企业决定是否享受国家规定的工伤保险待遇或职业病待遇。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "防冻保暖工作检查属于安全综合检查。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "放射性物品属于剧毒化学品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "分期建设、分期投入生产或者使用的建设项目,其配套的职业病防护设施应当在建设项目全部完成后进行验收。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "负有危险化学品安全监督管理职责的部门和环境保护、公安、卫生等有关部门,应当按照当地应急救援预案组织实施救援,尽可能不拖延、推诿。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "高锰酸钾可以用纸袋包装。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "个人可以通过邮寄向危险化学品经营单位购买危险化学品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "个体运输业户的车辆可以从事道路危险化学品运输经营活动。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "各类危险化学品分装、改装、开箱(桶)检查等应在库房内进行。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "根据《危险化学品重大危险源辨识》,乙烯临界量为30t。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "根据闭杯试验闪点,我国标准《常用危险化学品分类及标志》将易燃液体分为4项。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "根据我国《常用危险化学品分类及标志》,压缩气体和液化气体中,不包括氧气。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "根据演练规模和观摩需要,可编制演练观摩手册。演练观摩手册通常包括应急演练时间、地点、情景描述、安全注意事项等。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "工会依法参加事故调查处理,但无权向有关部门提出处理意见。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "工频交流电流的频率越高,对人体的伤害作用越大。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "工作时间前后在工作场所内,从事与工作有关的预备性或者收尾性工作受到事故伤害的,不应当认定为工伤。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "构成一般危险源的危险化学品必须在专用仓库内单独存放。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "固定泡沫装置管线控制阀可设在防火堤内。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "管道系统进行吹扫时,不需要设置禁区。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "锅炉工作压力越低,汽、水重度差越小压力越高,汽、水重度差越大。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "黑火药类、爆炸性化合物可同库储藏。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "互为禁忌物料的危险化学品可以装在同一车、船内运输。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "化学泡沫灭火剂可以用来扑救忌水忌酸的化学物质和电气设备的火灾。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "化学品安全标签里用CNNo.代表联合国危险货物编号。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "化学品安全标签里用UNNo.表示中国危险货物编号。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "化学品安全标签上的警示词位于化学品名称的上方,必须醒目、清晰。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "化学品安全标签应由生产企业在货物出厂前粘贴、挂拴、喷印。若要改换包装,则由原生产企业重新粘贴、挂拴、喷印标签。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "化学品安全技术说明书(SDS)是化学品经营单位向用户提供基本危害信息的工具。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "化学事故发生后,采样检测工作进行一段时间就可以结束,检测结果不必连续报告。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "患职业病的情形,不属于工伤。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "活泼金属着火可以用二氧化碳灭火。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "火花放电释放的能量较小。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "火花放电释放的能量小。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "加油站邻近单位发生火灾时,可继续营业但应向上级报告。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "甲、乙类仓库内可设置办公室、休息室等。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "建设项目的职业病防护设施发生重大变更的,建设单位应当重新进行职业病危害预评价,办理相应的备案或者审核手续。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "建设项目在竣工验收后,建设单位应当进行职业病危害控制效果评价。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "建设项目职业病防护用品必须与主体工程同时设计、同时施工、同时投入生产和使用。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "将易制毒化学品许可证或者备案证明转借他人使用的;负有监督管理职责的行政主管部门吊销相应的许可证。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "进入危险化学品库区的机动车辆应安装防火罩。机动车装卸货物后,可在库区、库房、货场内停放和进行修理作业。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "进行焊接时可以用沾有油污的手或带有油迹的手套去触碰氧气瓶或氧气设备。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "静电屏蔽可以消除静电电荷。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "静电事故多发生在潮湿的季节。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "静电中和器主要用来消除导体上的静电。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "具有抛射危险而无整体爆炸危险的物质和物品不属于爆炸品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "剧毒化学品经营企业销售剧毒化学品,应当记录购买单位的名称、地址和购买人员的姓名、身份证号码及所购剧毒化学品的品名、数量、用途。记录应当至少保存半年。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "剧毒化学品以及储存数量构成重大危险源的其他危险化学品,应当在专用仓库内单独存放,实行双人收发、单人保管制度。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "剧毒物品的仓库应使用密闭措施。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "开展安全标准化是企业的自主行为,不需要政府或其他有关部门的监督与考核。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可能产生职业中毒危害的建设项目,未依照职业病防治法的规定进行职业中毒危害预评价,或者预评价未经卫生行政部门审核同意,可自行开工。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可燃尾气的烟道可以用砖石垒砌。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可燃物质的爆炸极限是恒定的。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可燃物质的自燃点是一个固定不变的数值,它与其他因素无关。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可以从液化石油气储罐或罐车直接向气瓶灌装。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可以生产、销售或者使用不合格的消防产品以及国家明令淘汰的消防产品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可以使用塑料管输送易燃液体。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可以预警的自然灾害、事故灾难和公共卫生事故预警级别,分为一级、二级、三级、四级,四级为最高级别。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "可以在危险化学品储存区域内短期间堆积可燃废弃物品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "矿山、金属冶炼建设项目和用于生产、储存、装卸危险物品的建设项目的安全设施设计未按照国家有关规定报经有关部门审查,可以先投入施工建设。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "劳动过程中的职业病危害因素一般包括:生产场所设计不符合卫生标准、缺乏必要的安全卫生技术设施、缺乏安全防护设施等。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "劳动者因某种原因未接受离岗时职业健康检查,用人单位可以解除或者终止与其订立的劳动合同。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "硫化氢侵入人体的主要途径是皮肤。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "硫酸铵是一种碱性腐蚀品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "密度小于水和不溶于水的易燃液体的火灾,可以用水进行扑救。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "某厂油污法兰损坏需维修。维修钳工甲将带有污油底阀的污油管线放入污油池内,当时污油池液面高度为500cm,上面浮有30cm的浮油。在液面上的101cm处需对法兰进行更换,班长乙决定采用对接焊接方式。电焊工内去办理动火票,钳工甲见焊工丙办理动火手续迟迟没回,便开始焊接,结果发生油气爆炸,钳工甲掉入污油池死亡。根据上述事实,电焊工不是特殊工种,不用按照国家有关规定经专门的安全作业培训,取得相应资格。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "某化工厂准备开展一次应急响应功能演习,演习计划将盛有丙烯腈的储罐运到这片空地,但是为了防止演习发生意外事故,储罐只剩余约1/5体积的丙烯腈。根据上述描述,请判断,该厂演习有毒有害气体泄漏事故时,可以使用真正的有毒化学品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "某危险化学品经营公司,经营范围是一般危险化学品,《危险化学品经营许可证》于2006年10月30日到期,尚未申请换证。2007年4月5日,装卸工在仓库内搬运货物时,将一瓶甲苯二异氰酸酯(剧毒化学品)撞碎,导致多人中毒。根据上述情况,该公司应于《危险化学品经营许可证》到期1个月前,向发证机关提出经营许可证的延期申请,并提交相关文件、资料。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "浓硫酸、烧碱、液碱可用铁制品做容器储存,因此也可用镀锌铁桶储存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "扑救有毒气体火灾时要戴防毒面具,且要站在下风方向。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "企业一旦发生重大危险源事故,本企业抢险抢救力量不足,不必请求社会力量援助。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "气瓶充装站只要具备相当规模,未办理注册登记的,也可以从事充装工作。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "氢氟酸可用玻璃及陶瓷容器储存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "氢气储存间内的照明、通风等设施应采用防爆型,开关可以设在仓内。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "人可以长期吸入氧气,而且氧气越纯越好。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "人身触电事故特指电击事故。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "人体电阻随着接触电压升高而急剧升高。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "如果工伤事故责任在伤者,那么他将不享受工伤保险补偿。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "如果用人单位没有统一购买劳动防护用品,应该按照法律、法规或标准的规定,发给从业人员资金由其自行购买。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "散装储存是将物品装于小型容器或包件中储存;整装储存是物品不带外包装的净货储存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "闪点较低的物质危险性较小。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "闪点是表示易燃易爆液体燃爆危险性的一个重要指标,闪点越高,爆炸危险性越大。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "上级单位应当指导、督促检查生产经营单位做好应急预案的备案登记工作,建立应急预案备案登记建档制度。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产、储存、使用、经营、运输危险化学品的单位的安全生产管理人员对本单位的危险化学品安全管理工作全面负责。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产、储存危险化学品的单位,应当对其铺设的危险化学品管道设置明显标志,并对危险化学品管道不定期检查、检测。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产单位出厂的危险化学品,其包装上必须加贴标准的安全标签,出厂的非危险化学品可以没有标志。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产环境的职业病危害因素一般包括:劳动组织和制度不合理、劳动强度大或劳动组织安排不当、人体个别器官或系统过度紧张和不良的人机因素等。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位必须依法参加工伤社会保险,保险费由从业人员和单位各缴纳一半。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位的应急预案由生产经营单位主要负责人签署公布后,再进行评审或者论证。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位的主要负责人、安全生产管理人员及从业人员的安全培训,由生产经营单位负责。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位对排查出的事故隐患,应当及时进行治理,但不必登记、建档。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位对职业安全健康管理方案应每年进行一次评审,以确保管理方案的实施,能够实现职业安全健康目标。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位发生生产安全事故时,单位的安全生产管理人员应当立即组织抢救,并不得在事故调查处理期间擅离职守。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位发生事故后,应当及时启动应急预案,组织有关力量进行救援,不必将事故信息及应急预案启动情况报告安全生产监督管理部门和其他负有安全生产监督管理职责的部门。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位风险种类多、可能发生多种事故类型的,可以不用编制本单位的综合应急预案。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位可以将生产经营项目、场所、设备发包或者出租给不具备安全生产条件或者相应资质的单位或者个人,从事生产经营活动。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位内部一旦发生危险化学品事故,单位负责人必须立即按照上级制定的应急预案组织救援。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位生产工艺和技术发生变化的应急预案不需要修订。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位使用应当淘汰的危及生产安全的工艺、设备的,经采取措施可以继续使用。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产经营单位主管安全工作的领导对本单位事故隐患排查治理工作全面负责。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "生产企业若发现化学品有新的危害性,在有关信息发布后的一个月内,必须对《安全技术说明书》的内容进行修订。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "盛装化学品的包装,不必到指定部门检验,但包装要满足有关试验要求。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "盛装危险化学品的容器或包装,确认危险品用完后即可撕下相应的安全标签。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "使用剧毒化学品的单位可以出借剧毒化学品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "使用有毒物品作业的用人单位可以按照国务院卫生行政部门或行业管理部门的规定,向卫生行政部门及时、如实申报存在职业中毒危害项目。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "事故调查组有权向有关单位和个人了解与事故有关的情况,并要求其提供相关文件、资料,有关单位和个人可酌情提供。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "事故发生后,不管情况如何,事故现场有关人员不得直接向事故发生地县级以上人民政府安全生产监督管理部门和负有安全生产监督管理职责的有关部门报告。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "事故隐患分为一般事故隐患、较大事故隐患、重大事故隐患、特大事故隐患。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "受突发事件影响地区的生产经营单位应当根据本地区遭受损失的情况,制定救助、补偿、抚慰、抚恤、安置等善后工作计划并组织实施,妥善解决因处置突发事件引发的矛盾和纠纷。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "属于易制毒化学品中的危险化学品可以使用现金或者实物进行交易。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "数十毫安的电流短时间通过人体,虽有一定危险但不会致命。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "水压试验用水温度应高于周围露点的温度,以防锅炉或容器表面结露。且水温越高越好。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "碳化钙的储存库房,应当处于阴暗潮湿,并经常通风的库房内。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "特别重大事故,是指造成20人以上死亡,或者100人以上重伤(包括急性工业中毒),或者1亿元以上直接经济损失的事故。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "特种设备以及危险物品的容器、运输工具,以及涉及人身安全、危险性较大的海洋石油开采特种设备和矿山井下特种设备,未经取得专业资质的机构检测、检验合格,取得安全使用证或者安全标志,可以采取措施先投入使用。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "特种作业人员未按照规定经专门的安全作业培训,取得相应资格,可以先上岗作业再培训。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "通风情况是划分爆炸危险区域的重要因素,它分为一般机械通风和局部机械通风两种类型。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "通用机械的急停装置可以用来代替安全防护措施和其它安全功能。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "同是氧化剂,特性基本相同,可以任意混储混运。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "突发事件发生地的其他单位应当服从人民政府发布的决定、命令,配合人民政府采取的应急处置措施,做好本单位的应急救援工作,并积极组织人员参加本单位的应急救援和处置工作。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "外力除去后构件恢复原有的形状,即变形随外力的除去而消失,这种变形称为塑性变形。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险、有害因素是可能导致伤害、疾病、财产损失、环境破坏的根源或状态。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品仓库按其使用性质和经营规模分为特大型仓库、大型仓库、中型仓库、小型仓库四种类型。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品仓库的库房门应为铁门或木质外包铁皮并采用内开式。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品仓库应有专职或义务消防、警卫队伍。如果是义务消防、警卫队伍,不必制定灭火预案和进行消防演练。但专职消防队伍必须制定灭火预案并经常进行消防演练。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品的包装必须符合国家法律、法规、规章的规定和国家标准或企业标准的要求。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品的标志设主标志由表示危险化学品危险特性的图案、文字说明、底色和危险类别号四个部分组成的菱形标志。副标志图形与主标志相同。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品建设项目竣工,未进行职业中毒危害控制效果评价,或者未经卫生行政部门验收,可以投入生产、运行。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品经营单位仓储经营的企业异地重建的,不需要重新申请办理危险化学品经营许可证。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品经营单位带有储存设施的经营企业变更其储存场所的,不需要重新申请办理危险化学品经营许可证。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品经营企业未取得危险化学品经营许可证的可以一边经营一边申请许可证。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品经营销售实行许可制度只适用于中华人民共和国境内国有企业,不适用于个人或私有企业。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品库房门应为木质门,采用外开式,设置高侧窗。(剧毒物品仓库的窗户应加设铁护栏)。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品库房门应为铁门或木质外包铁皮,采用内开式。设置高侧窗(剧毒物品仓库的窗户应加设铁护栏)。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品库房贴近地面应增设强制通风设施,定期置换仓库内的有毒气体。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品生产单位在厂外设立销售网点销售本单位生产的危险化学品,不需办理经营许可证。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品生产企业发现其生产的危险化学品有新的危害特性时,应当立即公告,安全技术说明书和安全标签可暂缓修订。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险化学品项目的职业卫生防护设施无需与主体工程同时设计,同时施工,同时投入生产和使用,可先行投产、运行。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险品不得与禁忌物料混合储存,灭火方法不同的危险化学品可以同库储存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "危险物品的生产、经营、储存单位,应当设置安全生产管理机构或者配备兼职安全生产管理人员。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "违反《中华人民共和国突发事件应对法》规定,构成犯罪的,依法追究民事责任。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "为了防止职工在生产过程中受到职业伤害和职业危害,按工作特点配备的劳动防护用品、用具可适当的向职工收取一定的费用。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "未取得危险化学品经营许可证的企业可少量采购危险化学品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "无关人员可以搭乘装有易燃易爆化学物品的运输车辆。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "物质得以燃烧的唯一条件是可燃物与氧化剂作用并达到一定的数量比例。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "现场处置方案的应急组织与职责主要包括:基层单位应急自救组织形式及人员构成情况。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "现场处置方案的应急组织与职责主要包括应急自救组织机构、人员的具体职责,不应同单位或车间、班组人员工作职责紧密结合,明确相关岗位和人员的应急工作职责。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "现场处置方案中重要物资装备的名录或清单应列出应急预案涉及的重要物资和装备名称、型号、存放地点等。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "享受因工伤残保险的的职工就算违法犯罪也不能被企业开除。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "小村和王伟是新分到化工厂的工人,小村是押运人员,王伟是驾驶员,没经过任何培训就安排上岗了。他们一起运送一批危险化学品去较远的B城市,车走到半路,小村想抽烟。王伟说:“再忍耐一下,前边就是A市了,去那里准能买上。”于是王伟加快了车速,抄近道超速行驶,很快就到了A市。王伟把车停在一个较大的百货商店门口,小村进去买了一包烟,他们又上路了,路上又捎上一搭车人,他们抽着烟边开边聊。吃饭时间到了,可还没到B市 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "新建的生产企业应当在竣工验收后办理危险化学品登记。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "信息上报就是明确事故发生后向上级主管单位报告事故信息的流程、内容和时限。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "压力容器,可由没有制造许可证的专业单位制造。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "压力容器爆破时所能释放的能量与它的工作介质的物性状态没有关系。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "压缩气体和液化气体的特点是压力大、温度高。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "压缩气体如正丁烷、乙炔等发生着火时,应迅速灭火,然后切断气源。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "严禁在油气区内用有色金属敲打撞击作业。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "演练实施过程中,安排行动人员采用文字、照片和音像等手段记录演练过程。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "演练书面总结报告不必对应急演练准备、策划等工作进行简要总结分析。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "氧化剂应储存于清洁、阴凉、通风、干燥的厂房内。远离火种、热源,照明设备可以用非防爆的。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "液化石油气瓶用户及经营者,可以将气瓶内的气体向其它气瓶倒装,自行处理气瓶内的残液。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "液体流速越快,产生的静电荷越少。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "一般来讲,物质越易燃,其火灾危险性就越小。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "一般说来,液体密度越大,闪点越高,自燃点也越高,故发生火灾的危险性越小。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "一次事故中死亡3~9人的是特大生产安全事故。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "乙类危险化学品分装、改装、开箱检查应在库房内进行。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "易燃、易爆品必须装在铁帮、铁底车、船内运输。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "易燃液体、遇湿易燃物品、易燃固体与氧化剂可混合储存,但具有还原性的氧化剂应单独存放。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "易燃液体一般电导率很小,所以不易在流动中产生和积累静电。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "易燃易爆作业场所必须尽量用扫帚和拖把清扫粉尘。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "易燃蒸气与空气的混合浓度不在爆炸极限之内,遇火源就不会发生燃烧和爆炸。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "应急救援过程中,应急救援人员应在事故地区的主要交通要道、路口设安全检查站,控制抢险救援的车辆通行。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "应急救援指挥部由工会主席任总指挥;有关人员任副总指挥。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "应急预案的编制可以明确应急组织和人员的职责分工,并有具体的落实措施。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "应急预案的编制可以应急准备代替应急保障措施,也能满足本地区、本部门、本单位的应急工作要求。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "应急预案的目的是避免突发事件的发生,杜绝对工人、居民和环境的危害。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "应急预案是针对可能发生的事故,为迅速、有序地开展应急行动而预先制定的管理规定。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "应急预案应当包括应急组织机构和人员的联系方式、应急物资储备清单等附件信息。附件信息应当经常更新,确保信息准确有效。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "应急组织指挥体系或者职责已经调整的生产经营单位应急预案可三年后修订。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "用人单位的职业卫生管理人员对本单位的职业病防治工作全面负责。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "用人单位工作场所存在职业病目录所列职业病的危害因素的,应当及时、如实向所在地消防部门申报危害项目,接受监督。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "用人单位应当将工作过程中可能产生的职业病危害及其后果,有选择的告知劳动者。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "用人单位应当实施由人兼职负责的职业病危害因素日常监测,并确保监测系统处于正常运行状态。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "用人单位与劳动者订立劳动合同时,可以不告知劳动者在工作过程中可能产生的职业病危害及其后果、职业病防护措施和待遇等。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "用于引爆炸药的导火索不属于爆炸品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "有毒品不溶于水时,人体的中毒可能性就很小。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "有火灾爆炸危险的厂房内,通风气体可以循环使用。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "有机过氧化物不是危险化学品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "有压力或密封的容器可直接在其本体上焊割。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "遇火、遇热、遇潮能引起燃烧、爆炸或发生化学反应,产生有毒气体的危险化学品可以露天存放,但不得在潮湿、积水的建筑物中储存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "遇湿易燃物品不会发生爆炸。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "遇湿易燃物品库房必须干燥,严防漏水或雨雪浸入,但可以在防水较好的露天存放。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "遇湿易燃物品灭火时可使用的灭火剂包括干粉、干黄土、干石粉和泡沫灭火。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "运输爆炸品时必须经交通管理部门批准,按规定的行车时间和路线凭准运证方可起运。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "运输危脸化学品的驾驶员、押运员、船员不需要了解所运输的危险化学品的性质、危害特性、包装容器的使用特性和发生意外时的应急措施。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "运输危险化学品的车、船和其它运输工具内允许搭乘无关人员。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "运输压缩气体和液化气体钢瓶时,必须戴好钢瓶上的安全帽。钢瓶一般应平放,瓶口朝向没有严格要求,可以交叉放置。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "杂质对于爆炸品的敏感度也有很大影响,在一般情况下,固体杂质,特别是硬度高、有尖棱的杂质能够降低爆炸品的敏感度。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在采取措施的情况下,可以利用内河以及其他封闭水域等航运渠道运输剧毒化学品。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在管理中必须把人的因素放在首位,体现以人为本的指导思想,这就是安全第一原则。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在空气充足的条件下,可燃物与火源接触即可着火。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在任何情况下,安全生产监督管理部门和负有安全生产监督管理职责的有关部门不可以越级上报事故情况。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在同一房间或同一区域内,不同的物料之间分开一定的距离,非禁忌物料间用通道保持空间的储存方式是隔开储存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在同一建筑物或同一区域内,用隔板或墙,将禁忌物料分开的储存方式叫隔离储存。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在危险品的管理中,干的或未浸湿的二硝基苯酚被列为易燃固体管理。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在应急救援过程中救援人员组织群众撤离危险区域时,可以横穿危险区域。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在职业安全健康管理体系中绩效测量和监测中被动测量是一种预防机制。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在职业病目录中,职业性哮喘属于生物因素所致职业病。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "在职业危害识别过程中,生产中使用的全部化学品、中间产物和产品均需要进行职业卫生检测。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "炸药的热感度是指炸药在热作用下发生燃烧的难易程度。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "直流电流与交流电流相比,容易摆脱,其室颤电流也比较小,因而,直流电击事故很少。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "职业安全健康管理体系的建立与保持,可以全面提高企业的安全管理水平,表现为全员参与,领导重视与不重视并不重要。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "职业安全健康管理体系运行模式,其核心都是为生产经营单位建立一个全员参与的管理过程。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "职业安全健康管理体系中初始评审过程不包括法律、法规及其他要求内容。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "职业病病人变动工作单位,享有的待遇发生变化。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "职业病防护设施所需费用不能纳入建设项目工程预算。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "职业病危害严重的建设项目,其职业病防护设施设计未经审核同意的,建设单位不得进行施工,应当进行整改后重新申请审核。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "职业病诊断、鉴定的费用由用人单位承担,再次鉴定的费用由个人承担。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "职业性危害因素所致职业危害的性质和强度取决于危害因素的本身理化性能。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "只要发生燃烧就会产生火焰。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "只要具备燃烧三要素(可燃物、助燃物、点火源),即会引起燃烧。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "贮罐收料时可以直接从贮罐上部注入。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "专项应急预案应当包括危险性分析、预防措施、应急处置程序和应急保障等内容。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "专职消防队的队员不能享受社会保险和福利待遇。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "装卸易燃易爆品人员,在各项操作中可以使用手持金属装卸工具,但作业现场应远离热源和火源。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "装运危险货物的罐(槽)应配备泄压阀、防波板、遮阳物、压力表、液位计、导除静电等安全装置。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "自燃点与闪点一样都是可燃物质的固有性质。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "自燃物品着火不需氧气。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "阻火器的基本原理是由于液体封在气体进出之间,在液封两侧的任何一侧着火,火焰都将在液封底熄灭,从而阻止了火焰蔓延。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	},
	{
		"q": "最小点火能是指能引起爆炸性混合物燃烧爆炸时所需的最小能量。最小点火能数值愈大,说明该物质愈易被引燃。 ",
		"o": [
			"错误"
		],
		"a": [
			0
		]
	}
]
	return tiku.map((item,id)=>{
		return {
			daan: item.o[item.a[0]],
			id,
			state: 0,
			timu: item.q,
			xuanxiang: []
		}
	})
})