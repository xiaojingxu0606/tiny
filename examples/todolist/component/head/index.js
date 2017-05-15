import Ti from "../../../../dist/tiny.js";
import html from './index.html';
import css from './index.styl';

class Head extends Ti.Component {
  constructor(data) {
    super(data);
  }
  render() {
    return html;
  }

  style() {
    return css;
  }
}

export default Head;
