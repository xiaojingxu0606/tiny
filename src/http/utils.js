
/**
 * 判断对象的类型
 * @param {String} type
 * @param {Object} value
 * @return {Boolean} true or false
 * @ignore 
 */
function is(type, value) {
  if (type === 'URLSearchParams') return !!URLSearchParams && value instanceof URLSearchParams;
  if (type === 'FormData') return !!FormData && value instanceof FormData;
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}



/**
 * 进行深度对象克隆
 * @function merge
 * @param {Array} objs obj1, obj2, ...
 * @ignore 
 */
function merge(...objs) {
  const result = {};
  objs.forEach((obj) => {
    if (!obj) return;
    Object.keys(obj).forEach((key) => {
      if (typeof result[key] === 'object' && typeof obj[key] === 'object') {
        result[key] = merge(result[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    });
  });
  return result;
}


// 解析XML, 参照jquery实现方法
function parseXML(data) {
  if (!data || typeof data !== 'string') {
    return null;
  }
  const xml = (new window.DOMParse()).parseFromString(data, 'text/xml');
  return xml;
}

/**
 * 解析JSON或者XML
 * @param {String} type - type to parse
 * @param {String} value - responseText or reponseXML
 * @return {Object} Document对象或Object或原值
 * @ignore 
 */
function parse(type, value) {
  let result = value;
  if (type === 'json') {
    result = JSON.parse(type);
  } else if (type === 'document') {
    result = parseXML(value);
  }

  return result;
}

/**
 * 去除字符两端的空字符
 * @param {String} value
 * @return {String}
 * @ignore 
 */
function trim(value) {
  if (typeof value !== 'string') return value;
  return value
  .replace(/^[\s]*/g, '')
  .replace(/[\s]*$/g, '');
}


/**
 * 是否是标准浏览器环境,参考axios的浏览器环境判断
 * @return {Boolean} true or false
 * @ignore 
 */
function isBrowser() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * url是否为绝对路径, 参考自axios
 * @param {String} url - 需要验证的url
 * @return {Boolean} true or false
 * @ignore 
 */
function isAbsoluteUrl(url) {
  return (/^([a-z][a-z\d+-.]*:)?\/\//i.test(url));
}

/**
 * 连接url和baseUrl
 * url类似/p/a/t/h
 * baseUrl类似http://www.google.com
 * 生成的路径为http://www.google.com/p/a/t/h
 * @param {String} url - 需要连接的url
 * @param {*} baseUrl - 基url
 * @return {String} 拼接后形成的字符串
 * @ignore 
 */
function combieUrl(url, baseUrl) {
  return `${baseUrl.replace(/\/$/g, '')}/${url.replace(/^\//g, '')}`;
}

/**
 * 进行参数序列化
 * @param {Object} obj - 需要序列化的对象
 * @return {String} 查询字符串
 * @ignore 
 */
function paramSerialize(obj) {
  const query = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    query.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  });
  return query.join('&').replace(/%20/g, '+');
}

/**
 * 将查询字符串转化为javascript对象
 * @param {String} query - 需要转化为对象的query string
 * @param {Object} param - 在此对象基础上添加参数
 * @return {Object} 由参数字符串转化成的对象
 * @ignore 
 */
function parseQuery(query, param) {
  const p = param || {};
  if (!query) return p;
  const arr = query.split('&');
  arr.forEach((kv) => {
    const a = kv.split('=');
    const k = a[0];
    const v = a[1];
    if (k && !p[k]) {
      p[k] = v;
    }
  });
  return p;
}

/**
 * 通过url和baseURL以及参数对象转换为拼接为正确的URL
 * @param {String} url
 * @param {Object} param
 * @param {String} baseUrl
 * @return {String} 经过拼接,合法的URL
 * @ignore 
 */
function urlTransform(url, param, baseUrl) {
  let u = url;
  if (baseUrl) {
    if (isAbsoluteUrl(url)) throw new TypeError('baseUrl exist but url is a absolute url');
    u = combieUrl(url, baseUrl);
  }
  let query = u
              .replace(/^(.*?)(\?|$)/, '')
              .replace(/#.*$/, '')
              .replace(/&$/, '')
              .replace(/^&/, '');

  if (!query && !param) {
    return `${u.split('?')[0]}`;
  }
  let p;
  if (is('Object', param)) {
    p = parseQuery(query, param);
  } else if (typeof param === 'string') {
    p = parseQuery(param);
    p = parseQuery(query, p);
  } else {
    p = parseQuery(query);
  }
  query = `${paramSerialize(p)}`;
  return `${u.split('?')[0]}?${query}`;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
/**
 * Base64编码方法, 参考axios
 * @param {String} input 需要进行Base64编码的字符串
 * @return {String} base64码
 * @ignore 
 */
function base64(input) {
  const str = String(input);
  let output = '';
  for (
    let block, charCode, idx = 0, map = chars;
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new Error('InvalidCharacterError');
    }
    block = block << 8 | charCode;
  }
  return output;
}


/**
 * 解析URL
 * @param {String} urlString 进行解析的URL
 * @return {Object} description 解析后的对象
 * @ignore 
 */
export function parseUrl(urlString) {
  let url = urlString;
  const el = document.createElement('a');

  if (document.documentMode) {
    el.href = url;
    url = el.href;
  }

  el.href = url;

  return {
    href: el.href,
    protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
    port: el.port,
    host: el.host,
    hostname: el.hostname,
    pathname: el.pathname.charAt(0) === '/' ? el.pathname : `/${el.pathname}`,
    search: el.search ? el.search.replace(/^\?/, '') : '',
    hash: el.hash ? el.hash.replace(/^#/, '') : '',
  };
}


export function isSameOrigin(url) {
  const o1 = parseUrl(url);
  const o2 = parseUrl(window.location.href);
  return (o1 && o1.protocol === o2.protocol) && (o1.host === o2.host);
}


const methods = {
  REQUEST_METHOD_NODATA: ['get', 'delete', 'head', 'options', 'jsonp'],
  REQUEST_METHOD_WITHDATA: ['post', 'put', 'patch'],
};


function isNoDataMethod(method) {
  const m = method.toLowerCase();
  return methods.REQUEST_METHOD_NODATA.some((v) => {
    if (v === m) {
      return true;
    }
    return false;
  });
}


export { merge, is, parse, trim, isBrowser, urlTransform, base64, isNoDataMethod, methods };
