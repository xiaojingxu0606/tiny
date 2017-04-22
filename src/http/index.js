import Q from './core';

function createInstance() {
  return new Q();
}
/**
 * 暴露在浏览器中的命名空间
 * @namespace {Object} q
 */
const q = createInstance();
q.create = config => createInstance(config);

export default q;
