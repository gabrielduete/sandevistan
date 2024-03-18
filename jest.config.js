/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')
const path = require('path')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~/src/enums/medias$': path.resolve(__dirname, './src/enums/medias'),
  },
}

module.exports = createJestConfig({ ...customJestConfig })

/** o/ font: https://fek.io/blog/add-jest-testing-framework-to-an-existing-next-js-app */
