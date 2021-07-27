// 只要有一个返回状态，无论成功还是失败

let url = ['url1', 'url2','url3', 'url4'];

function load(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url + " loaded.");
        }, Math.random() * 1000);
    });
}

Promise.prototype.race = function (arr) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < arr.length; i++) {
            arr[i].then(res => {
                resolve(res);
                return;
            }).catch(e => {
                reject(e);
                return;
            })
        }
    })
}