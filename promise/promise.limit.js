// 一个一个请求，只有当前一个返回后才能继续请求下一个
// 这个是 limit的一个特例 代码的关键在于维护一个队列，当超过限定数量的 Promise 时，则交与队列维护

let url = ['url1', 'url2','url3', 'url4'];

function load(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url + " loaded.");
        }, Math.random() * 1000);
    });
}
Promise.prototype.limit = function (arr, n = 1) {
    let count = 0;
    let result = [];
    let originLength = url.length;
    let done = 0;
    return new Promise((resove, reject) => {
        function task (url, i) {
            load(arr[i]).then(res => {
                count--;
                done++;
                result[i] = res;
                if(count <= k && arr.length) {
                    let url = arr.shift();
                    count++;
                    task(url, originLength - url.length - 1);
                }
                if (done === originLength) {
                    resove(result);
                }
            }).catch(e => {
                reject(e);
            })
        }
        for (let i = 0; i < arr.length; i++) {
            let url = arr.shift();
            if (task) {
                count++;
                task(url, i)
            }
        }
    });

}

Promise.limit(arr, 3);

// function loadResources(urls, k = 3) {
//     let count = 0; // 当前执行栈数量
//     let result = []; // 响应结果
//     let originIndex = urls.length; // 原始数字长度
//     let done = 0; // 已完成数量
//     return new Promise(resolve => { 
//         function task (url, index) {
//             load(url).then(res => {
//                 count--;
//                 done++;
//                 result[index] = res;
//                 if (count <= k && urls.length) {
//                     let nextUrl = urls.shift();
//                     count++;
//                     task(nextUrl, originIndex - urls.length - 1);
//                 }
//                 if (done === originIndex) {
//                     resolve(result);
//                 }
//             });
//         }
//         //循环开启三次
//         for (var i = 0; i < k; i++) {
//             let nextUrl = urls.shift();
//             count++;
//             task(nextUrl, i);
//         }
//     });
// }
// loadResources(url, 1).then(res => {
//     console.log(res);
// });