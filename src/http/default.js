
import xhr from './client/xhr';
import content from './interceptors/content';
import xrfs from './interceptors/xrfs';

/**
 * @alias http.default
 */
const defaultOptions = {
  client: xhr, // 默认用户代理是xhr
  method: 'get', // 默认请求是get
  timeout: 0,
  // 参考axios的xsrf策略
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  // 成功响应的状态检测
  successCheck(status) {
    return (status >= 200 && status < 300) || status === 304;
  },
  header: {
    Accept: 'application/json, application/xml,*/*', // 默认Accept是*/*, 可以通过responseType设置Accept
  },
};

// 这个common配置在所有请求中均有效
defaultOptions.common = {
  preInterceptor: [content, xrfs],
  postInterceptor: [],
  header: {},
};

export default defaultOptions;
