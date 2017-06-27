## 路由的使用

路由的使用也是十分简单

``` javascript
Ti.$route
.when('/user/{id}', Component1)
.when('/page/{name}/{id}', Component2)
.otherwise(Component3);

class App {
 render() {
   return  `
     <view></view>
   `;
 }
}

```
这个示例中我们通过when方法定义了一系列的方法,不指定了路由规则匹配时所触发的组件的加载

之后我们只需要把view标签定义在模板当中, 路由库会根据哈希值的变化加载对应的组件