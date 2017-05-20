import Ti from "../../../../dist/tiny.js";
import html from './index.html';
import css from './index.styl';

class Login extends Ti.Component {
  constructor(data) {
    super(data);
    this.data.username = "";
    this.data.password = "";
  }

  getUsername(target) {
    this.data.username = target.value;
  }
  getPassword(target) {
    this.data.password = target.value;
  }
  render() {
    return html;
  }
  style() {
    return css;
  }
}

export default Login;