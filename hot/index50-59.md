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

# 第 53 题：输出以下代码的执行结果并解释为什么
```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) // undefined	
console.log(b.x) // {n: 2}
```

# 第 54 题：冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
# 第 56 题：要求设计 LazyMan 类，实现以下功能
# 第 57 题：分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景
# 第 58 题：箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
# 第 59 题：给定两个数组，写一个方法来计算它们的交集。