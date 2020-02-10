const { shellExec } = require('./index.js')
shellExec('uname')
  .then((data) => {
    console.log(data)
  })

shellExec(['uname', '-r'])
  .then((data) => {
    console.log(data)
  })
