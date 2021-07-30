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

// Array.prototype.zonghe = function () {
//     let map = {};
//     function aa (list) {
//         list.forEach(item => {
//             if (Array.isArray(item)) {
//                 aa(item);
//             } else {
//                 map[item] = item;
//             }
//         });
//     }
//     aa(this);

//     console.log(map);

//     return Object.keys(map);
// }

// console.log(arr.zonghe());

// function merge(arr1, arr2) {
//     let result = [];
//     let j = 0;
//     let temp = arr2[0];
//     for (let i = 0; i < arr1.length; i++) {
//         if (temp === arr1[i].charAt(0)){
//             result.push(arr1[i]);
//         } else {
//             result.push(temp);
//             result.push(arr1[i]);
//             temp = arr2[j++];
//         }
//         if (i === arr1.length - 1){
//             result.push(temp);
//         }
//     }
//     return result;
// }
// const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
// const arr2 = ['A', 'B', 'C', 'D']
// console.log(merge(arr1, arr2));

// let list = new Array(12);
// let map = {1:222, 2:123, 5:888};
// for (let i = 0; i < list.length; i++) {
//     map[i + 1] !== undefined ? list[i] = map[i+1] : list[i] = null;
// }
// console.log(list);
// let nums1 = [1,1,1,1];
// let nums2 = [1,1];
// let map1 = {}; 
// let map2 = {};
// let result = [];
// nums1.forEach(val => {
//     map1[val] !== undefined ? map1[val] += 1 : map1[val] = 1;
// });
// nums2.forEach(val => {
//     map2[val] !== undefined ? map2[val] += 1 : map2[val] = 1;
// });
// console.log(map1, map2);
// Object.keys(map1).forEach(key => {
//     console.log(key);
//     if (map2[key] !== undefined) {
//         console.log()
//         let number = Math.min(map1[key], map2[key]);
//         let arr = new Array(number);
//         arr.fill(Number(key));
//         result = result.concat(arr);
//     }
// });
// console.log(result);

// console.log(1);
   
// setTimeout(() => {
//     console.log(2);
// }, 0);

// process.nextTick(() => {
//     console.log(3);
// });

// setImmediate(() => {
//     console.log(4);
// });

// new Promise((resolve, reject) => {
//     console.log(5);
//     resolve();
//     console.log(6);
// }).then(() => {
//     console.log(7);
// });

// Promise.resolve().then(() => {
//     console.log(8);

//     process.nextTick(() => {
//         console.log(9);
//     });
// });

function add () {
    let result = 0;
    let tag = arguments.length ? arguments[0] : 0;
    function aa () {
        let arg = arguments;
        if (arg.length) {
            result += arg[0];
            return aa;
        } else {
            return result;
        }
    }
    return tag ? aa(tag) : aa();
}
console.log(add());
console.log(add(1)(2)());