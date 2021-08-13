1. 初始化entry setting
2. 开始编译 run
    - 用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
3. 递归进行模块依赖分析
    - 模块编译 loader处理
4. 输出产物

# Tapable/compiler/complication
- Tapable 个事件管理器,类似于node中的EventEmitter,专注于自定义事件的触发和处理
- Compiler 是Tapable的一个实例，也是webpack的整体环境,  mix 也就是继承了Tapable类，使实例也具备注册和调用插件功能
    - 插件机制事实上就是通过注册在Complier上，在运行时Compier会根据各种事件钩子，从而触发插件的注册函数
    - 模块是 webpack 的主要引擎，它通过 CLI 传递的所有选项， 或者 Node API，创建出一个 compilation 实例。 它扩展(extend)自 Tapable 类，用来注册和调用插件。 大多数面向用户的插件会首先在 Compiler 上注册
- Compilation 
    - Compilation 实例继承于 compiler。例如，compiler.compilation 是对所有 require 图(graph)中对象的字面上的编译。这个对象可以访问所有的模块和它们的依赖（大部分是循环依赖）。在编译阶段，模块被加载，封闭，优化，分块，哈希和重建等等。这将是任何编译操作中，重要的生命周期。
- compilation 对象代表了一次单一的版本构建和生成资源
- compiler 对象代表的是不变的webpack环境，是针对webpack的
- compilation 对象针对的是随时可变的项目文件，只要文件有改动，compilation就会被重新创建。

[https://cloud.tencent.com/developer/article/1632717?from=article.detail.1385858]
# 插件的基本构成
- 插件必须有一个原型方法 apply方法，作用是实例化对象
- apply方法只在插件安装的时候，被 webpack compiler执行一次，给插件实例传入compiler引用
- apply方法的参数为compiler, 可以用来访问编译器回调

# webpack的构建流程
- 初始化：校验配置文件，读取配置文件
- 开始编译:
    - 生成compiler对象
        - 加载插件
            - 1. 执行插件的new myPlugin()语句
            - 2. 为webpack事件流挂上hooks
    - 读取入口配置，遍历入口文件
    - 执行 run 或者 watch 方法，开始编译
- chokidar 
    