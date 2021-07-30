# 第 50 题：实现 (5).add(3).minus(2) 功能
```js
Number.prototype.add = (value) => {
    return this + value
}
Number.prototype.minus = (value) => {
    return this - value
}
console.log((5).add(3).minus(2)) // 不console会出错
```

# 第 51 题：Vue 的响应式原理中 Object.defineProperty 有什么缺陷？为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？
- Object.defineProperty 不能监听动态length的变化，导致通过数组下标添加元素，无法劫持
- Object.defineProperty 数组方法使用不能监听到数组的变更，不能实时响应；
- Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。
- Proxy可以劫持整个对象，并返回一个新的对象。
- Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。
- observer中对 Array停止监测

# 第 52 题：怎么让一个 div 水平垂直居中
- display
- position + transform

# 第 53 题：输出以下代码的执行结果并解释为什么
```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) // undefined	
console.log(b.x) // {n: 2}
```

# 第 54 题：冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
- 对已经排好序的数组加tag标签


# 第 55 题：某公司 1 到 12 月份的销售额存在一个对象里面,如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
```js
let list = new Array(12);
let map = {1:222, 2:123, 5:888};
for (let i = 0; i < list.length; i++) {
    map[i + 1] === undefined ? list[i] = map[i+1] : list[i] = null;
}
return list;

```


# 第 56 题：要求设计 LazyMan 类，实现以下功能
```js

LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

class LazyMan {
    constructor (name) {
        this.queue = [];
        this.name = name;
        this.init();
    }
    init () {
        let task = function () {
            console.log(`Hi I am ${this.name}`);
            this.next();
        }
        this.queue.push(task);
        setTimeout(() => {
            this.next();
        }, 0);
    }
    sleep (time) {
        let task = function () {
            setTimeout(() => {
              this.next();
            }, time * 1000)  
        }
        this.queue.push(task);
        return this;
    }
    eat (food) {
        let task = function () {
            console.log(`I am eating ${food}`);
            this.next();
        }
        this.queue.push(task);
        return this;
    }
    sleepFirst (time) {
        let task = function () {
            setTimeout(() => {
              this.next();
            }, time * 1000)  
        }
        this.queue.unshift(task);
        return this; 
    }
    next () {
        let task = this.queue.shift();
        task && task();
    }
}

```

# 第 57 题：分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景
- opacity: 0 图层
- visibility: hidden  重绘
- display: none  重排


# 第 58 题：箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
- 1. 函数体内的 this 对象，就是定义时所在的作用域的this，而不是使用时所在的对象
- 2. 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
- 3. 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数
- 4. 不可以使用 new 命令，因为没有函数上下文没有自己的 this，无法调用 call，apply。 没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的 prototype 赋值给新的对象的 __proto__


# 第 59 题：给定两个数组，写一个方法来计算它们的交集 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
```js
    let map1 = {}; // {1: 2, 2:2}
    let map2 = {}; // {2: 2}
    let result = [];
    nums1.forEach(val => {
        map1[val] !== undefined ? map1[val] += 1 : map1[val] = 1;
    });
    nums2.forEach(val => {
        map2[val] !== undefined ? map2[val] += 1 : map2[val] = 1;
    });
    Object.keys(map1).forEach(key => {
        if (map2[key] !== undefined) {
            result.concat(new Array(Math.min(map1[key], map2[key])).fill(key))
        }
    });
    return result;
```