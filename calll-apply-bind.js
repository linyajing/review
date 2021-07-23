// 模拟实现内置的 call()，apply()方法
// 模拟实现内置的 bind() 方法

Function.prototype.bind = function (context, ...outerArgs) {
    let that = this;
    function ret (...innerArgs) {
      if (this instanceof ret) {
        // new操作符执行时
        // 这里的this在new操作符第三步操作时，会指向new自身创建的那个简单空对象{}
        that.call(this, ...outerArgs, ...innerArgs)
      } else {
        // 普通bind
        that.call(context, ...outerArgs, ...innerArgs)
      }
    }
  
    return ret;
  }