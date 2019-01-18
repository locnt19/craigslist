// function C(k) {
// 	return (document.cookie.match('(^|; )' + k + '=([^;]*)') || 0)[2]
// }
// var pagetype, pagemode;
// (function () {
// 	var h = document.documentElement;
// 	h.className = h.className.replace('no-js', 'js');
// 	var b = document.body;
// 	var bodyClassList = b.className.split(/\\\\s+/);;
// 	pagetype = bodyClassList[0];
// 	var fmt = C('cl_fmt');
// 	if (fmt) {
// 		pagemode = fmt;
// 		bodyClassList.push(fmt);
// 	} else if (screen.width <= 480) {
// 		pagemode = 'mobile';
// 		bodyClassList.push(pagemode);
// 	}
// 	var width = window.innerWidth || document.documentElement.clientWidth;
// 	if (width > 1000) {
// 		bodyClassList.push('w1024');
// 	}
// 	if (typeof catType !== 'undefined') {
// 		var mode = (decodeURIComponent(C('cl_img') || '').match(new RegExp(catType + ':([^,]+)', 'i')) || {})[1];
// 		for (var i = 0, len = bodyClassList.length; i < len; i++) {
// 			if (bodyClassList[i] === 'map') {
// 				mode = undefined;
// 			}
// 		}
// 		if (mode) {
// 			bodyClassList.push(mode);
// 		}
// 	}
// 	b.className = bodyClassList.join(' ');
// }());
