/**
 * 核心模块,主要负责发起请求,建立快捷方法
 * @module Core
 */
import { merge, methods } from './utils';
import defaultOptions from './default';
import InterceptorFactory from './interceptorFactory';
import Header from './header';
import Request from './request';
import jsonp from './client/jsonp';


/** class Q 发起请求 */
class Q {
  /**
   * 读取默认配置,建立前置和后置拦截器工厂
   * @constructor
   * @param {Object} config - 配置对象
   */
  constructor(config) {
    this.default = merge(defaultOptions, config || {});
    this.preInterceptor = new InterceptorFactory(); // 前置拦截器
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
    // 执行前置拦截器promise链
    this.preInterceptor.forEach((handler) => {
      promise = promise.then(handler.fulfill, handler.reject);
    });
    // 通用前置拦截器
    this.config.common.preInterceptor.forEach((handler) => {
      promise = promise.then(handler.fulfill, handler.reject);
    });
    // 进行xhr请求
    promise = promise.then(this.config.client);
    // 通用后置拦截器
    this.config.common.postInterceptor.forEach((handler) => {
      promise = promise.then(handler.fulfill, handler.reject);
    });
    // 执行后置拦截器promise链
    this.postInterceptor.forEach((handler) => {
      promise = promise.then(handler.fulfill, handler.reject);
    });
    return promise;
  }
}


/**
 * 无消息体快捷请求方法 get,delete,head,options,jsonp
 * @function Q.prototype[method]
 * @example
 * q
 * .get('/url')
 * .then(function(request) {
 *   // do something
 * })
 */
// 创建无消息体的快捷方法
methods.REQUEST_METHOD_NODATA.forEach((method) => {
  Q.prototype[method] = function noDataMehtod(url, config) {
    const o = { method, url };
    if (method === 'jsonp') o.client = jsonp;
    return this.request(merge(config || {}, o));
  };
});


/**
 * 有消息体快捷请求方法post,put,patch
 * @memberof Q Q.prototype[method]
 * @example
 * q
 * .post('/url',{
 *  hello: 1
 * })
 * .then(function(request) {
 *   // do something
 * })
 */
// 创建有消息体的快捷方法
methods.REQUEST_METHOD_WITHDATA.forEach((method) => {
  Q.prototype[method] = function withDataMethod(url, data, config) {
    return this.request(merge(config || {}, { method, url, data }));
  };
});

export default Q;
