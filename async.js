const asyncTasks = [
    (done) => setTimeout( () => { done(1) }, 1000), 
    (done) => setTimeout( () => { done(2) }, 3000),
    (done) => setTimeout( () => { done(3) }, 2000),  
];
const callback = res => console.log(res)
    
function run(arr, cb){
    doneFn = (index) => value => result[index] = value
    const runFn = function (fn) {
        return new Promise(resolve => {
            fn(value => resolve(value))
        });
    }

    return Promise.all(arr.map((fn, i) => runFn(fn, i))).then(res => {
        cb(res);
    })  
}
    
// 3秒后输出 [1,2,3]
    
run(asyncTasks, callback) // 3s => [1,2,3]