/*自己碰到的一些有意思的函数公用出来的方法*/
class handleMore {
  /**
   * 将数组重复元素归类组装成树形结构
   * @param {Array} arr
   * */
  static setRepeatObj({arr}) {
    if (!Array.isArray(arr)) return false;
    let _arr = arr;
    let m = {}
    for(let i = 0; i< _arr.length; i++){
      let t = _arr[i]
      if(!m[t.area]){
        m[t.area] = []
      }
      m[t.area].push(t.name)
    }
    console.log(m);
    let arrs = []
    for(let key in m){
      arrs.push({ area: key, name: m[key] })
    }
    return arrs;
  }

  /**
   * 生成26个字母
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
   * */
  static getDaysInOneMonth({year, month}){
    let _month = parseInt(month, 10);
    let d = new Date(year, _month, 0);
    return d.getDate();
  }
}

export default handleMore;