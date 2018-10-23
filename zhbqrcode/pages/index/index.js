const barcode = require('/pages/util/barcode');
import { qrcode } from '/pages/util/qrcode';
Page({
	data: {
		code: 'E01181016286106'
	},
	onReady() {
		// 页面加载完成
		let that = this;
		//绘制条形码
		barcode.code128(my.createCanvasContext('barcode'),that.data.code,680,200);
		//绘制二维码
		qrcode.draw(that.data.code,'qrcode',420);
	},
	onShow() {
		// 页面显示
	},
	onHide() {
		// 页面隐藏
	},
	onUnload() {
		// 页面被关闭
	},
	onTitleClick() {
		// 标题被点击
	},
	onPullDownRefresh() {
		// 页面被下拉
	},
	onReachBottom() {
		// 页面被拉到底部
	},
	onShareAppMessage() {
	// 返回自定义分享信息
	},
})