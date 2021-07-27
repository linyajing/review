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
1. 创建一个空的简单JavaScript对象（即{}）
2. 链接该对象（设置该对象的constructor）到另一个对象 
3. 将步骤1新创建的对象作为this的上下文
4. 如果该函数没有返回对象，则返回this
```js
    function _new (fn, ...arg) {
        let obj = {};
        obj.__proto__ = fn.prototype;
        let ret = fn.call(obj, ...args);
        if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
            return ret 
        }
        return obj;
    }
```

# 第 15 题：简单讲解一下http2的多路复用
- 1. HTTP2.0采用二进制传输，取代了原HTTP1.0文本传输，传输更高效
- 2. 多路复用替换了HTTP2.0相同域名使用同一个TCP链接，单个TCP链接可以同时传输多个请求，互相之前不干扰

# 第 16 题：谈谈你对TCP三次握手和四次挥手的理解
- 三次握手
    - 客户端：hi能听到吗  1、客户端发送syn包到服务器，等待服务器确认接收。
    - 服务端：能听到  2、服务器确认接收syn包并确认客户的syn，并发送回来一个syn+ack的包给客户端。
    - 客户端：好的咱们开始说正事  3、客户端确认接收服务器的syn+ack包，并向服务器发送确认包ack
- 四次挥手
    - 客户端：我要关闭输入通道了。
    - 服务端：知道了，稍等还有一个包。
    - 服务端：好了。我也要关闭输入通道了。
    - 客户端：好的你关闭吧，我也把这个通道关闭。不用回复了

# 第 17 题：A、B 机器正常连接后，B 机器突然重启，问 A 此时处于 TCP 什么状态
- TCP链接的几个状态
``` js
LISTEN：	侦听来自远方的TCP端口的连接请求
SYN-SENT：	再发送连接请求后等待匹配的连接请求
SYN-RECEIVED：	再收到和发送一个连接请求后等待对方对连接请求的确认
ESTABLISHED：	代表一个打开的连接
FIN-WAIT-1：	等待远程TCP连接中断请求，或先前的连接中断请求的确认
FIN-WAIT-2：	从远程TCP等待连接中断请求
CLOSE-WAIT：	等待从本地用户发来的连接中断请求
CLOSING：	等待远程TCP对连接中断的确认
LAST-ACK：	等待原来的发向远程TCP的连接中断请求的确认
TIME-WAIT：	等待足够的时间以确保远程TCP接收到连接中断请求的确认
CLOSED：	没有任何连接状态
```


# 第 18 题：React 中 setState 什么时候是同步的，什么时候是异步的？
- 在React中，如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state 。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。
- 原因： 在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说，而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。
- 注意： setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

# 第 19 题：React setState 笔试题，下面的代码输出什么？
```js
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 0 

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 0 

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 2

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 3
    }, 0);
  }

  render() {
    return null;
  }
};
```

# 第 20 题：介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？
- 安装机制
    - 1. 发出npm install 命令
    - 2. 查询node_modules中是否已经安装相应模块，如果已经安装，则跳过，如果未安装则 npm 查找registry模块网址，进行模块下载，并将压缩包放在 .npm目录下。解压压缩包到当前项目的node_modules目录中
- 实现原理
    - 1. 执行工程自身 preinstall
    - 2. 确定首层依赖模块
    - 3. 获取模块
    - 4. 模块扁平化
    - 5. 安装模块
    - 6. 执行工程自身生命周期
