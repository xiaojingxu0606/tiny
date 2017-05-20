import Ti from "../../../../dist/tiny.js";
import html from './index.html';
import css from './index.styl';

class Content extends Ti.Component {
  constructor(data) {
    super(data);
    this.data.list = [];
  }
  mounted () {
    Ti.$http.get('/get', {responseType: 'json'})
    .then((response) => {
      this.data.list = response.data.list;
      this.update();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  delete(evt, index) {
    evt.stopPropagation();
    this.data.list.splice(index, 1);
    this.update();
  }
  doComplete(evt, index) {
    const data = this.data;
    const completeItem = data.list.splice(index, 1)[0];
    
    completeItem.isComplete = !completeItem.isComplete;
    if (completeItem.isComplete) {
      data.list.unshift(completeItem);
    } else {
      data.list.push(completeItem);
    }
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
