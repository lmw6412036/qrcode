const config = require('/common/util/config');
const http = require('/common/help.js');
App({
	globalData: {},
	account: {
		n: "zfbxcx",
		p: "1wdvngrt6yujmi",
		k: "1a0a69725e9c426c8424f911df5d3107"
	},
  apiUrl: 'http://crjqgb.whllyf.com:8888/api/',
  onLaunch(options) {
    // 第一次打开
	console.log(options)
	if(options.query != undefined && options.query.code){
		this.globalData.code = options.query.code;
		(async function(){
			  const res = await http.Unite(options.query.code);
			  if(res.data.code != 0){
				my.showToast({
					type: 'exception',
					content: '暂未查询到有关信息，请检查是否有权限',
					duration: 3000,
				});
			  }
		  })();
	}
	// if(options.query != undefined && options.query.auth_token){
	// 	(async function(){
	// 		let req = {
	// 			auth_token: options.query.auth_token ,
	// 			appid: 'VG76jvTB',
	// 			requestTime: '6000',
	// 		}
	// 		http.rsa('encrypt',req).then( res =>{
	// 			req.sign = res.text
	// 		})
	// 		const res = await http.ajax('http://www.jxzwfww.gov.cn/jmportalgft/interfaces/UserAuth/verifyToken.do',req);
	// 		if(res.data.result == 'true'){
	// 			//encrypt加密，decrypt解密
	// 			http.rsa('decrypt',)
	// 		}
	// 	})();
	// }
	 this.globalData.query = options;
	},
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  
});
