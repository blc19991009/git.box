// https://underscorejs.net/#arrays 是js工具库

/* 
	doWeight 数组去重
	@param {Array} array
 */
function doWeight(array) {
	var res = [];
	for (var i = 0; i < array.length; i++) {
		if (res.indexOf(array[i]) === -1) {
			res.push(array[i])
		}
	}
	return res;
}

/* 
	sort 数组排序 sort
	@param {Array} arr
	@param {Key}	key
	@param {Boolean} flag
 */
function sort(arr, key, flag) {
	if (flag) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (Number(arr[i][key]) > Number(arr[j][key])) {
					var tmp = arr[i];
					arr[i] = arr[j];
					arr[j] = tmp;
				}
			}
		}
	} else {
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (Number(arr[i][key]) < Number(arr[j][key])) {
					var tmp = arr[i];
					arr[i] = arr[j];
					arr[j] = tmp;
				}
			}
		}
	}
	return arr
}
/* 
	sort 数组排序 sort
	@param {Array} array
	@param {Boolean} flag
 */
function sort(array, flag) {
	if (flag) {
		for (var i = 0; i < array.length; i++) {
			for (var j = i + 1; j < array.length; j++) {
				if (array[i] > array[j]) {
					var tmp = array[i];
					array[i] = array[j];
					array[j] = tmp;
				}
			}
		}
	} else {
		for (var i = 0; i < array.length; i++) {
			for (var j = i + 1; j < array.length; j++) {
				if (array[i] < array[j]) {
					var tmp = array[i];
					array[i] = array[j];
					array[j] = tmp;
				}
			}
		}
	}
	return array
}

/* 
	求最大值 max()
	@param {Array} arr 要求最大值的数组
 */
function max(arr) {
	var max = arr[0];
	for (var i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i]);
	}
	return max
}

/* 
	查看对象中是否存在某个键 property()
	@param {Object} object 查询的对象
	@param {Key}    key		查询的键
 */
function property(object, key) {
	var res = object.hasOwnProperty(key)
	return res
}

/* 
	检查字符串中是否存在某个字符  strIsHere()
	@param {String} string  要查询的字符串
	@param {Char}	chars 要查询的字符
 */
function strIsHere(string, chars) {
	var flag;
	if (string.indexOf(chars) === -1) {
		flag = false;
	} else {
		flag = true;
	}
	return flag;
}

/* 
	获取随机长度的验证码 verificationCode()
	@param {string} str 验证码源字符
	@param {Length} len 要获取的验证码的长度
 */
function code(str, len) {
	var res = '';
	for (var i = 0; i < len; i++) {
		var random = Math.floor(Math.random() * str.length)
		res += str[random]
	}
	return res;
}
/* 
	颠倒一个字符串 reverse()
	@param {string} str 要颠倒的字符串
 */
function reverse(str) {
	var res = []
	for (var i = 0; i < str.length; i++) {
		res.unshift(str[i])
	}
	return res.join('')
}
/* 
	求最后一个单词的长度 lastWord
	@param {string} str 
 */
function lastWord(str) {
	var arr = str.split(' ');
	arr = arr.filter(function(item) {
		return item != '';
	})
	var res = arr[arr.length - 1]
	return res.length
}
/* 
	求区间里的随机整数
	@param {start} start 起始位置
	@param {end}   end   结束位置
 */
function number(start, end) {
	var res = Math.floor(Math.random() * parseInt(end) + parseInt(start))
	return res
}
/* 
	打印当前时间  date()
 */
function date() {
	var date = new Date();
	var YYYY = date.getFullYear();
	var MM = date.getMonth() + 1;
	if (MM < 10) {
		MM = '0' + MM;
	}
	var DD = date.getDate();
	if (DD < 10) {
		DD = '0' + DD;
	}
	var hh = date.getHours();
	if (hh < 10) {
		hh = '0' + hh;
	}
	var mm = date.getMinutes();
	if (mm < 10) {
		mm = '0' + mm;
	}
	var ss = date.getSeconds();
	if (ss < 10) {
		ss = '0' + ss;
	}
	res = (YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss);
	return res
}
