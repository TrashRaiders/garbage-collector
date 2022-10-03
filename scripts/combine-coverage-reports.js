/**
 * This script merges the coverage reports from Cypress and Jest into a single one,
 * inside the "coverage" folder
 */
const { execSync } = require('node:child_process')

// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra')

const REPORTS_FOLDER = 'reports'
const FINAL_OUTPUT_FOLDER = 'coverage'

function run(command) {
  execSync(command, { stdio: 'inherit' })
}

// Create the reports folder and move the reports from cypress and jest inside it
fs.emptyDirSync(REPORTS_FOLDER)
fs.copyFileSync(
  'cypress-coverage/coverage-final.json',
  `${REPORTS_FOLDER}/from-cypress.json`,
)
fs.copyFileSync(
  'jest-coverage/coverage-final.json',
  `${REPORTS_FOLDER}/from-jest.json`,
)
fs.emptyDirSync('.nyc_output')
fs.emptyDirSync(FINAL_OUTPUT_FOLDER)

// Run "nyc merge" inside the reports folder, merging the two coverage files into one,
run(`yarn nyc merge ${REPORTS_FOLDER}`)

// "nyc merge" will create a "coverage.json" file on the root, we move it to .nyc_output
fs.moveSync('coverage.json', '.nyc_output/out.json')
fs.copyFileSync('.nyc_output/out.json', 'coverage/coverage-final.json')

// then generate the final report on the coverage folder
run(
  `yarn nyc report --reporter lcov --reporter text --report-dir ${FINAL_OUTPUT_FOLDER}`,
)
