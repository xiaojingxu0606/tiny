## 通信库(Ajax)的使用

## 简单使用

在Ti命名空间有个$http对象,它提供了通信库功能

``` javascript
Ti.$http
  .get('/request1')
  .then((response) => {
    // 处理第一个请求
    // 进行第二个请求
    return Ti.$http
    .post('/request2');
  })
  .then((response) => {
    // 处理第二个请求
  })
  .catch((err) => {
    // 处理请求所产生的错误
  });
````