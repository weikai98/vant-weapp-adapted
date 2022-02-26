## 低配版: 开发一两个组件，demo 采用静态页面形式

### 1. class 规范

以 mu-button 为例

```javascript

.mu-button--[type]

 --[type] type属于对button或者其子元素的描述

.mu-button__icon
.mu-button__text

__[ChildrenNode] ChildrenNode 属于前一样式的子元素

.mu-button__icon--loading


```

1. packages 添加开发的组件
2. example/app.json  
   注册组件(将 packages 中的组件经过编译打包才能使用)、
   注册 demo 展示界面
3. example/pages 添加 demo 展示界面

## 组件库开发流程

开发一套基于小程序的组件库

1. 工具: 支持 less、ts 编译
2. 工程化: eslint + Prettier 代码格式化
3. 自动化测试: jest
4. 打包工具: gulp、rollup || vite
5. 文档 VuePress || Vue 服务

### 打包与构建
