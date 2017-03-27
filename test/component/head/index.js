import Ti from "../../../dist/tiny.js";

class Head extends Ti.Component {
  constructor(data) {
    super(data);
  }
  render() {
    return `
    <div class="nav">
      <div class="logo">${this.data.logo}</div>
    </div>
    `;
  }

  style() {
    return `
    .nav {
      width:100%;
      height: 50px;
      position: absolute;
      left: 0px;
      top: 0px;
      background-color: #000;
      color: #fff;
    }
    .nav .logo {
      width: 100px;
      height: 100%;
      padding-left:20px;
      padding-right: 20px;
      line-height: 50px;
      font-size: 20px;
      text-aligin: center;
    }
    `;
  }
}

export default Head;
