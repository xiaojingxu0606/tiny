
import { parse } from './utils';

/**
 * 响应体
 * @class Response
 */
class Response {
  /**
   * @constructor
   * @param {any} data
   * @param {Number} status
   * @param {String} statusText
   * @param {Request} request
   */
  constructor(data, status, statusText, request) {
    this.data = Response.filter(data, request);
    this.status = status || 0;
    this.statusText = statusText || '';
    this.request = request; // 保留请求配置
  }
}

/**
 * Response的静态方法filter,主要对数据对象过滤
 */
Response.filter = (data, request) => {
  if (!data) return data;
  const responseType = request.getClientOption('responseType');
  let result = data;
  if (typeof data === 'string') {
    // IE10/IE11,不支持json数据的自动转换
    if (responseType === 'document' || responseType === 'json') {
      try {
        result = parse(responseType, data);
      } catch (e) {
        result = data;
      }
    }
  }
  return result;
};

export default Response;
