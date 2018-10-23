//index.js
var barcode = require('../../utils/barcode.js');
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
