
import Component from '../component';
import Ti from '../tiny';

const escapeReg = /[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g;
function regexpEscape(str) {
  return str.replace(escapeReg, '\\$&');
}


class Rule {
  constructor() {
    this.defaultBase = '#!';
    this.rules = {};
    this.reg = /\{([^{]+)\}/g;
    this.regForSplit = /\{[^{]+\}/;
    this.otherwise = function() {};
  }
  
  //注册路由规则
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

  // 触发路由规则
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
      this.otherwise(url);
    }
  }
}

/**
 * @class Route
 * @ignore 
 */
class Route {
  /**
   * @constructor
   * @ignore 
   */
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
   * 路由注册完成
   * @ignore 
   */
  install() {
    // if (window.history.length === 1) {
    //   this._hashChangeHandler();
    // }
    window.onhashchange = () => {
      this._hashChangeHandler();
    };
    return this;
  }
  /**
   * 注册一个URL规则
   * @alias $route.when
   * @memberof Ti
   * @param {String} url - 一个URL规则
   * @param {Function} callback - 匹配到规则之后的回调函数
   * @return {Route} 返回当前对象,可进行链式调用
   */
  when(url, callback) {
    if (url.indexOf(this.defaultBase) >= 0) throw new Error(`Can not use ${defaultBase}`);
    this.rule.on(url, callback);
    return this;
  }

  /**
   * 当没有任何规则匹配时
   * @alias $route.otherwise
   * @memberof Ti
   * @param {Function} callback - 回调函数
   */
  otherwise(callback) {
    this.rule.otherwise = callback;
    return this;
  }

  start() {
    this._hashChangeHandler();
  }

  /**
   * 跳转函数
   * @alias $route.go
   * @memberof Ti
   * @param {String} url 
   */
  go(url) {
    location.hash = this.defaultBase + url;
    return this;
  }
}


let  renderTo = null;
let currentComponent = null;

class Router extends Route{

  constructor() {
    super();
  }
  _render(component, data) {
    if (currentComponent) currentComponent.umount();
    const Component = new component(data);
    currentComponent = Component;
    Ti.mount(Component, renderTo);
  }
  when(url, component) {
    super.when(url, (params) => {
      this._render(component, { $params: params });
    });
    return this;
  }
  otherwise(component) {
    super.otherwise((url) => {
      this._render(component, { url });
    });
    return this;
  }
}

const router = new Router();


class View extends Component {
  constructor(data) {
    super(data);
  }
  mounted () {
    renderTo = this.refs.view;
    router.start();
  }
  render() {
    return '<div ref="view"></div>';
  }
}

Ti.makeTag(View, 'view');

/**
 * 通过when和otherwise进行注册,然后通过view组件可以进行视图的切换
 * @alias $route
 * @memberof Ti
 * @example 
 * Ti.$route
 * .when('/user/{id}', User)
 * .when('/page/{name}/{id}', Page) 
 * .otherwise(Index);
 * 
 * class App {
 * 
 *  render() {
 *    return  `
 *      <view></view>
 *    `;
 *  }
 * 
 * }
 * 
 */

export default router;
      
