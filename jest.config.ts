export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.svg$": "jest-transformer-svg",
      '^@assets/(.*)$': 'jest-transformer-svg',
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {    
      '\\.svg$': "<rootDir>/src/test/__mocks__/svgMock.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": '<rootDir>/src/test/__mocks__/fileMock.js',
      '^@/(.*)$': '<rootDir>/src/$1',
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@services/(.*)$': '<rootDir>/src/services/$1',
      '^@stores/(.*)$': '<rootDir>/src/stores/$1',
      '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
      '^@assets/(.*)$': '<rootDir>/src/test/__mocks__/fileMock.js',
  },
}