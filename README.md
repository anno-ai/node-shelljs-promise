# shelljs-promise

```js
const { shellExec } = require('@annoai/shelljs-promise')

shellExec('ls -al')
  .then((stdout) => {
    console.log(stdout)
  })
  .catch((stderr) => {
    console.log(stderr)
  })
```
