import Ti from './tiny.js';
import style from './utils/style.js';
import html from './utils/html.js';
import event from './event.js';

/**
 * 组件类**Ti.Component**,所有组件必须继承该类
 * 且必须通过super()调用父级构造器方法
 * @class
 * @alias Ti.Component
 * @example
 * // 用法如下:
 * import html from '/path/template';
 * import style from '/path/style';
 * 
 * class ExampleComponent extends Ti.Component {
 *   constructor(data) {
 *     super(data);
 *   }
 *   render() {
 *     // 这里返回你的模板,可通过import从外部引入
 *     return html;
 *   }
 *   style() {
 *     return style;
 *   }
 * }
 */
class Component {
  /**
   * @constructor
   * @param {data} data - 组件数据
   */
  constructor(data) {
    this.data = data || {};
    Ti.$observable(this);
    this._init();
  }
  /**
   * 组件方法**mount**
   * 该方法在组件开始加载时被调用
   * @override
   */
  mount() {}
  /**
   * 组件方法**beforeRender**
   * 该方法在组件渲染之前调用
   * @override
   */
  beforeRender() {}

  /**
   * 组件方法**render**
   * 该方法用于必须返回模板字符串
   * @override
   * @example
   * render() {
        return `
        <div ref="app" id="container">
          <Head component="Head" data-logo="TodoList" />
          <Content component="Content" data="list" />
          <Foot />
        </div>
        `;
      }
   */
  render() {}
  
  /**
   * 组件方法**mounted**
   * 该方法在组件加载完成后调用, 常用于初始化加载服务器的数据
   * @override
   * @example 
   * class App extends Ti.Component {
   *  mounted() {
   *    Ti.$http.get('/get', {responseType: 'json'})
   *    .then(function(response) {
   *      this.list = response.data;
   *    })
   *    .catch(function(err){
   *      console.log(err);
   *    });
   *  }
   *}
   */
  mounted() {}

  /**
   * 组件方法**umount**
   * 该方法会销毁当前组件
   */
  umount() {
    this._isUmount = true;
    this._render(false);
    this.destory();
    Ti._removeInstance(this.id);
  }
  /**
   * 组件方法**destory**
   * 该方法在组件销毁后被调用
   * @override
   */
  destory() {}


  /**
   * 组件方法**beforeUpdate**
   * 该方法在组件更新前被调用
   * @override 
   */
  beforeUpdate() {}
  
  /**
   * 组件方法**update**
   * 该方法通常在事件触发或者数据更新时使用,框架会根据当前数据重新渲染组件的节点
   */
  update() {
    this.beforeUpdate();
    this._render(false);
    this.afterUpdate();
  }

  /**
   * 组件方法**afterUpdate**
   * 该方法在组件更新后被调用
   * @override 
   */
  afterUpdate() {}

  /**
   * 组件方法**style**
   * 该方法可以通过返回css样式字符串,加载样式
   * @override
   * @example 
   * style() {
   *   return `
   *     #container {
   *       position: absolute;
   *       top:0px;
   *       left:0px;
   *       width: 100%;
   *       height: 100%;
   *    }
   *   `;
   *  }
   */
  style() {

  }



  // 初始化组件
  _init() {
    // 初始化组件ID, 放入实例池
    this.id = Ti.assignInstanceId();
    Ti.instances[this.id] = this;
    // 所有子组件
    this.children = [];
    this._scopeId = Ti.COMPONENTSCOPEPREFIX + this.id;
    this._isUmount = false;
    this.node = null;
    this.refs = {};
    this.components = {};
    this.html = null;
  }

  // 开始渲染
  _render(isFirst) {

    if (this._isUmount) {
      this.node.parentNode.removeChild(this.node);
      const styleEle =Ti.$(`#style_${this.id}`);
      styleEle.parentNode.removeChild(styleEle);
    }

    this.beforeRender();
    this._parseHTMLAndCSS();
    // 加载子组件
    this._mountChildren(this);
    // 处理组件域事件
    this.html = event.scopeEvent(this.html, this.id);

    if (isFirst) { // 初始加载节点时
      if(this.mountTo) {
        this.mountTo.innerHTML = this.html;
        this.node = Ti.$(`[${this._scopeId}]`);
        this._initNodes();
        this._fixForm();
      }
    } else { // 更新DOM节点时
      if (this.node !== null) {
        Ti.diff(this.node, this.html);
        this._initNodes();
        this._fixForm();
      }
    }
    
  }

