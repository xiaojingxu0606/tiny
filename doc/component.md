## 组件的使用

一旦你引入了Ti框架你就可以引入他的种种特性,组件是他的特性之一

### 1. 初步使用

``` javascript
// 用法如下:
import html from '/path/template';
import style from '/path/style';

class ExampleComponent extends Ti.Component {
  constructor(data) {
    super(data);
  }
  render() {
    // 这里返回你的模板,可通过import从外部引入
    return html;
  }
  style() {
    return style;
  }
}


```
其中html和style分别为模板字符串和样式  
由于默认的模板是[art-template](https://github.com/aui/artTemplate),如果对模板语法不是很清晰可以去学习一下

样式可以是stylus, less, sass,这取决于你的webpack打包环境

### 2. 生命周期方法

生命周期方法是组件最有用的方法,下面我们介绍几个重要的生命周期方法.其余方法可以自行参考API

#### 2.1 mounted方法

这个方法在组件加载完成,加载异步数据时十分有用.

``` javascript
class App extends Ti.Component {
 mounted() {
   Ti.$http.get('/get', {responseType: 'json'})
   .then(function(response) {
     this.list = response.data;
   })
   .catch(function(err){
     console.log(err);
   });
 }
}
```
#### 2.2 update方法

我们不提供自动的数据驱动,用户必须手动通过update方法对组件进行更新,虽然丧失了快捷性,但是同时也拥有了灵活性.

示例如下:

``` javascript
doComplete(evt, index) {
    const data = this.data;
    const completeItem = data.list.splice(index, 1)[0];
    
    completeItem.isComplete=!completeItem.isComplete;
    if (completeItem.isComplete) {
      data.list.unshift(completeItem);
    } else {
      data.list.push(completeItem);
    }
    this.update();
}
```
这个方法首先对组件中的数据进行操作,然后调用了update方法,这样整个组件的视图就会发生改变.


#### 2.3 umount方法

卸载组件方法,这个方法可将组件从DOM文档中移除,常用于指令的开发

示例如下

``` javascript
render(component, data) {
    if (currentComponent) currentComponent.umount();
    const Component = new component(data);
    currentComponent = Component;
    Ti.mount(Component, renderTo);
}
```
### 3. 组件数据通信

组件之间我们通过data和data-property两个属性来进行组件间的数据通信.这样父组件的数据可以传递到子组件.

#### 3.1 data
data属性能传递任意的对象

``` html
<div ref="app" id="container">
  <Content component="Content" data="list" />
  <Foot />
</div>
```
这里我们把父组件的list数据传递到子组件中

#### 3.2 data-property

``` html
<Head component="Head" data-logo="TodoList" />
```
这里我们则把logo作为属性,TodoList字符串作为数据传递到Head组件中


