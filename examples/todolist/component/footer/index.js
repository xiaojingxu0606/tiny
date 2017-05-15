import Ti from "../../../../dist/tiny.js";
import html from './index.html';
import css from './index.styl';

class Footer extends Ti.Component {
  constructor(data) {
    super(data);
  }

  style() {
    return css;
  }
  render() {
    return html;
  }

}
export default Footer;
