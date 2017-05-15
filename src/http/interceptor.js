
/**
 * 拦截器类Inteceptor,添加拦截器时继承该类
 * @class Interceptor
 * @example
 * class Pre extends Ti.$http.Interceptor {
 *    constructor() {
 *      super();
 *    }
 *    resolve(request) {
 *      request.setData('me', '1');
 *      return request;
 *    }
 * }
 * Ti.$http.preInterceptor.add(new Pre());
 */
class Interceptor {
  /**
   * @constructor 
   */
  constructor() {

  }
  /**
   * 在此方法中请求对象或者响应对象进行拦截
   * @param {Request|Response} data 请求对象或者响应对象
   * @override
   * @return {Request|Response} 请求对象或者响应对象,必须返回参数
   * @example
   * resolve(request) {
   *   request.setData('me', '1');
   *   return request;
   * }
   */
  resovle(data) {}
  /**
   * 处理请求所产生的错误
   * @param {Error} err - 请求错误
   * @override 
   * @return {Request|Response} 请求对象或者响应对象,必须返回参数
   */
  reject(err) {
    return Promise.reject(err);
  }
}

export default Interceptor;