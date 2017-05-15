
/**
 * 拦截器工厂
 * @class InterceptorFactory
 * @ignore 
 */
class InterceptorFactory {
  /**
   * @ignore 
   */
  constructor() {
    this.interceptors = [];
  }
  /**
   * 添加一个拦截器
   * @param {Interceptor} interceptor - 前置或者后置拦截器对象
   * @return {Number} 返回添加后拦截器的ID
   */
  add(interceptor) {
    this.interceptors.push(interceptor);
    return this.interceptors.length - 1;
  }

  addMulti(...interceptors) {
    const result = [];
    interceptors.forEach((interceptor) => {
      const id = this.add(interceptor);
      result.push(id);
    });
    return result;
  }
  /**
   * 根据ID移除拦截器工厂
   * @param {Number} id - 拦截器的ID
   */
  remove(id) {
    if (this.interceptors[id]) {
      this.interceptors[id] = null;
    }
  }
  /**
   * 对所有拦截器进行遍历,主要是为了去除null
   * @param {function} fn - 遍历处理函数
   * @ignore 
   */
  forEach(fn) {
    this.interceptors.forEach((handlers) => {
      if (handlers !== null) {
        fn(handlers);
      }
    });
  }
}

export default InterceptorFactory;
