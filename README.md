## 藏书阁小程序

### 项目搭建

- 创建项目: vue create -p dcloudio/uni-preset-vue dnpicture
- 安装图片加载工具：npm install  sass-loader node-sass

- 首先添加页面
- 制作tabbar底部栏
- 引入样式：字体和图标
- uni-ui: 组件库
1. 安装uni-ui
2. 局部引入
3. 注册组件
4. 使用组件

- uni-api
1. 原生小程序的api都是不支持promise的
2. uni-app对大部分的小程序的原生api做了封装，使之支持promise
3. 使用方式
原生小程序：wx.request
uni-api的方式：uni.request

页面加载完毕事件：onLoad


### 首页模块
1. 功能分析
- 导航栏外观

- 分段器组件搭建子页面
`分段器俗称的标签页、tab栏`
首页模块分为4个部分：推荐、分类、最新、专辑
使用自定义组件代替页面，分别为：home-recommend、home-category、home-new、home-album
- 编写标题栏样式：首先要进行分栏(标题和内容)


- 封装自己异步请求
为什么要封装？
  - 原生的请求不支持promise
  - uni-api的请求不能够方便的添加`请求中`效果
  - uni-api的请求返回值是个数组，不方便
封装的思路？
  - 基于原生的promise来封装
  - 挂载到vue的原型上
  - 通过this.request的方式来使用


4. 编写 首页-推荐 页面
- 主要`动态渲染`
- `moment.js`的使用
moments：处理时间类库
- "热门"列表基于scroll-view的分页加载
- 分页模块分析
    1. 使用scroll-view标签充当分页的容器
    2. 绑定滚动条触底时间 scrolltolower
    3. 实现分页逻辑

- 专辑页面
1. 专辑列表
2. 专辑详情
功能分析：
 - 使用setNavigationBarTitle修改 页面标题
 - 发送请求数据
 - 使用swiper轮播图组件
   swiper默认高度150ox
   img 样式默认宽度320px => 基本样式中 重置了100%
   默认的高度240px

 - 使用scroll-view组件实现分页
 - 点击跳转到详情页
  功能分析：
    - 发送请求数据
    - 使用onReachBottom事件触发 上拉加载下一页

### 首页模块-图片详情页面(难)
- 封装超链接组件
  - 缓存图片页面需要滑动的图片数组和图片索引
  - 跳转到图片详情页面
  1. 详情页面数据之间的联系
    - 时间计算：当前时间戳 - 过去时间戳
      1. moment.js 处理时间格式
        - fromNow()实现显示XXX月前
        - moment.locale("zh-cn")使用中文语言
    - 图片大小：当前图片是否为缩略图 不是则使用缩略图规则进行缩放
    - 点赞数rank
    - 图片评论：发请求来实现的
- 发送请求获取数据
- 使用moment.js处理特殊事件格式
- 封装手势滑动组件
- 下载图片