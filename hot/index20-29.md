# 第 21 题：有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣：Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()
- Object.prototype.toString.call()
    - 优势: 准确性，这种方法对于所有基本的数据类型都能进行判断，即使是 null 和 undefined 。 每一个继承 Object 的对象都有 toString 方法，如果 toString 方法没有重写的话，会返回 [Object type], 其中 type 为对象的类型。但当除了 Object 类型的对象外，其他类型直接使用 toString 方法时，会直接返回都是内容的字符串，所以我们需要使用call或者apply方法来改变toString方法的执行上下文
    - 劣势
- instanceof iframe数据 arr instanceof Array = false;
    - 优势: 内部机制是通过判断对象的原型链中是不是能找到类型的 prototype, 对象的原型链上是否会找到对应的 Array 的原型
    - 劣势: 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true
- Array.isArray()
    - 优势: 性能较好，当检测Array实例时，Array.isArray 优于 instanceof ，因为 Array.isArray 可以检测出 iframes
    - 劣势: Array.isArray()是ES5新增的方法

# 第 22 题：介绍下重绘和回流（Repaint & Reflow），以及如何进行优化
- 从页面渲染的角度说一下 html解析 DOM树， css解析样式cssom, 合成树 => 布局
- 如何优化：css js 标签 避免强制回流 使用合成层等

# 第 23 题：介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景
- 观察者模式中主体和观察者是互相感知的，发布-订阅模式是借助第三方来实现调度的，发布者和订阅者之间互不感知
- 用新房和二手房来做比喻 

# 第 24 题：聊聊 Redux 和 Vuex 的设计思想
- 共同点：都是为响应式编程提供的一个的可预测的状态容器。实现思路都是 全局状态state => dispatch(action) => educer(vuex里的mutation) =>  生成newState; 整个状态为同步操作
- 不同点：最大的区别在于处理异步的不同，vuex里面多了一步commit操作，在action之后commit(mutation)之前处理异步，而redux里面则是通过中间件处理

# 第 25 题：说说浏览器和 Node 事件循环的区别
- 浏览器 执行一只task（宏任务）执行完micro-task队列 （微任务）如此循环往复下去
- node: 执行完一个阶段的所有任务 执行完nextTick队列里面的内容 然后执行完微任务队列的内容  Node 11以后 行为统一了

# 第 26 题：介绍模块化发展历程
- 模块化的作用：抽离公共代码，隔离作用域，避免变量冲突
- IIFE： 使用自执行函数来编写模块化，特点：在一个单独的函数作用域中执行代码，避免变量冲突。
- AMD： 使用requireJS 来编写模块化，特点：依赖必须提前声明好
- CMD： 使用seaJS 来编写模块化，特点：支持动态引入依赖文件。
- CommonJS： nodejs 中自带的模块化
- ES Modules： ES6 引入的模块化，支持import 来引入另一个 js

# 26.1 es6 模块和 commonJs 模块的区别
- CommonJS模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
- CommonJS一旦输出了某个值，如果模块内部后续的变化，影响不了外部对这个值的使用
```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// a.js
var mod = require('./lib');
console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3

```
- ES6模块运行机制完全不一样，JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行的时候，再根据这个只读引用，到被加载的那个模块里去取值。
```js
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4

```
- CommonJS的循环加载: 内存中记录加载的模块
- 就是this关键词，在ES6模块顶层，this指向undefined；而CommonJS模块的顶层的this指向当前模块
- 模块只执行一次

# 第 27 题：全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取
- var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性，但 let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性
- 在全局作用域中，用 let 和 const 声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中

# 第 28 题：cookie 和 token 都存放在 header 中，为什么不会劫持 token？
- 1、首先token不是防止XSS的，而是为了防止CSRF的；
- 2、CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token

# 第 29 题：聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的
- getter实现数据依赖收集,对数据进行watcher
- 使用setter对数据的observer进行数据变更的监听，消息通知,派发更新 （队列机制）
- view改变 Model是Vue实现的一个功能点，本质是

# 第 30 题：两个数组合并成一个数组 请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
```js
function merge(arr1, arr2) {
    let result = [];
    let j = 0;
    let temp = arr2[0];
    for (let i = 0; i < arr1.length; i++) {
        if (temp === arr1[i].charAt(0)){
            result.push(arr1[i]);
        } else {
            result.push(temp);
            result.push(arr1[i]);
            temp = arr2[j++];
        }
        if (i === arr1.length - 1){
            result.push(temp);
        }
    }
    return result;
}
const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
const arr2 = ['A', 'B', 'C', 'D']
console.log(merge(arr1, arr2));

var arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"]
var arr2 = ["A", "B", "C", "D"]
var arr3 = arr1.concat(arr2);
arr3.sort(function(a,b){
    if (a.charAt(0) == b.charAt(0) && a.length > b.length){
       return -1
    }	
});

```