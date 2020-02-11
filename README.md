# shelljs-promise

Unescaped shell command

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



Escaped shell command (supports array of strings only)

```javascript
const { shellExec } = require('@annoai/shelljs-promise')

shellExec(['ls', '-al'])
  .then((stdout) => {
    console.log(stdout)
  })
  .catch((stderr) => {
    console.log(stderr)
  })
```

