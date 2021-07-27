# 第 31 题：改造下面的代码，使之输出0 - 9，写出你能想到的所有解法
```js
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
// 解法1 利用setTimeout的第三个参数
 for (var i = 0; i < 10; i++) {
    setTimeout((param) => {
        console.log(param);
    },1000, i);
}

// 2.闭包
for (var i = 0; i< 10; i++){
    (function (i) {
	    setTimeout(() => {
		    console.log(i);
        }, 1000);
    })(i);
}

// 3. let 块级作用于
for (let i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}

// 解法4 利用promise包装setTimeout
for (var i = 0; i < 10; i++) {
    timeoutPromise(i);
}
function timeoutPromise(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(i);
            resolve(true);
        }, 1000);
    });
}
// 解法5 用generator函数
for (var i = 0; i < 10; i++) {
    timeoutGenerator(i).next();
}
function* timeoutGenerator (i) {
    yield setTimeout(() => {
        console.log(i);
    }, 1000);
}
// 解法6 await async
async function init () {
    for (var i = 0; i < 10; i++) {
        await timeoutPromise(i);
    }    
}
function timeoutPromise (i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(i);
            resolve(true);
        }, 1000);   
    });
}
init();
```

# 第 32 题：Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。
- 1. 原生 DOM 操作 vs. 通过框架封装操作
- 2. 对 React 的 Virtual DOM 的误解
- 3.  MVVM vs. Virtual DOM
- 4.  性能比较也要看场合

# 第 33 题：下面的代码打印什么内容，为什么？
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
// 打印函数 因为在非匿名自执行函数中，函数变量为只读状态无法修改
```

# 第 34 题：简单改造下面的代码，使之分别打印 10 和 20
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();

// 20
var b = 10;
(function (){
  b = 20;
  console.log(b);
})();

// 10
var b = 10;
(function (){
  console.log(b);
  b = 20;
})();

```

# 第 35 题：浏览器缓存读取规则 请求时浏览器缓存 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache中？

# 36 数组拍平

# 第 37 题：为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？

# 第 38 题：下面代码中 a 在什么情况下会打印 1？
```js
var a = ?;
if (a == 1 && a == 2 && a == 3) {
 	console.log(1);
}

var a = {
  i: 1,
  toString() {
    return a.i++;
  } 
}

Object.defineProperty(window, 'a', {
    get: function () {
	    if (this.value) {
	        return this.value += 1
	    } else {
	        return this.value = 1;
	    }
    }
});
```

# 第 39 题：介绍下 BFC 及其应用
- BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。创建 BFC 的方式有：

- html 根元素
- float 浮动
- 绝对定位
- overflow 不为 visiable
- display 为表格布局或者弹性布局
- BFC 主要的作用是：
    - 清除浮动
    - 防止同一 BFC 容器中的相邻元素间的外边距重叠问题

# 第 40 题：在 Vue 中，子组件为何不可以修改父组件传递的 Prop，如果修改了，Vue 是如何监控到属性的修改并给出警告的
- 子组件为何不可以修改父组件传递的 Prop
- 单向数据流，易于监测数据的流动，出现了错误可以更加迅速的定位到错误发生的位置。
- 如果修改了，Vue 是如何监控到属性的修改并给出警告的。
- 在initProps的时候，在defineReactive时通过判断是否在开发环境，如果是开发环境，会在触发set的时候判断是否此key是否处于updatingChildren中被修改，如果不是，说明此修改来自子组件，触发warning提示

