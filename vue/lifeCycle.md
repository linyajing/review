/**
 * @Desc: vue常见面试题
 * @Auhtor: linyajing02@meituan.com
 * @Date: 2021-05-22 12:00:58
 */
1. Vue示例的初始化顺序 8个
- beforeCreate: 组件实例被创建之初，组件的属性生效之前
- created: 组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用
- beforeMount: 在挂载开始之前被调用：相关的 render 函数首次被调用
- mounted: el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
- beforeUpdate: 组件数据更新之前调用，发生在虚拟 DOM 打补丁之前
- update: 组件数据更新之后
- beforeDestory: 组件销毁前调用
- destoryed: 组件销毁后调用
- activited	keep-alive 专属，组件被激活时调用
- deactivated	keep-alive 专属，组件被销毁时调用

2. 父组件和子组件的生命周期
 - 加载过程：父beforeCreate => 父created => 父beforeMount => 子beforeCreate => 子created => 子beforeMount => 子mounted => 父mounted
- 子组件更新过程：父beforeUpdate => 子breforeUpdate => 子update => 父update
- 销毁过程：父beforeDestory => 子beforeDestory => 子destoryed => 子destoryed

3. 什么阶段可以访问DOM: mounted
4. 父组件可以监听子组件的声明周期吗:  [https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E7%A8%8B%E5%BA%8F%E5%8C%96%E7%9A%84%E4%BA%8B%E4%BB%B6%E4%BE%A6%E5%90%AC%E5%99%A8]
 - 1. 通过在子组件的mounted中添加 $emit监听
 - 2. @hook方法监听

5. 为什么data在组件中是个函数：附件复用，data对象的话，引用没有被隔离,会互相影响，new Vue是全新实例，数据不会被复用
6. Vue组件间通信
 - 1.父子组件: props和 $emit
 - 2.父子组件:ref.$parents  ref.$children
 - 3.父子、兄弟、隔代: EventBus $emit $on
 - 4.父子: 只传递数据不修改数据可以用，可读性比较差 父组件 v-bind="$attrs" v-on="$listeners" 子组件 this.$attrs
 this.$listensers   $attrs 代表父组件定义但是未被子组件承接的props $listeners代表父组件中的自定义事件  注意可以逐级传递，可以被继承
 - 5.provide、inject: 用于深层次数据传递
 - 6.vuex
7. 说说你对 SPA 单页面的理解，它的优缺点分别是什么 
8. 怎样理解 Vue 的单向数据流
9. 直接给一个数组项赋值，Vue 能检测到变化吗？
    - 直接给数组元素复制，或者改变长度不能检测到变化（即数据不是响应式的）
    - 为什么？由于性能限制vue的observer没有包含数组方法，而是改写了数组的7个方法
    - proxy 可以吗？可以
10. 父组件可以监听到子组件的生命周期吗
    - 使用自定义事件实现
    - @hook:mounted 使用hook实现
11. 谈谈你对 keep-alive 的了解
    - vue 内置组件
    - 保留组件状态、避免重复渲染
12. 组件中 data 为什么是一个函数
 - 组件是用来复用的，js中对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响
13. v-model 的原理
 - 我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件。如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件
14. Vue 是如何实现数据双向绑定的？
 - 1. 实现一个监听器 Observe
 - 2. 实现一个解析器 Compile
 - 3. 实现一个订阅者 Watche
 - 4. 实现一个订阅器 Dep
15. Vue 框架怎么实现对象和数组的监听？
16. Proxy 与 Object.defineProperty 优劣对比
    - Proxy 可以直接监听对象而非属性
    - Proxy 可以直接监听数组的变化
    - Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
    - Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改
    - Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利
    - Object.defineProperty 的优势 - 兼容性好
17. 