# 开发

## 低配版: 开发一两个组件，demo 采用静态页面形式

### 1. class 规范 bem

block-name\_\_element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。

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

### 2.组件库开发流程

开发一套基于小程序的组件库

1. 工具: 支持 less、ts 编译, Less 文件目前使用 gulp-less ts 使用 gulp-ts 后续采用 lessc tsc 编译
2. 工程化: eslint + Prettier 代码格式化
3. 自动化测试: jest
4. 打包工具: gulp、rollup || vite
5. 文档 VuePress || Vue 服务

### 2.1 打包与构建

### 2.2 方案

完整引入 / 按需引入
构建流程设计
单元测试
输出模式（umd / commonjs2 / es6）
样式构建
国际化 / 工具
ESLint / Prettier / Stylint
TypeScript（声明） / JavaScript
Webpack 配置 / Webpack 分析
Babel 处理
Polyfill 注意点
Markdown 演示 & CI
三方库处理方式
浏览器兼容性
Autoprefixer
Lerna / Single Npm / Multiple Npm
Single Npm & Template
Git 钩子处理 & Git 规范
语义化版本规范
团队 / 范围 / 开发规范 / 代码 Review
