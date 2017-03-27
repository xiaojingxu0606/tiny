/*!
 * Tiny v0.0.1
 * author jeffwang <cunxuanwang@163.com>
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/test/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Tiny v0.0.1
 * author jeffwang <cunxuanwang@163.com>
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Tiny"] = factory();else root["Tiny"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId])
          /******/return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/__webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 3);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var Ti = {};
      // 管理组件实例
      Ti.instances = [];
      Ti._instanceId = 0;
      Ti.assignInstanceId = function () {
        return Ti._instanceId++;
      };

      Ti.COMPONENTSCOPEPREFIX = 'scope_';
      Ti.STYLEPREFIX = 'style_';

      // HTML定制标签
      Ti.customTags = [];
      Ti.componentConstructor = {};
      Ti.makeTag = function (component, name) {
        Ti.componentConstructor[name] = component;
        Ti.customTags.push(name);
      };

      // 通过实例名获取构造器
      Ti.getClass = function (name) {
        return Ti.componentConstructor[name];
      };

      // 挂载组件
      Ti.mount = function (instance, mountTo) {
        instance.mountTo = typeof mountTo === 'string' ? document.querySelector(mountTo) : mountTo;
        instance.mount();
        instance._render();
        instance._childrenMounted(instance);
        instance.mounted();
        return instance;
      };

      // 模板引擎，默认是ES6模板字符串
      Ti.template = function (tpl, data) {
        return tpl;
      };

      exports.default = Ti;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _tiny = __webpack_require__(0);

      var _tiny2 = _interopRequireDefault(_tiny);

      var _style = __webpack_require__(5);

      var _style2 = _interopRequireDefault(_style);

      var _html = __webpack_require__(4);

      var _html2 = _interopRequireDefault(_html);

      var _event = __webpack_require__(2);

      var _event2 = _interopRequireDefault(_event);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      // 核心类， Component
      var Component = function () {
        function Component(data) {
          _classCallCheck(this, Component);

          this.data = data || {};
          this.init();
        }

        // 生命周期方法

        // 初始化组件


        _createClass(Component, [{
          key: 'init',
          value: function init() {
            // 初始化组件ID, 放入实例池
            this.id = _tiny2.default.assignInstanceId();
            _tiny2.default.instances[this.id] = this;
            // 所有子组件
            this.children = [];
            // 子组件的数据
            this.childData = [];
            this._scopeId = _tiny2.default.COMPONENTSCOPEPREFIX + this.id;
            this._isUmount = false;
          }
        }, {
          key: '_render',
          value: function _render() {
            var _this = this;

            this.beforeRender();
            this._parseHTMLAndCSS();
            // 把所有内嵌组件进行替换
            this._mountChildren(this);
            // 所有组件全部构建成html
            this.children.forEach(function (item) {
              _this.html = _this.html.replace(item._childStr, item.html);
            });
            // 将事件处理成组件域内事件
            this.html = _event2.default.scopeEvent(this.html, this.id);

            // 添加到目标节点上
            if (this.mountTo) {
              this.mountTo.innerHTML = this.html;
            }
          }
          // 解析 html和css

        }, {
          key: '_parseHTMLAndCSS',
          value: function _parseHTMLAndCSS() {
            this.css = this.style() || "";
            if (this.css) {
              this.css = _style2.default.scoper(this.css, '[' + this._scopeId + ']');
              _style2.default.addStyle(this.css, this.id);
            }
            var tpl = this.render();
            this.html = _html2.default.htmlScoper(_tiny2.default.template(tpl ? tpl : "", this.data), this._scopeId).trim();
          }

          // 子组件装载成功，调用钩子方法

        }, {
          key: '_childrenMounted',
          value: function _childrenMounted(root) {
            var _this2 = this;

            root.children.forEach(function (child) {
              _this2._childrenMounted(child);
              child.mounted();
            });
          }

          // 解析属性字符串

        }, {
          key: '_resolvePropertyString',
          value: function _resolvePropertyString(instance, str) {
            var arr = str.replace(/['|"|\]]/, '').replace(/[\[]/, '.').split(".");
            var t = instance;
            arr.forEach(function (prop, i) {
              t = t[prop];
            });
            return t;
          }

          // 替换子组件

        }, {
          key: '_mountChildren',
          value: function _mountChildren(parent) {
            var _this3 = this;

            if (_tiny2.default.customTags.length === 0) return;

            parent.html = _html2.default.replaceTags(parent.html);

            var arr = parent.html.match(/<child\s+tag=["|'].*["|'][\s\S]*?\/>/g);

            if (arr) {
              arr.forEach(function (childStr) {
                var attr = _html2.default.html2object(childStr);
                var name = attr.tag;
                delete attr.tag;

                var inheritData = {};
                var ownData = {};

                for (var key in attr) {
                  var value = attr[key];
                  // 如果有事件
                  if (key.indexOf('on') === 0) {
                    var handler = parent[value];
                    // 如果事件处理器存在
                    if (handler) {
                      inheritData[key] = handler.bind(parent);
                    }
                  } else if (key.indexOf('data-') === 0) {
                    ownData[key.replace('data-', '')] = value;
                  } else if (key === 'data') {
                    ownData[value] = _this3._resolvePropertyString(parent, value);
                  }
                }

                // 获取子组件
                var childClass = _tiny2.default.getClass(name);
                if (!childClass) throw 'Cant not find child component' + name + '!';

                var subClass = new childClass(Object.assign(inheritData, ownData));
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

        }, {
          key: 'mount',
          value: function mount() {}
          // 开始渲染之前

        }, {
          key: 'beforeRender',
          value: function beforeRender() {}

          // 开始渲染

        }, {
          key: 'render',
          value: function render() {}
          // 组件装载完毕

        }, {
          key: 'mounted',
          value: function mounted() {}

          // 销毁组件

        }, {
          key: 'umount',
          value: function umount() {}

          // 更新数据方法

        }, {
          key: 'update',
          value: function update() {
            // 重新渲染
            // 如果是根组件
            if (this.mountTo) {
              this._render();
            } else {
              this._render();
              var node = document.querySelector('[' + this._scopeId + ']');
              var t = document.createElement("div");
              t.innerHTML = this.html;
              node.parentNode.replaceChild(t.childNodes[0], node);
            }
          }

          // 样式方法

        }, {
          key: 'style',
          value: function style() {}
        }]);

        return Component;
      }();

      exports.default = Component;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function scopeEvent(tpl, id) {
        return tpl.replace(/<[\s\S]*?>/g, function (item) {
          return item.replace(/on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave|Abort|Blur|Cancel|CanPlay|CanPlayThrough|Change|Click|Close|ContextMenu|CueChange|DblClick|Drag|DragEnd|DragEnter|DragLeave|DragOver|DragStart|Drop|DurationChange|Emptied|Ended|Error|Focus|Input|Invalid|KeyDown|KeyPress|KeyUp|Load|LoadedData|LoadedMetadata|LoadStart|MouseDown|MouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp|MouseWheel|Pause|Play|Playing|Progress|RateChange|Reset|Resize|Scroll|Seeked|Seeking|Select|Show|Stalled|Submit|Suspend|TimeUpdate|Toggle|VolumeChange|Waiting|AutoComplete|AutoCompleteError|BeforeCopy|BeforeCut|BeforePaste|Copy|Cut|Paste|Search|SelectStart|Wheel|WebkitFullScreenChange|WebkitFullScreenError|TouchStart|TouchMove|TouchEnd|TouchCancel|PointerDown|PointerUp|PointerCancel|PointerMove|PointerOver|PointerOut|PointerEnter|PointerLeave)=(('([\s\S]*?)')|("([\s\S]*?)"))/g, function (a, b, c) {
            // 如果已经替换过
            if (c.indexOf('Ti.instances[') === 1) {
              return a;
            } else {
              return a.replace(/=(['|"])/, '=$1Ti.instances[' + id + '].');
            }
          });
        });
      }

      exports.default = { scopeEvent: scopeEvent };

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _tiny = __webpack_require__(0);

      var _tiny2 = _interopRequireDefault(_tiny);

      var _component = __webpack_require__(1);

      var _component2 = _interopRequireDefault(_component);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      _tiny2.default.Component = _component2.default;

      if (!window.Ti) {
        window.Ti = _tiny2.default;
      }
      exports.default = window.Ti;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _tiny = __webpack_require__(0);

      var _tiny2 = _interopRequireDefault(_tiny);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // 为html添加组件域
      function htmlScoper(html, id) {
        var reg = new RegExp('<[^/]\w*[^>]*', 'g');

        return html.replace(reg, function (m) {
          var t = m.split(" ")[0];
          return m.replace(t, t + " " + id);
        });
      }

      // 替换自定义标签
      function replaceTags(html) {
        var str = _tiny2.default.customTags.join("|");
        var reg = new RegExp('<(' + str + ')\\s+([^/>]*\\s+)?/>', 'g');
        return html.replace(reg, function (m, tag, other) {
          return m.replace(m, '<child tag="' + tag + '" ' + (other ? other : '') + '/>');
        });
      }

      // 将类似<child tag="TagName" data-name="" data="" /> 这样的html转换为object
      function html2object(html) {
        var result = {};
        var arr = html.split(/\s+/);
        var attrReg = /^([\w\d:-]+)\s*=\s*(['|"])(.*)\2/;
        arr.forEach(function (item, i) {
          item.replace(attrReg, function (m, prop, useless, value) {
            result[prop] = value;
          });
        });
        return result;
      }

      exports.default = { htmlScoper: htmlScoper, replaceTags: replaceTags, html2object: html2object };

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _tiny = __webpack_require__(0);

      var _tiny2 = _interopRequireDefault(_tiny);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function scoper(css, prefix) {
        var reg = new RegExp('([^\r\n{}]+)(:[^\r\n{}]+)?(,(?=[^}]*{)|\s*{)', 'g');

        return css.replace(reg, function (match, g1, g2, g3) {
          if (!g2) g2 = '';
          // 如果遇到以下这些，无需进行替换
          if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
            return g1 + g2 + g3;
          }
          return g1.replace(/\s*$/, "") + prefix + g2 + g3;
        });
      }

      // 添加样式到head
      function addStyle(cssText, id) {
        var styleId = _tiny2.default.STYLEPREFIX + id;
        var ele = document.getElementById(styleId),
            head = document.getElementsByTagName('head')[0];
        if (ele && ele.parentNode === head) head.removeChild(ele);
        var targetStyle = document.createElement('style');
        head.appendChild(targetStyle);
        targetStyle.setAttribute('type', 'text/css');
        targetStyle.setAttribute('id', styleId);
        if (!window.ActiveXObject) {
          targetStyle.textContent = cssText;
        } else {
          targetStyle.styleSheet.cssText = cssText;
        }
      }

      exports.default = { scoper: scoper, addStyle: addStyle };

      /***/
    }])
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tiny = __webpack_require__(0);

var _tiny2 = _interopRequireDefault(_tiny);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Ti$Component) {
  _inherits(Content, _Ti$Component);

  function Content(data) {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, data));
  }

  _createClass(Content, [{
    key: "handleClick",
    value: function handleClick(evt) {
      evt.preventDefault();
      alert("click it");
    }
  }, {
    key: "add",
    value: function add(evt, target) {
      var e = evt || window.event;
      if ((e.keyCode || e.which) === 13) {
        this.data.list.push(target.value);
        this.update();
      }
    }
  }, {
    key: "style",
    value: function style() {
      return "\n    .content {\n      position: absolute;\n      top: 50px;\n      left: 0;\n      padding: 30px;\n    }\n    ";
    }
  }, {
    key: "render",
    value: function render() {
      return "\n    <div class=\"content\">\n      <ul>\n      " + this.data.list.map(function (item) {
        return "<li onclick=\"handleClick(event)\">" + item + "</li>";
      }).join('') + "\n      </ul>\n      <input type=\"text\" onkeydown=\"add(event, this)\" />\n    </div>\n    ";
    }
  }]);

  return Content;
}(_tiny2.default.Component);

exports.default = Content;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tiny = __webpack_require__(0);

var _tiny2 = _interopRequireDefault(_tiny);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Ti$Component) {
  _inherits(Footer, _Ti$Component);

  function Footer(data) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, data));
  }

  _createClass(Footer, [{
    key: "style",
    value: function style() {
      return "\n    .footer {\n      width: 100%;\n      position: absolute;\n      left: 0px;\n      bottom: 0px;\n      height: 50px;\n      background-color:#000;\n      color: #fff;\n      text-align:center;\n      font-size: 14px;\n      line-height: 50px;\n    }\n    ";
    }
  }, {
    key: "render",
    value: function render() {
      return "\n    <div class=\"footer\">@Copyright 2017 jeffwang</div>\n    ";
    }
  }]);

  return Footer;
}(_tiny2.default.Component);

exports.default = Footer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tiny = __webpack_require__(0);

var _tiny2 = _interopRequireDefault(_tiny);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Head = function (_Ti$Component) {
  _inherits(Head, _Ti$Component);

  function Head(data) {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, data));
  }

  _createClass(Head, [{
    key: "render",
    value: function render() {
      return "\n    <div class=\"nav\">\n      <div class=\"logo\">" + this.data.logo + "</div>\n    </div>\n    ";
    }
  }, {
    key: "style",
    value: function style() {
      return "\n    .nav {\n      width:100%;\n      height: 50px;\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      background-color: #000;\n      color: #fff;\n    }\n    .nav .logo {\n      width: 100px;\n      height: 100%;\n      padding-left:20px;\n      padding-right: 20px;\n      line-height: 50px;\n      font-size: 20px;\n      text-aligin: center;\n    }\n    ";
    }
  }]);

  return Head;
}(_tiny2.default.Component);

exports.default = Head;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tiny = __webpack_require__(0);

var _tiny2 = _interopRequireDefault(_tiny);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(2);

var _index4 = _interopRequireDefault(_index3);

var _content = __webpack_require__(1);

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_tiny2.default.makeTag(_index2.default, "Head");
_tiny2.default.makeTag(_index4.default, "Foot");
_tiny2.default.makeTag(_content2.default, "Content");

var App = function (_Ti$Component) {
  _inherits(App, _Ti$Component);

  function App(data) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, data));

    _this.list = ["hello", "tiny"];
    return _this;
  }

  _createClass(App, [{
    key: "style",
    value: function style() {
      return "\n    #container {\n      position: position;\n      top:0px;\n      left:0px;\n      width: 100%;\n      height: 100%;\n    }\n    ";
    }
  }, {
    key: "render",
    value: function render() {
      return "\n    <div id=\"container\">\n    <Head data-logo=\"Tiny\" />\n    <Content data=\"list\" />\n    <Foot />\n    </div>\n    ";
    }
  }]);

  return App;
}(_tiny2.default.Component);

_tiny2.default.mount(new App(), "body");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);