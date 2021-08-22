# v2sub-web

搭配 [v2sub](https://github.com/Ericwyn/v2sub) 项目 API 食用的前端项目

部署在 github-pages 上, 可直接 ajax 登录路由器上 v2sub-w 进行管理

## 食用方法
 - 部署 [v2sub](https://github.com/Ericwyn/v2sub) 项目, 运行 v2sub-w
 - 打开 [http://ericwyn.github.io/v2sub-web](http://ericwyn.github.io/v2sub-web) 或 [https://ericwyn.github.io/v2sub-web](https://ericwyn.github.io/v2sub-web)
   - 取决于你将 v2sub-w api 服务部署为 http 还是 https
   
 - 在设置 dialog 里面输入 v2sub-w 的 api 地址, 比如默认的 "http://127.0.0.1:8886"
 - 等待页面刷新后就可以进行控制了

## 截图

- 电脑控制

<img src="screenshot/s-1.png" alt="s-1" style="width:900px" />


## 支持操作
 - 接口登录 TODO

 - 系统控制
    - 状态查看
       - 当前节点
       - 当前状态
       - 运行时间
       - 支持操作
           - 启动/重启
           - 运行
           - 日志查看
      
    - 系统配置
       - Http 端口
       - Socks 端口
       - 局域网连接
       - 支持操作
           - 配置修改 TODO

 - 订阅管理
    - 订阅卡片
       - 订阅名称
       - 详情
       - 支持操作
           - 地址查看 TODO
           - 更新订阅 TODO
    
 - 节点管理
    - 节点卡片
       - 节点ID
       - 别名
       - 地址
       - 端口
       - 类型
       - 支持操作
           - 测速 TODO
           - 选中 TODO