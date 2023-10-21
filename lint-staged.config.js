/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  '**/*.(ts|tsx|js)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
    `yarn test`,
  ],

  '**/*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`,
}
