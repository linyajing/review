let url = ['url1', 'url2','url3', 'url4'];

function load(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url + " loaded.");
        }, Math.random() * 1000);
    });
}

// 实现尽快加载完一组资源
// k 为最多能同时加载的资源数
function loadResources(urls, k = 3) {
    let count = 0;
    let result = [];
    let originIndex = urls.length;
    let done = 0;
    return new Promise(resolve => { 
        function task (url, index) {
            count++;
            load(url).then(res => {
                count--;
                done++;
                result[index] = res;
                if (count <= k && urls.length) {
                    let nextUrl = urls.shift();
                    count++;
                    task(nextUrl, originIndex - urls.length - 1);
                }
                if (done === originIndex) {
                    resolve(result);
                }
            });
        }
        //循环开启三次
        for (var i = 0; i < k; i++) {
            let nextUrl = urls.shift();
            task(nextUrl, i);
        }
    });
}
loadResources(url, 3).then(res => {
    console.log(res);
});