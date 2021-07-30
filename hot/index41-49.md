# 第 41 题：下面代码输出什么
```js
var a = 10;
(function () {
    console.log(a) // undefined
    a = 5
    console.log(window.a) // 10
    var a = 20;
    console.log(a) // 20
})()
```

# 42 实现一个sleep函数 比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现
```js
//Promise
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve,time))
}
sleep(1000).then(()=>{
  console.log(1)
})

//Generator
function* sleepGenerator(time) {
  yield new Promise(function(resolve){
    setTimeout(resolve,time);
  })
}
sleepGenerator(1000).next().value.then(()=>{console.log(1)})

//async
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve,time))
}
async function output() {
  let out = await sleep(1000);
  console.log(1);
  return out;
}
output();

//ES5
function sleep(callback,time) {
  if(typeof callback === 'function')
    setTimeout(callback,time)
}

function output(){
  console.log(1);
}
sleep(output,1000);
```

# 第 43 题：使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果
- Array.sort()的解释，默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的UTF-16编码顺序来进行排序。所以'102' 会排在 '15' 前面

# 第 44 题：介绍 HTTPS 握手过程

# 第 45 题：HTTPS 握手过程中，客户端如何验证证书的合法性

# 46 输出以下代码执行的结果并解释为什么
```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
    obj.push(1)
    obj.push(2)
    console.log(obj)
    // 返回一个类数组对象 push会根据length属性判断当前长度，然后将元素添加到末尾，并改变length长度
    // 1. 使用第一次push，obj对象的push方法设置 obj[2]=1;obj.length+=1
    // 2.使用第二次push，obj对象的push方法设置 obj[3]=2;obj.length+=1
    // 3.使用console.log输出的时候，因为obj具有 length 属性和 splice 方法，故将其作为数组进行打印
    // 4.打印时因为数组未设置下标为 0 1 处的值，故打印为empty，主动 obj[0] 获取为 undefined
```

# 第 47 题：双向绑定和 vuex 是否冲突

# 第 48 题：call 和 apply 的区别是什么，哪个性能更好一些

# 第 49 题：为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？

