// 手机号码验证
export const mobile = (value) => {
	let reg = /^1[3456789]\d{9}$/
	return reg.test(value)
}
// 验证密码
export const password = (value) => {
	let reg = /^[A-Za-z0-9]{6,20}$/
	return reg.test(value)
}
// 邮箱验证
export const email = (value) => {
	let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
	return reg.test(value)
}
// qq验证
export const qq = (value) => {
	let reg = /^[1-9][0-9]{4,11}$/
	return reg.test(value)
}
// 昵称不能包含特殊字符验证
export const nickName = (value) => {
	let reg = /[\'.,:;*?~`!@#$%^&+=)(<>{}]|\]|\[|\/|\\\|\"|\|/
	return value.match(reg)
}
// 电话号码
export const isPhone = (value) => {
	return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(value)
}
// 是否url地址
export const isURL = (value) => {
	return /^http[s]?:\/\/.*/.test(value)
}
// 是否字符串
export const isString = (value) => {
	return Object.prototype.toString.call(value).slice(8, -1) === 'String'
}
// 是否数字
export const isNumber = (value) => {
	return Object.prototype.toString.call(value).slice(8, -1) === 'Number'
}
// 是否boolean
export const isBoolean = (value) => {
	return Object.prototype.toString.call(value).slice(8, -1) === 'Boolean'
}
// 获取滚动的坐标
export const getScrollPosition = (el = window) => ({
	x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
	y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
// 滚动到顶部
export const scrollToTop = () => {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 8);
	}
}
// 严格的身份证校验
export const isCardID = (sId) => {
	if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
		console.log('你输入的身份证长度或格式错误')
		return false
	}
	//身份证城市
	var aCity = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外"
	};
	if (!aCity[parseInt(sId.substr(0, 2))]) {
		console.log('你的身份证地区非法')
		return false
	}
	// 出生日期验证
	var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g,
			"/"),
		d = new Date(sBirthday)
	if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
		console.log('身份证上的出生日期非法')
		return false
	}
	// 身份证号码校验
	var sum = 0,
		weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
		codes = "10X98765432"
	for (var i = 0; i < sId.length - 1; i++) {
		sum += sId[i] * weights[i];
	}
	var last = codes[sum % 11]; //计算出来的最后一位身份证号码
	if (sId[sId.length - 1] != last) {
		console.log('你输入的身份证号非法')
		return false
	}
	return true
}
// 纯数字验证
export const integer = (value) => {
	let reg = /^\d+$/
	return reg.test(value)
}
// 去重
export const unique = (arr) => {
	if (Array.hasOwnProperty('from')) {
		return Array.from(new Set(arr));
	} else {
		var n = {},
			r = [];
		for (var i = 0; i < arr.length; i++) {
			if (!n[arr[i]]) {
				n[arr[i]] = true;
				r.push(arr[i]);
			}
		}
		return r;
	}
}
//求和
export const sum = (arr) => {
	return arr.reduce((pre, cur) => {
		return pre + cur
	})
}
//数组排序，{type} 1：从小到大 2：从大到小 3：随机
export const sort = (arr, type = 1) => {
	return arr.sort((a, b) => {
		switch (type) {
			case 1:
				return a - b;
			case 2:
				return b - a;
			case 3:
				return Math.random() - 0.5;
			default:
				return arr;
		}
	})
}