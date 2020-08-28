// checks that certain ESLint options are present in .js and .ts files
/* eslint no-var: "error" */
/* eslint-env es6 */

const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const ignoreTests = core.getInput('ignore-tests')
    const context = github.context
    console.log(`context: ${context}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
