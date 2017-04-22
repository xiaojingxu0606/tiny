
function readCookie(name) {
  const reg = new RegExp(`(?:^|;)\\s*${name}=(.*?)(;|$)`);
  const cookie = document.cookie;
  let match = null;
  let arr;
  if (cookie) {
    arr = cookie.match(reg);
    if (arr && arr[1]) {
      match = arr[1];
    }
  }
  return match || decodeURIComponent(match);
}

/**
 * 通用拦截器之xrfsInteceptor
 */
const xrfsInterceptor = {
  fulfill: (request) => {
    if (request.inBrowser) {
      // 如果同域或者允许跨域传输cookie我们可以读取xrfs,添加到请求头
      if (request.crossDomain ||
      request.getClientOption('withCredentials')) {
        const cookieName = request.getClientOption('xsrfCookieName');
        const headName = request.getClientOption('xsrfHeaderName');
        const cookieValue = readCookie(cookieName);
        if (cookieValue && headName) {
          request.header.set(headName, cookieValue);
        }
      }
    }
    return request;
  },
  reject: error => Promise.reject(error),
};

export default xrfsInterceptor;

