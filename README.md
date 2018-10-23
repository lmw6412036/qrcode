##微信小程序
![12345.png](https://upload-images.jianshu.io/upload_images/6135193-47ae2bb746c019be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**wxml**
```
------index.wxml------
<view class="container page">
  <view class="panel">
    <view class="header">请扫描以下任意条码或二维码</view>
    <view class="barcode">
      <view class="barnum">{{code}}</view>
      <canvas canvas-id="barcode" />
    </view>
    <view class="qrcode">
      <canvas canvas-id="qrcode" width="420" height="420"/>
    </view>
  </view>
</view>
```
**wxss**
```
------index.wxss------
page {
    background-color: #1b82d2;
}

.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {
	padding-bottom: 10rpx;
}

.panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    box-sizing: border-box;
    width: 710rpx;
    margin-top: 40rpx;
    border-radius: 10rpx;
    background-color: #fff;
}

.header {
    height: 140rpx;
    line-height: 140rpx;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 10rpx 10rpx 0 0;
}

.barcode {
    display: flex;
    height: 320rpx;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.barnum {
    width: 670rpx;
    height: 100rpx;
    line-height: 100rpx;
    font-size: 38rpx;
    font-weight: bold;
    text-align: center;
    letter-spacing: 10rpx;
    white-space: nowrap;
}

.barcode > canvas {
    width: 680rpx;
    height: 200rpx;  
}

.qrcode {
    height: 420rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

.qrcode > canvas {
    width: 420rpx;
    height: 420rpx;
}

```
**js**
```
//index.js
const barcode = require('../../utils/barcode.js');
import { qrcode } from '../../utils/qrcode.js';

Page({

    data: {
      code: 'AQ4201000878876'
    },

    onLoad: function() {
      //条形码
      barcode.code128(wx.createCanvasContext('barcode'), this.data.code, 680, 200);
      //二维码
      qrcode.draw(this.data.code,'qrcode', 230);
    }
})
```
## 支付宝小程序
![zfb.png](https://upload-images.jianshu.io/upload_images/6135193-068e4e1171d56020.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## axml
```
<view class="container page">
  <view class="panel">
    <view class="header">请扫描以下任意二维码或条形码</view>
    <view class="barcode">
      <canvas id="barcode" width="680" height="200"/>
	  <view class="barnum">{{code}}</view>
    </view>
    <view class="qrcode">
      <canvas id="qrcode" width="420" height="420"/>
    </view>
  </view>
</view>
```
## acss
```
page{
	background-color: #1b82d2;
}
.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {
	padding-bottom: 10rpx;
}

.panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    box-sizing: border-box;
    width: 710rpx;
    margin-top: 100rpx;
    border-radius: 10rpx;
    background-color: #fff;
}

.header {
    height: 140rpx;
    background-color: #f0f0f0;
    border-radius: 10rpx 10rpx 0 0;
	text-align: center;
	line-height: 140rpx;
	font-weight: bold;
	letter-spacing: 2px;
	color: #1b82d2;
}

.barcode {
    display: flex;
    height: 320rpx;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.barnum {
    width: 670rpx;
    height: 100rpx;
    line-height: 100rpx;
    font-size: 38rpx;
    font-weight: bold;
    text-align: center;
    letter-spacing: 10rpx;
    white-space: nowrap;
}

.barcode > canvas {
    width: 680rpx;
    height: 200rpx;  
	background-color: #fff;
}

.qrcode {
    height: 420rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
	overflow: hidden;
}
#qrcode{
    width: 420rpx;
    height: 420rpx;
	background-color: #fff;
}
```
## js
```
const barcode = require('../../common/util/barcode');
import { qrcode } from '../../common/util/qrcode';
Page({
	data: {
		code: 'E01181016286106'
	},
	onLoad(query) {
		// 页面加载
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
```
