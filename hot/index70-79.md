# 第 71 题： 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置

# 第 72 题： 为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因
- for 循环没有任何额外的函数调用栈和上下文
-forEach函数还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能
# 第 73 题： 介绍下 BFC、IFC、GFC 和 FFC
- BFC（Block formatting contexts）：块级格式上下文
- IFC（Inline formatting contexts）：内联格式上下文
- GFC（GrideLayout formatting contexts）：网格布局格式化上下文
- FFC（Flex formatting contexts）:自适应格式上下文

[doing]# 第 74 题： 使用 JavaScript Proxy 实现简单的数据绑定
```html
<body>
  hello,world
  <input type="text" id="model">
  <p id="word"></p>
</body>
<script>
  const model = document.getElementById("model")
  const word = document.getElementById("word")
  var obj = {};

  const newObj = new Proxy(obj, {
      get: function(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
      },
      set: function(target, key, value, receiver) {
        console.log('setting',target, key, value, receiver);
        if (key === "text") {
          model.value = value;
          word.innerHTML = value;
        }
        return Reflect.set(target, key, value, receiver);
      }
    });

  model.addEventListener("keyup",function(e){
    newObj.text = e.target.value
  })
</script>
```
# 第 75 题：数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多
- 不差多少，数组是堆结构，直接索引查找的

# 第 76 题：输出以下代码运行结果
```js
// example 1
var a = {}, b ='123', c = 123;  
a[b]='b';
a[c]='c';
console.log(a[b]); // 'c'

---------------------
// example 2
var a = {}, b = Symbol('123'), c = Symbol('123');  
a[b]='b';
a[c]='c';  
console.log(a[b]); // 'b'

---------------------
// example 3
var a = {}, b = {key:'123'}, c = {key:'456'};  
a[b]='b';
a[c]='c';  
console.log(a[b]); // c 对象toString = '[object Object]'
```
# 第 77 题：算法题「旋转数组」
```js
function reverseK (list, n) {
    var first = list.slice(0, list.length - n);
    var second = list.slice(list.length - n, list.length);
    return second.concat(first);
}
function reverseK (list, n) {
    for (let i = 0; i < list; i++) {
	    let val = arr.pop();
	    arr.unshift(val);
    }
    return arr;
}

console.log(arr);
console.log(reverseK([1, 2, 3, 4, 5, 6, 7], 3))
```

# 第 78 题：Vue 的父组件和子组件生命周期钩子执行顺序是什么
- 初始化
    - 父 beforeCreate => created => beforeMount 
    - 子 beforeCreate => created => beforeMount => mounted
    - 父 mounted
- 组件更新
    - 父 beforeupdate
    - 子 beforeupdate => updated
    - 父 updated
- 销毁过程
    - 父 beforeDestory
    - 子 beforeDestory => destoryed
    - 父 destoryed

# 第 79 题：input 搜索如何防抖，如何处理中文输入
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="ipt">
    <script>
        function debounce(fn, time) {
            let timer = null;
            return function () {
                const arg = arguments;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function() {
                    fn.apply(this, arg);
                }, time);
            }
        }
        let ipt = document.getElementById('ipt');
        function onCompositionStart (e) {
            e.target.composing = true;
        }
        function onCompositionEnd (e) {
            const event = new CustomEvent("input");
            e.target.composing = false;
            e.target.dispatchEvent(event);
        }

        ipt.addEventListener('input', debounce(function (e) {
            if (e.target.composing) {
                return;
            }
            console.log(e.target.value);
        }, 500));
        ipt.addEventListener("compositionstart", onCompositionStart);
        ipt.addEventListener("compositionend", onCompositionEnd);
    </script>
</body>
</html>
- ps: 这段写法会将拼音中间态也包含进去
- compositionstart 中文输入开始
- compositionupdate 在编辑器里的内容改变之前就会触发
- compositionend 中文输入结束
```
