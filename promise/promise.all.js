let url = ['url1', 'url2','url3', 'url4'];

function load(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url + " loaded.");
        }, Math.random() * 1000);
    });
}

Promise.prototype.all = function (arr) {
    let result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(res => {
                result[i] = res;
                count++;
                if (count === arr.length) {
                    resolve(result);
                }
            }).catch(e => {
                reject(e);
            });
        }
    });

}