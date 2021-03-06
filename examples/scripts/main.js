require("../styles/style.less")
require("fetch-ie8/fetch.js")

var remote = require('src/index.js').remote
remote.base({
	requestJSON : false
})

var cb = remote.extend({
	// url : '/api/todos',
	url: 'https://api.github.com/users',
	method : 'GET'
	// body : {a:1}
	
})
cb().then(res =>{
	alert(123)
	console.log('success')
}).catch(error =>{
	alert('c')
	return error.text().then(res =>{
		alert(res)
	})
})

if (process.env.NODE_ENV !== 'production') {
	console.log('this is dev mode')
}
/*
	动态设置publicPath，在正式环境运行的时候为绝对路径，如果需要手动指定，可以直接设置
	__webpack_public_path__的值

 */
var scripts = document.getElementsByTagName("script");
for (var i = scripts.length - 1; i >= 0; i--) {
	if(scripts[i].src.indexOf('.bundle.js') >= 0){
		var src = scripts[i].getAttribute("src");
		__webpack_public_path__ = src.substr(0, src.lastIndexOf("/") + 1);
		break;
	}
}
