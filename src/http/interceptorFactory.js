
/**
 * 拦截器工厂
 * @class InterceptorFactory
 */
class InterceptorFactory {
  constructor() {
    this.interceptors = [];
  }
  /**
   * 添加拦截器
   * @param {function} fulfill - 接收config参数进行拦截器设置
   * @param {function} reject - 处理拦截器的错误
   * @return {Number} 返回添加后拦截器的ID
   */
  add(fulfill, reject) {
    this.interceptors.push({ fulfill, reject });
    return this.interceptors.length - 1;
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
