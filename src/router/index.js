/**
 * Route模块
 * @module route
 */
const escapeReg = /[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g;
function regexpEscape(str) {
  return str.replace(escapeReg, '\\$&');
}

/** class Rule 路由规则类 */
class Rule {
  /**
   * @constructor
   */
  constructor() {
    this.defaultBase = '#!';
    this.rules = {};
    this.reg = /\{([^{]+)\}/g;
    this.regForSplit = /\{[^{]+\}/;
    this.otherwise = function() {};
  }
  /**
   * 注册路由规则
   * @param {String} url - 路由规则字符
   * @param {Function} func - 回调函数
   */
  on(url, func) {
    const params = [];
    const arr = url.split(this.regForSplit);
    // 替换{}
    let result = arr.map((p) => {
      return regexpEscape(encodeURI(p));
    }).join('([^/?]+?)');
    result += '$';
    // 
    url.replace(this.reg, (m, m1) => {
      params.push(m1);
      return m;
    });
    this.rules[result] = { params: params, event: func };
  }

  /**
   * 触发路由规则
   * @param {String} url - 待触发的URL 
   */
  trigger(url) {
    const regexs = Object.keys(this.rules);
    let count = 0;
    regexs.forEach((reg) => {
      const regObj = new RegExp(reg);
      const match = regObj.exec(url);
      if (match && match[0]) {
        const rule = this.rules[reg];
        const paramObj = {};
        rule.params.forEach((param, index)=>{
          paramObj[param] = match[index += 1];
        });
        rule.event(paramObj);
        count++;
      }
    });
    // 当没有任何规则匹配时
    if (count === 0) {
      this.otherwise();
    }
  }
}

/** class Route 路由控制类 */
class Route {
  constructor() {
    this.rule = new Rule();
    this.defaultBase = this.rule.defaultBase;
  }
  _hashChangeHandler() {
    const url = this._getRealPath(location.hash);
    this.rule.trigger(encodeURI(url));
  }

  _getRealPath(hash) {
  const index = hash.indexOf(this.defaultBase);
  if (index >= 0) {
    return hash.slice(index + this.defaultBase.length);
  }
  return hash;
}
  /**
   * 路由注册完成之后须记得start
   */
  start() {
    if (window.history.length === 1) {
      this._hashChangeHandler();
    }
    window.onhashchange = this._hashChangeHandler;
  }
  /**
   * 注册一个URL规则
   * @param {String} url - 一个URL规则
   * @param {Function} callback - 匹配到规则之后的回调函数
   * @return {Route} 返回当前对象,可进行链式调用
   */
  when(url, callback) {
    if (url.indexOf(this.defaultBase) >= 0) throw new Error(`Can not use ${defaultBase}`);
    this.rule.on(url, func);
    return this;
  }

  /**
   * 当没有任何规则匹配时
   * @param {Function} callback - 回调函数
   */
  otherwise(callback) {
    this.rule.otherwise = func;
    return this;
  }

  /**
   * 跳转函数
   * @param {String} url 
   */
  go(url) {
    location.hash = this.defaultBase + url;
  }
}

const route = new Route();

export default route;
      
