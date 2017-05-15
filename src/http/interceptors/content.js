import { is, isNoDataMethod } from '../utils';
import Interceptor from '../interceptor';
const DEFAULT_TYPE = 'application/x-www-form-urlencoded; charset=utf-8';
const JSON_TYPE = 'application/json; charset=utf-8';


/**
 * 通用拦截器之contentInteceptor
 * @ignore
 */
export default class ContentInterceptor extends Interceptor {
  constructor() {
    super();
  }
  resolve(request) {
    const data = request.data;
    const header = request.header;
    // 如果是FormData,不需要设置Content-Type
    if (is('FormData', data)) {
      header.delete('Content-Type');
      return request;
    }
    if (is('ArrayBuffer', data) ||
    is('File', data) ||
    is('Blob', data)) {
      return request;
    }
    // 部分浏览器内置URLSearchParams可以设置请求参数
    if (is('URLSearchParams', data)) {
      if (header && !header.get('Content-Type')) {
        header.set('Content-Type', DEFAULT_TYPE);
      }
      request.setDataString(data.toString());
      return request;
    }

    if (is('Object', data)) {
      const tmp = JSON.stringify(data);
      if (header && !header.get('Content-Type')) {
        if (isNoDataMethod(request.method)) {
          header.set('Content-Type', DEFAULT_TYPE);
        } else {
          header.set('Content-Type', JSON_TYPE);
        }
      }
      request.setDataString(tmp);
      return request;
    }

    if (header && !header.get('Content-Type')) {
      header.set('Content-Type', DEFAULT_TYPE);
    }
    return request;
  }
}
