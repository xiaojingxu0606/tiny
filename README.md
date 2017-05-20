# Tiny.js

## 一个轻量级现代化的前端框架

## 特性

### 1. 完全由ES6编写
### 2. 支持所有资源的引入
### 3. 所有库加起来70kb

## 简单使用

+ index.js

```
import Ti from "../../dist/tiny.js";
import Head from "./component/head/index.js";
import Footer from "./component/footer/index.js";
import Content from "./component/content"

Ti.makeTag(Head, "Head");
Ti.makeTag(Footer, "Foot");
Ti.makeTag(Content, "Content");

class App extends Ti.Component {

  constructor(data) {
    super(data);
    this.list = this.data.list || [];
  }

  mounted() {
    Ti.$http.get('/get', {responseType: 'json'})
    .then((response) => {
      this.list = response.data.list;
      this.update();
    })
    .catch((err) => {
      console.log(err);
    });
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
      <Content component="Content" data="list" />
      <Foot />
    </div>
    `;
  }

}

const app = new App();
Ti.mount(app, "body");
```
## API
参考 