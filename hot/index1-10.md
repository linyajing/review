https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md

# 1.写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么
- key的作用主要是为了高效的更新虚拟DOM列表,key 值是用来判断 VDOM 元素项的唯一依据 。 使用key不保证100%比不使用快，这就和Vdom不保证比操作原生DOM快是一样的，这只是一种权衡，其实对于用index作为key是不推荐的，除非你能够保证他们不会发生变化。这个key要体现唯一

# 2.['1', '2', '3'].map(parseInt) // 1 NaN NaN
 - map(([value], [index], [array]))
 - 首先看parseInt定义 parseInt(value, [进制])
 - parseInt('1', 0) => 0按照10 1 radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
 - parseInt('2', 1) => NAN 基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN
 - parseInt('3', 2) => NAN 基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN, 3非二级制数据

# 3. 防抖和节流
```js
// 防抖 debounce n秒内执行一次，n秒内重复触发则重新计时
function debounce (fn, time) {
  let timer = null
  return function () {
    let arg = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, time);
  }
}

// 节流 throttle 每隔n秒执行一次
function throttle (fn, time) {
  let tag = true;
  return function () {
    let arg = arguments;
    if (!tag) return;
    tag = false;
    setTimeout(() => {
      fn.apply(this, arg);
      tag = true;
    }, time);
  }
}
```

# 4.介绍下 Set、Map、WeakSet 和 WeakMap 的区别
- Set 和 Map 主要的应用场景在于 数据重组 和 数据储存
- Set 是一种叫做集合的数据结构，Map 是一种叫做字典的数据结构
- set ES6 新增的一种新的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值
- Set 对象允许你储存任何类型的唯一值，无论是原始值或者是对象引用。
- size 属性
- 使用 === 判断唯一  NaN除外
- add delete has clear() 链式调用
- Array.from 方法可以将 Set 结构转为数组

# 5.介绍下深度优先遍历和广度优先遍历，如何实现？
- DSF 递归实现
- BSF 队列实现

# 6. 请分别用深度优先思想和广度优先思想实现一个拷贝函数
```js
// 深度遍历
function deepClone (target) {
    let result;
    if (typeof target === 'object') {
        if (Array.isArray(result)) {
            result = [];
            for(let i in target) {
                result.push(deepClone(target[i]));
            }
        } else if (target = null) {
            result = null;
        } else if (target.constructor === RegExp) {
            result = target;
        } else {
            result = {};
            for(let i in target) {
                result[i] = deepClone(target[i])
            }
        }
    } else {
        result = target;
    }
    return result;
}

// 广度遍历
function getEmpty(o){
	if (Object.prototype.toString.call(o) === '[object Object]'){
		return {};
	}
	if (Object.prototype.toString.call(o) === '[object Array]'){
		return [];
	}
	return o;
}

function deepCopyBFS(origin){
	let queue = [];
	let map = new Map(); // 记录出现过的对象，用于处理环(循环引用)

	let target = getEmpty(origin);
	if(target !== origin){
		queue.push([origin, target]);
		map.set(origin, target);
	}

	while(queue.length){
		let [ori, tar] = queue.shift();
		for(let key in ori){
			if(map.get(ori[key])){
				tar[key] = map.get(ori[key]);
				continue;
			}

			tar[key] = getEmpty(ori[key]);
			if(tar[key] !== ori[key]){
				queue.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}
	return target;
}


```

# 7. ES5/ES6 的继承除了写法以外还有什么区别？
- 1. class 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量。
```js
const bar = new Bar(); // it's ok
function Bar() {
  this.bar = 42;
}

const foo = new Foo(); // ReferenceError: Foo is not defined
class Foo {
  constructor() {
    this.foo = 42;
  }
}
```
- 2. class 声明内部会启用严格模式。
```js
// 引用一个未声明的变量
function Bar() {
  baz = 42; // it's ok
}
const bar = new Bar();

class Foo {
  constructor() {
    fol = 42; // ReferenceError: fol is not defined
  }
}
const foo = new Foo();
```
- 3. class 的所有方法（包括静态方法和实例方法）都是不可枚举的
```js
// 引用一个未声明的变量
function Bar() {
  this.bar = 42;
}
Bar.answer = function() {
  return 42;
};
Bar.prototype.print = function() {
  console.log(this.bar);
};
const barKeys = Object.keys(Bar); // ['answer']
const barProtoKeys = Object.keys(Bar.prototype); // ['print']
---------------------------------------------------------
class Foo {
  constructor() {
    this.foo = 42;
  }
  static answer() {
    return 42;
  }
  print() {
    console.log(this.foo);
  }
}
const fooKeys = Object.keys(Foo); // []
const fooProtoKeys = Object.keys(Foo.prototype); // []
```
- 4. class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用。
```js
function Bar() {
  this.bar = 42;
}
Bar.prototype.print = function() {
  console.log(this.bar);
};

const bar = new Bar();
const barPrint = new bar.print(); // it's ok

class Foo {
  constructor() {
    this.foo = 42;
  }
  print() {
    console.log(this.foo);
  }
}
const foo = new Foo();
const fooPrint = new foo.print(); // TypeError: foo.print is not a constructor
```
- 5. 必须使用 new 调用 class
```js
function Bar() {
  this.bar = 42;
}
const bar = Bar(); // it's ok

class Foo {
  constructor() {
    this.foo = 42;
  }
}
const foo = Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'

```
- 6. class 内部无法重写类名。
```js
function Bar() {
  Bar = 'Baz'; // it's ok
  this.bar = 42;
}
const bar = new Bar();
// Bar: 'Baz'
// bar: Bar {bar: 42}  

class Foo {
  constructor() {
    this.foo = 42;
    Foo = 'Fol'; // TypeError: Assignment to constant variable
  }
}
const foo = new Foo();
Foo = 'Fol'; // it's ok

```

# 8. setTimeout、Promise、Async/Await 的区别
- setTimeout 宏任务
- Promise 微任务队列
- Async/Await 协程 Promise的语法糖，通过generator实现了暂定和执行

# 9. Async/Await 如何通过同步的方式实现异步
- Async/Await就是一个自执行的Generator函数。利用Generator函数的特性把异步的代码写成“同步”的形式
- 首先理解 generator 生成器和 协程 Coroutine的概念
```js
// generator
function* genDemo() {
    console.log("开始执行第一段")
    yield 'generator 2'

    console.log("开始执行第二段")
    yield 'generator 2'

    console.log("开始执行第三段")
    yield 'generator 2'

    console.log("执行结束")
    return 'generator 2'
}

console.log('main 0')
let gen = genDemo()
console.log(gen.next().value)
console.log('main 1')
console.log(gen.next().value)
console.log('main 2')
console.log(gen.next().value)
console.log('main 3')
console.log(gen.next().value)
console.log('main 4')
```
- 协程是一种比线程更加轻量级的存在
- async是一个通过异步执行并隐式返回 Promise 作为结果的函数
- 异步执行和隐式返回 Promise
```js
async function () {
  await 100
} 

new Promise((resolve) => {
  resolve(100);
});
```
- 总结
 - 1. generator 和 协程实现暂定和执行
 - 2. await 实现promise隐式返回


# 10. 异步笔试题
```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
// 'script start' => 'async1 start' => 'async2' => 'promise1' => 'script end' => 'async1 end' => 'promise2' => 'setTimeout'
```

