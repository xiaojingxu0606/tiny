import Ti from "../dist/tiny.js";
import Head from "./component/head/index.js";
import Footer from "./component/footer/index.js";
import Content from "./component/content"

Ti.makeTag(Head, "Head");
Ti.makeTag(Footer, "Foot");
Ti.makeTag(Content, "Content");

class App extends Ti.Component {

  constructor(data) {
    super(data);
    this.list = ["hello", "tiny"];
  }

  style() {
    return `
    #container {
      position: position;
      top:0px;
      left:0px;
      width: 100%;
      height: 100%;
    }
    `;
  }

  render() {
    return `
    <div id="container">
    <Head data-logo="Tiny" />
    <Content data="list" />
    <Foot />
    </div>
    `;
  }

}

Ti.mount(new App(), "body");
