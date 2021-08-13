/**
 * @Desc: js实现继承
 * @Auhtor: linyajing02@meituan.com
 * @Date: 2021-06-15 17:57:30
 */

// 1. 原型继承，父类的实例作为子类的原型
// 优点： 简单易实现
// 缺点： 
// - 创建子类实例时，不能向父类构造函数中传参数
// - 新增加原型属性和方法需要在new 父类构造函数的后面
function Woman () {

}
function People () {

}

Woman.prototype = new People()
let woman = new Woman();


// 2. 借用构造函数实现继承
// 优点： 
// - 方法都在构造函数中定义，无法复用
// - 不能继承原型属性/方法，只能继承父类的实例属性和方法
function Woman(name){
    //继承了People
     People.call(this, ...arguments); //People.call(this，'wangxiaoxia'); 
     this.name = name || 'renbo'
   }
   let womanObj = new Woman();

// 3.组合继承
//父类
function People(name,age){
    this.name = name || 'wangxiao'
    this.age = age || 27
}
//父类方法
People.prototype.eat = function(){
    return this.name + this.age + 'eat sleep'
}
//子类
function Woman(name,age){
    //继承父类属性
    People.call(this,name,age)
}

//继承父类方法
(function(){
// 创建空类
let Super = function(){};
Super.prototype = People.prototype;
//父类的实例作为子类的原型
Woman.prototype = new Super();
})();

//修复构造函数指向问题
Woman.prototype.constructor = Woman;
let womanObj = new Woman();