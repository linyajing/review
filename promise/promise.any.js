// 只要有一个成功就返回成功，所有都失败，返回失败的集合
let url = ['url1', 'url2','url3', 'url4'];

function load(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url + " loaded.");
        }, Math.random() * 1000);
    });
}
Promise.prototype.any = function (arr) {
    let errorList = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for(let i = 0; i < arr.length; i++) {
            arr.then(res => {
                resolve(res);
                return;
            }).catch(e => {
                errorList[i] = e;
                count++;
                if (count === arr.length) {
                    reject(new AggregateError(errorList));
                    return;
                }
            });
        }
    });
}