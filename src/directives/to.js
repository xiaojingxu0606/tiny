import Ti from '../tiny';
import router from '../router';

class To {
  constructor() {
    this.tag = 'to';
  }
  install() {
    Ti.directive('to', (ele) => {
      const attr = ele.getAttribute(this.tag);
      ele.addEventListener('click', () => {
        router.go(attr);
      });
      ele.setAttribute('href', 'javascript:void(0)');
    });
  }
}

export default new To();