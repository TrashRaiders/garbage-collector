const fs = require('fs')
const micromatch = require('micromatch')

// Workaround to not match files in .eslintignore since a warning will be produced when a single file
// (which is contained in .eslintignore)
// ref: https://github.com/okonet/lint-staged/issues/711
const ignore = fs.readFileSync('.eslintignore', 'utf8')
const lines = ignore.match(/[^\n\r]+/g)
const jsRunners = (files) => {
  const match = micromatch.not(files, lines)
  return match.map((file) => `eslint ${file} --fix --max-warnings=1`)
}

module.exports = {
  'client/**/*.js': jsRunners,
  'server/src/**/*.js': jsRunners,
  'e2e-tests/cypress/**/*.js': jsRunners,
  'tg-iso-lims/src/**/*.js|cypress/**/*.js': jsRunners,
  '*.css': ['node addCopyright.js', 'git add'],
}
