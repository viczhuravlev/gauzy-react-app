module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest.setup.js',
  },
  setupFiles: ['./jest.setup.js'],
  testMatch: ['<rootDir>/src/**/?(*.)test.ts?(x)'],
};
