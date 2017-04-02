import Ti from "../../../dist/tiny.js";

class Todo extends Ti.Component {
  constructor(data) {
    super(data);
  }

  handle(event, target) {
    var e = event || window.event;
    if((e.keyCode||e.which ) === 13) {
      this.data.list.push(target.value);
      this.update();
    }
  }

  style() {
    return  `
    .todo {
      position: absolute;
      top: 50px;
      left:0px;
      width:100%;
      padding: 20px;
    }
    `;
  }

  render() {
    return `
    <div class="todo">
      <ul>
      ${this.data.list.map((item)=>
        `<li>${item}</li>`).join("")
      }
      </ul>
      <input type="text" onkeydown="handle(event, this)" />
    </div>
    `;
  }

}
export default Todo;
