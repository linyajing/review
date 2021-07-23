# 第 11 题：算法手写题 已知如下数组 var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]; 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
```js
Array.prototype.flat = function() {
    return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])));
}
Array.prototype.unique = function() {
    return [...new Set(this)]
}
console.log(arr.flat().unique().sort((a, b) => a - b)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

// 利用数字类型的key在json遍历的排序特性
Array.prototype.zonghe = function () {
    let map = {};
    function aa (list) {
        list.forEach(item => {
            if (Array.isArray(item)) {
                aa(item);
            } else {
                map[item] = item;
            }
        });
    }
    aa(this);

    console.log(map);

    return Object.keys(map);
}
```

# 第 12 题：JS 异步解决方案的发展历程以及优缺点
- 回调函数
    - 优点： 解决了同步耗时问题
    - 缺点： 回调地狱，不符合线性思维
-  Promise
    - 优点： 解决了回调地狱问题
    - 缺点：无法取消 Promise ，错误需要通过回调函数来捕获
- generator
    - 优点：可以控制函数的执行
    - 缺点： 写法不够精简
- async/await
    - 优点：代码清晰，符合线性思维
    - 缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低


# 第 13 题：Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？
- 构造函数是同步执行
- then是异步执行，属于微任务队列

# 第 14 题：情人节福利题，如何实现一个 new
- 首先分析new 的定义
- 没有返回值默认返回this
- 
```js

```

# 第 15 题：简单讲解一下http2的多路复用
# 第 16 题：谈谈你对TCP三次握手和四次挥手的理解
# 第 17 题：A、B 机器正常连接后，B 机器突然重启，问 A 此时处于 TCP 什么状态
# 第 18 题：React 中 setState 什么时候是同步的，什么时候是异步的？
# 第 19 题：React setState 笔试题，下面的代码输出什么？
# 第 20 题：介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？
