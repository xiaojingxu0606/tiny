import Ti from "../../../dist/tiny.js";
import html from './index.html';
import css from './index.styl';

class Content extends Ti.Component{
  constructor(data) {
    super(data);
  }
  handleClick(evt) {
    evt.preventDefault();
    alert("click it");
  }
  add(evt, target) {
    var e = evt || window.event;
    if((e.keyCode || e.which) === 13) {
      this.data.list.push(target.value);
      this.update();
    }

  }
  style() {
    return css;
  }
  render() {
    return html;
  }

}

export default Content;
