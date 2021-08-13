# 1. CORS
# 2. flex
# 3. 原生js删节点，插节点
# 4. es6 reduce
# 5. 异步处理
# 6. promise控制并发数量
# 7. 考了一道promise.all
# 8. 一道查找树
# 9.考了一个递归
# 10.考了一个promisif考了
# 11. eventloop
# 12. 有这样一个锁 '0000', 0-9，每次可转动一位数字，如0->1, 0->9，不能0->2，9527是可以开锁，有一组['5739', '7239', ...], 转动到这些数字，锁将完全锁定，无法开锁，最少转多少次可以开锁，如果怎么转都无法开锁，返回-1
# 13. 大端模式和小端模式区别
# 14. rpc调用是什么？和http区别
# 15. buffer是什么
# 16. http和tcp协议
# 17. serviceworker工作流程
# 18. 协商缓存 modified limited
# 19. 页面加载时间是指什么时间
# 20. 链表的加法
# 21. 二叉树返回最大深度
# 23. 数组求最大子序列和
# 24. 洗牌算法，是在纸上的题目,，前三个为现场出题。（候选人说洗牌算法解法特殊，这个题是在leetcode是中等，是我误打误撞给候选人发了提前准备了，参考题目：54张扑克放在一个数组里，设计一个洗牌算法 ）
# 25 闭包、宏任务与微任务、nodejs为什么适合高并发
# 26. cookie相关、缓存相关策略
# 27. 画出js原型链
# 28. 写一个深拷贝的函数
# 29. 字符串的所有组合数，如input: 'abc', output: 'abc'、'acb'、'bac'、'bca'、'cab'、'cba'
# 30. 实现EventEmitter，只需要有on、emit、off方法
# 31. 前端优化手段，缓存，前端的缓存手段，聊到pwa的service worker
# 32. 浏览器渲染的流程，js是否会阻塞渲染，如果js放到head里面，怎样防止阻塞界面渲染
# 33. 安全方面，前端用户密码的加密，直接用hash作为密码和使用rsa等密钥加密的区别
# 34. 口述算法题：用户上传了一些照片，设计算法从中随机选择5张放到个人主页，但又要让距离目前时间越近的照片优先被选择（注意：不是最近的必然会被选择，只是更有可能选到）

# 35.  
```js
    Function.prototype.a = () => alart(1);
    Object.prototype.b = () => alart(2);
    function A(){}
    const a = new A();
    a.a(); // undefined
    a.b(); // 2
```
```js
    const x = 10; 
    function a (y) {
        const x = 20; 
        return b(y);
    }  
    function b(y) {
        return x + y;
    }
   
    a(20) // 30
```
   
```js
    console.log(1);
   
    setTimeout(() => {
        console.log(2);
    }, 0);
   
    process.nextTick(() => {
        console.log(3);
    });
   
    setImmediate(() => {
        console.log(4);
    });
   
    new Promise((resolve, reject) => {
        console.log(5);
        resolve();
        console.log(6);
    }).then(() => {
        console.log(7);
    });
   
    Promise.resolve().then(() => {
        console.log(8);
   
        promise.nextTick(() => {
            console.log(9);
        });
    });
    // 1 => 5 => 6 => 3 => 7 => 8 => 9 => 2 => 4
   ```

4. 该div的颜色是什么？
   
   ```
    <style>
    .classA {
        color: red;
    }
    .classB {
        color: yellow;
    }
    </style>
   
    <div class="classB classA"></div>
   ```

5. 写出以下代码的输出
   
   ```
    [1,2,3,4,5].map(parseInt); 0 NaN NaN NaN NaN
   ```

6. 写出你对a11y的理解

7. 什么是BFC、IFC、FFC

8. Node有几种垃圾回收机制，分别使用在什么场景中

9. 什么是死锁，产生死锁的必要条件是什么？

10. 将下列函数补充完整
    
    ```
    function add() {}
    function one() {}
    function two() {}
    
    console.log(one(add(two()))) // 3
    console.log(two(add(one()))) // 3
    ```

11. 你了解哪些CSS中表示表示大小的单位，有什么区别？

12. 写出以下代码的输出
    
    ```js
    let a = { x: 1 };
    let b = a;
    a.x = a = { y: 2 };
    console.log(a); //  {y: 2}
    console.log(b); // {x: { y: 2}}
    ```

13. 实现cacheRequest函数使得以下代码在浏览器中只发起一次请求，请求相关操作已封装在request(url, successCallback, failCallback)中。
    
    ```js
    cacheRequest('\user', data => {
        console.log('我是第一个请求的返回：', data);
    });
    cacheRequest('\user', data => {
        console.log('我是第二个请求的返回：', data);
    });
    ```

14. 链表相加，如 1->2->3 + 1->2->3->4 = 1->3->5->7
    
    ```js
    // 已有链表节点
    Class Node {
        construtor
        value,
        next,
    }
    ```

15. 说出以下代码的输出
    
    ```js
    a = 0;
    console.log(a); // 0
    console.log(b); // 报错
    let b = 1;
    let c = 2;
    console.log(c);
    ```

- dom-diff，为什么要先比对tag再对比key,  data为什么需要函数返回？

- 移动端适配，px、em、rem（rem的计算）

- 正则replace


四面
- 你的技能树是什么
- 你负责组内的技术规划吗
- 你认为接下来要做的事情，能对你有提升么
- 有什么事情是你追求精益求精的case
- http2.0和3.0有什么区别
- 介绍下mpvue实现原理
- js什么程度 - 为什么
- vue什么程度 - 为什么 - 举个例子
- fragment和DOM相比有什么不一样