import Ti from "../../../dist/tiny.js";

class Footer extends Ti.Component {
  constructor(data) {
    super(data);
  }

  style() {
    return `
    .footer {
      width: 100%;
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 50px;
      background-color:#000;
      color: #fff;
      text-align:center;
      font-size: 14px;
      line-height: 50px;
    }
    `;
  }
  render() {
    return `
    <div class="footer">@Copyright 2017 jeffwang</div>
    `;
  }

}
export default Footer;
