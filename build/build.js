const { exec } = require('child_process')
// const { argv } = require('yargs')


const path = require('path')
const gulpConfig = path.resolve(__dirname, './gulp/gulp.component.js')

function runBuild () { 
  exec(`npx gulp -f ${gulpConfig} buildTask`)
}

function runDev () { 
  console.log(`npx gulp -f ${gulpConfig} watchTask`)
  exec(`npx gulp -f ${gulpConfig} watchTask`)
}
if (process.env.NODE_ENV === 'product') {
  runBuild()
} else { 
  runDev()
}