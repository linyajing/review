class _LazyMan {
    constructor (name) {
        this.task = [];
        this.init(name);
    }
    init (name) {
        let task = () => {
            console.log(`this name ${name}`);
            this.next();
        }
        this.task.push(task);
        // 触发
        setTimeout(() => {
            this.next();
        }, 0);
    }
    eat (food) {
        let task = () => {
           console.log(`eat ${food}`);
           this.next(); 
        }
        this.task.push(task);
        return this;
    }
    sleep (time) {
        this._sleep(time, true);
        return this;
    }
    sleepFirst (time) {
        this._sleep(time, false);
        return this;
    }
    _sleep (time, tag) {
        let task = () => {
            setTimeout(() => {
                this.next();
            }, time * 1000);
        }
        if (tag) { // 如果非阻塞拦截
            this.task.push(task);
        } else { // 如果非阻塞拦截
            this.task.unshift(task);
        }
    }
    next () {
        let task = this.task.shift();
        task && task();
    }
}
function LazyMan (name) {
    return new _LazyMan(name);
}
// LazyMan('xiaoming'); // 打印 xiaoming
// LazyMan('xiaoming').eat('瓜'); // 打印  xiaoming eat 瓜
// LazyMan('xiaoming').eat('西').eat('瓜'); // 打印  xiaoming eat 西 eat 瓜
// LazyMan('xiaoming').eat('西').sleep(5).eat('瓜'); // 打印  xiaoming eat 西 5s后打印 瓜
// LazyMan('xiaoming').eat('西').sleepFirst(5).eat('瓜'); // 打印  5s后打印  xiaoming eat 西 eat 瓜
// LazyMan('xiaoming').eat('西').eat('瓜').sleepFirst(5); // 打印  5s后打印  xiaoming eat 西 eat 瓜