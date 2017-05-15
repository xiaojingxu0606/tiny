import Ti from '../tiny.js'

// 为html添加组件域
function htmlScoper(html, id) {
  let reg = new RegExp('<[^/]\w*[^>]*', 'g');

  return html.replace(reg, function(m){
    let t = m.split(" ")[0];
    return m.replace(t, t + " " + id);
  });

}

// 替换自定义标签
function replaceTags(html, tags) {
  let str = tags.join("|");
  let reg = new RegExp(`<(${str})(\\s+[^/>]*)?/>|<(${str})(\\s+[^>]*)?>([\\s\\S]*?)</\\3>`, 'g');
  return html.replace(reg, function(m, tag1, other1, tag2, other2, content) {
      return `<child tag="${tag1 || tag2}"${other1 || other2 || ''}>${content || ''}</child>`;
  });
}

// 将类似<child tag="TagName" data-name="" data="" /> 这样的html转换为object
function html2object(html) {
  let result = {};
  let arr = html.split(/\s+/);
  let attrReg = /^([\w\d:-]+)\s*=\s*(['|"])(.*)\2/;
  arr.forEach(function(item, i){
    item.replace(attrReg, function(m, prop, useless, value){
      result[prop] = value;
    });
  });
  return result;
}

export default { htmlScoper, replaceTags, html2object };
