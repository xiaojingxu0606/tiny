
import { trim, base64 } from './utils';

/**
 * 通过配置构造一个请求头
 * @class Header
 * @ignore 
 */

class Header {

  /**
   * 处理请求头
   * 有以下一些工作
   * + 请求头的合并
   * + http basic认证添加
   * @constructor
   * @param {Object} config - 配置对象
   * @ignore 
   */
  constructor(config) {
    this.map = {};
    const header = config.header || {};
    const headerKeys = Object.keys(header);
    headerKeys.forEach((key) => {
      const k = Header.normalize(key);
      this.map[k] = header[key];
    });
    // 用通用请求头覆盖当前设置
    const commonHeader = Object.keys(config.common.header);
    commonHeader.forEach((key) => {
      const k = Header.normalize(key);
      this.map[k] = commonHeader[key];
    });
    // HTTP basic认证
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password || '';
      this.map.Authorization = `Basic ${base64(`${username}:${password}`)}`;
    }
  }

  /**
   * 是否有这个请求头
   * @param {String} name - 头部名
   * @return {Boolean} true or false
   */
  has(name) {
    return !!this.map[name];
  }

  /**
   * 删除一个请求头
   * @param {String} name - 头部名
   */
  delete(name) {
    delete this.map[name];
  }

  /**
   * 设置一个请求头
   * @param {String} name - 头部名
   * @param {String} value - 头部名的值
   */
  set(name, value) {
    const n = Header.normalize(name);
    this.map[n] = trim(value);
  }

 /**
  * 获取对应名字的请求头
  * @param {String} name - 头部名
  * @return {String} 头部名的值
  */
  get(name) {
    const n = Header.normalize(name);
    return this.map[n];
  }
  /**
   * 遍历头部
   * @param {Function} func - 回调函数
   */
  forEach(func) {
    const keys = Object.keys(this.map);
    keys.forEach((k) => {
      func(k, this.map[k]);
    });
  }

}

Header.normalize = (name) => {
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in head field name');
  }
  return name.toLowerCase().replace(/(^\w)|(-\w)/g, (m, m1, m2) => {
    if (m1) return m1.toUpperCase();
    if (m2) return m2.toUpperCase();
    return m;
  });
};

export default Header;
