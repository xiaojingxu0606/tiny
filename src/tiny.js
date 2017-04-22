import q from './http/index';
import observable from './observable';
import route from './router/index';

let Ti = {};
// 管理组件实例
Ti.instances = [];
Ti._instanceId = 0;
Ti.assignInstanceId = function(){
  return Ti._instanceId++;
};

Ti.COMPONENTSCOPEPREFIX = 'scope_';
Ti.STYLEPREFIX = 'style_';

// HTML定制标签
Ti.customTags = [];
Ti.componentConstructor = {};
Ti.makeTag = function(component, name){
  Ti.componentConstructor[name] = component;
  Ti.customTags.push(name);
};

// 通过实例名获取构造器
Ti.getClass = function(name){
  return Ti.componentConstructor[name];
};

// 挂载组件
Ti.mount = function(instance, mountTo){
  instance.mountTo = typeof mountTo === 'string'
  ? document.querySelector(mountTo) : mountTo;
  instance.mount();
  instance._render();
  instance._childrenMounted(instance);
  instance.mounted();
  return instance;
};

// 模板引擎，默认是ES6模板字符串
Ti.template = function(tpl, data) {
  return tpl;
};

Ti.$http = q;
Ti.observable = observable;
Ti.route = route;

export default Ti;
