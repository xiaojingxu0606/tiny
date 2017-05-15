import Ti from "../../../../dist/tiny.js";
import html from './index.html';
import css from './index.styl';

class Content extends Ti.Component{
  constructor(data) {
    super(data);
  }
  mount() {
    console.log('start mount component!');
  }
  beforeUpdate () {
    console.log('start update');
  }
  afterUpdate() {
    console.log('update sucess');
  }
  mounted () {
    console.log('component have mounted!');
  }
  destory() {
    console.log('component have been destory!');
  }
  destoryContent(target) {
    this.umount();
  }
  doComplete(evt, index) {
    const isComplete = this.data.list[index].isComplete;
    this.data.list[index].isComplete = !isComplete;
    this.update();
  }
  add(evt, target) {
    var e = evt || window.event;
    if((e.keyCode || e.which) === 13) {
      this.data.list.push({content:target.value, isComplete: false});
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
