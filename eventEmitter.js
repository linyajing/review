/**
 * @Desc: 实现发布订阅模式，关键实现四种方法 on监听 off取消监听 emit触发 once 只监听一次
 * @Auhtor: linyajing02@meituan.com
 * @Date: 2021-05-19 09:35:05
 * PS: 和文档中的差别在于 off和是需要第二个参数的，需要确认，确定需要
 * https://juejin.cn/post/6844904153437700103#heading-2
 * // 手写发布订阅模式 EventEmitter
class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 实现订阅
  on(type, callBack) {
    if (!this.events) this.events = Object.create(null);

    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }
  // 删除订阅
  off(type, callBack) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter(item => {
      return item !== callBack;
    });
  }
  // 只执行一次订阅事件
  once(type, callBack) {
    function fn() {
      callBack();
      this.off(type, fn);
    }
    this.on(type, fn);
  }
  // 触发事件
  emit(type, ...rest) {
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest));
  }
}
// 使用如下
const event = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

event.on("click", handle);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle);

event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");

 */

 class EventEmitter {
    constructor () {
        this.events = {};
    }
    on(type, callback) {
        if (!this.event) {
            this.events = Object.create(null);
        }
        if (!this.events[type]) {
            this.events[type] = [callback];
        } else {
            this.events[type].push(callback);
        }
    }
    off(type, callback) {
        if(!this.events[type]) return;
        this.events[type] = this.events[type].filter(item => {
            item !== callback
        });
    }
    once(type, callback) {
        const fn = function () {
            callback();
            this.off(type, callback);
        }
        this.on(type, fn);
    }
    emit(type, ...reset) {
        if(this.events[type] && this.events[type].length) {
            this.events[type].forEach(fn => fn.apply(this, reset))
        }
    }
}

const event = new EventEmitter();
event.on('test1', function (val) {
    console.log(val)
});
event.on('test1', function (val) {
    console.log(val)
});
event.emit('test1', 1111111);
event.once('test1', function (val) {
    console.log(val)
});
event.emit('test1', 222222);
event.off('test1');
event.emit('test1', 333333);