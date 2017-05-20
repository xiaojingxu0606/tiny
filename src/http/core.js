
import { merge, methods } from './utils';
import defaultOptions from './default';
import InterceptorFactory from './interceptorFactory';
import Header from './header';
import Request from './request';
import jsonp from './client/jsonp';
import ContentInterceptor from './interceptors/content';
import XRFSInterceptor from './interceptors/xrfs';

/**
 * @class
 * @example
 * Ti.$http
 * .get('/request1')
 * .then((response) => {
 *    // 处理第一个请求
 *    // 进行第二个请求
 *    return Ti.$http
 *    .post('/request2');
 * })
 * .then((response) => {
 *    // 处理第二个请求
 * })
 * .catch((err) => {
 *    // 处理请求所产生的错误
 * });
 */
class Http {
  /**
   * 读取默认配置,建立前置和后置拦截器工厂
   * @constructor
   * @param {Object} config - 配置对象
   */
  constructor(config) {
    this.default = merge(defaultOptions, config || {});
    this.preInterceptor = new InterceptorFactory(); // 前置拦截器
    this.preInterceptor.addMulti(new ContentInterceptor(), 
    new XRFSInterceptor());
    this.postInterceptor = new InterceptorFactory(); // 后置拦截器
  }
  /**
   * 发出请求方法
   * @param {Array} config - url, config
   * @return {Promise} 返回一个Promise对象
   */
  request(...config) {
    let requestConfig = config[0];
    // 当第一个参数是url时
    if (typeof requestConfig === 'string') {
      requestConfig = merge({
        url: config[0],
      }, config[1]);
    }
    this.config = merge(this.default, requestConfig);
    const header = new Header(this.config);
    const request = new Request(header, this.config);
    let promise = Promise.resolve(request);

    this.preInterceptor.forEach((handler) => {
      promise = promise.then(handler.resolve, handler.reject);
    });
    // 进行xhr请求
    promise = promise.then(this.config.client);
    this.postInterceptor.forEach((handler) => {
      promise = promise.then(handler.resolve, handler.reject);
    });
    return promise;
  }
}

methods.REQUEST_METHOD_NODATA.forEach((method) => {
  /**
   * 无消息体请求方法 **get,delete,head,options,jsonp**
   * 是request的快捷方法
   * @function get/delete/head/options/jsonp
   * @instance 
   * @memberof Http
   * @return {Promise} Promise对象
   * @example
   * Ti.$http
   * .get('/url')
   * .then(function(request) {
   *   // do something
   * })
   */
  // 创建无消息体的快捷方法
  Http.prototype[method] = function noDataMehtod(url, config) {
    const o = { method, url };
    if (method === 'jsonp') o.client = jsonp;
    return this.request(merge(config || {}, o));
  };
});

// 创建有消息体的快捷方法
methods.REQUEST_METHOD_WITHDATA.forEach((method) => {

  /**
   * 有消息体快捷请求方法**post,put,patch**
   * 是request的快捷方法
   * @function post/put/patch
   * @instance 
   * @memberof Http
   * @return {Promise} Promise对象
   * @example
   * Ti.$http
   * .post('/url',{
   *  hello: 1
   * })
   * .then(function(request) {
   *   // do something
   * })
   */
  Http.prototype[method] = function withDataMethod(url, data, config) {
    return this.request(merge(config || {}, { method, url, data }));
  };
});

export default Http;
