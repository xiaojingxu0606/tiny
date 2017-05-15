import Ti from './tiny.js';
import template from 'artTemplate';
import observable from './observable';
import Component from './component.js';
import route from './router/index';
import domDiff from 'set-dom';
import http from './http/index';
/**
 * @property {Function} template 挂载模板方法属性
 * @example 
 * // 你可以通过改写该属性修改模板方法
 * Ti.template = function(template, data) {
 *  // your template function
 * }
 */
Ti.template = template.render;


Ti.$http = http;

Ti.$observable = observable;

Ti.use(route);
Ti.$route = route;

Ti.Component = Component;
Ti.diff = domDiff; // DOM Diff

if(!window.Ti) {
  window.Ti = Ti;
}
export default window.Ti;
