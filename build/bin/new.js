/**
 *  1. packages 添加开发的组件
    2. example/app.json  
      注册 demo 展示界面
    3. example/pages 添加 demo 展示界面
    4. menuList菜单栏
 * 
 */

process.on('exit', () => {
  console.log();
});
// console.log(process.argv)
// console.log(process.env.npm_config_argv)
// process.exit(1);

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

console.log('创建组件中...')


const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const componentType = process.argv[4] || 'basic'

const packages = '../../packages'
const example = '../../example'

const { exec } = require('child_process');
const fs = require('fs')
const path = require('path')

// 新增组件
const files = [
  {
    filename: 'index.json',
    content: `{
  "component": true,
  "usingComponents": {}
}`
  },
  {
    filename: 'index.less',
    content: `@import '../common/style/var.less';`
  },
  {
    filename: 'index.ts',
    content: `import { VantComponent } from "../common/components";

VantComponent({})`
  },
  {
    filename: 'index.wxml',
    content: ``
  },
  {
    filename: 'index.wxs',
    content: ``
  }
] 

// 创建组件
const componentPath = path.resolve(__dirname, `${packages}/${componentname}`)
fs.mkdir(componentPath, (err) => { 
  if (!err) {
    files.forEach(file => {
      fs.writeFileSync(path.resolve(componentPath, file.filename), file.content)
    })
  } else { 
    console.error('[组件]已经存在 - Please enter new component name');
  }
})

// example服务注册组件
const exampleAppJson = require(`${example}/app.json`)

const pagesPath = `pages/${componentname}/index`
// 界面注册
exampleAppJson.pages.push(pagesPath)

const exampleAppJsonPath = path.resolve(__dirname, `${example}/app.json`)
fs.writeFileSync(exampleAppJsonPath, JSON.stringify(exampleAppJson))



// 添加example界面
const exampleFiles = [
  {
    filename: 'index.json',
    content: `{
  "usingComponents": {
    "mu-${componentname}": "../../dist/${componentname}"
  }
}`
  },
  {
    filename: 'index.js',
    content: `import Page from '../../common/page';

Page({
  data: {
  },
});
`
  },
  {
    filename: 'index.wxml',
    content: ``
  },
  {
    filename: 'index.wxss',
    content: ``
  }
] 

const examplePagePath = path.resolve(__dirname, `${example}/pages/${componentname}`)
fs.mkdir(examplePagePath, (err) => { 
  if (!err) {
    exampleFiles.forEach(file => {
      fs.writeFileSync(path.resolve(examplePagePath, file.filename), file.content)
    })
  }
})

// 添加menuList菜单

const exampleMenuList = require(`${example}/common/menuList.js`)
const examplaMenuItem = exampleMenuList.find(menuItem => menuItem.type === componentType)
examplaMenuItem.list.push({
  path: `/${componentname}`,
  title: `${componentname} ${chineseName}`
})

const exampleMenuListPath = path.resolve(__dirname, `${example}/common/menuList.js`)
const content = `module.exports = ${JSON.stringify(exampleMenuList)}
`
fs.writeFileSync(exampleMenuListPath, content)


const docs = path.resolve(__dirname, '../../docs')
// 创建 docs md文件
const docsMD = `# ${chineseName}
## 介绍

## 代码演示

## 设计 (API)

`
const docsComponentPath = path.resolve(__dirname, `${docs}/components/${componentname}.md`)
fs.writeFileSync(docsComponentPath, docsMD)

// 修改 docs .vuepress config.ts 文件
const vuepressConfig = require(`${docs}/.vuepress/config.js`)
// 开发
const docsConfigPath = path.resolve(__dirname, `${docs}/.vuepress/config.js`)
// 组件
vuepressConfig.themeConfig.sidebar[1].children.push(`/components/${componentname}`)

const vuepressConfigData = `
  module.exports = ${JSON.stringify(vuepressConfig)}
`
fs.writeFileSync(docsConfigPath, vuepressConfigData)

// 打包文件
const gulpConfig = path.resolve(__dirname, '../gulp/gulp.component.js')
setTimeout(() => {
  console.log('组件创建完成...')
  exec(`npx gulp -f ${gulpConfig} buildTask`)
  console.log('编译打包中...')
}, 1000)
 


