/**
 * JSONP请求处理模块
 * @module JSONP
 */

import Response from '../response';

/**
 * JSONP client发起JSONP请求
 * @param {Request} request 请求对象
 * @return {Promise} 返回一个Promise体
 */
export default function (request) {
  return new Promise((resolve, reject) => {
    const callback = `_jsonp${new Date().getTime()}`;
    request.setData('callback', callback);
    let data = null;
    let statusText = 'no content';
    const ele = document.createElement('script');
    function handler({ type }) {
      let status = 0;
      let response;
      if (type === 'load' && data !== null) {
        status = 200;
        statusText = 'ok';
        response = new Response(data, status, statusText, request);
        resolve(response);
      } else if (type === 'error') {
        status = 500;
        statusText = 'server error';
        reject(new Error(`error status: ${status}; error message: ${statusText}`));
      }
      if (status && window[callback]) {
        delete window[callback];
        document.body.removeChild(ele);
      }
    }
    // 注册一个回调函数
    window[callback] = result => (data = JSON.stringify(result));
    if (request.timeout) {
      setTimeout(() => {
        reject(new Error('timeout!'));
      }, request.timeout);
    }
    ele.src = request.url;
    ele.type = 'text/javascript';
    ele.async = true;
    ele.onload = handler;
    ele.onerror = handler;
    // 开始加载
    document.body.appendChild(ele);
  });
}
