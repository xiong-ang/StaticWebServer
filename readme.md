# Static File Web

## 关键点       
    * MiME 不同的文件后缀名对应的MIME不同
    * 返回文件数据时，需要指定Content-Type
    * 数据在存储中都是二进制，Content-Type指定浏览器怎么解析
	* 等价功能:express.static(pathname)与Koa中间件koa-static

## 扩展
 * pm2 实现进行管理       
 * supervisor 实现服务器端热加载         