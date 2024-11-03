import { defineConfig } from 'cypress'
import Dotenv from 'dotenv-webpack'

export default defineConfig({
  e2e: {
    'baseUrl': 'http://localhost:4200'
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig: {
        plugins: [new Dotenv()],
      },
    },
    specPattern: '**/*.cy.ts'
  }
})
