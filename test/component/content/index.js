import Ti from "../../../dist/tiny.js";


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
    return  `
    .content {
      position: absolute;
      top: 50px;
      left: 0;
      padding: 30px;
    }
    `;
  }
  render() {
    return `
    <div class="content">
      <ul>
      ${this.data.list.map(item => `<li onclick="handleClick(event)">${item}</li>`).join('')}
      </ul>
      <input type="text" onkeydown="add(event, this)" />
    </div>
    `;
  }

}

export default Content;
