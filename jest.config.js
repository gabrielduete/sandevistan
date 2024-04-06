/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')
// const path = require('path')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~/src/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig({ ...customJestConfig })
