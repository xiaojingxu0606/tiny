
/**
 * 命名空间**Ti**
 * 组件类Component挂载在该命名空间上
 * @namespace Ti
 */
let Ti = {};
// 管理组件实例
Ti.instances = [];
Ti._instanceId = 0;
Ti.assignInstanceId = function(){
  return Ti._instanceId++;
};

Ti._removeInstance = function(id) {
  Ti.instances[id] = null;
};

Ti.COMPONENTSCOPEPREFIX = 'scope_';
Ti.STYLEPREFIX = 'style_';

// HTML定制标签
Ti.customTags = [];
Ti.componentConstructor = {};

/**
 * 方法**Ti.makeTag**
 * 将子组件制成标签使其可以内置在父组件中
 * @method Ti.makeTag
 * @param {Ti.Component} component 需要制成自定义标签的组件
 * @param {String} name 自定义标签名
 * @example
 * Ti.makeTag(Head, "Head");
 * 
 * <Head component="Head" data-logo="TodoList" />
 *    <Content component="Content" data="list" />
 *  <Foot />
 */
Ti.makeTag = function(component, name){
  Ti.componentConstructor[name] = component;
  Ti.customTags.push(name);
};

// 通过实例名获取构造器
Ti.getClass = function(name){
  return Ti.componentConstructor[name];
};

/**
 * 方法**Ti.mount**
 * 将组件挂在在真实的DOM节点中
 * @method Ti.mount
 * @param {Object} instance 组件实例对象
 * @param {String|HTMLElement} mountTo 组件所加载到目标节点
 * @example
 * const app = new App(response.data);
 * Ti.mount(app, "body");
 */
Ti.mount = function(instance, mountTo){
  instance.mountTo = typeof mountTo === 'string'
  ? Ti.$(mountTo) : mountTo;
  instance.mount();
  instance._render(true);
  instance._childrenMounted(instance);
  instance.mounted();
  return instance;
};

// 模板引擎，默认是ES6模板字符串
Ti.template = function(tpl, data) {
  return tpl;
};


Ti.$ = function (selector, context) {
  if (context) {
    return context.querySelector(selector);
  } else {
    return document.querySelector(selector);
  }
};

Ti.$$ = function(selector, context) {
  if (context) {
    return [...context.querySelectorAll(selector)];
  } else {
    return [...document.querySelectorAll(selector)];
  }
};

/**
 * **Ti.use**方法,用于为框架植入插件
 * @method Ti.use
 * @param {Object} plugin 传入的对象必须要有install方法
 * @example
 * const Plugin = {};
 * Plugin.install = function(ti) {
 *  // do something here
 * } 
 * Ti.use(Plugin);
 */
Ti.use = function(plugin) {
  if (!plugin.install) throw new Error('The plugin must have install method!');
  plugin.install(Ti);
};

Ti.directives = [];
/**
 * **Ti.directive**方法,用于定义指令
 * @method Ti.direcitve
 * @param {String} name 指令名称
 * @param {Function} fn 指令处理函数
 * @example 
 * Ti.directive('focus', (ele, component) => {
 *  // ele为指令绑定的DOM节点,component为当前节点所在的组件
 * });
 */
Ti.directive = function(name, fn) {
  Ti.directives[name] = fn;
};


export default Ti;
