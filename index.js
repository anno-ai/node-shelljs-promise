const shell = require('shelljs')
const settings = { silent: true, simple: true }
const shellescape = require('shell-escape')
module.exports = {
  /**
   * @param {String} command shell command to run
   * @return {Promise} promise
   */
  shellExec: (command) => {
    return new Promise((resolve, reject) => {
      if (command instanceof Array) {
        command = shellescape(command)
      }
      shell.exec(command, settings, (code, stdout, stderr) => {
        // If there is an error then reject
        if (code !== 0) {
          return reject(new Error(stderr))
        }
        return resolve(stdout)
      })
    })
  }
}
