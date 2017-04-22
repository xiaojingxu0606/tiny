import Ti from './tiny.js';
import Component from './component.js';
import template from 'artTemplate';

Ti.Component = Component;
Ti.template = template.render;
if(!window.Ti) {
  window.Ti = Ti;
}
export default window.Ti;
