module.exports = [
  {
    codemod: 'index-file.js',
    dist: 'src/beta/index.js',
    description: 'Add component export to the index file',
  },
  {
    codemod: 'testkit-definitions.js',
    dist: 'testkit/testkit-definitions-beta.js',
    description: 'Update testkit-definitions-beta.js file',
  },
  {
    codemod: 'testkit-exports.js',
    dist: 'testkit/beta/protractor.js',
    description: 'Add Protractor testkit export',
  },
  {
    codemod: 'testkit-exports.js',
    dist: 'testkit/beta/puppeteer.js',
    description: 'Add Puppeteer testkit export',
  },
];
