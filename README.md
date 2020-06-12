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
 - 使用api方法：touchend, touchstart.还有X,Y轴的获取方法
 - 滑动手势组件swiperAction
   1. 实现插槽功能
   2. 向父组件传递滑动的方向
- 下载图片
    下载图片到本地，使用了两个API
     1. downloadFile 下载远程文件到小程序中
     2. savaImageTophotosAlbum 将图片从内存中下载到本地。

## 图片分类模块
1. 首页分类
- 发送获取数据
- 渲染页面
2. 图片分类
- 分段器使用
- 发请求
- 渲染页面
- 分页加载
- 跳转至详情页面
## 精美视频模块
- 精美视频
功能复习：
1. 分段器的使用
出现页面显示内容一样，因为没有清空原来的数组
2. 发送请求获取数据
3. 渲染页面
4. 分页加载
- 视频播放
 1. 页面渲染
 视频播放的模糊页面制作：
  - 保存视频对象的图片
  - 使用css3的滤镜属性：filter:blur(20px) -> 模糊
 2. 播放视频
 3. 开关声音
 使用video标签的 muted 属性实现声音的开关(false为关 true为开)
 4. 转发
 button自带的属性open-type设置为share即可
 5. 下载视频

watch监控组件
# 小程序优化
## 滑动手势的优化：
1. 用户上下滑动会引起滑动图片：
解决方法：将上下滑动的手势距离不能超过10，超过了代表上下滑动，没超过代表滑动图片。
## 小程序图片的优化
在小程序中，图片的宽高是固定的，我们要使得图片适应整个页面模块，可以使用`aspectFill`来自适应图片。