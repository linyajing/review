1. ts和js区别
    - ts: 面向对象、静态类型、支持模块、支持可选参数
    - js: 脚本语言、没有静态类型、不支持模块、不支持可选参数
2. 什么是 TypeScript
    - ts是js的超集,可以编译为js,是面向对象的静态类型语言
    - 可以用 tsc .index.ts 编译为js
3. 为什么需要ts
    - 更好的js新特性的支持
    - 静态类型
    - 类型推断
    - 更好的IDE支持
    - 严格的NULL检查
4. TypeScript的特性
    - 跨平台
    - 面向对象
    - 静态类型检查
    - DOM操作
    - es6支持
5. 使用TypeScript有哪些缺点
    - 需要编译
    - 不支持抽象类
    - 第三方库需要定义类型文件
    - 类型文件质量不好保证
6. ts组成是什么
    - 语法：语法、关键词、类型注释
    - ts编译器
    - ts语言服务
7. ts中的类型
    - 内置类型: number,string,boolean,void,null,undefined
    - 自定义类型: enums,class,interface,array,tuple(元组）
8. TypeScript支持哪些面向对象术语
    - 模块（Modules）
    - 类（Classes）
    - 接口（Interfaces）
    - 继承（Inheritance）
    - 数据类型（Data Types）
    - 成员函数（Member functions）
9. TypeScript中的接口: 特定结构的集合
    interface interface_name {
        variables: Number
        methods: String
    }
10.  TypeScript支持的访问修饰符
    - Public
    - Projected
    - Private
11. TypeScript是一种可选的静态类型语言吗
    - TypeScript是可选的静态类型,可以设置any
12. TypeScript中的命名空间以及如何声明
    namespace <namespace_name> {
        export interface I1 { }
        export class c1{ }
    }
13. TypeScript中的装饰器
    tsconfig.json

    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
14. TypeScript支持可选参数吗
    - 支持 function Demo(arg1: number, arg2? :number) {}
15. 什么是作用域变量
16. 包含类型定义文件的步骤是什么
17. TypeScript中的 Declare 关键字
    - JavaScript库或框架没有TypeScript声明文件。 但是，如果要在TypeScript文件中使用它们而没有任何编译错误，则必须使用declare关键字
    - declare var myLibrary;
18. 什么是泛型
    - 它能够创建可以使用多种数据类型而不是单一数据类型的组件
19. 接口和类型的差别是什么
    - 接口：接口只声明成员方法，不做实现
    - 类：类声明并实现方法