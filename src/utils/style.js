import Ti from '../tiny.js';


function scoper(css ,prefix) {
  let reg = new RegExp('([^\r\n{}]+)(:[^\r\n{}]+)?(,(?=[^}]*{)|\s*{)', 'g');

  return css.replace(reg, function(match, g1, g2, g3){
    if(!g2) g2 = '';
    // 如果遇到以下这些，无需进行替换
    if(g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
      return g1 + g2 + g3;
    }
    return g1.replace(/\s*$/, "") + prefix + g2 + g3;
  });
}

// 添加样式到head
function addStyle(cssText, id) {
  let styleId = Ti.STYLEPREFIX + id;
  let ele = document.getElementById(styleId),
    head = document.getElementsByTagName('head')[0];
  if(ele && ele.parentNode === head)
    head.removeChild(ele);
  let targetStyle = document.createElement('style');
  head.appendChild(targetStyle);
  targetStyle.setAttribute('type', 'text/css');
  targetStyle.setAttribute('id', styleId);
  if(!window.ActiveXObject) {
    targetStyle.textContent = cssText;
  } else {
    targetStyle.styleSheet.cssText = cssText;
  }

}

export default { scoper, addStyle }
