// function _new(fn, ...args) {
//     //默认创建一个实例对象（而且是属于当前这个类的一个实例）
//     // let obj = {};
//     let obj = Object.create(fn.prototype);

//     //也会把类当做普通函数执行
//     //执行的时候要保证函数中的this指向创建的实例
//     let result = fn.call(obj, ...args);

//     //若客户自己返回引用值，则以自己返回的为主，否则返回创建的实例
//     if ((result !== null && typeof result === "object") || (typeof result === "function")) {
//         return result;
//     }
//     return obj;
// }

// let f6 = _new(fn);
// f6.log(); //=>ok


// function myNew (fn, ...args) {
//     // 第一步，创建一个空的简单JavaScript对象（即{}）；
//     let obj = {}
  
//     // 第二步，原型链绑定
//     fn.prototype !== null && (obj.__proto__ = fn.prototype)
  
//     // 第三步，改变this指向并运行该函数
//     let ret = fn.call(obj, ...args)
  
//     // 第四步，如果该函数没有返回对象，则返回this
//     // 别忘了 typeof null 也返回 'object' 的bug
//     if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
//       return ret 
//     }
//     return obj
//   }

// Number.prototype.add = function (value){
//     return this + value;
// }
// Number.prototype.minus = function (value) {
//     return this - value;
// }
// (5).add(3).minus(2);
// console.log((5).add(3).minus(2))
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// Array.prototype.flat = function () {
//     return [].concat(...this.map(item => Array.isArray(item) ? item.flat() : [item]));
// }
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }

Array.prototype.zonghe = function () {
    let map = {};
    function aa (list) {
        list.forEach(item => {
            if (Array.isArray(item)) {
                aa(item);
            } else {
                map[item] = item;
            }
        });
    }
    aa(this);

    console.log(map);

    return Object.keys(map);
}

console.log(arr.zonghe());