import Ti from './tiny.js';
import Component from './component.js';

Ti.Component = Component;

if(!window.Ti) {
  window.Ti = Ti;
}
export default window.Ti;
