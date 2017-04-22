
import { urlTransform, is, isNoDataMethod, isSameOrigin, isBrowser } from './utils';

/**
 * 构造请求体
 * @class Request
 */
class Request {
  /**
   * @constructor
   * @param {Header} header - 一个header对象
   * @param {Object} config - 配置对象
   */
  constructor(header, config) {
    this.header = header || {};
    this.method = config.method ? config.method.toLowerCase() : 'get';
    this.data = null;
    this.url = config.url || '';
    if (config.data) {
      this.data = config.data;
      // 当我们的方法是Get,Header,Options,Delete,Jsonp这样的方法时
      // 把data部分转为query string
      this.datafilter(config.baseUrl);
    }
    this.crossDomain = !isSameOrigin(this.url);
    this.inBrowser = isBrowser();

    this.clientOptions = {
      client: config.client,
      onProgress: config.onProgress,
      timeout: config.timeout || 0,
      withCredentials: config.withCredentials || false,
      responseType: config.responseType || '',
      xsrfCookieName: config.xsrfCookieName,
      xsrfHeaderName: config.xsrfHeaderName,
      maxContentLength: config.maxContentLength,
      successCheck: config.successCheck,
    };
  }

  datafilter(baseUrl) {
    if (isNoDataMethod(this.method)) {
      if (is('Object', this.data) || typeof this.data === 'string') {
        this.url = urlTransform(this.url, this.data, baseUrl || '');
        this.data = null;
      }
    }
  }

  setDataString(dataString) {
    this.data = dataString;
    this.datafilter();
  }
  setData(k, v) {
    if (this.data === null) {
      this.data = {};
      this.data[k] = v;
    } else if (!this.data[k]) {
      this.data[k] = v;
    }
    this.datafilter();
  }

  getHeader(name) {
    return this.header.get(name);
  }

  getClientOption(name) {
    if (!name) return '';
    return this.clientOptions[name];
  }

}

export default Request;
