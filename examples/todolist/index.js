import Ti from "../../dist/tiny.js";
import Head from "./component/head";
import Content from "./component/content"
import Login from './component/login';

Ti.makeTag(Head, "Head");
Ti.makeTag(Login, "Login");
Ti.makeTag(Content, "Content");

Ti.$route
.when('/login', Login)
.otherwise(Content);

class App extends Ti.Component {

  constructor(data) {
    super(data);
    this.list = this.data.list || [];
  }
  
  style() {
    return `
    #container {
      position: absolute;
      top:0px;
      left:0px;
      width: 100%;
      height: 100%;
    }
    `;
  }

  render() {
    return `
    <div ref="app" id="container">
      <Head component="Head" data-logo="TodoList" />
      <view ti-class="view"></view>
      <Foot />
    </div>
    `;
  }

}

const app = new App();
Ti.mount(app, "body");







