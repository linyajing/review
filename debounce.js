/**
 * @Desc: debounce & throttle
 * debounce 防抖
 * 1. 函数n秒内只会被触发一次，如果在n内再次被触发，则重新计算延迟时间 （频繁操作只触发最后一次）
 * 2. 应用范围: 窗口变化、键盘变化、模糊匹配
 * throttle 节流
 * 1. 在规定的单位时间内，函数最多被触发一次
 * 2. 应用范围:
 * @Auhtor: linyajing02@meituan.com
 * @Date: 2021-05-20 22:21:55
 */
function debounce(fn, delay = 300) {
    let timer = null;
    return function () {
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args); // 改变this指向为调用debounce所指的对象
        }, delay);
    }
}
window.addEventListener(
    "scroll",
    debance(() => {
      console.log(111);
    }, 1000)
  );

// 标记法
function throttle(fn, delay = 300) {
    let flag = true;
    return function () {
        var args = arguments;
        if (!flag) return;
        flag = false;
        setTimeout(function () {
            fn.apply(this, args);
            flag = true;
        }, delay);
    }
}
// 时间戳法
function throttle1(fn, delay = 300) {
    let startTime = new Date().getTime();
    return function () {
        let endTime = new Date().getTime();
        if (endTime - startTime >= delay) {
            fn.apply(this, args);
            startTime = endTime; 
        } else {
            return;
        }
    }
}
