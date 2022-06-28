// 将组件打包，并拷贝到dist目录
const path = require('path')

const gulp = require('gulp')
const insert = require('gulp-insert')
const less = require('gulp-less')

// const postcss = require('gulp-postcss')
const ts = require('gulp-typescript')
const rename = require('gulp-rename')
const util = require('util')

const exec = util.promisify(require('child_process').exec)
// const reporter = require('gulp-less-reporter')
// const logger = require('gulp-logger')

// 避免使用 Node 的 path 类方法来创建 glob，例如 path.join。
// 在 Windows 中，由于 Node 使用 \\ 作为路径分隔符，因此将会产生一个无效的 glob。
// 还要避免使用 __dirname 和 __filename 全局变量，由于同样的原因，process.cwd() 方法也要避免使用。
// const src = path.resolve(__dirname, '../packages');
// const dist = path.resolve(__dirname, '../dist')

// const libConfig = path.resolve(__dirname, '../tsconfig.lib.json');
// const esConfig = path.resolve(__dirname, '../tsconfig.json');

const tsProject = ts.createProject('../../tsconfig.json')

// const packages = '../../packages'
const src = '../../packages/**/*'
// const exampleDist = '../../example/dist/'
const dist = '../../example/dist/'
const baseCssPath = path.resolve(__dirname, '../../packages/common/index.wxss')

const cleanerTask = () => {
  return exec(`npx rimraf ${dist}`)
}

const copierTask = (filePath, targetPath) => {
  return gulp.src(filePath).pipe(gulp.dest(targetPath))
}

const lessTask = () => {
  return gulp
    .src(`${src}.less`)
    .pipe(less())
    .pipe(
      insert.transform((contents, file) => {
        // 不是common文件夹
        try {
          if (!file.path.includes(`packages${path.sep}common`)) {
            // 获取相对于当前文件夹的common文件地址
            const relativePath = path
              .relative(
                path.normalize(`${file.path}${path.sep}..`),
                baseCssPath
              )
              .replace(/\\/g, '/')
            contents = `@import '${relativePath}';\n${contents}`
          }
          return contents
        } catch (error) {
          console.log(new Date(), '---', error)
        }
      })
    )
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest(dist))
}

const onLessWatchTask = (event, filePath) => {
  const targetReg = filePath
    .match(/(?<=packages\\).*(?=\\)?/g)[0]
    .replace(/\\index.less/, '')
  console.log(targetReg + '.less 文件编译中: ' + new Date())
  return gulp
    .src(path.resolve(__dirname, filePath))
    .pipe(less())
    .pipe(
      insert.transform((contents, file) => {
        // 不是common文件夹
        try {
          if (!file.path.includes(`packages${path.sep}common`)) {
            // 获取相对于当前文件夹的common文件地址
            const relativePath = path
              .relative(
                path.normalize(`${file.path}${path.sep}..`),
                baseCssPath
              )
              .replace(/\\/g, '/')
            contents = `@import '${relativePath}';\n${contents}`
          }
          return contents
        } catch (error) {
          console.log(new Date(), '---', error)
        }
      })
    )
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest(path.normalize(`${dist}${targetReg}`)))
}

const tsTask = () => {
  // const targetReg = filePath.match(/(?<=packages\\).*(?=\\index)?/g)
  // console.log(targetReg + '   文件编译中: ' + new Date())
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(dist))
}
// const onTsWatchTask = (event, filePath) => {
//   const targetReg = filePath
//     .match(/(?<=packages\\).*(?=\\)?/g)[0]
//     .replace(/\\\w{1,}.ts/, '')
//   console.log(targetReg + ' ts文件编译中: ' + new Date())
//   return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(dist))
// }

const wxmlTask = () => {
  return copierTask(`${src}.wxml`, dist)
}
const onWxmlWatchTask = (event, filePath) => {
  const targetReg = filePath
    .match(/(?<=packages\\).*(?=\\)?/g)[0]
    .replace(/\\\w{1,}.wxml/, '')
  console.log(targetReg + ' wxml文件编译中: ' + new Date())
  return copierTask(
    path.resolve(__dirname, filePath),
    path.normalize(`${dist}${targetReg}`)
  )
}

const jsonTask = () => {
  return copierTask(`${src}.json`, dist)
}

const wxsTask = () => {
  return copierTask(`${src}.wxs`, dist)
}
const onWxsWatchTask = (event, filePath) => {
  const targetReg = filePath
    .match(/(?<=packages\\).*(?=\\)?/g)[0]
    .replace(/\\\w{1,}.wxs/, '')
  console.log(targetReg + ' wxs文件编译中: ' + new Date())
  return copierTask(
    path.resolve(__dirname, filePath),
    path.normalize(`${dist}${targetReg}`)
  )
}

exports.buildTask = gulp.series(
  cleanerTask,
  gulp.parallel(jsonTask, tsTask, wxmlTask, wxsTask, lessTask)
)

exports.watchTask = () => {
  gulp.watch(`${src}.less`).on('all', onLessWatchTask)
  gulp.watch(`${src}.wxml`).on('all', onWxmlWatchTask)
  gulp.watch(`${src}.json`, jsonTask)
  gulp.watch(`${src}.ts`, tsTask)
  gulp.watch(`${src}.wxs`).on('all', onWxsWatchTask)

  console.log(`watch...${new Date()}`)
}
