const shell = require('shelljs')
const settings = { silent: true, simple: true }
module.exports = {
  /**
   * @param {String} command shell command to run
   * @return {Promise} promise
   */
  shellExec: (command) => {
    return new Promise((resolve, reject) => {
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
