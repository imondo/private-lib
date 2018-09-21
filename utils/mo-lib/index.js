/*自己碰到的一些有意思的函数公用出来的方法*/
class MoLib {
  /**
   * 将数组重复元素归类组装成树形结构
   * @param {Array} arr  需要组装的数据
   * @param {String} repeatKey 重复元素的key 
   * @param {String} majorKey 归类到重复元素的key
   * @return 树形结构
   * */
  static setRepeatObj({arr, repeatKey='area', majorKey='name'}) {
    if (!Array.isArray(arr)) return false;
    let _arr = arr;
    let m = {}
    for(let i = 0; i< _arr.length; i++){
      let t = _arr[i]
      if(!m[t[repeatKey]]){
        m[t[repeatKey]] = []
      }
      m[t[repeatKey]].push(t[majorKey])
    }
    console.log(m);
    let arrs = []
    for(let key in m){
      arrs.push({ [repeatKey]: key, [majorKey]: m[key] })
    }
    return arrs;
  }

  /**
   * 生成26个字母
   * @return 26个字母数组
   * */
  static getLetter () {
    let _ch = 'A';
    let letters = [];
    for(let i=0;i<26;i++){
      letters.push(String.fromCharCode(_ch.charCodeAt(0)+i));
    }
    return letters;
  }

  /**
   * 获取某月份的天数
   * @param {String} year
   * @param {String} month
   * @return 某月份的天数
   * */
  static getDaysInOneMonth({year, month}){
    let _month = parseInt(month, 10);
    let d = new Date(year, _month, 0);
    return d.getDate();
  }

  /**
   * 数组删除元素 返回删除元素的数组
   * @params {Array} arr原数组
   * @params {String} ele 元素
   * @params {String} key 对象key
   * @return 返回删除元素的数组
   * */
  static arrRemove ({ arr, ele, key }) {
    if (!Array.isArray(arr)) { return false; }
    let isObj = false;
    for (let val of arr) {
      if (val instanceof Object) {
        isObj = true;
      }
    }

    if (isObj) {
      let _index = arr.findIndex(v => v[key] === ele);
      arr.splice(_index, 1);
    } else {
      let _index = arr.findIndex(v => v === ele);
      arr.splice(_index, 1);
    }
    return arr;  
  }


/**
* 时间转换刚刚，几分钟前
* @params {String} dateTimeStamp 时间戳
* @return 转化后的时间，如 刚刚， 2分钟前
* */ 
 
 static timestampFormat (dateTimeStamp) {
   const minute = 1000 * 60;
   const hour = minute * 60;
   const day = hour * 24;
   const halfamonth = day * 15;
   const month = day * 30;
 
   const now = new Date().getTime();
   let diffValue = now - dateTimeStamp;
   const monthC = diffValue / month;
   const weekC = diffValue / (7 * day);
   const dayC = diffValue / day;
   const hourC = diffValue / hour;
   const minC = diffValue / minute;
   const _date = new Date(dateTimeStamp);
   let result = '';
   if (dayC >= 1) {
     let year = _date.getFullYear();
     let month = _date.getMonth() + 1;
     let day = _date.getDate();
     result = [year, month, day].map(formatNumber).join('-');
   } else if (hourC >= 1) {
     result = parseInt(hourC) + '小时前';
   } else if (minC > 1) {
     result = parseInt(minC) + '分钟前';
   } else {
     result =  '刚刚';
   }
   return result;
 }

/**
 * 扁平数据转换成树结构
 * @param {Array} treeArray
 * @return 树型结构
 * */
 static getTree (treeArray, config) {
    var r = [],
      tmpMap ={},
      id = config.id || 'id',
      pid = config.pid || 'parentId',
      children = config.children || 'children';

    for (let val of treeArray) {
      tmpMap[val[id]]= val; 
    }

    for (let val of treeArray) {
      let key = tmpMap[val[pid]];            
      if (key) {
        if (!key[children]){
          key[children] = [];
          key[children].push(val);
        } else {
          if (key[children].some(v => v[id] !== val[id])) {
            key[children].push(val);
          }
        }    
      } else {
        r.push(val);
      }
    }
    return r
  }

/**
 * randomWord 产生任意长度随机字母数字组合
 * @param randomFlag 是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 * @param min
 * @param max
 * @returns {string}
 */
  static randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
  }  

/**
 * generateUUID 生成UUID
 * @returns {string} 返回字符串
 */
  static generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
  }  

}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n;
}

module.exports = MoLib;