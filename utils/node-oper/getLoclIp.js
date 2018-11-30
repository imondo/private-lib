const os = require('os');

const nifs = os.networkInterfaces() || []; // 获取网卡信息

let localInfo = nifs['以太网'].find( v => v.family === 'IPv4');

let localIp = localInfo.address || 'localhost';

module.exports = {
  localIp
}