
/**
 * XHR请求处理模块
 * @module XHR
 */
import Response from '../response';
import { isNoDataMethod } from '../utils';

export default function (request) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(request.method.toUpperCase(), request.url, true);
    xhr.timeout = request.getClientOption('timeout');

    if (request.crossDomain && request.inBrowser && !('withCredentials' in xhr)) {
      xhr = new window.XDomainRequest(); // IE8/9 不支持跨域
    }

    // set header
    request.header.forEach((k, v) => {
      xhr.setRequestHeader(k, v);
    });

    // responseType
    const responseType = request.getClientOption('responseType')
    if (responseType && 'responseType' in xhr) {
      xhr.responseType = responseType;
    }
    // withCredentials
    if (request.getClientOption('withCredentials')) {
      xhr.withCredentials = true;
    }

    // 设置监听事件
    const onprogress = request.getClientOption('onProgress');
    if (onprogress) {
      if (request.method === 'get') {
        xhr.addEventListener('progress', onprogress);
      } else if (request.method === 'put' || request.method === 'post') {
        xhr.upload.addEventListener('progress', onprogress);
      }
    }

    xhr.onload = function handler() {
      // IE sends 1223 instead of 204
      const status = xhr.status === 1223 ? 204 : xhr.status;
      const statusText = xhr.statusText === 1223 ? 'No Content' : xhr.statusText;
      const successCheck = request.getClientOption('successCheck');
      if (!successCheck) throw new Error('no successCheck function');
      if (!successCheck(status)) {
        reject(new Error(`error status: ${status}; status text: ${statusText}`));
      }
      const res = new Response(xhr.response || xhr.responseText, status, statusText, request);
      resolve(res);
      xhr = null;
    };

    xhr.ontimeout = function timeoutHandler() {
      reject(new Error('timeout!'));
      xhr = null;
    };

    xhr.onerror = function errorHandler(err) {
      reject(err);
      xhr = null;
    };
    xhr.onabort = function abortHandler() {
      reject(new Error('cancel request'));
      xhr = null;
    };
    if (isNoDataMethod(request.method) && request.data !== null) {
      throw Error('the method such as get, header, options, delete, jsonp can not have message body');
    }
    xhr.send(request.data);
  });
}

