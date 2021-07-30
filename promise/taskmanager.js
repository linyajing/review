class TaskManager {
    constructor () {
        this.queue = [];
        this.count = 0;
    }
    addTask(fn) {
        return new Promise(resolve => {
            this.queue.push({ 
                exe: fn,
                resolve
            });
            this.run();
        });
    }
    run () {
        if (this.count < 5) {
            let task = this.queue.shift();
            if (task) {
                let resolve = task.resolve;
                let fn = task.exe;
                this.count++;
                fn().then(res => {
                    resolve(res);
                    this.count--;
                    this.run();
                });
            }
        }
    }
  }
  
  const tm = new TaskManager()
  
//   const task = () => new Promise((res) => {
//     setTimeout(() => { res(100 )}, 1000)
//   })
  
  tm.addTask(() => new Promise((res) => {
    setTimeout(() => { res(100)}, 1000)
  })).then(res => {
    console.log(res) //100
  })
  tm.addTask(() => new Promise((res) => {
    setTimeout(() => { res(200)}, 1000)
  })).then(res => {
    console.log(res) //100
  })
  tm.addTask(() => new Promise((res) => {
    setTimeout(() => { res(300 )}, 1000)
  })).then(res => {
    console.log(res) //100
  });
  tm.addTask(() => new Promise((res) => {
    setTimeout(() => { res(400)}, 1000)
  })).then(res => {
    console.log(res) //100
  })
  tm.addTask(() => new Promise((res) => {
    setTimeout(() => { res(500)}, 1000)
  })).then(res => {
    console.log(res) //100
  })
  tm.addTask(() => new Promise((res) => {
    setTimeout(() => { res(600)}, 6000)
  })).then(res => {
    console.log(res) //100
  })
