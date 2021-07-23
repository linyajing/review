# http缓存
- 服务器的缓存策略
 - 响应头 cache-control: max-age = 30
    - cache-control 即存在于请求头字段也存在于响应头
    - 存在于响应头表示：服务器标记资源有效期
    - max-age=30 资源的有效时间，缓存30s，计算时间是报文创建时间，离开服务器时间，而不是到达客户端时间
    - cache-control: no-store不可以缓存
    - cache-control: no-cache 可以缓存，但是使用缓存前，需要去服务器校验是否已过期，是否是最新的版本
     chche-control: must-revalidate 缓存不过期就可以使用，过期了还想用就得询问服务器
- 客户端的缓存策略
 - 请求头 cache-control: max-age = 0
    - Cache-Control 生存时间
    - 服务器看到max-age=0，会生成一个最新的报文
    - Cache-Control: no-cache
- 条件请求 5个头字段
 - If-Modified-Since
 - If-None-Match

 - Last-Modified
 - ETag

 - Expires 优先级低于cache-control

- 304 not Modified


浏览器缓存
文档请求 - 是否有缓存 - 无 - 去服务器请求最新的资源
                   - 有 - expires(1.0) cache-control: max-age = xx (1.1) 判断是否过期 (强缓存)
                        - 没过期，使用缓存不发送请求
                        - 已过期，Etag + if-no-match & last-modified + if-modified-since 进行新鲜度校验
                          - 新鲜度校验已过期 - 返回新的文档 200
                          - 新鲜度校验未过期 - 返回304,更新缓存的 ETag和lastModified值 
cache-control: no-store 不缓存 no-cache 使用缓存前新鲜度校验 must-revalidate 必须新鲜度校验

