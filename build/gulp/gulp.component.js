// 将组件打包，并拷贝到dist目录
const path = require('path')
const { exec } = require('child_process')

const gulp = require('gulp');
const insert = require('gulp-insert');
const less = require('gulp-less')
// const postcss = require('gulp-postcss')
const ts = require('gulp-typescript')
const rename = require('gulp-rename')
// const reporter = require('gulp-less-reporter')
// const logger = require('gulp-logger')
// 避免使用 Node 的 path 类方法来创建 glob，例如 path.join。
// 在 Windows 中，由于 Node 使用 \\ 作为路径分隔符，因此将会产生一个无效的 glob。
// 还要避免使用 __dirname 和 __filename 全局变量，由于同样的原因，process.cwd() 方法也要避免使用。
// const src = path.resolve(__dirname, '../packages');
// const dist = path.resolve(__dirname, '../dist')

// const libConfig = path.resolve(__dirname, '../tsconfig.lib.json');
// const esConfig = path.resolve(__dirname, '../tsconfig.json');

const tsProject = ts.createProject('../../tsconfig.json');



const src = '../../packages/**/*'
// const exampleDist = '../../example/dist/'
const dist = '../../example/dist/'
const baseCssPath = path.resolve(__dirname, '../../packages/common/index.wxss');


const cleanerTask = () => { 
  return exec(`npx rimraf ${dist}`)
}

const copierTask = (path, targetPath) => {
  return gulp.src(path)
    .pipe(gulp.dest(targetPath))
 }

const lessTask = () => {
  // Less 文件目前编译有问题 后续采用 lessc 编译
  // npx lessc .\packages\icon\index.less .\example\dist\icon\index.css
  return gulp
    .src(`${src}.less`)
    .pipe(less())
    // .on('error', reporter)
    .pipe(
      insert.transform((contents, file) => { 
        // 不是common文件夹
        if (!file.path.includes(`packages${path.sep}common`)) {
          // 获取相对于当前文件夹的common文件地址
          const relativePath = path.relative(
            path.normalize(`${file.path}${path.sep}..`),
            baseCssPath
          ).replace(/\\/g, '/')
          contents = `@import '${relativePath}';\n${contents}`;
        }
        return contents
      })
    )
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest(dist))

 }

const tsTask = () => { 
  return tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest(dist))

}

const wxmlTask = () => {
  return copierTask(`${src}.wxml`, dist)
}

const jsonTask = () => {
  return copierTask(`${src}.json`, dist)
}

const wxsTask = () => { 
  return copierTask(`${src}.wxs`, dist)
}


exports.buildTask = gulp.series(
  cleanerTask,
  // lessTask, jsonTask, tsTask, wxmlTask, wxsTask
  gulp.parallel(jsonTask,tsTask, wxmlTask, wxsTask, lessTask)
)

exports.watchTask = () => {
  console.time('打包中...')

  console.timeEnd('打包中...')
  gulp.watch(`${src}.less`, lessTask);
  gulp.watch(`${src}.wxml`, wxmlTask);
  gulp.watch(`${src}.json`, jsonTask);
  gulp.watch(`${src}.ts`, tsTask);
  gulp.watch(`${src}.wxs`, wxsTask);
  console.log('watch...')

}
