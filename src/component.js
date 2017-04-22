import Ti from './tiny.js';
import style from './utils/style.js';
import html from './utils/html.js';
import event from './event.js';

// 核心类， Component
class Component {

  constructor(data) {
    this.data = data || {};
    this.init();
  }

  // 生命周期方法

  // 初始化组件
  init() {
    // 初始化组件ID, 放入实例池
    this.id = Ti.assignInstanceId();
    Ti.instances[this.id] = this;
    // 所有子组件
    this.children = [];
    // 子组件的数据
    this.childData = [];
    this._scopeId = Ti.COMPONENTSCOPEPREFIX + this.id;
    this._isUmount = false;
  }

  _render() {
    this.beforeRender();
    this._parseHTMLAndCSS();
    // 把所有内嵌组件进行替换
    this._mountChildren(this);
    // 所有组件全部构建成html
    this.children.forEach((item)=>{
      this.html = this.html.replace(item._childStr, item.html);
    });
    // 将事件处理成组件域内事件
    this.html = event.scopeEvent(this.html, this.id);

    // 添加到目标节点上
    if(this.mountTo) {
      this.mountTo.innerHTML = this.html;
    }
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

    parent.html = html.replaceTags(parent.html);

    let arr = parent.html.match(/<child\s+tag=["|'].*["|'][\s\S]*?\/>/g);

    if(arr) {
      arr.forEach((childStr) => {
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
        let childClass = Ti.getClass(name);
        if(!childClass)
          throw 'Cant not find child component' + name + '!';

        let subClass = new childClass(Object.assign(inheritData, ownData));
        subClass._childStr = childStr;
        subClass.parent = parent;
        subClass._contructorName = name;
        subClass.mount();
        parent.children.push(subClass);
        subClass._render();
        
      });
    }
  }



  // 开始装载组件
  mount() {

  }
  // 开始渲染之前
  beforeRender() {

  }

  // 开始渲染
  render() {

  }
  // 组件装载完毕
  mounted() {

  }

  // 销毁组件
  umount() {

  }

  // 更新数据方法
  update() {
    // 重新渲染
    // 如果是根组件
    if(this.mountTo) {
      this._render();
    } else {
      this._render();
      let node = document.querySelector('[' + this._scopeId + ']');
      let t = document.createElement("div");
      t.innerHTML = this.html;
      node.parentNode.replaceChild(t.childNodes[0], node);
    }

  }

  // 样式方法
  style() {

  }

}

export default Component;
