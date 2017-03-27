/*!
 * Tiny v0.0.1
 * author jeffwang <cunxuanwang@163.com>
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Tiny=t():e.Tiny=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};r.instances=[],r._instanceId=0,r.assignInstanceId=function(){return r._instanceId++},r.COMPONENTSCOPEPREFIX="scope_",r.STYLEPREFIX="style_",r.customTags=[],r.componentConstructor={},r.makeTag=function(e,t){r.componentConstructor[t]=e,r.customTags.push(t)},r.getClass=function(e){return r.componentConstructor[e]},r.mount=function(e,t){return e.mountTo="string"==typeof t?document.querySelector(t):t,e.mount(),e._render(),e._childrenMounted(e),e.mounted(),e},r.template=function(e,t){return e},t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=r(u),c=n(5),s=r(c),l=n(4),d=r(l),f=n(2),h=r(f),p=function(){function e(t){o(this,e),this.data=t||{},this.init()}return a(e,[{key:"init",value:function(){this.id=i.default.assignInstanceId(),i.default.instances[this.id]=this,this.children=[],this.childData=[],this._scopeId=i.default.COMPONENTSCOPEPREFIX+this.id,this._isUmount=!1}},{key:"_render",value:function(){var e=this;this.beforeRender(),this._parseHTMLAndCSS(),this._mountChildren(this),this.children.forEach(function(t){e.html=e.html.replace(t._childStr,t.html)}),this.html=h.default.scopeEvent(this.html,this.id),this.mountTo&&(this.mountTo.innerHTML=this.html)}},{key:"_parseHTMLAndCSS",value:function(){this.css=this.style()||"",this.css&&(this.css=s.default.scoper(this.css,"["+this._scopeId+"]"),s.default.addStyle(this.css,this.id));var e=this.render();this.html=d.default.htmlScoper(i.default.template(e?e:"",this.data),this._scopeId).trim()}},{key:"_childrenMounted",value:function(e){var t=this;e.children.forEach(function(e){t._childrenMounted(e),e.mounted()})}},{key:"_resolvePropertyString",value:function(e,t){var n=t.replace(/['|"|\]]/,"").replace(/[\[]/,".").split("."),r=e;return n.forEach(function(e,t){r=r[e]}),r}},{key:"_mountChildren",value:function(e){var t=this;if(0!==i.default.customTags.length){e.html=d.default.replaceTags(e.html);var n=e.html.match(/<child\s+tag=["|'].*["|'][\s\S]*?\/>/g);n&&n.forEach(function(n){var r=d.default.html2object(n),o=r.tag;delete r.tag;var a={},u={};for(var c in r){var s=r[c];if(0===c.indexOf("on")){var l=e[s];l&&(a[c]=l.bind(e))}else 0===c.indexOf("data-")?u[c.replace("data-","")]=s:"data"===c&&(u[s]=t._resolvePropertyString(e,s))}var f=i.default.getClass(o);if(!f)throw"Cant not find child component"+o+"!";var h=new f(Object.assign(a,u));h._childStr=n,h.parent=e,h._contructorName=o,h.mount(),e.children.push(h),h._render()})}}},{key:"mount",value:function(){}},{key:"beforeRender",value:function(){}},{key:"render",value:function(){}},{key:"mounted",value:function(){}},{key:"umount",value:function(){}},{key:"update",value:function(){if(this.mountTo)this._render();else{this._render();var e=document.querySelector("["+this._scopeId+"]"),t=document.createElement("div");t.innerHTML=this.html,e.parentNode.replaceChild(t.childNodes[0],e)}}},{key:"style",value:function(){}}]),e}();t.default=p},function(e,t,n){"use strict";function r(e,t){return e.replace(/<[\s\S]*?>/g,function(e){return e.replace(/on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave|Abort|Blur|Cancel|CanPlay|CanPlayThrough|Change|Click|Close|ContextMenu|CueChange|DblClick|Drag|DragEnd|DragEnter|DragLeave|DragOver|DragStart|Drop|DurationChange|Emptied|Ended|Error|Focus|Input|Invalid|KeyDown|KeyPress|KeyUp|Load|LoadedData|LoadedMetadata|LoadStart|MouseDown|MouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp|MouseWheel|Pause|Play|Playing|Progress|RateChange|Reset|Resize|Scroll|Seeked|Seeking|Select|Show|Stalled|Submit|Suspend|TimeUpdate|Toggle|VolumeChange|Waiting|AutoComplete|AutoCompleteError|BeforeCopy|BeforeCut|BeforePaste|Copy|Cut|Paste|Search|SelectStart|Wheel|WebkitFullScreenChange|WebkitFullScreenError|TouchStart|TouchMove|TouchEnd|TouchCancel|PointerDown|PointerUp|PointerCancel|PointerMove|PointerOver|PointerOut|PointerEnter|PointerLeave)=(('([\s\S]*?)')|("([\s\S]*?)"))/g,function(e,n,r){return 1===r.indexOf("Ti.instances[")?e:e.replace(/=(['|"])/,"=$1Ti.instances["+t+"].")})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default={scopeEvent:r}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),u=n(1),i=r(u);a.default.Component=i.default,window.Ti||(window.Ti=a.default),t.default=window.Ti},function(e,t,n){"use strict";function r(e,t){var n=new RegExp("<[^/]w*[^>]*","g");return e.replace(n,function(e){var n=e.split(" ")[0];return e.replace(n,n+" "+t)})}function o(e){var t=i.default.customTags.join("|"),n=new RegExp("<("+t+")\\s+([^/>]*\\s+)?/>","g");return e.replace(n,function(e,t,n){return e.replace(e,'<child tag="'+t+'" '+(n?n:"")+"/>")})}function a(e){var t={};return e.split(/\s+/).forEach(function(e,n){e.replace(/^([\w\d:-]+)\s*=\s*(['|"])(.*)\2/,function(e,n,r,o){t[n]=o})}),t}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default={htmlScoper:r,replaceTags:o,html2object:a}},function(e,t,n){"use strict";function r(e,t){var n=new RegExp("([^\r\n{}]+)(:[^\r\n{}]+)?(,(?=[^}]*{)|s*{)","g");return e.replace(n,function(e,n,r,o){return r||(r=""),n.match(/^\s*(@media|@keyframes|to|from|@font-face)/)?n+r+o:n.replace(/\s*$/,"")+t+r+o})}function o(e,t){var n=u.default.STYLEPREFIX+t,r=document.getElementById(n),o=document.getElementsByTagName("head")[0];r&&r.parentNode===o&&o.removeChild(r);var a=document.createElement("style");o.appendChild(a),a.setAttribute("type","text/css"),a.setAttribute("id",n),window.ActiveXObject?a.styleSheet.cssText=e:a.textContent=e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={scoper:r,addStyle:o}}])});