  // 使得表单组件的操作更加简单
  _fixForm() {
    Ti.$$('input', this.node).forEach((ele) => {
      const type = ele.type.toLowerCase();
      if (ele.getAttribute('value') === '') {
        ele.value = '';
      }
      if (type === 'checkbox' || type === 'radio') {
        if (ele.hasAttribute('checked')){
          if (!ele.checked) {
            ele.checked = true;
          }
        } else {
          ele.checked = false;
        }
      }
    });

    Ti.$$('textarea', this.node).forEach((ele) => {
      textarea.value = textarea.getAttribute('value');
    });
    Ti.$$('select', this.node).forEach((ele) => {
      const value = ele.getAttribute('value');
      if (value) {
        Ti.$$('option', ele).forEach((option) => {
          if (value === option.getAttribute('value')) {
            option.setAttribute('selected', 'selected');
          }
        });
      } else {
        const firstOption = Ti.$$('option', ele)[0];
        firstOption && firstOption.setAttribute('selected', 'selected');
      }
    });
  }

  // 添加节点引用以及为所有子组件添加节点引用
  _initNodes() {
    this._addRefs();
    this._addPlugin();
    this.children.forEach((child) => {
      child.node = Ti.$(`[${child._scopeId}]`, this.node);
      child.node && this._initNodes.call(child);
    });
  }

  // 执行插件
  _addPlugin() {
    Object.keys(Ti.directives).forEach((directive) => {
      const nodes = Ti.$$(`*[${directive}]`, this.node);
      nodes.forEach((node) => {
        if (node.hasAttribute(this._scopeId)) {
          Ti.directives[directive](node, this); // 为指令方法注入当前节点和当前组件
        }
      });
      if (this.node.hasAttribute(directive)) {
        Ti.directives[directive](this.node, this);
      }
    });
  }
  // 添加节点引用
  _addRefs(context) {
    const nodes = Ti.$$('*[ref]', this.node);
    nodes.forEach((node) => {
      const attr = node.getAttribute('ref');
      if (attr) this.refs[attr] = node;
    });
    const parentAttr = this.node.getAttribute('ref');
    if (parentAttr) this.refs[parentAttr] = this.node;
  }

  // 解析 html和css
  _parseHTMLAndCSS() {
    this.css = this.style() || "";
    if(this.css) {
      this.css = style.scoper(this.css, '[' + this._scopeId + ']');
      style.addStyle(this.css, this.id);
    }
    let tpl = this.render();
    this.html = html.htmlScoper( Ti.template(tpl ? tpl : "", this.data), this._scopeId ).trim();
  }

  // 子组件装载成功，调用钩子方法
  _childrenMounted(root) {
    root.children.forEach((child)=>{
      this._childrenMounted(child);
      child.mounted();
    });
  }

  // 解析属性字符串
  _resolvePropertyString(instance, str) {
    let arr = str.replace(/['|"|\]]/, '').replace(/[\[]/, '.').split(".");
    let t = instance;
    arr.forEach(function(prop, i){
      t = t[prop];
    });
    return t;
  }

  // 替换子组件
  _mountChildren(parent) {
    if(Ti.customTags.length === 0) return;

    parent.html = html.replaceTags(parent.html, Ti.customTags);

    parent.html = parent.html.replace(/<child\s+tag=(["|']).*\1[\s\S]*?>[\s\S]*?<\/child>/g, (childStr) => {
        let attr = html.html2object(childStr);
        let name = attr.tag;
        delete attr.tag;

        let inheritData = {};
        let ownData = {};

        for(let key in attr) {
          let value = attr[key];
          // 如果有事件
          if(key.indexOf('on')===0) {
            let handler = parent[value];
            // 如果事件处理器存在
            if(handler) {
              inheritData[key] = handler.bind(parent);
            }
          } else if(key.indexOf('data-')===0) {
            ownData[key.replace('data-', '')] = value;
          } else if(key === 'data') {
            ownData[value] = this._resolvePropertyString(parent, value);
          }
        }

        // 获取子组件
        const childClass = Ti.getClass(name);
        if(!childClass)
          throw 'Cant not find child component' + name + '!';

        const subClass = new childClass(Object.assign(inheritData, ownData));
        const componentname = attr['component'];
        if (componentname) {
          parent.components[componentname] = subClass;
        }
        subClass._childStr = childStr;
        subClass.parent = parent;
        subClass._contructorName = name;
        subClass.mount();
        parent.children.push(subClass);
        subClass._render(true);
        return subClass.html;
    });
  }

}

export default Component;
